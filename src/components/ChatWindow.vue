<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-else-if="!documents">Loading...</div>
    <div v-else class="messages">
      <div v-for="doc in documents" :key="doc.id" class="single">
        <span class="created-at">{{ formatDate(doc.createdAt) }}</span>
        <span class="name"> {{ doc.name }}</span> <!-- Add an extra space before the name -->
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import { format } from 'date-fns';

export default {
  setup() {
    const { error, documents } = getCollection('messages');

    const formatDate = (timestamp) => {
      if (!timestamp) return '';
      return format(new Date(timestamp.seconds * 1000), 'PPpp');
    };

    return { error, documents, formatDate };
  }
}
</script>

<style scoped>
.chat-window {
  padding: 20px;
}
.messages {
  display: flex;
  flex-direction: column;
}
.single {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.created-at {
  font-size: 0.8em;
  color: gray;
}
.name {
  font-weight: bold;
  margin-left: 5px;
}
.message {
  margin-left: 10px;
}
</style>
