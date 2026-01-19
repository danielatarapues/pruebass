<template>
  <div class="gradient-icon">
    <component :is="icon" class="icon-shape" />
  </div>
</template>

<script setup lang="ts">
 const props = defineProps<{
  icon: object | string;
  size?: string;
}>();
</script>

<style scoped>
  .gradient-icon {
    display: inline-flex;
    background: var(--gradient-icons);
    padding: 10px;
    border-radius: var(--radius-sm);
  }

  .icon-shape {
    width: 24px;
    height: 24px;
    color: var(--border-base);
  }
</style>
