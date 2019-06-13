import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',
  server: {
    port: 3000,
    host: '127.0.0.1'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {rel: "stylesheet", href: 'https://at.alicdn.com/t/font_1211765_fb7cioldidj.css'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    {src: "~/assets/style/font.css"},
    {src: '~/assets/style/hover.css'},
    {src: '~/assets/style/comment.css'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    {src: '~/plugins/velocity', ssr: false},
    {src: '~/plugins/utils.js', ssr: false},//自定义工具箱

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  apollo: {
    tokenName: 'blog', // optional, default: apollo-token
    // optional
    errorHandler: '~/plugins/apollo-error-handler.js',
    // required
    clientConfigs: {
      default: {
        // required
        httpEndpoint: 'http://localhost:8080/api',
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
       /* httpLinkOptions: {
          credentials: 'same-origin'
        },*/
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        // LocalStorage token
        tokenName: 'blog', // optional
        // Enable Automatic Query persisting with Apollo Engine
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
