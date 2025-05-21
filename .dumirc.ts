import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/antdx-pro/',
  favicons: [isProd ? '/antdx-pro/favicon.ico' : '/favicon.ico'],
  publicPath: isProd ? '/antdx-pro/' : '/',
  themeConfig: {
    name: 'antdx-pro',
    logo: isProd ? '/antdx-pro/logo.png' : '/logo.png',
    prefersColor: { default: 'auto' },
    footer: '@antdx/pro',
    socialLinks: {
      github: 'https://github.com/mmdctjj/antdx-pro',
    },
  },
});
