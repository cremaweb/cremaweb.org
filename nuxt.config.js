module.exports = {
  modules: [
    ['@nuxtjs/google-analytics'],
  ],
 'google-analytics': {
    id: 'UA-127332250-1'
  },
  // serverMiddleware: [
  //   'redirect-ssl',
  // ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
  css: [
    '~/assets/main.styl',
    'basscss/css/basscss.min.css',
    'basscss-colors/css/colors.css',
    'basscss-background-colors/css/background-colors.css',
    'basscss-border-colors/css/border-colors.css',
    // 'basscss-forms/index.css',
  ],
  // router: {
  //   base: ''
  // }
}
