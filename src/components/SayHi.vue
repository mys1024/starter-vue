<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <div>
    <AButton size="small" @click="open = !open">Hello</AButton>
    <AModal v-model:open="open" @ok="open = false">
      <div flex-x>
        <span>{{ t('hi') }}</span>
        <i i-carbon:face-activated />
      </div>
    </AModal>
  </div>
</template>
