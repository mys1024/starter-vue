import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    vueI18n({
      include: [fileURLToPath(new URL('./src/locales/**', import.meta.url))],
    }),
    autoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', 'pinia', '@vueuse/core'],
      dirs: ['./src/modules/**', './src/utils/**'],
      vueTemplate: true,
    }),
    components({
      deep: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
