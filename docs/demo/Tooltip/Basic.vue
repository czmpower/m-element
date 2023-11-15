<template>
  <Tooltip content="top content" placement="top" trigger="hover">
    <VButton plain>top</VButton>
  </Tooltip>
  &nbsp;
  <Tooltip content="left content" placement="left" trigger="hover">
    <VButton plain>left</VButton>
  </Tooltip>
  &nbsp;
  <Tooltip content="right content" placement="right" trigger="hover">
    <VButton plain>right</VButton>
  </Tooltip>
  &nbsp;
  <Tooltip content="bottom content" placement="bottom" trigger="hover">
    <VButton plain>bottom</VButton>
  </Tooltip>
  &nbsp;
  <Tooltip content="click content" placement="bottom" trigger="click">
    <VButton plain>click</VButton>
  </Tooltip>
</template>

<script setup lang="ts">
import Tooltip from '@/components/Tooltip/Tooltip.vue';
import VButton from '@/components/Button/VButton.vue';
</script>

<style scoped></style>
