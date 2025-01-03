<script setup lang="ts">
const counterStore = useCounterStore();
const suffix = ref('');
</script>

<template>
  <div p-8 flex-y-16 items-center>
    <main>
      <RouterView />
    </main>
    <footer
      cursor-pointer
      select-none
      text-xs
      opacity-50
      @click="
        counterStore.increment();
        suffix += '!';
      "
    >
      [{{ counterStore.count === 5 ? "It's MyGO" : 'Default Layout' }}{{ suffix }}]
    </footer>
  </div>
</template>
