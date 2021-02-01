<template>
    <div>
        <h2>Product List One</h2>
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
        name: 'ProductListOne',
        props: ['products']
    }
</script>

<style lang="scss" scoped>
ul {
    background-color: lightblue;
}
li {
    list-style-type: none;
    font-size: 24px;
}
</style>