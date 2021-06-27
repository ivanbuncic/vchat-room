<template>
  <div class="container w-screen grid mx-auto">
    <div
      class="mt-10 mx-auto border-4 border-gray-400 border-double rounded-2xl shadow-xl w-5/12"
    >
      <h1 class="text-purple-700 text-3xl text-center p-5">Hello Kittens!</h1>
      <div v-if="showLogin" class="mt-3 p-5">
        <p class="p-2 text-center mb-10 text-xl">
          I would be happy if you login
        </p>
        <p class="p-2 text-center mb-10 text-lg">
          You don't have an account?
          <span
            class="cursor-pointer font-semibold underline"
            @click="showLogin = false"
            >Signup then!</span
          >
        </p>

        <LoginForm @login="showChatroom" />
      </div>
      <div v-else class="mt-3 p-5">
        <p class="p-2 text-center mb-10 text-xl">
          I would be happy if you signup!
        </p>
        <p class="p-2 text-center mb-10 text-lg">
          Already have an account?
          <span
            class="cursor-pointer font-semibold underline"
            @click="showLogin = true"
            >Login then!</span
          >
        </p>
        <SignupForm @signup="showChatroom" />
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const showChatroom = () => {
      router.push({ name: 'Chatroom' });
    };

    return { showLogin, showChatroom };
  },
};
</script>

<style></style>
