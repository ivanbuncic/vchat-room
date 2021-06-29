<template>
  <div>
    <p
      v-if="error"
      class="mt-5 p-3 border-red-600 border rounded-md text-red-500 text-sm text-center max-w-max mx-auto"
    >
      {{ error }}
    </p>
    <div
      ref="messages"
      class="p-3 w-full bg-red-50 rounded-lg mb-3 shadow-lg overflow-y-scroll max-h-96"
      v-if="formattedDocuments"
    >
      <div
        class="rounded-lg mb-5 border border-gray-400 p-3"
        v-for="doc in formattedDocuments"
        :key="doc.id"
      >
        <span class="p-1 text-xs">{{ doc.createdAt }}</span
        ><br />
        <span class="p-1 font-semibold text-lg">{{ doc.name }} :</span>
        <span class="p-1 font-thin text-xl">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection';
import { computed, ref, onUpdated } from 'vue';
import { formatDistanceToNow } from 'date-fns';

export default {
  setup() {
    const { error, documents } = getCollection('messages');
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    // Auto scroll because who doesn't hate when new messages are invisible
    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages };
  },
};
</script>

<style></style>
