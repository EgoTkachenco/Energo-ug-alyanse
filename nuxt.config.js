export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'site-generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    scripts: [
      { hid: 'smtp', src: "//smtpjs.com/v3/smtp.js", defer: true },
      {
        hid: 'call-tracking', innerHTML: `
          (function(d, w, s) {
          var widgetHash = 'tuzgqcwmt7mvcyusstef', ctw = d.createElement(s); ctw.type = 'text/javascript'; ctw.async = true;
          ctw.src = '//widgets.binotel.com/calltracking/widgets/'+ widgetHash +'.js';
          var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(ctw, sn);
          })(document, window, 'script');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    link: [
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon-precomposed', type: 'image/png', href: '/favicon.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap", },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap", },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css", },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" }
    ],

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
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-135683740-1'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      // detectBrowserLanguage: {
      //   useCookie: true,
      //   cookieKey: 'i18n_redirected',
      //   alwaysRedirect: false,
      //   fallbackLocale: 'en'
      // },
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
      seo: false
    }],

    ['nuxt-lazy-load', {
      // Your options
      directiveOnly: true,
      defaultImage: '/default.gif',
    }],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyC-Df_IAuGM1oe2VFO8dL3uqGCjcq5Kiu4",
          authDomain: "energougalyance.firebaseapp.com",
          projectId: "energougalyance",
          storageBucket: "energougalyance.appspot.com",
          messagingSenderId: "585158069155",
          appId: "1:585158069155:web:bdc340fbf1e004530e6816",
          databaseURL: ""
        },
        services: {
          firestore: true
        }
      }
    ]
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
