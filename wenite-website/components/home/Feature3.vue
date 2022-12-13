<template>
    
    <div class="container flex flex-col gap-32 h-screen mx-auto px-6 py-36 items-center">
        <div class="max-w-1xl flex flex-col mx-auto items-center">
            <h1 class="opacity-100 drop-shadow-sm shadow-black text-8xl font-semibold text-black  md:text-7xl">
                Tailored to the needs of your organization.
            </h1>
            <p class="mt-6 max-w-3xl  text-gray-600 md:text-3xl text-center ">
                Integrations within your company culture and tooling ecosystem are facilitated by our vast network of
                partners. Wenite's platform is designed to maximize the impact of your current best practices, our
                customer success team is here to guide to toward success.
            </p>
            <nuxt-link to="https://app.wenite.io/login">
                <button type="button" class="header-book-demo">Get started free
                    <Icon name="system-uicons:arrow-right" class="-mt-1" size="28" />
                </button>
                <button type="button" class="header-btn-book">Learn more
                    <Icon name="system-uicons:arrow-right" class="-mt-1" size="28" />
                </button>
            </nuxt-link>
        </div>
         <div class="grid grid-cols-4 gap-4">

                <div class=" bg-gradient-to-r from-zinc-800 to-zinc-900 border grid place-items-center w-80 h-80 rounded-full shadow-2xl text-white">
                    <h1 class="text-3xl font-semibold">Engagement</h1>
                    <!-- <div class="mt-4 mb-10 "> -->
                    <!-- <p class="text-gray-600">Visit our Employee support page if your company is using our product or
                        service </p> -->
                    <!-- </div> -->
                    <!-- <div class="flex pt-8 justify-end">
                    <Icon name="mdi:arrow-right-thin" size="50" />
                </div> -->
                </div>



                <div class="bg-gradient-to-r from-zinc-800 to-zinc-900 border grid place-items-center w-80 h-80 rounded-full shadow-2xl text-white">
                    <h1 class="text-3xl font-semibold">Development</h1>
                    <!-- <div class="mt-4 mb-10 "> -->
                    <!-- <p class="text-gray-600">Visit our Employee support page if your company is using our product or
                        service </p> -->
                    <!-- </div> -->
                    <!-- <div class="flex pt-8 justify-end">
                    <Icon name="mdi:arrow-right-thin" size="50" />
                </div> -->
                </div>



                <div class="border grid place-items-center w-80 h-80 rounded-full shadow-2xl ">
                    <h1 class="text-3xl font-semibold">Welbeing</h1>
                    <!-- <div class="mt-4 mb-10 "> -->
                    <!-- <p class="text-gray-600">Visit our Employee support page if your company is using our product or
                        service </p> -->
                    <!-- </div> -->
                    <!-- <div class="flex pt-8 justify-end">
                    <Icon name="mdi:arrow-right-thin" size="50" />
                </div> -->
                </div>


                <div class="bg-gradient-to-r from-zinc-800 to-zinc-900 border grid place-items-center w-80 h-80 rounded-full shadow-2xl text-white">
                    <h1 class="text-3xl font-semibold">Retention</h1>
                    <!-- <div class="mt-4 mb-10 "> -->
                    <!-- <p class="text-gray-600">Visit our Employee support page if your company is using our product or
                        service </p> -->
                    <!-- </div> -->
                    <!-- <div class="flex pt-8 justify-end">
                    <Icon name="mdi:arrow-right-thin" size="50" />
                </div> -->
                </div>
                
                </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>