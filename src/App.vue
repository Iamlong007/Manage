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
        <div class="mt-10 w-11/12 mx-auto">
          <div class="w-11/12 mx-auto">
            <h1
              class="font-bold text-2xl w-10/12 mx-auto lg:w-9/12 md:text-4xl lg:pt-10 lg:text-left lg:ml-0"
            >
              What they've said
            </h1>
          </div>
          <!-- <div class="mt-16 bg-gray-100 rounded w-5/6 mx-auto p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptate architecto repudiandae cupiditate quia a saepe aut quidem
            quisquam, blanditiis unde impedit sapiente, suscipit minima
            quibusdam voluptatum optio nam nisi?
          </div> -->

          <div class="w-12/12">
            <VueSlickCarousel v-bind="settings">
              <div>
                <div class="mx-auto mt-16">
                  <img
                    src="./assets/images/avatar-anisha.png"
                    alt=""
                    class="h-16 mx-auto"
                  />
                </div>
                <div class="mt-1 -mt-8 bg-gray-100 rounded w-12/12 mx-auto p-5">
                  <h2 class="pt-8 text-base text-gray-800 font-bold">
                    Anisha Li
                  </h2>
                  <p
                    class="font-medium text-gray-600 text-sm pt-2 text-center pb-4 leading-loose w-11/12 lg:w-9/12 lg:ml-32 lg:pl-0 pl-2"
                  >
                    "Manage has supercharged our team's workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated"
                  </p>
                </div>
              </div>
              <div>
                <div class="mx-auto mt-16">
                  <img
                    src="./assets/images/avatar-ali.png"
                    alt=""
                    class="h-16 mx-auto"
                  />
                </div>
                <div class="mt-1 -mt-8 bg-gray-100 rounded w-12/12 mx-auto p-5">
                  <h2 class="pt-8 text-base text-gray-800 font-bold">
                    Alli Bravo
                  </h2>
                  <p
                    class="font-medium text-gray-600 text-sm pt-2 text-center pb-4 leading-loose w-11/12 lg:w-9/12 lg:ml-32 lg:pl-0 pl-2"
                  >
                    "We have been able to cancel so many other subcriptions
                    since using Manage. There is no more cross-channel confusion
                    and everyone is much more focused"
                  </p>
                </div>
              </div>
              <div>
                <div class="mx-auto mt-16">
                  <img
                    src="./assets/images/avatar-richard.png"
                    alt=""
                    class="h-16 mx-auto"
                  />
                </div>
                <div class="mt-1 -mt-8 bg-gray-100 rounded w-12/12 mx-auto p-5">
                  <h2 class="pt-8 text-base text-gray-800 font-bold">
                    Richard Watts
                  </h2>
                  <p
                    class="font-medium text-gray-600 text-sm pt-2 text-center pb-4 leading-loose w-11/12 lg:w-9/12 lg:ml-32 lg:pl-0 pl-2"
                  >
                    "Manage allows us to provide structure and process. It keeps
                    us organized and focused. I can't stop reccomending them to
                    everyone I talk to!"
                  </p>
                </div>
              </div>
              <div>
                <div class="mx-auto mt-16">
                  <img
                    src="./assets/images/avatar-shanai.png"
                    alt=""
                    class="h-16 mx-auto"
                  />
                </div>
                <div class="mt-1 -mt-8 bg-gray-100 rounded w-12/12 mx-auto p-5">
                  <h2 class="pt-8 text-base text-gray-800 font-bold">
                    Shanai Gough
                  </h2>
                  <p
                    class="font-medium text-gray-600 text-sm pt-2 text-center pb-4 leading-loose w-11/12 lg:w-9/12 lg:ml-32 lg:pl-0 pl-2"
                  >
                    "Their software allows us to track, manage and collaborate
                    on our projects from anywhere. It keeps the whole team
                    in-sync without being intrusive"
                  </p>
                </div>
              </div>
            </VueSlickCarousel>
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
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
