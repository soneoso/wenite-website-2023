<template>
    <header class="">
        <div class="container h-screen mx-auto px-6 py-48 flex bg-white">
            <div class=" max-w-4xl">
                <h1 class="opacity-100 drop-shadow-sm shadow-black text-3xl font-semibold  md:text-9xl">
                    Insight Portal
                </h1>
                <p class="mt-6 max-w-3xl text-gray-500 dark:text-gray-600 md:text-3xl">
                    Wenite provides the data and tools to put employee wellbeing at the heart of your organization.
                    Our smart technology delivers insights that you can instantly put into action.
                </p>
                <nuxt-link to="https://app.wenite.io/login">
                    <button type="button" class="header-book-demo">Book a demo
                        <Icon name="system-uicons:arrow-right" class="-mt-1" size="28" />
                    </button>
                    <button type="button" class="header-btn-book">Get started free
                        <Icon name="system-uicons:arrow-right" class="-mt-1" size="28" />
                    </button>
                </nuxt-link>
            </div>

            <div class="flex mx-auto">
                <div class="border grid place-items-center rounded-full shadow-2xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 "
                    style="height: 600px; width: 600px; font-size: 170px">
                </div>
                <div class="absolute grid grid-cols-3 gap-8">
                <ul class="">
                    <div class="">
                        <li class="col-span-2">
                            <img src="~/assets/images/healthtrianglepill.svg" alt="">
                        </li>
                    </div>
                    <div>
                        <li>
                            <img src="~/assets/images/offerspill.svg" alt="">
                        </li>
                    </div>
                    <div>
                        <li>
                            <img src="~/assets/images/Recommendationspill.svg" alt="">
                        </li>
                    </div>
                    <div>
                        <li>
                            <img src="~/assets/images/virtualcoachpill.svg" alt="">
                        </li>
                    </div>
                    <div>
                        <li>
                            <img src="~/assets/images/wellbeingpill.svg" alt="">
                        </li>
                    </div>
                    <div>
                        <li>
                            <img src="~/assets/images/pointsystempill.svg" alt="">
                        </li>
                    </div>
                </ul>
            </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {


}
</script>

<style  scoped>

</style>