import { createI18n } from 'vue-i18n'
// import zhCN from '../locales/zh-CN.json'
// import zhTW from '../locales/zh-TW.json'
import en from '../locales/en.json'
// import ko from '../locales/ko.json'
// import vn from '../locales/vn.json'
// import ru from '../locales/ru.json'

const i18n = createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    // 'zh-CN': zhCN,
    // 'zh-TW': zhTW,
    en,
    // ko,
    // vn,
    // ru,
  },
})

export default i18n
