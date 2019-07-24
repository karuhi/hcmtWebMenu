
module.exports = {
  srcDir: 'src/',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'hcmtWebMenu | 今日の献立をWebでかんたん確認',
    htmlAttrs: {
      lang:'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'hcmtWebMenu | 今日の献立をかんたん確認!'},
      { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: 'hcmtWebMenu'},
      { hid: 'og:description', name: 'og:description', property: 'og:description', content: '今日の献立をかんたん確認!'},
      { hid: 'description', name: 'description', content: '今日の献立をかんたん確認!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
