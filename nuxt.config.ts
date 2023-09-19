// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        {name: 'description', content: 'Everything about Nuxt Js'}
      ],
      link: [
        {rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    // expose to front end
    // public: {
      
    // }
  }
})
 