<template>
    <div>
        test
        <paypal-checkout :amount="20"></paypal-checkout>
    </div>
</template>
<script>
import PaypalCheckout from "@/components/PaypalCheckout.vue";
export default {
    component:{
    PaypalCheckout
    }
    } 
</script>