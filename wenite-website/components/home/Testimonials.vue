<script>
export default {
  data() {
    return {
      index: 0,
      testimonials: [
        {
          name: 'Elke Verstraeten',
          message:
            'We work with Wenite because it is the only solution that offered clear benefits for the organizations, the HR team and the employees.',
        },
        {
          name: 'Jonas Vanderwaele',
          message:
            'Wenite offers a complete package with benefits for the HR team but more important for employees.',
        },
        {
          name: 'Tom Janssen',
          message: "It's data backed!",
        },
      ],
    };
  },
  methods: {
    changeSlide(i) {
      this.index = this.index + i;
      //   console.log(this.index);
      if (this.index === this.testimonials.length) {
        this.index = 0;
      }
      if (this.index < 0) {
        this.index = this.testimonials.length - 1;
      }
      //   console.log(this.index);
      this.showName(this.index);
      this.showMessage(this.index);
    },
    showName(i) {
      return this.testimonials[i].name;
    },
    showMessage(i) {
      return this.testimonials[i].message;
    },
    showSlide(i) {
      //   console.log(i);
      this.index = i;
    },
  },
};
</script>

<template>
  <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
    <div
      class="w-full bg-white border-gray-200 px-5 py-16 md:py-24 text-gray-800"
    >
      <div class="w-full max-w-6xl mx-auto">
        <div class="text-center max-w-xl mx-auto">
          <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
            What people <br />are saying.
          </h1>
          <h3 class="text-xl mb-5 font-light"></h3>
          <div class="text-center mb-10">
            <span
              class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"
            ></span>
            <span
              class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"
            ></span>
            <span
              class="inline-block w-40 h-1 rounded-full bg-indigo-500"
            ></span>
            <span
              class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"
            ></span>
            <span
              class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"
            ></span>
          </div>
        </div>

        <div>
          <div
            class="w-96 h-64 mx-auto rounded-full bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
          >
            <div class="p-8">
              <div class="w-full flex mb-4 items-center">
                <div
                  class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                >
                  <img src="https://i.pravatar.cc/100?img=1" alt="" />
                </div>
                <div class="flex-grow pl-3">
                  <h6 class="font-bold text-sm uppercase text-gray-600">
                    {{ showName(index) }}
                  </h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span
                    class="text-lg leading-none italic font-bold text-gray-400 mr-1"
                    >"</span
                  >{{ showMessage(index)
                  }}<span
                    class="text-lg leading-none italic font-bold text-gray-400 ml-1"
                    >"</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="flex flex-row">
              <p
                @click="changeSlide(-1)"
                class="font-bold hover:text-gray-500 mr-16"
              >
                Previous
              </p>
              <div v-for="(item, idx) in testimonials" :key="idx">
                <span
                  @click="showSlide(idx)"
                  class="dot mx-2"
                  :class="{ dotActive: idx === index }"
                ></span>
              </div>
              <p
                @click="changeSlide(1)"
                class="font-bold hover:text-gray-500 ml-16"
              >
                Next
              </p>
            </div>
          </div>
        </div>

        <!-- <div class="-mx-3 md:flex items-start">
          <div class="px-3 md:w-1/3">
            <div
              class="w-full mx-auto rounded-full bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
            >
              <div class="p-8">
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">
                      Elke Verstraeten
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span
                      class="text-lg leading-none italic font-bold text-gray-400 mr-1"
                      >"</span
                    >We work with Wenite because it is the only solultion that
                    offered clear benefits ofr the organizations, the HR team
                    and the employees.<span
                      class="text-lg leading-none italic font-bold text-gray-400 ml-1"
                      >"</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full mx-auto rounded-full bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
            >
              <div class="p-8">
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">
                      Elke Verstraeten
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span
                      class="text-lg leading-none italic font-bold text-gray-400 mr-1"
                      >"</span
                    >We work with Wenite because it is the only solultion that
                    offered clear benefits ofr the organizations, the HR team
                    and the employees<span
                      class="text-lg leading-none italic font-bold text-gray-400 ml-1"
                      >"</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-3 md:w-1/3">
            <div
              class="w-full mx-auto rounded-full bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
            >
              <div class="p-8">
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">
                      Elke Verstraeten
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span
                      class="text-lg leading-none italic font-bold text-gray-400 mr-1"
                      >"</span
                    >We work with Wenite because it is the only solultion that
                    offered clear benefits ofr the organizations, the HR team
                    and the employees.<span
                      class="text-lg leading-none italic font-bold text-gray-400 ml-1"
                      >"</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full mx-auto rounded-full bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
            >
              <div class="p-8">
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">
                      Elke Verstraeten
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span
                      class="text-lg leading-none italic font-bold text-gray-400 mr-1"
                      >"</span
                    >We work with Wenite because it is the only solultion that
                    offered clear benefits ofr the organizations, the HR team
                    and the employees<span
                      class="text-lg leading-none italic font-bold text-gray-400 ml-1"
                      >"</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-3 md:w-1/3">
            <div
              class="w-full mx-auto rounded-full bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
            >
              <div class="p-8">
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">
                      Elke Verstraeten
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span
                      class="text-lg leading-none italic font-bold text-gray-400 mr-1"
                      >"</span
                    >We work with Wenite because it is the only solultion that
                    offered clear benefits ofr the organizations, the HR team
                    and the employees.<span
                      class="text-lg leading-none italic font-bold text-gray-400 ml-1"
                      >"</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full mx-auto rounded-full bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
            >
              <div class="p-8">
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">
                      Elke Verstraeten
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span
                      class="text-lg leading-none italic font-bold text-gray-400 mr-1"
                      >"</span
                    >We work with Wenite because it is the only solultion that
                    offered clear benefits ofr the organizations, the HR team
                    and the employees<span
                      class="text-lg leading-none italic font-bold text-gray-400 ml-1"
                      >"</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: lightgray;
  display: inline-block;
  bottom: 8px;
}
.dot:hover {
  background-color: #717171;
}
.dotActive {
  background-color: black;
}
</style>
