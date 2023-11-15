import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Personal notes',
  description: 'A VitePress Site',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/blog/markdown-examples' },
      { text: '组件文档', link: '/components/button' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: {
      '/blog/': [
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: '/blog/markdown-examples' },
            { text: 'Runtime API Examples', link: '/blog/api-examples' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'components',
          collapsed: false,
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Icon', link: '/components/icon' },
            { text: 'Tooltip', link: '/components/tooltip' },
            { text: 'Message', link: '/components/message' },
            { text: 'Input', link: '/components/input' },
            { text: 'Select', link: '/components/select' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/czmpower/kotlin_android' }],
    outline: {
      level: 'deep',
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
