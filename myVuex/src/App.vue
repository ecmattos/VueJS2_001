<template>
  <div id="app">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'tasks' }">Tasks</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
