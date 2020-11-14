<template>
<div class="checkout-box">
    <ul class="checkout-list">
        <transition-group name="fade">
            <li v-for="(product, index) in 
                products" :key="index" class="checkout-product">

                <router-link to="/product-details">
                    <img :src=" product.image" alt="" class="product-image" @click="addCurrentProduct(index)">
                </router-link>
                <span class="product-quantity">{{ product.quantity }} X</span>
                <router-link to="/product-details">

                    <h3 class=" product-name" @click="addCurrentProduct(index)">{{ product.name }}</h3>
                </router-link>

                <span class="product-price">{{ product.preis.toFixed(2) }}€</span>

                <button class="product-remove" @click="remove(index)">X</button>
            </li>
        </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
        <h3>Leere Einkauf Basket...</h3>
        <router-link to="./">
            <btn btnColor="btn  btn-info">Zurück zu den Produkten</btn>
        </router-link>
    </div>
    <div v-else>
        <h3 class="total">
            Gesammtpreis: {{ totalPrice() }}
        </h3>

        <btn btnColor="btn btn-small btn-info" @click="download('c:/tmp/hello.txt','This is the content of my file')"> Bestellen</btn>

    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
import Btn from './Btn';
export default {
    components: {
        Btn
    },
    computed: {
        ...mapGetters({
            // getProductsInCart: 'getProductsInCart',
            getProductsInCart: 'cartProducts',

        }),
        products() {
            return this.$store.getters.cartProducts
        },
        //next 
        total() {
            return this.$store.getters.cartTotal
        }
    },
    methods: {
        ...mapActions({
            removeProduct: 'removeProduct',
            currentProduct: 'currentProduct'
        }),
        hasProduct() {
            return this.getProductsInCart.length > 0;
        },
        totalPrice() {
            var totalPrice = this.getProductsInCart.reduce((current, next) =>
                current + next.preis, 0);
            return totalPrice.toFixed(2);
        },
        remove(index) {
            this.removeProduct(index);
        },
        addCurrentProduct(index) {
            this.currentProduct(this.getProductsInCart[index]);
        },
        writeXMLFile() {
            var fs = require('fs');
            var content = 'Hello content!'
            fs.writeFile('mynewfile3.txt', content, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        },
        download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }

    },
};
</script>

<style scoped>
.checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
}

.checkout-list {
    padding: 0;
}

.checkout-product {
    display: flex;
    flex-wrap: wrap;
    display: grid;
    display: inline-grid;
    grid-template-columns: 2fr 1fr 3fr 2fr 1fr;
    grid-template-columns: 2fr 1fr 3fr 2fr 1fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
    max-width: 100%;

}

.checkout-product * {
    place-self: center;
}

.product-image {
    grid-column: 1/2;
    width: 100%;
    box-sizing: border-box;
}

.product-quantity {
    box-sizing: border-box;
    font-weight: bold;
}

.product-name {
    box-sizing: border-box;
}

.product-price {
    font-size: 1.2em;
    font-weight: bold;
    box-sizing: border-box;
}

.product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: rgb(214, 18, 18);
    cursor: pointer;
}

.total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
}

.checkout-message {
    font-size: 1.5em;
}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s;
}

.fade-enter,
.fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
}
</style>
