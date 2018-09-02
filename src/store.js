import Vue from 'vue.';
import Vuex from 'vuex.';

Vue.use(Vuex);

export default new Vuex.store({

    state: {
        products: [],
        selectedProducts: []
    },

    mutations: {
        loadProducts(state, val) {
            state.products = val;
        },

        addProduct(state, val) {
            state.selectedProducts.push(val);
        }
    },

    actions: {
        loadProducts({commit, state}) {
            axios.get("../Products.json").then((response) => {
                commit("loadProducts", response.data);
                alertify.susees("הנתונים נטענו בהצלחה");
            }).catch((error) => {
                if (error) {
                    alertify.error("שגיאה בטעינת נתונים...");
                }
            });
        },

        addProduct({commit, state}, product) {
            commit("addProducts", product);
        }
    }
})