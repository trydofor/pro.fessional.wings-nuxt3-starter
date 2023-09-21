<template>
  <h1 class="text-3xl font-bold underline">
    {{ appConfig.title }}
  </h1>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
</script>
<style scoped></style>
