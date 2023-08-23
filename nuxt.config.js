export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'statis',
  generate: {
    fallback: true,
  },
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  head: {
    title: 'test-shakebug',
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
    ],
    script: [
      {
        type: "text/javascript",
        src: "https://www.shakebug.com/assets/js/shakebug-min-1.0.js",
        'id': "apikey",
        'isReportingIconVisible': 'true',
        'apikey': "nbhJocnj2VbhsTkGEf7bajwVSM2I7A",
        async: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
