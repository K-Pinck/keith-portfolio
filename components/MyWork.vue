<template>
  <section class="mywork-main p-6">
    <div class="mywork-header">
      <h1
        class="text-4xl sm:text-6xl text-center sm:text-left text-white font-bold pb-4"
      >
        My Work
      </h1>
      <p class="pb-3 text-white">
        Here is a small sample of my work, showcasing the diverse range of
        projects I've had the pleasure of working on. From beautifully crafted
        WordPress websites to dynamic Vue/Nuxt.js applications, this portfolio
        reflects the breadth of my expertise. Each project encapsulates a unique
        challenge and an opportunity to push creative boundaries.
      </p>
    </div>
    <div
      class="mywork-grid__container grid md:grid-cols-3 gap-6 sm:gap-4 py-8 rounded-md bg-white/20"
    >
      <div v-for="work in mywork" :key="work.name">
        <!-- Card -->
        <div class="work-card w-4/5 border rounded-md mx-auto overflow-hidden">
          <div
            class="mywork-card_header relative w-full h-[28vh] border-b overflow-hidden"
          >
            <img
              :src="work.img"
              :alt="work.alt"
              class="object-cover w-full h-full z-0 rounded-t-md"
            />
            <div
              class="hover:bg-black/90 w-full h-full flex justify-center items-center absolute top-0 left-0 z-10 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out rounded-t-md"
            >
              <a
                :href="work.url"
                target="_blank"
                class="text-xl text-green-500 hover:bg-green-500 hover:text-white font-bold border border-green-500 rounded-full px-4 py-2 transition-all duration-300 ease-in-out"
              >
                Visit Website
              </a>
            </div>
          </div>
          <div class="work-card_body h-52 flex flex-col gap-2 p-3">
            <h3 class="text-2xl text-white font-bold drop-shadow-md">
              {{ work.name }}
            </h3>
            <p class="text-white drop-shadow-md">{{ work.description }}</p>
          </div>
        </div>
        <!-- /Card -->
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  mywork: {
    type: Array,
    required: true,
    default: () => [
      {
        name: "Secured Moving",
        description:
          "Moving company based in DFW with nearly 20 years of experience behind them. They cover both local and long distance moves, and have a 5 star rating on Google.",
        url: "https://www.securedmoving.com/",
        img: "/SecuredMoving.jpg",
        alt: "Secured Moving",
      },
      {
        name: "Blue Star Surveying",
        description:
          "Local surveying company based out of Cleburne, TX. They offer a wide range of services, including boundary surveys, elevation certificates, and more.",
        url: "https://bluestarsurveying.com/",
        img: "/BlueStar.jpg",
        alt: "Blue Star Surveying",
      },
      {
        name: "USMRC",
        description:
          "The USMRC at it’s core is a group of elite metal roofing companies who use their combined buying power to purchase the best products available at the lowest possible prices through bulk buying.",
        url: "https://usmetalroofingconsortium.com/",
        img: "/USMRC.jpg",
        alt: "USMETALROOFINGCONSORTIUM.COM",
      },
    ],
  },
});
</script>
