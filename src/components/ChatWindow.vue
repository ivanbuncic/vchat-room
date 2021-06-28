<template>
  <div class="w-full h-full bg-red-50 rounded-lg mb-3 shadow-lg">
    <p
      v-if="error"
      class="mt-5 p-3 border-red-600 border rounded-md text-red-500 text-sm text-center max-w-max mx-auto"
    >
      {{ error }}
    </p>
    <div class="p-3" v-if="documents">
      <div
        class="rounded-lg mb-5 border border-gray-400 p-3"
        v-for="doc in documents"
        :key="doc.id"
      >
        <span class="p-1 text-xs">{{ doc.createdAt.toDate() }}</span
        ><br />
        <span class="p-1 font-semibold text-lg">{{ doc.name }} :</span>
        <span class="p-1 font-thin text-xl">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection';
export default {
  setup() {
    const { error, documents } = getCollection('messages');
    return { error, documents };
  },
};
</script>

<style></style>
