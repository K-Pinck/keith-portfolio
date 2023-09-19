<template>
  <section class="skills-main p-6">
    <div class="skills-content">
      <h1
        class="text-4xl sm:text-6xl text-center sm:text-left text-white font-bold pb-4"
      >
        Skills
      </h1>
      <!-- Flex container -->
      <div class="skills-content flex flex-col sm:flex-row items-stretch gap-4">
        <!-- col 1 -->
        <div class="col-1 sm:w-1/2 flex-1 border rounded-md">
          <!-- Col header -->
          <div
            class="col-header w-full bg-white/50 flex flex-col items-center p-4 rounded-t-md"
          >
            <img
              src="@/assets/code-icon.svg"
              class="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] bg-green-500 p-4 border rounded-full"
              alt="Code Icon"
            />
            <h3 class="text-2xl text-blue-950 font-bold">Development</h3>
          </div>
          <!-- /Col header -->
          <!-- Col main  -->
          <div class="col-main p-8 text-white rounded-b-md">
            <p class="pb-3">
              As a passionate developer, I thrive on turning ideas into
              functional and visually captivating digital experiences. While I
              relish the creative freedom that coding offers, I also understand
              the value of platforms like WordPress. I am preparing to take some
              courses on Node.js(I already use package managers daily, including
              npm), PHP, and React to expand my toolset
            </p>
            <h3 class="text-2xl font-bold">Languages</h3>
            <ul class="pl-2 pb-3 border-b">
              <li class="text-lg">- HTML</li>
              <li class="text-lg">- CSS</li>
              <li class="text-lg">- JavaScript</li>
              <li class="text-lg">- Vue.js</li>
              <li class="text-lg">- Nuxt.js</li>
              <li class="text-lg">- Basic Python experience</li>
            </ul>
            <h3 class="text-2xl font-bold pt-2">Wordpress</h3>
            <ul class="pl-2">
              <li class="text-lg">- Gutenberg theme</li>
              <li class="text-lg">- Divi theme / page builder</li>
              <li class="text-lg">- Beaver Builder / page builder</li>
              <li class="text-lg">
                - Oxygen Builder / plugin that works more like development
              </li>
              <li class="text-lg">
                - Various plugins for security, backups and adding custom code
              </li>
            </ul>
          </div>
          <!-- /Col main -->
        </div>
        <!-- /col 1 -->
        <!-- col 2 -->
        <div class="col-2 sm:w-1/2 flex-1 border rounded-md">
          <!-- Col header -->
          <div
            class="col-header w-full bg-white/50 flex flex-col items-center p-4 rounded-t-md"
          >
            <img
              src="@/assets/pen-tool-icon.svg"
              class="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] bg-green-500 p-4 border rounded-full"
              alt="Code Icon"
            />
            <h3 class="text-2xl text-blue-950 font-bold">Design</h3>
          </div>
          <!-- /Col header -->
          <!-- Col main  -->
          <div class="col-main p-8 text-white rounded-b-md">
            <p class="pb-3">
              While my primary focus is on coding, I've had the privilege of
              designing numerous websites, and I take pride in delivering
              visually captivating and user-friendly experiences. My journey as
              a developer that designs has afforded me the ability to bridge the
              gap between creative aesthetics and functional excellence.
            </p>
            <h3 class="text-2xl font-bold">Tools</h3>
            <ul class="pl-2 pb-3">
              <li class="text-lg">- PhotoShop</li>
              <li class="text-lg">- Illustrator</li>
              <li class="text-lg">- InDesign</li>
              <li class="text-lg">- XD</li>
              <li class="text-lg">- Affinity Photo</li>
              <li class="text-lg">- Affinity Designer</li>
              <li class="text-lg">- Affinity Publisher</li>
              <li class="text-lg">- Figma</li>
            </ul>
          </div>
          <!-- /Col main -->
        </div>
        <!-- /col 2 -->
      </div>
      <!-- /Flex container -->
    </div>
  </section>
</template>
