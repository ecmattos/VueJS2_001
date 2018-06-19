<template>
  <div id="app" class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Produtos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeComponent from './components/home/HomeComponent'
  import ProductComponent from './components/products/ProductComponent'

  export default {
    name: 'app',
    components: {
      HomeComponent,
      ProductComponent
    }
  }
</script>

<style>
</style>
