<template>
    <div>
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in products" :key="product">
                <span>{{product.name}}</span>
                <span>${{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ProductListTwo',
        computed: {
            products() {
                return this.$store.state.products
            }
        },
    }
</script>

<style lang="scss" scoped>
ul {
    background-color: olive;
}
li {
    margin: 5px;
}
h2 {
    background-color: olive;
}
</style>