<template>
  <div id="app" class="bg-white bg-tablet mock bg-no-repeat bg-contain">
    <div class="w-11/12 mx-auto pb-64">
      <!-- Nav -->
      <div class="flex flex-auto justify-between py-6">
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
      <div class="flex flex-col lg:flex-row-reverse lg:pt-8">
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
            Manage makes it simple for software teams to plan day-to-day task
            while while keeping the larger team goals in view
          </p>
          <button
            class="bg-primary px-6 py-3 lg:mt-8 text-xs mx-auto mt-6 text-white font-medium rounded-full shadow-md hover:bg-orange-600"
          >
            Get Started
          </button>
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
