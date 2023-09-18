
import ContactForm from './ContactForm.vue';
<template>
  <section class="contact p-6 border">
    <h1
      class="text-4xl sm:text-5xl text-white text-center sm:text-left font-bold"
    >
      Contact
    </h1>
    <div class="contact-header mb-3 border-b">
      <p class="p-3 text-white">
        Thank you for considering me for your web development needs or potential
        employment opportunities. Your interest in collaborating with me is
        highly valued. Whether you're seeking a skilled web developer to bring
        your project to life or exploring the possibility of working together,
        I'm eager to connect. Please don't hesitate to reach out, and let's
        discuss how I can contribute to your goals and projects. Your message is
        the first step towards building a successful digital presence or
        exploring potential employment possibilities.
      </p>
    </div>
    <div class="contact-main flex flex-col md:flex-row gap-3 border">
      <div class="col-1 sm:w-1/3 p-3 ">
        <h3 class="text-2xl text-white font-bold">Contact Info</h3>
        <ul class="pl-2 text-white">
          <li class="text-lg"><a href="tel:8173139553" >- Phone: <span class="text-green-400">(817)313-9553</span></a></li>
          <li class="text-lg"><a href="mailto:keith@emkay-design.com">- Email: <span class="text-green-400">keith@emkay-design.com</span></a></li>
          </ul>
      </div>
      <div class="col-2 w-2/3 p-3 border">
        <!-- Form -->
        <ContactForm />
        <!-- /form -->
      </div>
    </div>
  </section>
</template>
