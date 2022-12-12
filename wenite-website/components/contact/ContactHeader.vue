<script setup>
import { ArrowNarrowRightIcon } from "@vue-hero-icons/outline"
</script>


<template>
    <div>
        <div class="container flex flex-col mx-auto px-6 py-32 items-center">

            <h1 class="text-black font-inter shrink font-semibold text-9xl">Contact our teams</h1>
            <div>
                <p class="mt-6 text-gray-500 dark:text-gray-600 md:text-2xl">
                    You have some question about the product or need assistance, feel free to ask.
                </p>
                <p class="text-center mx-auto items-center pt-8 dark:text-gray-600">Are you allready with us and need specific information about the Wenite dashboard?</p>
                <div class="flex mx-auto justify-center">
                    <nuxt-link to="https://app.wenite.io/login">
                        <button type="button" class="header-btn-book">Go to our Help Center 
                            <Icon name="system-uicons:arrow-right" class="-mt-1" size="28" />
                        </button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
