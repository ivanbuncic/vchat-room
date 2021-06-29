<template>
  <form @submit.prevent="handleSubmit" class="max-w-screen-lg flex flex-col">
    <label for="displayname" class="block text-sm font-medium text-gray-700"
      >Display name</label
    >
    <div class="mt-1">
      <input
        type="text"
        name="displayname"
        required
        id="display_name"
        class="p-2 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Display name"
        v-model="displayName"
      />
    </div>
    <div class="mt-1">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input
        type="email"
        name="email"
        class="p-2 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Your best email"
        required
        v-model="email"
      />
    </div>
    <div class="mt-1">
      <label for="password" class="block text-sm font-medium text-gray-700"
        >Password</label
      >
      <input
        name="password"
        type="password"
        class="p-2 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Please do not use shity passwords"
        required
        v-model="password"
      />
    </div>
    <button
      class="mx-auto mt-3 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
    >
      Signup
    </button>
    <p
      v-if="error"
      class="mt-5 p-3 border-red-600 border rounded-md text-red-500 text-sm text-center max-w-max mx-auto"
    >
      {{ error }}
    </p>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    // refs
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit('signup');
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
