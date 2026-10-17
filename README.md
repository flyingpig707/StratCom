# AI战略传播力

> STRATEGIC COMMUNICATION IN THE AI ERA

《AI战略传播力》独立书稿、开放共写与在线阅读项目。

## 项目状态

- 当前阶段：V0.1 开放阅读基线书稿与 VitePress 阅读站已经建立。
- 中文书名：AI战略传播力。
- 英文书名：STRATEGIC COMMUNICATION IN THE AI ERA。
- 计划仓库：`flyingpig707/StratCom`。
- 计划域名：`stratcom.learn-together.cn`。

## 建设原则

- `book/` 将作为唯一正式 Markdown 书稿来源。
- 阅读网站直接由 `book/` 中的书稿构建，不另行维护网页正文。
- 原始 Word、整书 Markdown 和拆分稿先作为导入源核验，不直接覆盖。
- 内容共建、网站发布和版本记录在同一个独立仓库中完成。

## 计划目录

```text
StratCom/
├── book/             唯一正式书稿与 VitePress 阅读站
├── media/            正文引用的原始媒体资源
├── assets/           封面、标识和项目展示资源
├── contributions/    外部共建提案
├── scripts/          校验与维护脚本
├── skills/           Agent 共写技能
└── .github/          GitHub 模板与自动化工作流
```

## 书稿基线

- `book/` 是从现在开始唯一继续维护的正式 Markdown 书稿。
- 当前基线包含封面、前言、五篇导论、十七章正文、结语和九个附录，共 34 个文件。
- `media/` 包含正文引用的 55 张图片。
- 原始 Word 和整书 Markdown 继续保存在原始资料目录，只用于版本核对。
- [书稿来源核验报告](audits/2026-10-17-source-audit.md)记录了拆分对账结论。
- 《AI战略传播力》是传播系列「一纲四论」的总纲；《信任力》《破圈力》《产品力》《数据力》为系列专论，其中 PowerofTrust、PowerofBreakthrough 已按同一模式上线。

## 本地预览

本项目使用 Node.js 22+、pnpm 与 VitePress 1.6 构建阅读站。

```bash
pnpm install
pnpm docs:dev
```

构建生产版本：

```bash
pnpm docs:build
```

生成的网站位于 `book/.vitepress/dist/`。站点已经包含章节导航、页内目录、全文本地搜索、深色模式、移动端适配与中文阅读样式。

## 参与共建

《AI战略传播力》采用“公开提案库＋作者编辑”的两级机制。外部参与者在 `contributions/` 提交结构化提案，不直接修改正式书稿；作者决定采用后，再通过独立编辑 Pull Request 更新 `book/`。

完整规则见 [`CONTRIBUTING.md`](CONTRIBUTING.md)，Agent 共写入口见 [`skills/strategic-communication-coauthor/`](skills/strategic-communication-coauthor/)。

自动化部署配置将在后续步骤中建立。

## 在线发布

站点计划由 GitHub `main` 分支自动部署至 EdgeOne Makers，并绑定 `stratcom.learn-together.cn`。构建参数和首次上线步骤见 [`DEPLOYMENT.md`](DEPLOYMENT.md)。
