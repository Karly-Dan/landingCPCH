export default {
  server: {
    host: '0', // default: localhost
    port: 3000, // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Centro de Profesionalización de Capital Humano',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/vee-validate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-sweetalert2/nuxt',
    '@nuxtjs/gtm',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },
  // Google Tag Manager
  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID
  },
  //
  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    },
    apiTelegram: process.env.API_TELEGRAM,
    accessTokenTelegram: process.env.ACCESS_TOKEN_TELEGRAM,
    chatIdTelegram: process.env.CHAT_ID_TELEGRAM,
  },
}
