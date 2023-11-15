<!--
 * @author: czm
 * @since: 2023-11-08
-->
<template>
  <Transition :name="transitionName" @after-leave="destroyComponent">
    <div
      class="vk-message"
      v-show="visible"
      :style="cssStyle"
      :class="{
        [`vk-message--${type}`]: type,
        'is-close': showClose,
      }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="vk-message__content">
        <slot>
          {{ props.message }}
        </slot>
      </div>
      <div class="vk-message__close" v-if="showClose">
        <Icon @click.stop="destory" icon="xmark"></Icon>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Icon from '@/components/Icons/VIcon.vue';
import { computed, onMounted, ref, unref, watch } from 'vue';
import type { MessageProps } from './type.ts';
import { getMessageTop } from './method';
import useEventListener from '@/hooks/useEventListener';
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  transitionName: 'fade-up',
  message: '测试',
});
const visible = ref(true);

const topOffset = computed(() => {
  return getMessageTop(props.id);
});

const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex + props.id,
}));

//删除节点
const destory = () => {
  visible.value = false;
};

let timer: any;
function startTimer() {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      destory();
    }, props.duration);
  }
}

const clearTimer = () => {
  clearTimeout(timer);
};

function destroyComponent() {
  props.onDestory();
}

onMounted(() => {
  startTimer();
});

useEventListener(document, 'keydown', (e: Event) => {
  const event = e as KeyboardEvent;
  if (event.code === 'Escape') {
    visible.value = false;
  }
});
</script>

<style scoped></style>
