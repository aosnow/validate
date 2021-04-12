// ------------------------------------------------------------------------------
// name: config
// author: mudas( mschool.tech )
// created: 2021/2/25 10:36
// ------------------------------------------------------------------------------

const fs = require('fs');
const pkg = require('../../package.json');

module.exports = {
  // 如果你的网站部署到非根 URL，则需要在 .vuepress/config.js 中设置 base 选项。
  // 例如，如果你打算将你的网站部署到 https://foo.github.io/bar/，那么base应该设置为 "/bar/"（它应该始终以斜杠开始和结束）
  // 参考：http://caibaojian.com/vuepress/guide/assets.html#基准-url
  base: '/validate/',

  title: `${pkg.name}<v${pkg.version}>`,
  description: pkg.description,

  cache: false,

  theme: '@vuepress/default',
  themeConfig: {
    sidebarDepth: 2,
    displayAllHeaders: true,
    smoothScroll: true,
    nav: [
      { text: '首页', link: './' },
      { text: '指南', link: './guide' },
      { text: 'Github', link: 'https://github.com/aosnow/validate', target: '_blank' }
    ],

    sidebar: [
      ['./guide', '快速上手指南'],
      {
        title: '验证函数',
        path: './validater',
        children: [
          ['./validater', '验证函数']
        ]
      },
      {
        title: '正则表达式',
        path: './regexp',
        children: [
          ['./regexp', '正则表达式']
        ]
      }
    ]
  }
};
