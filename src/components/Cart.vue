<template>
  <div>
    <h1 class="container title">Your Cart</h1>
    <Product v-for="product in selectedProducts" :product="product" :cart="true"></Product>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import Product from './Product.vue'

export default {
  data () {
    return {
    }
  },

  computed: {
    ...mapState(['selectedProducts'])
  },

  components: {
    'Product': Product
  }
}
</script>

<style scoped>

</style>
