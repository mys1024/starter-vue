<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <div>
    <AButton @click="open = !open">{{ t('test') }}</AButton>
    <AModal v-model:open="open" @ok="open = false">
      <div flex-x>
        <span>This is a test modal!</span>
        <i i-carbon-cube />
      </div>
    </AModal>
  </div>
</template>
