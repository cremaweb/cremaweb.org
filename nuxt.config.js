module.exports = {
  mode: 'spa',
  modules: [
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/moment'],
  ],
 'google-analytics': {
    id: 'UA-127332250-1'
  },
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
  ],
  router: {
    middleware: 'index',
  },
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'tailwindcss': {
          theme: {
            backgroundColor: theme => ({
              ...theme('colors'),
              'grey': '#f5f5f5'
            }),
            screens: {
              xs: '340px',
              sm: '640px',
              md: '768px',
              lg: '1024px',
              xl: '1280px',
            },
            boxShadow: {
              // offset-x | offset-y | blur-radius | spread-radius | color
              'strong': '3px 3px 4px 2px rgba(0,0,0,0.2)',
              'white': '1px 2px 3px 1px rgba(255,255,255,0.2)',
            },
            extend: {
              spacing: {
                // '20': '18rem',
              },
              width: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
              }
            }
          }
        },
        'autoprefixer': {},
      }
    }
  },
  generate: {
    routes: []
  },
}
