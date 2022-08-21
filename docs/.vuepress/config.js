module.exports = {
  host: 'localhost',
  title: '无定牌',
  description: '无定牌的相关信息',
  themeConfig: {
    sidebar: [
      {
        title: '欢迎来到走修至上主义的无定牌',
        path: '/',
      },
      {
        title: '规则',
        path: '/rules/introduce',
        collapsable: false,
        children: [
          { title: '简介', path: '/rules/introduce' },
          { title: '卡牌', path: '/rules/cards' },
          { title: '流程', path: '/rules/process' },
          { title: '术语', path: '/rules/terms' },
        ]
      }
    ],
    subSidebar: 'auto'
  },
}