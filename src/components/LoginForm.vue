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
import useLogin from '../composables/useLogin';

export default {
  setup(props, context) {
    const { error, login } = useLogin();
    // refs

    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit('login');
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
