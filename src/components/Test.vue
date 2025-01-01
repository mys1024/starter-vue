<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <div>
    <AButton @click="open = !open">{{ t('test') }}</AButton>
    <AModal v-model:open="open" @ok="open = false">This is a test modal!</AModal>
  </div>
</template>
