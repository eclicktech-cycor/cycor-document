import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Cycor',
  tagline: 'Cycor是一个智能化多云管理品牌，旗下有多个解决方案组成，将包括Cycor DevOps、Cycor Cloud多云管理平台(建设中)组成产品矩阵',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cycor.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cycor-document/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eclicktech-cycor', // Usually your GitHub org/user name.
  projectName: 'cycor-document', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch the action should deploy to.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  // ... Your other configurations.
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://cycor.io',
          label: '联系我们',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '文档',
              to: '/docs/产品简介/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '飞书',
              href: 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=5f5t2372-0cdb-4e90-ad36-47a0349869b7',
            },
            {
              label: '微信',
              href: 'https://mp.weixin.qq.com/s/OB3jU9H91MKFLjQuunlh3w',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cycor',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: '联系我们',
              href: 'https://cycor.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} eclicktech, Inc. Built with cycor.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};


export default config;
