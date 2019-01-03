module.exports = {
  modules: [
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/moment'],
  ],
 'google-analytics': {
    id: 'UA-127332250-1'
  },
  // serverMiddleware: [
  //   'redirect-ssl',
  // ],
  head: {
    title: 'CremaWeb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: `og:title`,
        property: 'og:title',
        content: `CremaWeb`
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: `Community of developers, students and companies passionate about Web Technologies`
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: `https://cremaweb.org/cremaweb.png`
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: `https://cremaweb.org`
      },
    ],
  },
  css: [
    '~/assets/main.styl',
    'basscss/css/basscss.min.css',
    'basscss-colors/css/colors.css',
    'basscss-border-colors/css/border-colors.css',
    'basscss-btn/css/btn.css',
    'basscss-btn-primary/css/btn-primary.css',
    'basscss-background-colors/css/background-colors.css',
    'basscss-typography/css/typography.css',
    'basscss-type-scale/css/type-scale.css',
    // 'basscss-forms/index.css',
  ],
  router: {
    // base: '',
    middleware: 'index',
  }
}
