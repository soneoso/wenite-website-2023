<script setup>

</script>


<template>
    <div class="bg-black">
        <div class="text-center py-24">
            <h2 class="text-white font-inter shrink font-semibold text-8xl">Looking for something else?</h2>
        </div>
        <div class="flex flex-wrap justify-center space-x-8 py-16 pb-32 w-full">
            <nuxt-link to="https://app.wenite.io/login">
                <div class="p-10 w-80 h-80 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-inner">
                    <h1 class="text-3xl text-white">Jobs</h1>
                    <div class="mt-4 mb-10 ">
                        <p class="text-white">Visit our Employee support page if your company is using our product or
                            service </p>
                    </div>
                    <div class="flex pt-8 justify-end">
                        <Icon name="mdi:arrow-right-thin" size="50" color="white" />
                    </div>
                </div>
            </nuxt-link>

            <nuxt-link to="https://app.wenite.io/login" id="sales">
                <div class="bg-gradient-to-r from-zinc-800 to-zinc-900 border-black p-10 w-80 h-80 rounded-2xl shadow-2xl">
                    <h1 class="text-3xl text-white">Feed</h1>
                    <div class="mt-4 mb-10 ">
                        <p class=" text-white">Visit our Employee support page if your company is using our product or
                            service </p>
                    </div>
                    <div class="flex pt-8 justify-end">
                        <Icon name="mdi:arrow-right-thin" size="50" color="white" />
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>