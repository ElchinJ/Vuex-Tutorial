<template>
  <div id="app">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListTwo from './components/ProductListTwo.vue'
import ProductListOne from './components/ProductListOne.vue'


export default {
  components: { 
    ProductListOne, ProductListTwo 
    },

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

</style>
