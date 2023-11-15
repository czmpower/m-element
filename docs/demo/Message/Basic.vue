<template>
  <VButton type="primary" @click="insterMessage">打开message</VButton>
  <VButton type="primary" @click="removeAllMessage">手动关闭所有</VButton>
</template>

<script setup>
import { createMessage, removeAll } from '@/components/Message/method.ts';
import VButton from '@/components/Button/VButton.vue';
const insterMessage = () => {
  const message = new Date().getTime().toString();
  createMessage({ message, showClose: true, duration: 3000 });
};

const removeAllMessage = () => {
  removeAll();
};
</script>

<style scoped></style>
