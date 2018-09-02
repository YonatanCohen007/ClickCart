<template>
  <div class="hello">
    <div class="jumbotron">
        <h1 class="display-4">{{product.name}}</h1>
        <p class="lead">
           <img :src="product.src"></img></p>
        <hr class="my-4">
        <p>price: {{product.price}}</p>
        <input v-show="!cart" type="number" v-model="amountOfProducts">
        <a v-show="cart" @click="addItem()" class="btn btn-primary btn-lg"  role="button">הוסף לעגלה +</a>
        <a v-show="!cart" class="btn btn-primary btn-lg"  role="button">הסר מעגלה -</a>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['product','cart'],
  data () {
    return {
      amountOfProducts: 0,
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    addItem() {
        let product = {
           "product": this.product,
           "amount": this.amountOfProducts,
        }
        this.addProduct(product);
    }
  }

}
</script>

<style>
</style>
