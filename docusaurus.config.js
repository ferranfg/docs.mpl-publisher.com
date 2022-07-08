/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation | MPL-Publisher',
  tagline: 'Self-publish your WordPress ebook & audiobook 📚',
  url: 'https://docs.mpl-publisher.com',
  trailingSlash: true,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'ferranfg', // Usually your GitHub org/user name.
  projectName: 'mpl-docs', // Usually your repo name.
  themeConfig: {
    image: 'https://ps.w.org/mpl-publisher/assets/banner-1544x500.jpg?rev=2636271',
    metadata: [{
      property: 'og:type',
      content: 'article'
    }, {
      property: 'fb:app_id',
      content: '1123545991778390'
    }],
    colorMode: {
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '☀️',
        lightIconStyle: {
          marginLeft: '2px',
        },
      },
    },
    navbar: {
      title: 'MPL-Publisher',
      logo: {
        alt: 'MPL-Publisher',
        src: 'img/logo.webp'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '🚀 Getting Started',
        },
        {
          href: 'https://mpl-publisher.com',
          label: '📚 Home',
          position: 'right',
        },
        {
          href: 'https://mpl-publisher.com/blog',
          label: '📰 Blog',
          position: 'right',
        },
        {
          href: 'https://wordpress.org/support/plugin/mpl-publisher/',
          label: '📨 Support',
          position: 'right',
        }
      ],
    },
    algolia: {
      apiKey: 'bd08e40560438ad229b7b11c84d35153',
      indexName: 'DOCS',
      // contextualSearch: true,
      appId: 'OC9N1TKHGY'
    },
    hideableSidebar: true,
    footer: {
      copyright: `© <a href="https://mpl-publisher.com">MPL-Publisher</a> 📚 All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ferranfg/docs.mpl-publisher.com/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
