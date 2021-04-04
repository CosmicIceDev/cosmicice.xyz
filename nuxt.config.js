export default {
  head: {
    title: 'cosmicice',
    htmlAttrs: {
      lang: 'en',
      class: 'min-h-screen min-w-screen scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "cosmicice's website" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap' },
    ],
    script: [
      { src: '/vendors/draggabilly.pkgd.min.js' },
      { src: '/vendors/twemoji.min.js' },
      { src: '/scripts.js' }
    ]
  },

  css: [
    '~/static/css/style.css',
  ],

  plugins: [
    '~/plugins/tippy.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/color-mode'
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],

  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      fileName: 'icon.png'
    }
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-synthwave84.css'
      }
    }
  },

  build: {
  },

  loading: {
    color: '#282828',
    failedColor: '#cc0000',
    height: '0.3em',
    continuous: true
  },

  server: {
    host: 'localhost'
  }
}
