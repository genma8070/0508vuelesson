<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="bg">
      <h1>App.vue</h1>
      <div class="routerArea">

        <RouterLink to="/v-bind">v-bind</RouterLink>

        <RouterLink to="/a-aaaaaaaa">a-aaaaaaaa</RouterLink>

        <RouterLink to="/e-04">e-04</RouterLink>

        <RouterLink to="/props">props</RouterLink>

        <RouterLink to="/emit">emit</RouterLink>

        <RouterLink to="/v-show">v-show</RouterLink>

        <RouterLink to="/modal">modal</RouterLink>
      </div>
      <div class="view">
        <RouterView />
      </div>

    </div>

  </header>
</template>

<style scoped>
h1{
  margin: 0;
  margin-bottom: 20px;
}
.view {
  
  margin: 20px;

  border: 2px black solid;
}

.bg {
  position: relative;
  text-align: center;
  height: 100vh;
  width: 100vw;
  background-color: gray;
}

.routerArea {
  align-items: center;
  background-color: white;
  height: 50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-around;
  border-top: 3px black solid;
  border-bottom: 3px black solid;
}
</style>
