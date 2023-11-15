<!--
 * @author: czm
 * @since: 2023-10-31
-->
<template>
  <button 
    class="vk-button"
    :class="{
      [`vk-button--${size}`]:size,
      [`vk-button--${type}`]:type,
      'is-plain':plain,
      'is-round':round,
      'is-circle':circle,
      'is-disabled':disabled
    }"
    :disabled="disabled"
    ref="_ref"
  >
  <Icon icon="spinner" spin v-if="props.loading" />
  <Icon :icon="props.icon" v-if="props.icon" />
    <span>
      <slot>按钮</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {ButtonProps} from "./types"
import Icon from '../Icons/VIcon.vue'
defineOptions({
  name:"VButton"
})
const props = withDefaults(defineProps<ButtonProps>(), {}) 
const _ref = ref<HTMLButtonElement|null>()
defineExpose({
  ref:_ref
})

</script>
 
<style scoped></style>
