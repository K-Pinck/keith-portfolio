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
      class="mywork-grid__container grid sm:grid-cols-3 gap-6 sm:gap-4 py-8 rounded-md bg-white/20"
    >
      <div v-for="work in mywork" :key="work.name">
        <!-- Card -->
        <div class="work-card w-4/5 border rounded-md mx-auto">
          <div class="mywork-card_header w-full h-42 border overflow-hidden">
            <img
              :src="work.img"
              :alt="work.alt"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="work-card_body flex flex-col gap-2 p-3">
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
        name: "Project 1",
        description:
          "This is a description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel ex aliquet facilisis. Fusce ut justo eget.",
        url: "https://www.google.com",
        img: "/code-icon.svg",
        alt: "Project 1",
      },
      {
        name: "Project 2",
        description:
          "This is a description of project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel ex aliquet facilisis. Fusce ut justo eget.",
        url: "https://www.google.com",
        img: "/code-icon.svg",
        alt: "Project 2",
      },
      {
        name: "Project 3",
        description:
          "This is a description of project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel ex aliquet facilisis. Fusce ut justo eget.",
        url: "https://www.google.com",
        img: "/code-icon.svg",
        alt: "Project 3",
      },
    ],
  },
});
</script>
