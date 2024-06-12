<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

export default {
  setup(context) {
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

    return { displayName, email, password, handleSubmit };
  }
}
</script>