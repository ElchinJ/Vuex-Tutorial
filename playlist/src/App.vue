<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <test-component/>
  </div>
</template>

<script>
import ProductListTwo from './components/ProductListTwo.vue'
import ProductListOne from './components/ProductListOne.vue'
import TestComponent from './components/TestComponent.vue'

export default {
  components: { 
    ProductListOne, ProductListTwo,
    TestComponent 
    },

  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">

</style>
