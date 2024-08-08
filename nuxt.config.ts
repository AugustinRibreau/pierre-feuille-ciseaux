// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: 'Pierre Papier Ciseaux',
      link: [{ rel: 'icon', type: 'image/png', href: '_nuxt/assets/favicon.png' }],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})
