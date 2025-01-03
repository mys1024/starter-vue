import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import Vue from '@vitejs/plugin-vue';
import Layouts from 'vite-plugin-vue-layouts';
import VueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import packageJson from './package.json' with { type: 'json' };

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: './node_modules/.vue-starter/typed-router.d.ts',
    }),
    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
    Vue(),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx
    VueJsx(),
    // https://github.com/vuejs/devtools
    VueDevTools(),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      include: [fileURLToPath(new URL('./src/locales/**', import.meta.url))],
    }),
    // https://github.com/unocss/unocss
    UnoCSS(),
    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: ['vue', VueRouterAutoImports, 'vue-i18n', 'pinia', '@vueuse/core'],
      dirs: ['./src/modules/**', './src/stores/**', './src/utils/**'],
      vueTemplate: true,
      dts: './node_modules/.vue-starter/auto-imports.d.ts',
    }),
    // https://github.com/unplugin/unplugin-vue-components
    Components({
      globs: ['src/components/*.{vue,tsx}', 'src/components/*/index.{vue,tsx}'],
      resolvers: [AntDesignVueResolver({ importStyle: 'css-in-js' })],
      dts: './node_modules/.vue-starter/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'import.meta.env.VERSION': JSON.stringify(`v${packageJson.version}`),
  },
});
