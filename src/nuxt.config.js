module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'likecoin-button',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    script: [
      { src: 'https://www.recaptcha.net/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~/plugins/vuetify' },
    { src: '~/plugins/vue-i18n' },
  ],
  /*
  ** Build configuration
  */
  buildDir: 'nuxt',
  build: {
    extractCSS: true,
    parallel: true,
    vendor: [
      'axios',
      '~/plugins/vuetify',
    ],
    babel: {
      presets: ({ isServer }) => [
        [
          'vue-app',
          {
            targets: isServer
              ? { node: '6.14.0' }
              : { browsers: ['defaults'] },
          },
        ],
      ],
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|nuxt)/,
        });
      }
    },
  },
};
