<!--
 * @author: czm
 * @since: 2023-11-12
-->
<template>
  <div
    class="vk-input"
    :class="{
      [`vk-input--${type}`]: type,
      [`vk-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus,
    }"
  >
    <template v-if="props.type !== 'textarea'">
      <div v-if="$slots.prepend" class="vk-input__prepend">
        <slot name="prepend" />
      </div>
      <div class="vk-input__wrapper">
        <span v-if="$slots.prefix" class="vk-input__prefix">
          <slot name="prefix" />
        </span>
        <input
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          ref="inputRef"
          :type="type"
          v-model="innerValue"
          v-on="events"
          class="vk-input__inner"
        />
        <span class="vk-input__suffix" @mousedown.prevent @click="keepFocus">
          <slot name="suffix" />
          <Icon icon="circle-xmark" v-if="showClear" class="vk-input__clear" @click="handleClear" />
          <Icon v-if="props.type === 'password'" :icon="passwordIcon" @click="togglePasswordVisable" class="vk-input__password"></Icon>
        </span>
      </div>
    </template>
    <template v-else>
      <textarea
        class="vk-textarea__wrapper"
        ref="inputRef"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        v-on="events"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import type { InputProps } from './types';
import Icon from '@/components/Icons/VIcon.vue';
import type { InputEmits } from './types';

defineOptions({ name: 'VInput', inheritAttrs: false });
const props = withDefaults(defineProps<InputProps>(), { type: 'text', autocomplete: 'off' });
const emits = defineEmits<InputEmits>();
const passwordVisible = ref(false);
const type = computed(() => (props.type === 'password' ? (passwordVisible.value ? 'text' : 'password') : props.type));
const passwordIcon = computed(() => (passwordVisible.value ? 'eye' : 'eye-slash'));
const isFocus = ref(false);
const inputRef = ref<HTMLInputElement>();

const innerValue = ref(props.modelValue || '');
watch(
  () => props.modelValue,
  (val) => {
    innerValue.value = val || '';
  }
);

const togglePasswordVisable = () => {
  passwordVisible.value = !passwordVisible.value;
};

const showClear = computed(() => props.clearable && innerValue.value && isFocus.value);

const handleInput = () => {
  emits('update:modelValue', innerValue.value);
  emits('input', innerValue.value);
};
const handleChange = () => {
  emits('update:modelValue', innerValue.value);
  emits('change', innerValue.value);
};
const handleFocus = (event: FocusEvent) => {
  isFocus.value = true;
  emits('focus', event);
};
const handleBlur = (event: FocusEvent) => {
  isFocus.value = false;
  emits('blur', event);
};
const events = {
  input: handleInput,
  change: handleChange,
  focus: handleFocus,
  blur: handleBlur,
};

const handleClear = () => {
  innerValue.value = '';
  emits('clear');
};

const keepFocus = () => {
  inputRef.value?.focus();
};

defineExpose({
  ref: inputRef,
});
</script>

<style scoped></style>
