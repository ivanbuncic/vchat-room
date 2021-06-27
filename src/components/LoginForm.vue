<template>
  <form @submit.prevent="handleSubmit" class="max-w-screen-lg flex flex-col">
    <div class="mt-1">
      <label for="displayname" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input
        type="text"
        name="email"
        id="email"
        class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Your email used during signup"
        required
        v-model="email"
      />
    </div>
    <div class="mt-1">
      <label for="displayname" class="block text-sm font-medium text-gray-700"
        >Password</label
      >
      <input
        type="password"
        class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Your wonderful password you chose"
        required
        v-model="password"
      />
    </div>
    <button
      class="mx-auto mt-3 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Login
    </button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // refs

    const email = ref('');
    const password = ref('');

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style></style>
