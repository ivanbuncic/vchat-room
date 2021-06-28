<template>
  <div class="mx-auto w-full h-full container">
    <form>
      <textarea
        class="w-full max-w-full mb-2 p-3 box-border border-0 rounded-xl font-extralight bg-gray-100 text-green-800 text-2xl h-96"
        placeholder="Type a message and hit enter"
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
      ></textarea>
    </form>
    <p
      v-if="error"
      class="mt-5 p-3 border-red-600 border rounded-md text-red-500 text-sm text-center max-w-max mx-auto"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import useCollection from '../composables/useCollection';
import { timestamp } from '../firebase/config';

export default {
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection('messages');
    const message = ref('');

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = '';
      }
    };
    return { message, handleSubmit, error, addDoc };
  },
};
</script>

<style></style>
