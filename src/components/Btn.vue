<template>
<div :class="btnColor">
    <slot> Cart</slot>
    <img v-if="myIcon" src="../assets/images/cart.svg" alt="Cart Icon">
</div>
</template>

<script>
export default {
    props: {
        btnColor: String,
        myIcon: Boolean
    }

}
</script>

<style scoped>
.btn {
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 0.5rem;
    color: #fff;
    display: flex;
    justify-content: space-around;
    margin: 0.75rem;
    padding: 1rem;
    position: relative;

}

.btn-small {
    padding: .5em 2em;
}

.btn-medium {
    padding: .7em 4.5em;
}

.btn-large {
    padding: .7em 6em;
}

.btn-info {
    background-color: #47ade7;
}

.btn-sucess {
    background-color: #10c269;
}

.btn-danger {
    background-color: #e74c3c;
}

.btn img {
    max-width: 20px;
    margin-left: .5rem;
}
</style>
