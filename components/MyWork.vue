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
      class="mywork-grid__container grid md:grid-cols-3 gap-6 p-8 rounded-md bg-white/50"
    >
      <div v-for="work in mywork" :key="work.name">
        <!-- Card -->
        <div
          class="work-card w-full h-full bg-black/40 border rounded-md mx-auto overflow-hidden"
        >
          <!-- Card header -->
          <div
            class="mywork-card_header bg-white relative w-full h-[22vh] overflow-hidden"
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
                class="text-xl text-green-500 hover:bg-green-500 hover:text-white font-bold border-2 border-green-500 rounded-full px-4 py-2 transition-all duration-300 ease-in-out"
              >
                Visit Website
              </a>
            </div>
          </div>
          <!-- /Card header -->
          <!-- Card body -->
          <div class="work-card_body flex flex-col gap-2 p-4">
            <h3 class="text-2xl text-white font-bold drop-shadow-md">
              {{ work.name }}
            </h3>
            <p class="text-white drop-shadow-md">{{ work.description }}</p>
          </div>
          <!-- /Card body -->
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
    required: false,
    default: () => [
    {
        name: "Hi Voltage Electric",
        description:
          "An east coast electrical company specializing in industrial, commercial and construction electrical installation, repair and maintenance.",
        url: "https://hivolt.maverickbuild.com",
        img: "/public/Hi-Voltage.jpg",
        alt: "Hi Voltage Electric",
      },
      {
        name: "Hill Building Group",
        description:
          "Construction company based in DFW. They specialize in commercial construction, and have a 5 star rating on Google.",
        url: "https://www.hillbuildinggroup.com",
        img: "/Hill-building-group.jpg",
        alt: "Hill Building Group",
      },
      {
        name: "Secured Moving",
        description:
          "Moving company based in DFW with nearly 20 years of experience behind them. They cover both local and long distance moves, and have a 5 star rating on Google.",
        url: "https://www.securedmoving.com/",
        img: "/Secured-1.jpg",
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
      {
        name: "USMRC - Savings Calculator",
        description:
          "A custom savings calculator that I built for USMRC to show potential customers how much they could save by switching to a metal roof.",
        url: "https://usmetalroofingconsortium.com/savings-calculator/",
        img: "/Savings-calc.jpg",
        alt: "USMETALROOFINGCONSORTIUM.COM",
      },
      {
        name: "ProStar Builders",
        description:
          "A roofing company that specializes in high quality metal roofing with a combined 40 years of experience. Specializing in metal roofing of all types.",
        url: "https://prostarbuilders.com/",
        img: "/ProStar.jpg",
        alt: "ProStar Builders",
      },
    ],
  },
});
</script>
