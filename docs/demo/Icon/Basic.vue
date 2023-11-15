<script setup>
    import Icon from '@/components/Icons/VIcon.vue'
</script>
<template>
    <Icon :style="{marginRight:'20px'}" icon="fa-city" color="#409eff" />
    <Icon :style="{marginRight:'20px'}" icon="spinner" spin color="#ccc"  />
    <Icon :style="{marginRight:'20px'}"  icon="user" type="primary"  />
    <Icon :style="{marginRight:'20px'}"  icon="user" type="success"  />
    <Icon :style="{marginRight:'20px'}"  icon="user" type="warning"  />
    <Icon :style="{marginRight:'20px'}"  icon="user" type="danger" />
</template>
