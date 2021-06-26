<template>
  <div class="container w-screen grid mx-auto">
    <div
      class="mt-10 mx-auto border-4 border-gray-300 border-double rounded-2xl shadow-xl"
    >
      <h1 class="text-purple-700 text-6xl text-center p-5">Hello Kittens!</h1>
      <div class="mt-6 mb-4 p-5">
        <p class="p-2 text-center">I would be happy if you sign up</p>
        <SignupForm />
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
export default {
  components: { SignupForm },
};
</script>

<style></style>
