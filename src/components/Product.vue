<template>
<div class="product-box">
    <div class="product-image">
        <img :src="currentProduct.image" alt="" id="product-image">
        <!--   <stars :rate="rated(currentProduct.stars)" /> -->
        <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews">

        </stars>
    </div>
    <div class="product-info">
        <h2 class="product-title">{{ currentProduct.name }}</h2>
        <span class="product-price">{{ currentProduct.preis.toFixed(2) }}€</span>
        <btn btnColor="btn btn-large btn-sucess" :myIcon="true" @click="addProductToCart(currentProduct)">
            Jetzt kaufen
        </btn>
        <btn btnColor="btn btn-large btn-info" @click="openModal()">
            Detaillierte Beschreibung
        </btn>
    </div>
    <modal>
        {{ currentProduct.details }}
    </modal>
</div>
</template>

<script>
import Btn from './Btn'
import Stars from './Stars'
import Modal from './Modal'
import {

    mapGetters,
    mapActions

} from 'vuex';
export default {
    props: {
        product: JSON
    },
    components: {
        Btn,
        Stars,
        Modal
    },
    computed: {
        ...mapGetters({
            currentProduct: 'getCurrentProduct',
             totalCartItem: 'totalCartItem'
        })
    },
    methods: {
        ...mapActions([
            'addProduct',
            'showOrHideModal',
            'addProductToCart1'
        ]),
        addProductToCart(product) {
            this.addProductToCart1(product);
        },
        openModal() {
            this.showOrHideModal();
        },
        rated(rate) {
            return `${rate * 20}%`;
        },
    }

}
</script>

<style scoped>
.product-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    align-items: center;

}

#product-image {
    max-width: 600px;
    max-height: 760px;

}

.product-image {
    width: 400px;
    justify-content: center;
    align-self: auto;
}

.product-info {
    width: 400px;
    align-self: flex-start;
}

.product-title {
    font-weight: normal;
}

.product-price {
    font-size: 2em;
    font-weight: bolder;
}

.product-box button {
    width: 300px;
    margin: .3em 0;
}
</style>
