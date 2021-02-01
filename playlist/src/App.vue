<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
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
     
    }
  }
}
</script>

<style lang="scss">

</style>
