import { createPinia } from 'pinia';
import type { App } from 'vue';
import { router } from './router';
import { i18n } from './i18n';

export function installVueModules(app: App) {
  app.use(createPinia());
  app.use(router);
  app.use(i18n);
}
