<script setup>
const info = computed(() => {
    return {
        isNavOpen: false,

        billPlan: 'monthly',

        plans: [
            {
                name: 'Easy',
                discretion: 'All the basics for businesses that are just getting started.',
                price: {
                    monthly: 29,
                    annually: 29 * 12 - 199,
                },
                features: ['One project', 'Your dashboard'],
            },
            {
                name: 'Basic',
                discretion: 'Better for growing businesses that want more customers.',
                price: {
                    monthly: 59,
                    annually: 59 * 12 - 100,
                },
                features: ['Two projects', 'Your dashboard', 'Components included', 'Advanced charts'],
            },
            {
                name: 'Custom',
                discretion: 'Advanced features for pros who need more customization.',
                price: {
                    monthly: 139,
                    annually: 139 * 12 - 100,
                },
                features: ['Unlimited projects', 'Your dashboard', '+300 Components', 'Chat support'],
            },
        ],
    }
});
</script>

<template>

    <section class="py-20 ">
        <div class="container px-4  mx-auto">
            <div class="max-w-2xl mx-auto mb-16 text-center">
                <h2 class="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
            </div>
        </div>  

        <div class="flex flex-row flex-wrap mx-auto justify-center space-x-8 pb-6">

            <div class="">
                <div class="flex w-full mb-6">
                    <div class="flex flex-col w-96 p-6 space-y-6 rounded-2xl shadow-2xl sm:p-8">
                        <div class="space-y-2 p-8">
                            <h4 class="text-2xl font-bold">Free Trial</h4>
                            <span class="text-6xl font-bold">€0</span>
                        </div>
                        <p class="mt-3 leading-relaxed">This is our premium package unlocking all features for usage.</p>
                        <ul class="flex-1 mb-6 py-6">
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-blue-500">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Aenean quis</span>
                            </li>
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-blue-500">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Morbi semper</span>
                            </li>
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-blue-500">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Tristique enim nec</span>
                            </li>
                        </ul>
                        <button type="button"
                            class="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded-full bg-blue-500 text-white">Get
                            Started</button>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="flex w-full mb-8">
                    <div class="flex flex-col w-96 p-6 space-y-6 rounded-2xl shadow-2xl sm:p-8">
                        <div class="space-y-2  p-8">
                            <h4 class="text-2xl font-bold">Essential</h4>
                            <span class="text-6xl font-bold">€5</span>
                        </div>
                        <p class="mt-3 leading-relaxed">This is our Essential package for limited usage.</p>
                        <ul class="flex-1 mb-6 py-6">
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-blue-500">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Aenean quis</span>
                            </li>
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-blue-500">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Morbi semper</span>
                            </li>
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-blue-500">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Tristique enim nec</span>
                            </li>
                        </ul>
                        <button type="button"
                            class="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded-full bg-blue-500 text-white">Get
                            Started</button>
                    </div>
                </div>
            </div>

            <div class="">
                <div class="flex w-full mb-6">
                    <div class="flex flex-col w-96 p-6 space-y-6 rounded-2xl shadow-2xl sm:p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div class="space-y-2 p-8">
                            <h4 class="text-2xl font-bold text-white">Premium</h4>
                            <span class="text-6xl font-bold text-white">€15</span>
                        </div>
                        <p class="mt-3 leading-relaxed text-white">This is our premium package unlocking all features for usage.</p>
                        <ul class="flex-1 mb-6 py-6">
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-white">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-white">Aenean quis</span>
                            </li>
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-white">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-white">Morbi semper</span>
                            </li>
                            <li class="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="flex-shrink-0 w-6 h-6 dark:text-white">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-white">Tristique enim nec</span>
                            </li>
                        </ul>
                        <button type="button"
                            class="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded-full bg-white ">Get
                            Started</button>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>