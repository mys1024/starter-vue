import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';

export const i18n = createI18n({
  locale: 'en',
  messages,
});

export const t = i18n.global.t;
