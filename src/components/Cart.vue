<template>
  <div>
    <h1 class="container title">Your Cart</h1>
    <product v-for="product in selectedProducts" :product="product" :cart="true"></product>
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
    'product': Product
  }
}
</script>

<style scoped>

</style>
