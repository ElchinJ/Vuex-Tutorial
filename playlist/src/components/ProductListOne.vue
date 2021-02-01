<template>
    <div>
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product">
                <span>{{product.name}}</span>
                <span>${{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ProductListOne',
        computed: {
            products() {
                return this.$store.state.products
            },
            // saleProducts() returns items which are on sale. 
            saleProducts() {
                return this.$store.getters.saleProducts

                //*** We move it to the getters in the store folder.
                // var saleProducts = this.$store.state.products.map( product => {
                //     return {
                //         name: '**' + product.name + '**',
                //         price: product.price / 2,
                //     }
                // } )
                // return saleProducts
            }
        }
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
h2 {
    background-color: lightblue;
}
</style>