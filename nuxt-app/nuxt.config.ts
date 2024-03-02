
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vite-pwa/nuxt"
  ],
  pwa: {
    manifest: {
      name: "pwa nuxt 3",
      short_name: "pwa nuxt",
      theme_color:'#8a8a5e',
      description: "Arman Abi r.man.abi@gmail.com",
      icons: [
        {
          src: 'image.png',
          sizes: "150x150",
          type: "image/png"
        },
      ]


    },
    workbox: {
      navigateFallback: "/",

    },
    devOptions: {
      enabled: true, 
      type: "module"
    }

  }
})
