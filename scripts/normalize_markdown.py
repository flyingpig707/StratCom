#!/usr/bin/env python3
"""Normalize Word/Pandoc Markdown for VitePress without rewriting prose."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path


SIMPLE_BORDER = re.compile(r"^ {2,}(?=[ -]*-{3,})[ -]+$")
GRID_BORDER = re.compile(r"^\s*\+(?:[-=:]+\+)+\s*$")
IMAGE_WITH_SIZE = re.compile(
    r"(!\[[^\]]*\]\([^)]+\))"
    r"\{width=\"[0-9.]+in\"\s*\n?\s*height=\"[0-9.]+in\"\}"
)
DECORATIVE_SUBTITLE = re.compile(r"^(#{1,6})\s+-{2,}(\S.*)$", re.MULTILINE)


def pandoc_table(block: str) -> tuple[str, bool]:
    first_line = block.splitlines()[0]
    if first_line.count("+") == 2:
        quote_lines = []
        for line in block.splitlines()[1:-1]:
            if not line.lstrip().startswith("|"):
                continue
            text = line.strip()[1:-1].strip()
            quote_lines.append(f"> {text}" if text else ">")
        return "\n".join(quote_lines), True

    result = subprocess.run(
        ["pandoc", "-f", "markdown-smart", "-t", "gfm", "--wrap=none"],
        input=block,
        text=True,
        capture_output=True,
        check=True,
    )
    converted = result.stdout.strip()

    check = subprocess.run(
        ["pandoc", "-f", "gfm", "-t", "json"],
        input=converted,
        text=True,
        capture_output=True,
        check=True,
    )
    document = json.loads(check.stdout)
    table_count = sum(1 for block in document["blocks"] if block.get("t") == "Table")
    html_table_count = len(re.findall(r"<table(?:\s|>)", converted))
    if table_count + html_table_count != 1:
        raise ValueError(f"Converted block contains {table_count} tables instead of 1")
    return converted, False


def extract_table(lines: list[str], start: int) -> tuple[int, str] | None:
    if GRID_BORDER.match(lines[start]):
        end = start + 1
        while end < len(lines):
            line = lines[end]
            if line.strip() and not re.match(r"^\s*[+|]", line):
                break
            end += 1
        while end > start and not lines[end - 1].strip():
            end -= 1
        return end, "\n".join(lines[start:end])

    if SIMPLE_BORDER.match(lines[start]):
        end = start + 1
        while end < len(lines):
            line = lines[end]
            if line.strip() and not line.startswith("  "):
                break
            end += 1
        while end > start and not lines[end - 1].strip():
            end -= 1
        if not SIMPLE_BORDER.match(lines[end - 1]):
            raise ValueError(f"Simple table beginning on line {start + 1} has no closing border")
        return end, "\n".join(lines[start:end])

    return None


def normalize(content: str) -> tuple[str, int, int, int, int]:
    lines = content.splitlines()
    output: list[str] = []
    table_count = 0
    callout_count = 0
    index = 0

    while index < len(lines):
        table = extract_table(lines, index)
        if table is None:
            output.append(lines[index])
            index += 1
            continue
        end, block = table
        converted, is_callout = pandoc_table(block)
        output.extend(converted.splitlines())
        table_count += 1
        callout_count += int(is_callout)
        index = end

    normalized = "\n".join(output).rstrip() + "\n"
    normalized, image_count = IMAGE_WITH_SIZE.subn(r"\1", normalized)
    normalized, subtitle_count = DECORATIVE_SUBTITLE.subn(r"\1 \2", normalized)
    return normalized, table_count, callout_count, image_count, subtitle_count


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="+", type=Path)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()

    totals = [0, 0, 0, 0]
    changed = 0
    for path in args.paths:
        original = path.read_text(encoding="utf-8")
        normalized, tables, callouts, images, subtitles = normalize(original)
        totals[0] += tables
        totals[1] += callouts
        totals[2] += images
        totals[3] += subtitles
        if normalized != original:
            changed += 1
            if not args.check:
                path.write_text(normalized, encoding="utf-8")

    print(
        f"files={len(args.paths)} changed={changed} "
        f"table_blocks={totals[0]} callouts={totals[1]} "
        f"images={totals[2]} subtitles={totals[3]}"
    )
    if args.check and changed:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
