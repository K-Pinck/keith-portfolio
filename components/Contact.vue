import ContactForm from './ContactForm.vue';
<template>
  <section class="contact p-6">
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
        exploring potential employment possibilities. Contact me through phone
        or email
        <span class="font-bold text-gray-300 underline underline-offset-4">
          or just fill out the form below.
        </span>
      </p>
    </div>
    <div class="contact-main">
      <div class="text-xl text-white sm:w-2/3 flex flex-col gap-2 pb-3">
        <a href="tel:8173139553" class="">
          Phone:
          <span class="text-green-500 font-thin italic underline underline-offset-4 decoration-0">(817)313-9553</span>
        </a>
        <a href="mailto:keith@emkay-design.com" class="">
          Email:
          <span class="text-green-500 font-thin italic underline underline-offset-4 decoration-0">keith@emkay-design.com</span>
        </a>
      </div>
      <div class="contact-form__wrap">
        <!-- Form -->
        <ContactForm />
        <!-- /form -->
      </div>
    </div>
  </section>
</template>
