<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <NewChatForm/>
  </div>
</template>

<script>
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, (newValue) => {
      if (!newValue) {
        router.push({ name: 'Welcome' });
      }
    });

    return { user };
  }
};
</script>

<style>
.container {
  padding: 20px;
}
</style>
