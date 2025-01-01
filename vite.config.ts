import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    Vue(),
    VueJsx(),
    VueDevTools(),
    VueI18n({
      include: [fileURLToPath(new URL('./src/locales/**', import.meta.url))],
    }),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', 'pinia', '@vueuse/core'],
      dirs: ['./src/modules/**', './src/utils/**'],
      vueTemplate: true,
    }),
    Components({
      globs: ['src/components/*.{vue,tsx}', 'src/components/*/index.{vue,tsx}'],
      resolvers: [AntDesignVueResolver({ importStyle: 'css-in-js' })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
