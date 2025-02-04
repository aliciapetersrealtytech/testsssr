// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // nitro: {
  //   preset: 'node-server'
  // },
  features: {
    inlineStyles: true
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    script: [],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ],
  },
  scripts: {
    globals: {
      myScript: 'https://unpkg.com/vue3-google-map',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: 'http://localhost:1337',
        prefix: '/api'
      },
      apiBaseDev: process.env.API_DEV_URL,
      apiBaseProd: process.env.API_PROD_URL,
      cmsDevUrl: process.env.CMS_DEV_URL,
      cmsProdUrl: process.env.CMS_PROD_URL,
      strapiToken: process.env.STRAPI_DEV_TOKEN,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
    }
  }
})