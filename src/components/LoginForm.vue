<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';

export default {
  setup(context) {
    // refs
    const email = ref('');
    const password = ref('');
    
    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit('login'); // emit login event upon successful log in 
      }
    };

    return { email, password, handleSubmit, error };
  }
}
</script> 