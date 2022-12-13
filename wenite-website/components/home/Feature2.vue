<template>
    <div class="container flex h-screen mx-auto px-6 py-36 items-center  bg-white">
        <div class=" max-w-1xl">
            <h1 class="opacity-100 drop-shadow-sm shadow-black text-8xl font-semibold  md:text-7xl">
                Centralization results in personalization.
            </h1>
            <p class="mt-6 max-w-3xl text-gray-500 dark:text-gray-600 md:text-3xl ">
                Wenite acts as a single-access point for your employees to consume all content and offerings related to
                their personal development and wellbeing. Employees share on average 10 data points per week with our
                recommender systems. Why? We offer value to employees.
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
        <div class="flex flex-col   gap-4">
            <nuxt-link to="https://app.wenite.io/login">
                <div class="border p-10 w-full h-80 rounded-2xl shadow-2xl bg-gradient-to-r from-rose-100 to-teal-100">
                    <h1 class="text-3xl">You've got Wenite Points to spend</h1>
                    <div class="mt-8 mb-6 ">
                        <p class="text-gray-600 text-xl">
                            <Icon name="mdi:arrow-right-thin" size="50" />
                            See your special offers
                        </p>

                    </div>

                    <div class="flex pt-8 justify-end gap-7">
                        <p class=" text-2xl">188 WP</p>
                        <Icon name="bi:trophy" size="50" />
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="https://app.wenite.io/login">
                <div class="border p-10 w-full h-80 rounded-2xl shadow-2xl   ">
                    <h1 class="text-3xl">Hello, (Employee) </h1>
                    <div class="mt-6 mb-10 ">
                        <p class="text-gray-600 text-xl">Great job! You have completed
                            your check-in for today.  </p>
                        <div class="flex pt-2 justify-end">
                            <ul class="fle flex-col gap-8 mx-auto font-semibold">
                                <li>Mood</li>
                                <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                                    <div class="bg-pink-400 w-2/4 h-full rounded-lg shadow-md"></div>
                                </div>
                                <li>Energy</li>
                                <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                                    <div class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
                                </div>
                                <li>Belonging</li>
                                <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                                    <div class="bg-pink-400 w-4/4 h-full rounded-lg shadow-md"></div>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </nuxt-link>
            <nuxt-link to="https://app.wenite.io/login">
                <div class="border p-10 w-full h-80 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-100 via-blue-300 to-blue-300">
                    <h1 class="text-3xl"> (Employee), we think you'll find this interesting</h1>
                    <div class="flex flex-col mt-4 mb-10 gap-4 ">
                        <p class="text-gray-600 text-xl">More personal recommendations</p>
                        <p class="font-bold">Mindful working - meditation in motion</p>
                                            <div class="flex pt-8 justify-end">
                        <Icon name="mdi-light:gift" size="50" />
                    </div>
                    </div>

                </div>
            </nuxt-link>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>