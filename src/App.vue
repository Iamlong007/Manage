<template>
  <div id="app" class="bg-white bg-tablet mock bg-no-repeat bg-contain">
    <div class="bg-tablet bg-right mock-2 bg-no-repeat bg-contain">
      <div class="pb-64">
        <!-- Nav -->
        <div class="w-11/12 mx-auto flex flex-auto justify-between py-6">
          <div class="w-4/12">
            <img src="./assets/images/logo.svg" alt="" class="mt-3" />
          </div>
          <div
            class="deskNav font-medium text-sm w-10/12 flex flex-auto justify-between"
          >
            <div class="mt-2">
              <a href="" class="md:px-3 hover:text-gray-500">Pricing</a>
              <a href="" class="md:px-3 hover:text-gray-500">Product</a>
              <a href="" class="md:px-3 hover:text-gray-500">About Us</a>
              <a href="" class="md:px-3 hover:text-gray-500">Careers</a>
              <a href="" class="md:px-3 hover:text-gray-500">Community</a>
            </div>
            <button
              class="bg-primary px-6 py-3 text-xs text-white font-medium rounded-full shadow-md hover:bg-orange-600"
            >
              Get Started
            </button>
          </div>
          <button class="lg:hidden" @click="nav = !nav">
            <img :src="toggle" alt="" />
          </button>
        </div>
        <!-- Header -->
        <div class="w-11/12 mx-auto lg:pt-8">
          <div class="flex flex-col lg:flex-row-reverse">
            <div
              class="mx-auto lg:w-5/12 lg:mr-0"
              data-aos="zoom-in"
              data-aos-duration="2500"
              data-aos-delay="500"
            >
              <img src="./assets/images/illustration-intro.svg" alt="" />
            </div>
            <div class="lg:w-4/12 lg:text-left">
              <h1 class="font-bold text-3xl lg:w-9/12 md:text-4xl lg:pt-10">
                Bring everyone together to build better products.
              </h1>
              <p
                class="font-regular text-gray-600 text-xs pt-3 lg:pt-6 w-11/12 mx-auto lg:ml-0 lg:text-left"
              >
                Manage makes it simple for software teams to plan day-to-day
                task while while keeping the larger team goals in view
              </p>
              <button
                class="bg-primary px-6 py-3 lg:mt-8 text-xs mx-auto mt-6 text-white font-medium rounded-full shadow-md hover:bg-orange-600"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <!-- Second Frame -->
        <div class="flex flex-col mt-20">
          <div>
            <h1
              class="font-bold text-2xl w-8/12 mx-auto lg:w-9/12 md:text-4xl lg:pt-10"
            >
              What's different about manage?
            </h1>
            <p
              class="font-regular text-gray-600 text-xs pt-3 lg:pt-6 w-11/12 mx-auto lg:ml-0 lg:text-left"
            >
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for digital products
              teams.
            </p>
          </div>
          <div class="mt-12">
            <div
              class="w-6/7 float-right flex flex-row justify-between bg-orange-100 rounded-l-3xl"
            >
              <div
                class="bg-primary w-1/5 rounded-3xl text-center text-white text-sm px-2 py-2"
              >
                01
              </div>
              <h1 class="font-bold text-sm w-9/12 pt-2 text-left">
                Track company-wide progress
              </h1>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
      menu: require("./assets/images/icon-hamburger.svg"),
      close: require("./assets/images/icon-close.svg"),
    };
  },
  computed: {
    toggle() {
      if (this.nav === false) {
        return this.menu;
      }
      return this.close;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Be Vietnam";
  color: #2c3e50;
  overflow: hidden;
}
/* .nav {
  height: 600px;
} */
.mock {
  background-position-y: -5rem;
  background-position-x: 4rem;
}
.mock-2 {
  background-position-y: 23rem;
  background-position-x: 13rem;
}
.border {
  border: 5px solid red;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
@media (max-width: 1023px) {
  .deskNav {
    display: none;
  }
}
@media (min-width: 1023px) {
  .mock {
    background-position-y: -20rem;
    background-position-x: 48rem;
  }
}
</style>
