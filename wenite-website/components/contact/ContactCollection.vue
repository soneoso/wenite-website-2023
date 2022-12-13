<script setup></script>

<template>
  <div class="flex justify-center">
    <div
      class="effect w-3/5 flex flex-row flex-wrap justify-center space-x-8 pb-6"
    >
      <nuxt-link to="https://app.wenite.io/login">
        <div class="card border p-10 w-80 h-80 rounded-2xl shadow-2xl">
          <h1 class="text-3xl">Employees</h1>
          <div class="mt-4 mb-10">
            <p class="text-gray-600">
              Visit our Employee support page if your company is using our
              product or service
            </p>
          </div>
          <div class="flex pt-8 justify-end">
            <Icon name="mdi:arrow-right-thin" size="50" />
          </div>
        </div>
      </nuxt-link>

      <nuxt-link to="https://app.wenite.io/login">
        <div class="card border p-10 w-80 h-80 rounded-2xl shadow-2xl">
          <h1 class="text-3xl">Partners</h1>
          <div class="mt-4 mb-10">
            <p class="text-gray-600">
              Visit our Employee support page if your company is using our
              product or service
            </p>
          </div>
          <div class="flex pt-8 justify-end">
            <Icon name="mdi:arrow-right-thin" size="50" />
          </div>
        </div>
      </nuxt-link>

      <nuxt-link to="https://app.wenite.io/login" id="sales">
        <div
          class="card border p-10 w-80 h-80 rounded-2xl shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <h1 class="text-3xl text-white">Sales</h1>
          <div class="mt-4 mb-10">
            <p class="text-white">
              Visit our Employee support page if your company is using our
              product or service
            </p>
          </div>
          <div class="flex pt-8 justify-end text-white">
            <Icon name="mdi:arrow-right-thin" size="50" />
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style>
.card {
  transition: all 0.2s ease-in-out;
}
.effect:hover .card {
  filter: blur(3px);
}
.effect .card:hover {
  filter: blur(0);
}
</style>
