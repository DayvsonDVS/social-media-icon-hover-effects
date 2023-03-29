// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/breakpoints.scss";`
        }
      }
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['ion-icon'].includes(tag)
    }
  },
  components: [{ path: '@/components', pathPrefix: false }],
  dir: {
    pages: 'components/pages'
  }
})
