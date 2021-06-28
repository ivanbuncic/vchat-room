<template>
  <Navbar />
  <div class="container w-screen grid mx-auto">
    <div
      class="mt-10 mx-auto border-4 border-gray-400 border-double rounded-2xl shadow-xl md:w-5/12 w-96"
    >
      <h1 class="text-purple-700 text-3xl text-center p-5">
        Welcome to the Chatroom, {{ user.displayName }}!
      </h1>
      <div class="mt-3 p-5">
        <p class="p-2 text-center mb-10 text-xl">
          I would be happy if you start chating...
        </p>
        <ChatWindow />
        <NewChatForm />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NewChatForm from '../components/NewChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';
import getUser from '../composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' });
      }
    });

    return { user };
  },
  components: { Navbar, NewChatForm, ChatWindow },
};
</script>

<style></style>
