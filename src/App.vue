<template>
  <div
    id="app"
    :class="
      nav
        ? 'activeBackground'
        : 'bg-white bg-tablet mock bg-no-repeat bg-contain'
    "
  >
    <div
      :class="
        nav
          ? 'activeBackground'
          : 'bg-tablet bg-right mock-2 bg-no-repeat bg-contain'
      "
    >
      <div>
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
              class="bg-primary px-6 py-3 text-xs focus:outline-none text-white font-medium rounded-full shadow-md hover:bg-orange-600"
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
          <transition name="fade">
            <div
              v-if="nav"
              class="w-5/6 mt-20 z-20 absolute inset-0 md:w-2/6 mx-auto bg-white rounded-sm shadow-sm h-64 text-center font-medium text-gray-800 flex-row"
            >
              <p class="p-2 mt-4">Pricing</p>
              <p class="p-2">Product</p>
              <p class="p-2">About Us</p>
              <p class="p-2">Careers</p>
              <p class="p-2">Community</p>
            </div>
          </transition>
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
                class="bg-primary px-6 py-3 lg:mt-8 focus:outline-none text-xs mx-auto mt-6 text-white font-medium rounded-full shadow-md hover:bg-orange-600"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <!-- Second Frame -->
        <div
          class="flex flex-col lg:flex-row lg:justify-between lg:w-11/12 lg:mx-auto mt-20"
        >
          <div
            class="lg:w-6/12"
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <h1
              class="font-bold text-2xl w-8/12 mx-auto lg:w-9/12 md:text-4xl lg:pt-10 lg:text-left lg:ml-0"
            >
              What's different about manage?
            </h1>
            <p
              class="font-regular text-gray-600 text-xs pt-3 lg:pt-6 w-11/12 mx-auto lg:ml-0 lg:text-left lg:w-7/12"
            >
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for digital products
              teams.
            </p>
          </div>
          <div class="mt-12 lg:w-5/12">
            <div
              class="pb-10"
              data-aos="zoom-in"
              data-aos-duration="2500"
              data-aos-delay="500"
            >
              <div
                class="w-12/12 flex flex-row justify-between bg-orange-100 lg:bg-white rounded-l-3xl"
              >
                <div
                  class="bg-primary w-1/5 lg:w-1/6 rounded-3xl text-center text-white text-sm px-2 py-2"
                >
                  01
                </div>
                <h1 class="font-bold text-sm w-9/12 pt-2 text-left">
                  Track company-wide progress
                </h1>
              </div>

              <p
                class="font-medium text-gray-600 text-xs pt-2 text-left leading-loose w-11/12 lg:w-9/12 lg:ml-32 lg:pl-0 pl-2"
              >
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
            <div
              class="pb-10"
              data-aos="zoom-in"
              data-aos-duration="2500"
              data-aos-delay="500"
            >
              <div
                class="w-12/12 flex flex-row justify-between bg-orange-100 lg:bg-white rounded-l-3xl"
              >
                <div
                  class="bg-primary w-1/5 lg:w-1/6 rounded-3xl text-center text-white text-sm px-2 py-2"
                >
                  02
                </div>
                <h1 class="font-bold text-sm w-9/12 pt-2 text-left">
                  Advanced built-in reports
                </h1>
              </div>

              <p
                class="font-medium text-gray-600 text-xs pt-2 text-left leading-loose w-11/12 lg:w-9/12 lg:ml-32 lg:pl-0 pl-2"
              >
                Set internal delivery estimates and track progress towards
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
            <div
              class="pb-10"
              data-aos="zoom-in"
              data-aos-duration="2500"
              data-aos-delay="500"
            >
              <div
                class="w-12/12 flex flex-row justify-between bg-orange-100 lg:bg-white rounded-l-3xl"
              >
                <div
                  class="bg-primary w-1/5 lg:w-1/6 rounded-3xl text-center text-white text-sm px-2 py-2"
                >
                  03
                </div>
                <h1 class="font-bold text-sm w-9/12 pt-2 text-left">
                  Everything you need in one place
                </h1>
              </div>

              <p
                class="font-medium text-gray-600 text-xs pt-2 text-left leading-loose w-11/12 lg:w-9/12 lg:ml-32 lg:pl-0 pl-2"
              >
                Stop jumping from one service to another to communicate, store
                files, track tasks, and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
        <!-- Third Frame -->
        <div class="mt-10 w-11/12 mx-auto flex flex-col">
          <div class="w-12/12 mx-auto">
            <h1
              class="font-bold text-2xl w-12/12 mx-auto lg:w-12/12 md:text-4xl lg:text-center"
            >
              What they've said
            </h1>
          </div>
        </div>
        <div class="w-12/12">
          <VueSlickCarousel v-bind="settings">
            <div class="w-10/12 mx-auto lg:w-11/12 md:pb-12">
              <div class="mx-auto mt-16 lg:w-11/12 lg:ml-0">
                <img
                  src="./assets/images/avatar-anisha.png"
                  alt=""
                  class="h-16 mx-auto"
                />
              </div>
              <div
                class="mt-1 bg-gray-100 rounded w-12/12 lg:w-11/12 mx-auto ml-0 p-5"
              >
                <h2 class="pt-8 text-base text-gray-800 font-bold">
                  Anisha Li
                </h2>
                <p
                  class="font-medium text-gray-600 text-sm md:pb-10 lg:pb-4 pt-2 text-center pb-4 leading-loose w-12/12"
                >
                  "Manage has supercharged our team's workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated"
                </p>
              </div>
            </div>
            <div class="w-10/12 mx-auto lg:w-11/12">
              <div class="mx-auto mt-16 lg:w-11/12 lg:ml-0">
                <img
                  src="./assets/images/avatar-ali.png"
                  alt=""
                  class="h-16 mx-auto"
                />
              </div>
              <div
                class="mt-1 bg-gray-100 rounded w-12/12 lg:w-11/12 mx-auto lg:ml-0 p-5"
              >
                <h2 class="pt-8 text-base text-gray-800 font-bold">
                  Alli Bravo
                </h2>
                <p
                  class="font-medium text-gray-600 text-sm pt-2 text-center pb-4 leading-loose w-12/12"
                >
                  "We have been able to cancel so many other subcriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused"
                </p>
              </div>
            </div>
            <div class="w-10/12 mx-auto lg:w-11/12">
              <div class="mx-auto mt-16 lg:w-11/12 lg:ml-0">
                <img
                  src="./assets/images/avatar-richard.png"
                  alt=""
                  class="h-16 mx-auto"
                />
              </div>
              <div
                class="mt-1 bg-gray-100 rounded w-12/12 lg:w-11/12 mx-auto lg:ml-0 p-5"
              >
                <h2 class="pt-8 text-base text-gray-800 font-bold">
                  Richard Watts
                </h2>
                <p
                  class="font-medium text-gray-600 text-sm pt-2 text-center md:pb-10 lg:pb-4 pb-10 leading-loose w-12/12"
                >
                  "Manage allows us to provide structure and process. It keeps
                  us organized and focused. I can't stop reccomending them to
                  everyone I talk to!"
                </p>
              </div>
            </div>
            <div class="w-10/12 mx-auto lg:w-11/12">
              <div class="mx-auto mt-16 lg:w-11/12 lg:ml-0">
                <img
                  src="./assets/images/avatar-shanai.png"
                  alt=""
                  class="h-16 mx-auto"
                />
              </div>
              <div
                class="mt-1 bg-gray-100 rounded w-12/12 lg:w-11/12 mx-auto lg:ml-0 p-5"
              >
                <h2 class="pt-8 text-base text-gray-800 font-bold">
                  Shanai Gough
                </h2>
                <p
                  class="font-medium text-gray-600 text-sm pt-2 text-center pb-4 leading-loose w-12/12"
                >
                  "Their software allows us to track, manage and collaborate on
                  our projects from anywhere. It keeps the whole team in-sync
                  without being intrusive"
                </p>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="mt-12 mx-auto">
          <button
            class="bg-primary px-6 py-3 lg:mt-8 focus:outline-none text-xs mx-auto mt-6 text-white font-medium rounded-full shadow-md hover:bg-orange-600"
          >
            Get Started
          </button>
        </div>
        <!-- Orange Footer -->
        <div class="bg-primary pt-24 pb-32 mt-10 lg:mt-40 orange-footer">
          <div
            class="w-11/12 mx-auto flex flex-col lg:flex-row justify-between"
          >
            <div class="w-12/12 lg:w-6/12">
              <h1 class="text-white text-4xl lg:text-left font-bold">
                Simplify how your team works today.
              </h1>
            </div>
            <div>
              <button
                class="bg-white px-8 py-3 lg:mt-8 focus:outline-none text-xs mx-auto mt-6 text-orange-600 primary font-semibold rounded-full shadow-md hover:bg-gray-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <!-- Footer -->
        <div class="bg-gray-900 pt-10 pb-32">
          <div class="w-11/12 mx-auto lg:flex lg:flex-row-reverse">
            <div
              class="flex flex-row lg:flex lg:flex-col mx-auto w-12/12 lg:mt-20"
            >
              <div class="w-6/6 flex flex-row mx-auto">
                <div>
                  <input
                    type="text"
                    class="rounded-full px-5 focus:outline-none py-3 text-xs w-12/12"
                    placeholder="Updates in your inbox..."
                  />
                </div>
                <div class="ml-4">
                  <button
                    class="bg-primary px-8 py-3 focus:outline-none text-xs mx-auto text-white font-medium rounded-full shadow-md hover:bg-orange-600"
                  >
                    Go
                  </button>
                </div>
              </div>
              <div class="copy">
                <h2 class="pt-24 text-sm text-gray-600">
                  Copyright 2020. All Rights Reserved.
                </h2>
              </div>
            </div>
            <div
              class="flex flex-row justify-between text-left text-sm w-10/12 lg:w-3/12 lg:mt-20 mx-auto text-gray-200 mt-8"
            >
              <div class="flex flex-col">
                <a href="" class="pb-4">Home</a>
                <a href="" class="pb-4">Pricing</a>
                <a href="" class="pb-4">Product</a>
                <a href="" class="pb-4">About Us</a>
              </div>
              <div class="flex flex-col">
                <a href="" class="pb-4">Careers</a>
                <a href="" class="pb-4">Community</a>
                <a href="" class="pb-4">Privacy Policy</a>
              </div>
            </div>
            <div
              class="w-11/12 mx-auto mt-8 lg:w-2/12 lg:flex lg:flex-col-reverse"
            >
              <div class="flex flex-row justify-between lg:mt-24">
                <img
                  src="./assets/images/icon-facebook.svg"
                  alt=""
                  class="w-8"
                />
                <img
                  src="./assets/images/icon-youtube.svg"
                  alt=""
                  class="w-8"
                />
                <img
                  src="./assets/images/icon-twitter.svg"
                  alt=""
                  class="w-8"
                />
                <img
                  src="./assets/images/icon-pinterest.svg"
                  alt=""
                  class="w-8"
                />
                <img
                  src="./assets/images/icon-instagram.svg"
                  alt=""
                  class="w-8"
                />
              </div>
              <div class="mt-8">
                <img
                  src="./assets/images/logo-white.png"
                  alt=""
                  class="h-6 mx-auto"
                />
              </div>
            </div>
            <h2 class="pt-16 text-sm text-gray-600 lg:hidden">
              Copyright 2020. All Rights Reserved.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },

  data() {
    return {
      nav: false,
      menu: require("./assets/images/icon-hamburger.svg"),
      close: require("./assets/images/icon-close.svg"),
      settings: {
        dots: true,
        infinite: false,

        speed: 500,
        cssEase: "linear",
        slidesToShow: 2.9,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
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
.border2 {
  border: 5px solid white;
}
.activeBackground {
  background: linear-gradient(
    180deg,
    rgba(171, 171, 171, 0.47) 0%,
    #000000 100%
  );
}
.orange-footer {
  background-image: url("~@/assets/images/bg-simplify-section-desktop.svg");
  background-blend-mode: screen;
  background-size: 100%;
  background-repeat: no-repeat;
  /* background-position-x: -40rem;
  background-position-y: -2rem; */
}
.slide-fade.enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade.enter-active,
.slide-fade-leave-active {
  transition: all 0.5 ease-out;
}
.slide-fade.leave {
  transform: translate(-20px);
  opacity: 0;
}

.fade-enter {
  transform: translateY(-10rem);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-leave-to {
  transform: translateY(-10rem);
  opacity: 0;
}
@media (max-width: 1023px) {
  .deskNav,
  .copy {
    display: none;
  }
  .orange-footer {
    background-image: none;
  }
}
@media (min-width: 1023px) {
  .mock {
    background-position-y: -4rem;
    background-position-x: 53rem;
    background-size: 40%;
  }
  .mock-2 {
    background-position: left;
    background-position-y: 58rem;
    background-position-x: -17rem;
    background-size: 40%;
  }
}
</style>
