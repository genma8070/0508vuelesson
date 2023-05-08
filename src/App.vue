<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div><RouterLink to="/v-bind">v-bind</RouterLink></div>
    <div><RouterLink to="/a-aaaaaaaa">a-aaaaaaaa</RouterLink></div>
    <div><RouterLink to="/e-04">e-04</RouterLink></div>
    <div><RouterLink to="/props">props</RouterLink></div>

  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
