<template>
<div class="container">
    <div id="nav">
        <main-menu>
            <btn btnColor="btn btn-small btn-info btn-popup" :myIcon="cartIcon" @click="showPopupCart()">
                <span class="cartIcon">
                    <span class="span-cart"> Basket </span>
                    <span class="btn-circle" v-if="hasProduct()">
                        <!-- <p class="cart-count">{{ getProductsInCart.length }} </p> -->
                        <p class="cart-count">{{ totalCartItem }} </p>

                    </span>

                </span>
            </btn>

            <transition name="appear">
                <popup-cart class="cart" v-if="getPopupCart"></popup-cart>
            </transition>

        </main-menu>
    </div>
    <transition name="leave">
        <router-view></router-view>
    </transition>
    <!-- <mask-bg v-if="this.getPopupCart" @click="showPopupCart()"></mask-bg> -->

</div>
</template>

<script>
// import Btn from '@/components/Btn'
import MainMenu from './components/Menu'
import Btn from './components/Btn'
import PopupCart from './components/PopupCart'
//import MaskBg from './components/Mask';
import {
    mapActions,
    mapGetters
} from 'vuex'
// import AlleProdukte from './components/AlleProdukte'
export default {
    data() {
        return {
            cartIcon: true,
            openCart: false
        }
    },
    components: {
        MainMenu,
        Btn,
        PopupCart,

        // AlleProdukte,
    },
    computed: {
        ...mapGetters({
            // getProductsInCart: 'getProductsInCart',
            getProductsInCart: 'cartProducts',
            getPopupCart: 'getPopupCart',
            totalCartItem: 'totalCartItem'
        }),
    },
    methods: {
        ...mapActions([
            'showOrHiddenPopupCart'
        ]),
        showPopupCart() {
            this.showOrHiddenPopupCart();
        },
        hasProduct() {
            return this.getProductsInCart.length > 0
        }
    }
}
</script>

<style>
@import './assets/css/normalise.css';
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
}

a {
    color: #000;
    text-decoration: none;
}

.container {
    width: 100%;
}

.cart {
    position: absolute;
    top: 75px;
    right: 300px;
}

.cartIcon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.span-cart {
    padding: 0.75rem;

}

.cart-count {
    text-align: center;
    margin: auto;
    padding-top: 0.15rem;
}

.btn-circle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #fff;
    color: rgb(199, 63, 63);
    font-weight: bold;
    padding-top: 2px;
    position: absolute;
    right: -1rem;
    top: 0.15rem;

}

.leave-enter-active,
.leave-leave-active {
    transition: all 1.2s;
}

.leave-enter,
.leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
}

.appear-enter-active {
    animation: appear-animation .5s;
}

.appear-leave-active {
    animation: appear-animation .5s reverse;
}

@keyframes appear-animation {
    0% {
        transform: translateY(-50%);
        opacity: 0;
    }

    100% {
        transform: translateY(0%);
        opacity: 1;
    }
}
</style>
