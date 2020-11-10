<template>
<div>
    <div v-if="loading" style="margin:auto;text-align:center;">
        <img src="https://i.imgur.com/JfPpwOA.gif" alt="" />
    </div>
    <div v-else>
        <ul class="listOfProducts">
            <li v-for="(product, index) in products" :key="index" class="product">
                <router-link to="/product-details">
                    <img :src="product.image" Alt="" class="product-image" @click="addCurrentProduct(product)">
                </router-link>
                <div class=" prodcut-name-price">
                    <!-- <h2 class="product-name"> {{ product.name }}</h2> -->
                    <!-- here comes the product router-->
                    <router-link to="/product-details">
                        <h2 class="product-name" @click="addCurrentProduct(product)">
                            {{ product.name }}
                        </h2>
                    </router-link>
                    <!-- end of product router -->
                    <div class="product-price">
                        <span>Preis: {{product.preis.toFixed(2)}}, </span>
                    </div>
                </div>
                <btn btnColor="btn btn-large btn-sucess" :myIcon="true" @click="addProductToCart2(product)">
                    In den WarenKorb </btn>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    // mapState
} from 'vuex'
import Btn from './Btn'

//  export 
export default {
    props: {
        products: JSON
    },
    data() {
        return {
            loading: false
        }
    },
    created() {
        // this.$store.dispatch('fetchProducts')
        this.loading = true;
        this.$store.dispatch('fetchProducts')
            .then(() => this.loading = false)

    },
    components: {
        Btn
    },
    computed: {

    },
    methods: {
        ...mapActions([
            'addProduct',
            'currentProduct',
            'addProductToCart1'
        ]),
        addProductToCart(product) {
            this.addProduct(product);
            console.log(product)
        },
        addProductToCart2(product) {
            this.addProductToCart1(product)
            console.log(product)
        },
        addCurrentProduct(product) {
            this.currentProduct(product);
            console.log("current Product");
            console.log(product);
        },

    }

}
</script>

<style scoped>
.listOfProducts {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}

.product {
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 2px;
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    max-width: 660px;
}

.product-name {
    font-size: 1.2em;
    font-weight: normal;
    padding: 6px;
    margin: auto;

}

.product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 3px;
}

.product-image {
    padding: 2px;
    margin: 12px;
    max-width: 390px;
    max-height: 230px;
}

.product-name-price {
    display: flex;
    justify-content: space-betwen;

}

.product-name:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>
