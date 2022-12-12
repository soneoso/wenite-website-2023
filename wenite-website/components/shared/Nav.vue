<template>
  <header class="sticky top-8 z-40 px-8">
    <nav
      class="container m-8 mx-auto border-[1px] rounded-full bg-white drop-shadow p-4 lg:flex lg:items-center lg:justify-between max-w-7xl flex-wrap">
      <div class="flex items-center justify-between">
        <div>
          <nuxt-link class="text-2xl pl-3 font-semibold lg:text-3xl"
            to="/">wenite.</nuxt-link>
        </div>
        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button x-cloak @click="isOpen = !isOpen" type="button"
            class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
            aria-label="toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
        class="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-white lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center rounded-b-3xl lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
        <ul class="flex flex-col lg:space-x-28 lg:flex-row">
          <div class="flex items-center flex-col justify-center space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            <li><nuxt-link class="navbtn" to="/features">Features</nuxt-link></li>
            <li><nuxt-link class="navbtn" to="/pricing">Pricing</nuxt-link></li>
            <li><nuxt-link class="navbtn" to="/about">About</nuxt-link></li>
            <div>
              <button class="navbtn peer px-5 py-2 ">Solutions</button>
              <div id="tooltips" class="hidden peer-hover:flex  hover:flex w-[200px]flex-row  bg-white drop-shadow-lg absolute rounded-full  ">
                <nuxt-link class="transition delay-50 duration-50 px-5 py-3 hover:bg-gray-200 rounded-full" to="/">Essential</nuxt-link>
                <nuxt-link class="transition delay-50 duration-50 px-5 py-3 hover:bg-gray-200 rounded-full" to="/">Premium</nuxt-link>
              </div>
            </div>
            <li><nuxt-link class="navbtn" to="/contact">Contact</nuxt-link></li>
          </div>
          <div class="flex flex-col justify-center lg:space-x-3 lg:flex-row">
            <li>
              <nuxt-link class="nav-btn-login" to="https://app.wenite.io/login">Login</nuxt-link>
            </li>
            <li>
              <nuxt-link class="nav-btn-start-free hidden xl:block" to="https://app.wenite.io/login">Get started
                free</nuxt-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>

<style scoped>
.router-link-exact-active {
  
}
</style>
