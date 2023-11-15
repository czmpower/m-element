<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VButton from './components/Button/VButton.vue';
import type { ButtonExpose } from './components/Button/types';
import VIcon from './components/Icons/VIcon.vue';
import Tooltip from './components/Tooltip/Tooltip.vue';
import type { TooltipInstance } from './components/Tooltip/types';
import { createMessage } from './components/Message/method.ts';
const buttonRef = ref<ButtonExpose>();

const toolTipRef = ref<TooltipInstance>();
onMounted(() => {
  console.log('buttonRef::', buttonRef.value?.ref);
});
const insterMessage = () => {
  createMessage({ message: new Date().getTime().toString(), duration: 0, showClose: true });
};
</script>

<template>
  <VButton type="danger" ref="buttonRef"></VButton>
  <VButton type="info"></VButton>
  <VButton type="primary"></VButton>
  <VButton type="success"></VButton>
  <VButton type="waring"></VButton>
  <VButton type="info" size="small"></VButton>
  <VButton type="primary" @click="toolTipRef?.show()">打开Tooltip</VButton>
  <VButton type="primary" @click="toolTipRef?.hide()">关闭Tooltip</VButton><br />
  <VIcon icon="user-circle" type="danger"></VIcon>
  <div>
    <Tooltip content="123999" placement="right" trigger="hover" ref="toolTipRef" manual>
      <div :style="{ width: '100px', height: '100px', backgroundColor: '#ccc' }"></div>
    </Tooltip>
  </div>
  <VButton type="primary" @click="insterMessage">打开message</VButton><br />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
