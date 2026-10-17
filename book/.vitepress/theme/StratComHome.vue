<script setup lang="ts">
import { ref } from 'vue'

const coauthorPrompt = '阅读 https://github.com/flyingpig707/StratCom/tree/main/skills/strategic-communication-coauthor 并参与《AI战略传播力》共同写作'
const copied = ref(false)

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(coauthorPrompt)
  } catch {
    const input = document.createElement('textarea')
    input.value = coauthorPrompt
    input.setAttribute('readonly', '')
    input.style.position = 'fixed'
    input.style.opacity = '0'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.remove()
  }
  copied.value = true
  window.setTimeout(() => { copied.value = false }, 2400)
}

const dimensions = [
  { number: '01', title: '传播主体', description: '人机共生：组织×平台×AI×公众，AI是中介、主体，也是受众。' },
  { number: '02', title: '传播机制', description: '数据力打底、人—机—人为途径、信任力为内核的机制链条。' },
  { number: '03', title: '传播目标', description: '四级跃迁：被看见→被理解→被采信→被选择。' },
  { number: '04', title: '传播体系', description: '用户洞察、内容生成、智能分发、人机交互闭环运转。' },
  { number: '05', title: '传播分层', description: '国家层（认知主权）、城市层（认知定义权）、企业层（信任资产）。' },
]

const steps = [
  { number: '01', title: '说出观点', description: '把你对战略传播、书稿或案例的观察交给 Agent。' },
  { number: '02', title: 'Agent 阅读与整理', description: '阅读书稿与规则，确认贡献类型，形成结构化提案。' },
  { number: '03', title: 'Agent 完成自检', description: '检查路径、字段、来源、授权与正式书稿保护。' },
  { number: '04', title: '提交人工评审', description: '准备 Pull Request，进入公开提案库，等待作者与社区评审。' },
]
</script>

<template>
  <main class="stratcom-home">
    <section class="signal-hero" aria-labelledby="home-title">
      <div class="signal-hero__copy">
        <div class="eyebrow-row">
          <span>STRATEGIC COMMUNICATION</span><span class="eyebrow-rule" aria-hidden="true"></span><span>开放共写 · 传播系列总纲</span>
        </div>
        <h1 id="home-title"><strong>AI战略传播力</strong><span>AI时代的战略传播理论体系与行动框架</span></h1>
        <p class="signal-hero__tagline">传播力即竞争力</p>
        <p class="signal-hero__authors">钟诚 · 任国刚 · 吴鹏 著</p>
        <div class="signal-actions">
          <a class="signal-button signal-button--primary" href="/01-%E5%89%8D%E8%A8%80%20AI%E6%97%B6%E4%BB%A3%E5%BF%85%E9%A1%BB%E9%87%8D%E5%BB%BA%E6%88%98%E7%95%A5%E4%BC%A0%E6%92%AD">开始阅读</a>
          <a class="signal-button signal-button--secondary" href="#coauthor">参与共同写作</a>
        </div>
      </div>

      <div class="signal-hero__visual">
        <img src="/assets/framework-blueprint.png" alt="五维一体：AI时代战略传播理论框架总图" />
        <p class="visual-kicker">FIVE-DIMENSION<br />FRAMEWORK</p>
        <p class="visual-statement">一个内核<br />认知环境塑造 × 信任资产治理</p>
        <p class="visual-caption">从注意力到竞争力<br />四级跃迁的完整路径</p>
      </div>
    </section>

    <section class="capability-strip" aria-label="五维一体理论框架">
      <article v-for="dimension in dimensions" :key="dimension.number" class="capability-item">
        <span class="section-number">{{ dimension.number }}</span>
        <div><h2>{{ dimension.title }}</h2><p>{{ dimension.description }}</p></div>
      </article>
    </section>

    <section id="coauthor" class="coauthor-section" aria-labelledby="coauthor-title">
      <div class="coauthor-heading">
        <p class="section-kicker">AGENT-NATIVE COAUTHORING</p>
        <h2 id="coauthor-title">只管说出你的观点，剩下的交给 Agent。</h2>
        <p>无需整理格式、研究规则或熟悉 GitHub。WorkBuddy、Codex 或其他具备 GitHub 能力的 Agent，会帮助你阅读书稿、确认贡献类型、形成结构化提案、完成自检并准备 Pull Request。</p>
      </div>

      <div class="coauthor-workflow">
        <div class="prompt-box">
          <code>{{ coauthorPrompt }}</code>
          <button type="button" :aria-label="copied ? '参与指令已复制' : '复制参与指令'" @click="copyPrompt">{{ copied ? '已复制' : '复制参与指令' }}</button>
        </div>

        <ol class="coauthor-steps">
          <li v-for="step in steps" :key="step.number">
            <span class="step-number">{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.description }}</p>
          </li>
        </ol>

        <div class="contribution-types">
          <span>你可以这样参与</span><p>勘误 · 证据补充 · 案例 · 工具改进 · 段落改写 · 新章节提案</p>
        </div>

        <nav class="coauthor-links" aria-label="共同写作延伸入口">
          <a href="https://github.com/flyingpig707/StratCom/tree/main/skills/strategic-communication-coauthor">阅读 Agent Skill</a>
          <a href="https://github.com/flyingpig707/StratCom/issues/new?template=contribution-idea.yml">先讨论一个想法</a>
          <a href="https://github.com/flyingpig707/StratCom/tree/main/contributions">查看公开提案库</a>
        </nav>
      </div>
    </section>

    <section class="about-book" aria-labelledby="about-title">
      <p class="section-kicker">ABOUT THE BOOK</p>
      <h2 id="about-title">不是又一本传播学教材，<br />而是一套AI时代的传播行动框架。</h2>
      <p>《AI战略传播力》是传播系列「一纲四论」的总纲：以五维一体框架回答国家、城市、企业三层主体的 AI 时代传播命题，配套四级跃迁体检表与全套工具包。《信任力》《破圈力》《产品力》《数据力》为系列专论。</p>
      <a class="text-link" href="/00-%E5%B0%81%E9%9D%A2">查看全书目录</a>
    </section>
  </main>
</template>
