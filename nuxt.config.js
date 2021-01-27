export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: 'https://egotkachenco.github.io/Energo-ug-alyanse/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'site-generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap", },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Days+One&display=swap", },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css", },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"}
    ]
  }, 
  
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'en'
      },
      locales: [
        {
          name: 'Ukrainian',
          code: 'uk',
          iso: 'uk-UA',
          file: 'uk-UA.js'
        },
        {
          name: 'Russian',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru-RU.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'uk',
    }]
  ],

  styleResources: {
    scss: [
      '~/assets/scss/settings/global.scss',
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
