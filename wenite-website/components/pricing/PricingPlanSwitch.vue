<template>
    <div class="flex items-center justify-center mt-10 space-x-4">
        <span class="text-base font-medium">Bill Monthly</span>
        <button class="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            x-cloak @click="billPlan == 'monthly' ? billPlan = 'annually' : billPlan = 'monthly'">
            <div class="w-16 h-8 transition bg-blue-500 rounded-full shadow-md outline-none"></div>
            <div class="absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1"
                :class="{ 'translate-x-0': billPlan == 'monthly', 'translate-x-8': billPlan == 'annually' }"></div>
        </button>
        <span class="text-base font-medium">Bill Annually</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>