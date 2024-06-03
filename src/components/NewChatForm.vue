<template>
  <form @submit.prevent="handleSubmit">
    <textarea
      placeholder="Type a message and hit enter to send it"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"    
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { serverTimestamp } from 'firebase/firestore';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';

export default {
  setup() {
    const { user } = getUser();
    const { addDocument, error } = useCollection('messages');

    const message = ref('');

    const handleSubmit = async () => {
      const chat = {
        name: user.value?.displayName, // using optional chaining to avoid errors if user is null!
        message: message.value,
        createdAt: serverTimestamp(),
      }

      await addDocument(chat); // persist chat message object to db
      if (!error.value) {
        message.value = "";
      }
    }
    
    return { message, handleSubmit, error }; 
  }
}
</script>

<style>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
  .error {
    color: red;
  }
</style>
