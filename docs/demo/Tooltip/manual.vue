<template>
  <div>
    <Tooltip ref="tooltipRef" content="top content" placement="top" trigger="hover" manual>
      <div :style="{ width: '100px', height: '100px', backgroundColor: '#ccc' }"></div>
    </Tooltip>
  </div>
  <VButton plain @click="() => tooltipRef.show()">点击打开</VButton>
  &nbsp;
  <VButton plain @click="() => tooltipRef.hide()">点击关闭</VButton>
</template>

<script setup lang="ts">
import Tooltip from '@/components/Tooltip/Tooltip.vue';
import { TooltipInstance } from '@/components/Tooltip/types';
import VButton from '@/components/Button/VButton.vue';
import { ref } from 'vue';
const tooltipRef = ref<TooltipInstance>();
</script>

<style scoped></style>
