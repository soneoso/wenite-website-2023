// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
    ],
    app: {
        head: {
            title: 'Wenite',
            meta: [
                { name: 'description', content: "Making all 'soft HR' processes tangible and trackable through data." }
            ],
            link: [
                { rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
            ],
            script: [
                {

                }
            ]
        }
    }
})
