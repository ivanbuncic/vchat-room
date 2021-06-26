<template>
  <form>
    <label for="displayname" class="block text-sm font-medium text-gray-700"
      >Display name</label
    >
    <div class="mt-1">
      <input
        type="text"
        name="displayname"
        required
        id="display_name"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Display name"
        v-model="displayName"
      />
    </div>
    <div class="mt-1">
      <label for="displayname" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input
        type="text"
        name="email"
        id="email"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Your best email"
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
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Please do not use shity passwords"
        required
        v-model="password"
      />
    </div>
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Sign up
    </button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  setup() {
    // refs
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
  },
};
</script>

<style></style>
