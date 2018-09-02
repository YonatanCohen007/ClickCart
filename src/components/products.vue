<template>
    <div>
        <div>
            <input type="text" v-model="pattern" placeholder="חפש לפי שם">
        </div>
        <div class="row">
            <div class="col-sm-2">
                <Product v-for="product in searched" :product="product" :cart="false"></Product>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import Product from './Product.vue';

    export default {

        data(){
          return{
            pattern: '',
          }  
        },
        components:{
            'Product': Product,
        },

        computed: {
            ...mapState(['products']),
            searched(){
                let regexp = new RegExp(this.pattern);
                return this.products.filter(prod => regexp.test(prod.name));
            }
        },

        methods: {
            ...mapActions(['loadProducts']),
        },
        
        mounted(){
            this.loadProducts();
        }
    }

</script>