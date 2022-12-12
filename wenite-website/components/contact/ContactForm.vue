<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const items = [
    {
        id: 1,
        name: 'Sales',
        avatar:
            'https://img.icons8.com/pastel-glyph/512/sales-growth.png',
    },
    {
        id: 2,
        name: 'Partnership',
        avatar:
            'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/512/external-partnership-business-and-finance-tanah-basah-basic-outline-tanah-basah.png',
    },
    {
        id: 3,
        name: 'Book a demo',
        avatar:
            'https://img.icons8.com/windows/512/trial-version.png',
    },
    {
        id: 4,
        name: 'Onboarding',
        avatar:
            'https://img.icons8.com/ios-glyphs/512/onboarding.png',
    },
    {
        id: 5,
        name: 'The first pulse',
        avatar:
            'https://img.icons8.com/ios-glyphs/512/pulse.png',
    },
    {
        id: 6,
        name: 'Continous data stream',
        avatar:
            'https://img.icons8.com/ios/512/blockchain-technology.png',
    },
    {
        id: 7,
        name: 'Automated analysis',
        avatar:
            'https://img.icons8.com/ios/512/web-analystics.png',
    },
    {
        id: 8,
        name: 'Data-driven matchmaking',
        avatar:
            'https://img.icons8.com/ios/512/search-database.png',
    },
    {
        id: 9,
        name: 'Benefits for the company',
        avatar:
            'https://img.icons8.com/ios/512/non-profit-organisation.png',
    },
    {
        id: 10,
        name: 'AI-guided pulse surveys',
        avatar:
            'https://img.icons8.com/ios/512/artificial-intelligence.png',
    },
]

const selected = ref(items[3])
</script>

<template>


    <div id="sales" class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl  sm:text-3xl">Fill out this form, we‘ll quickly get back to you.</h1>
        </div>


        <Listbox as="div" v-model="selected" class="mx-auto mt-8 mb-0 max-w-3xl space-y-4">
            <ListboxLabel class="block text-sm font-medium text-gray-700">How can we help?</ListboxLabel>
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full cursor-default rounded-full border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                    <span class="flex items-center">
                        <img :src="selected.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
                        <span class="ml-3 block truncate">{{ selected.name }}</span>
                    </span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <ListboxOptions
                        class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption as="template" v-for="person in items" :key="person.id" :value="person"
                            v-slot="{ active, selected }">
                            <li
                                :class="[active ? 'text-white bg-blue-500' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                <div class="flex items-center">
                                    <img :src="person.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
                                    <span
                                        :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                                                person.name
                                        }}</span>
                                </div>
                                <span v-if="selected"
                                    :class="[active ? 'text-white' : 'text-blue-500', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>


        <form action="" class="mx-auto mt-8 mb-0 max-w-3xl space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="company" class="sr-only">Company</label>
                    <input type="text" class="w-full rounded-lg border-2 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Company" />
                </div>

                <label for="email" class="sr-only">Email</label>
                <div class="relative">
                    <input type="email" class="w-full rounded-lg border-gray-200 border-2 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Email" />
                </div>

                <div>
                    <label for="first-name" class="sr-only">First Name</label>
                    <div class="relative">
                        <input type="text"
                            class="w-full rounded-lg border-gray-200 border-2 p-4 pr-12 text-sm shadow-sm"
                            placeholder="First Name" />
                    </div>
                </div>
                <label for="last-name" class="sr-only">Last Name</label>
                <div class="relative">
                    <input type="text" class="w-full rounded-lg border-gray-200 border-2 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Last Name" />
                </div>

                <div>
                    <label for="job-title" class="sr-only">Job Title</label>
                    <div class="relative">
                        <input type="text"
                            class="w-full rounded-lg border-gray-200 border-2 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Job Title" />
                        <span class="absolute inset-y-0 right-4 inline-flex items-center">
                        </span>
                    </div>
                </div>
                <label for="country-region" class="sr-only">Country</label>
                <div class="relative">
                    <input type="text" class="w-full rounded-lg border-gray-200 border-2 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Country/Region" />
                </div>

            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                <textarea id="message" rows="6"
                    class="block p-2.5 resize-none w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:border-blue-500"
                    placeholder="Leave a comment..."></textarea>
            </div>
            <div class="flex items-center justify-center py-4">
                <button type="submit"
                    class="inline-block rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                    Submit
                </button>
            </div>
        </form>
    </div>

</template>


<style lang="scss" scoped>

</style>