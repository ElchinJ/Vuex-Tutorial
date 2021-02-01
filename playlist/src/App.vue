<template>
  <div id="app">
    <product-list-one/>
    <product-list-two/>
  </div>
</template>

<script>
import productListOne from './components/product-list-one.vue'
import ProductListTwo from './components/Product-list-two.vue'

export default {
  components: { productListOne, ProductListTwo },
  name: 'app',
  data () {
    return {
      products: [
        { name: 'BMW', price: 250},
        { name: 'Mercedez', price: 350},
        { name: 'Audi', price: 260},
        { name: 'Volvo', price: 200},
        ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
