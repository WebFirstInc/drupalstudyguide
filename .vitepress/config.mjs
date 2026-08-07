import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// Default to site root (Cloudflare). GitHub Pages sets BASE_PATH=/drupalstudyguide.
const base = process.env.BASE_PATH || '/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Drupal Study Guide',
  description:
    'Acquia Drupal certification study guide',
  base,
  srcDir: './docs',
  outDir: './dist',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `${base}/images/favicon.ico`.replace('//', '/') }]
  ],

  vite: {
    envDir: './../',
    ssr: {
      noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities']
    }
  },
  themeConfig: {
    logo: '/images/main-logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Attributions', link: '/attributions' },
      { text: 'Contribute', link: '/contribute' },
      { text: 'Fork me', link: 'https://github.com/WebFirstInc/drupalstudyguide/fork' }
    ],

    outline: {
      level: [2, 3]
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/WebFirstInc/drupalstudyguide/edit/gh-pages/docs/:path',
      text: 'Edit this page on GitHub'
    },

    sidebar: [
      {
        text: 'Introduction',
        link: '/intro.md'
      },
      {
        text: 'Success Stories',
        link: '/success-stories.md'
      },
      {
        text: 'Key Core Version Changes',
        link: '/key-core-version-changes.md'
      },
      {
        text: 'Self Evaluation',
        collapsed: true,
        items: [
          { text: 'Drupal Developer', link: '/self-evaluation/drupal-developer-exam' },
          { text: 'Drupal Frontend Specialist', link: '/self-evaluation/drupal-frontend-specialist-exam' },
          { text: 'Drupal Backend Specialist', link: '/self-evaluation/drupal-backend-specialist-exam' }
        ]
      },
      {
        text: '1.0 Fundamentals',
        collapsed: true,
        items: [
          { text: '1.1 HTML/CSS', link: '/fundamentals/1.1-html-css' },
          { text: '1.2 Javascript/jQuery', link: '/fundamentals/1.2-javascript-jquery' },
          { text: '1.3 Source code control with git', link: '/fundamentals/1.3-git' }
        ]
      },
      {
        text: '2.0 Site Building',
        collapsed: true,
        items: [
          { text: '2.1 Content Types', link: '/site-building/2.1-content-types' },
          { text: '2.2 Display Modes', link: '/site-building/2.2-display-modes' },
          { text: '2.3 Taxonomies', link: '/site-building/2.3-taxonomies' },
          { text: '2.4 Blocks', link: '/site-building/2.4-blocks' },
          { text: '2.5 Menus', link: '/site-building/2.5-menus' },
          { text: '2.6 Views', link: '/site-building/2.6-views' },
          { text: '2.7 Configuration Management', link: '/site-building/2.7-configuration-management' },
          { text: '2.8 Multilingual', link: '/site-building/2.8-multilingual' },
          { text: '2.9 Web Services', link: '/site-building/2.9-web-services' }
        ]
      },
      {
        text: '3.0 Front-end Dev',
        collapsed: true,
        items: [
          { text: '3.1 Creating Themes', link: '/front-end/3.1-creating-themes.md' },
          { text: '3.2 Theming Concepts', link: '/front-end/3.2-theming-concepts.md' },
          { text: '3.3 Twig Syntax', link: '/front-end/3.3-twig-syntax.md' },
          { text: '3.4 Twig Templates', link: '/front-end/3.4-twig-templates.md' },
          { text: '3.5 Preprocessors', link: '/front-end/3.5-preprocessors.md' }
        ]
      },
      {
        text: '4.0 Back end Dev',
        collapsed: true,
        items: [
          { text: '4.1 OOP', link: '/back-end/4.1-oop.md' },
          { text: '4.2 Custom Modules', link: '/back-end/4.2-custom-modules.md' },
          { text: '4.3 Data Storage', link: '/back-end/4.3-data-storage.md' },
          {
            text: '4.4 Essential APIs',
            collapsed: true,
            link: '/back-end/4.4-essential-apis.md',
            items: [
              { text: '4.4.1 Blocks', link: '/back-end/4.4-essential-apis-block.md' },
              { text: '4.4.2 Configuration', link: '/back-end/4.4-essential-apis-configuration.md' },
              { text: '4.4.3 Database', link: '/back-end/4.4-essential-apis-database.md' },
              { text: '4.4.4 Entities', link: '/back-end/4.4-essential-apis-entity.md' },
              { text: '4.4.4 Entities (extended)', link: '/back-end/4.4-essential-apis-entity-extended.md' },
              { text: '4.4.5 Events', link: '/back-end/4.4-essential-apis-events.md' },
              { text: '4.4.6 Forms', link: '/back-end/4.4-essential-apis-form.md' },
              { text: '4.4.6 Forms (extended)', link: '/back-end/4.4-essential-apis-form-extended.md' },
              { text: '4.4.7 Logging', link: '/back-end/4.4-essential-apis-logging.md' },
              { text: '4.4.8 Menus', link: '/back-end/4.4-essential-apis-menu.md' },
              { text: '4.4.9 Plugins', link: '/back-end/4.4-essential-apis-plugin.md' },
              { text: '4.4.10 Render', link: '/back-end/4.4-essential-apis-render.md' },
              { text: '4.4.11 Routing', link: '/back-end/4.4-essential-apis-routing.md' },
              { text: '4.4.12 Services', link: '/back-end/4.4-essential-apis-services.md' },
              { text: '4.4.13 State', link: '/back-end/4.4-essential-apis-state.md' },
              { text: '4.4.14 Update API', link: '/back-end/4.4-essential-apis-update.md' }
            ]
          },
          { text: '4.5 Coding Standards', link: '/back-end/4.5-coding-standards.md' },
          { text: '4.6 Performance', link: '/back-end/4.6-performance.md' },
          { text: '4.7 Security', link: '/back-end/4.7-security.md' }
        ]
      },
      { text: 'About', link: '/about' },
      { text: 'Attributions', link: '/attributions' },
      { text: 'Contribute', link: '/contribute' },
      { text: 'Fork me', link: 'https://github.com/WebFirstInc/drupalstudyguide/fork' }
    ],

    socialLinks: [
      { icon: 'linkedin', link: '//linkedin.com/company/webfirst/' },
      { icon: 'github', link: '//github.com/WebFirstInc' }
    ],

    footer: {
      message:
        '<span>\n' +
        '  <a property="dct:title" rel="cc:attributionURL" href="//webfirstinc.github.io/drupalstudyguide/">Drupal Study Guide</a>\n' +
        '  by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.webfirst.com/" target="_blank">WebFirst</a>\n' +
        '  is licensed under <a href="//creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener noreferrer">CC BY 4.0\n' +
        '  </a><br>Drupal is a registered trademark of Dries Buytaert</span>'
    }
  }
});
