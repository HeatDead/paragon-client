<script setup>
import { RouterLink, RouterView } from "vue-router";
import ParagonHeader from "./components/ParagonHeader.vue";
</script>

<template>
  <ParagonHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin: 2rem auto;
  height: 85%;
}
</style>
