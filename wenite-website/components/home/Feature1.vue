<template>
    <div class="container flex h-screen mx-auto px-6 py-36 items-center  bg-white">
        <div class=" max-w-1xl">
            <h1 class="opacity-100 drop-shadow-sm shadow-black text-8xl font-semibold  md:text-7xl">
                Better information, faster decisions.
            </h1>
            <p class="mt-6 max-w-3xl text-gray-500 dark:text-gray-600 md:text-3xl ">
                Wenite starts where traditional pulse surveying tools stop. Our AI-driven approach to collecting data
                from employees reduces survey load and optimizes data quality.
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
        <div class="flex pt-8 pr-24 justify-end text-black">
            <Icon name="cil:arrow-right" size="100" />
        </div>
        <div class="border-2 rounded-full shadow-2xl">
            <div class="py-16">
                <div class="h-96 w-96">
                    <ChartsFeatureChart1 />
                </div>
            </div>
        </div>
    </div>



</template>

<script>

</script>

<style lang="scss" scoped>

</style>