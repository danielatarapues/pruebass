<template>
  <div class="gradient-icon">
    <component :is="icon" class="icon-shape" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.gradient-icon {
  display: inline-flex;
  background: var(--gradient-icons);
  padding: 10px;
  border-radius: 12px;
}

.icon-shape {
  width: 24px;
  height: 24px;
  color: var(--border-color);
}
</style>
