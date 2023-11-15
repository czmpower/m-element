<!--
 * @author: czm
 * @since: 2023-11-01
-->
<template>
	<i class="vk-icon" :class="{ [`vk-icon--${type}`]: type }" v-bind="$attrs"><FontAwesomeIcon v-bind="$props" /></i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconProps } from './types';
defineOptions({
	inheritAttrs: false,
});
defineProps<IconProps>();
</script>

<style scoped></style>
