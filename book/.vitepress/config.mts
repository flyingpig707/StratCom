import { defineConfig } from 'vitepress'

const chapter = (text: string, file: string) => ({
  text,
  link: `/${encodeURIComponent(file)}`,
})

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI战略传播力',
  titleTemplate: ':title｜AI战略传播力',
  description: '《AI战略传播力》——AI时代的战略传播理论体系与行动框架。钟诚、任国刚、吴鹏著。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://stratcom.learn-together.cn',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#24478E' }],
    ['meta', { property: 'og:type', content: 'book' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'AI战略传播力' }],
  ],
  themeConfig: {
    siteTitle: 'AI战略传播力',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/01-%E5%89%8D%E8%A8%80%20AI%E6%97%B6%E4%BB%A3%E5%BF%85%E9%A1%BB%E9%87%8D%E5%BB%BA%E6%88%98%E7%95%A5%E4%BC%A0%E6%92%AD' },
      { text: '共同写作', link: '/#coauthor' },
      { text: '全书目录', link: '/00-%E5%B0%81%E9%9D%A2' },
    ],
    sidebar: [
      {
        text: '开篇',
        items: [
          chapter('全书目录', '00-封面'),
          chapter('前言 AI时代必须重建战略传播', '01-前言 AI时代必须重建战略传播'),
        ],
      },
      {
        text: '第一篇 理论体系',
        items: [
          chapter('第一篇导论', '02-第一篇导论'),
          chapter('第一章 范式之变', '03-范式之变'),
          chapter('第二章 理论总纲', '04-理论总纲'),
          chapter('第三章 运行体系', '05-运行体系'),
          chapter('第四章 分层架构', '06-分层架构'),
        ],
      },
      {
        text: '第二篇 国家层传播',
        items: [
          chapter('第二篇导论', '07-第二篇导论'),
          chapter('第五章 国家建构', '08-国家建构'),
          chapter('第六章 国际传播', '09-国际传播'),
          chapter('第七章 危机治理', '10-危机治理'),
        ],
      },
      {
        text: '第三篇 城市层传播',
        items: [
          chapter('第三篇导论', '11-第三篇导论'),
          chapter('第八章 城市定位', '12-城市定位'),
          chapter('第九章 文旅转化', '13-文旅转化'),
          chapter('第十章 招商传播', '14-招商传播'),
          chapter('第十一章 城市治理', '15-城市治理'),
        ],
      },
      {
        text: '第四篇 企业层传播',
        items: [
          chapter('第四篇导论', '16-第四篇导论'),
          chapter('第十二章 企业战略', '17-企业战略'),
          chapter('第十三章 营销闭环', '18-营销闭环'),
          chapter('第十四章 科技信任', '19-科技信任'),
          chapter('第十五章 声誉管理', '20-声誉管理'),
        ],
      },
      {
        text: '第五篇 协同传播',
        items: [
          chapter('第五篇导论', '21-第五篇导论'),
          chapter('第十六章 重大事件', '22-重大事件'),
          chapter('第十七章 海外协同', '23-海外协同'),
        ],
      },
      {
        text: '收束与工具',
        items: [
          chapter('结语 传播力即竞争力', '24-结语 传播力即竞争力'),
          chapter('附录一 四级跃迁传播力体检表', '25-附录一 四级跃迁传播力体检表'),
          chapter('附录二 宣传系统AI传播能力训练清单', '26-附录二 宣传系统AI传播能力训练清单'),
          chapter('附录三 传播力评估指标体系', '27-附录三 传播力评估指标体系'),
          chapter('附录四 企业AI传播合规与内容审核清单', '28-附录四 企业AI传播合规与内容审核清单'),
          chapter('附录五 三主体协同传播模板', '29-附录五 三主体协同传播模板'),
          chapter('附录六 全球AI传播政策对照表', '30-附录六 全球AI传播政策对照表'),
          chapter('附录七 三级危机治理与信任修复工具包', '31-附录七 国家—城市—企业三级危机治理与信任修复工具包'),
          chapter('附录八 出海与本地化传播工具包', '32-附录八 出海与本地化传播工具包'),
          chapter('附录九 测量指标词典与中文复测协议', '33-附录九 测量指标词典与中文复测协议'),
        ],
      },
    ],
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索全书',
            buttonAriaLabel: '搜索全书',
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
      },
    },
    editLink: {
      pattern: '/#coauthor',
      text: '用 Agent 参与共同写作',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/flyingpig707/StratCom' },
    ],
    footer: {
      message: '传播力即竞争力',
      copyright: '钟诚、任国刚、吴鹏 著',
    },
  },
})
