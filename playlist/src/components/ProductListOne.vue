<template>
    <div>
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product">
                <span>{{product.name}}</span>
                <span>${{product.price}}</span>
            </li>
        </ul>
        <button @click="reducePrice">Reduce price</button>
    </div>
</template>

<script>
// *** Import mapGetters to wrap all our getters into a single method. We dont use mapActions in here.
import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'ProductListOne',
        computed: {
            products() {
                return this.$store.state.products
            },
            // *** mapGetters is a method which takes an array of all our getters from the store
            ...mapGetters([
                'saleProducts',
                // other getter should be writen in here
            ])

            // *** saleProducts() returns items which are on sale. Because of we use mapGetters we comment out the code below
            /* saleProducts() {
                return this.$store.getters.saleProducts

                //*** We move it to the getters in the store folder.
                // var saleProducts = this.$store.state.products.map( product => {
                //     return {
                //         name: '**' + product.name + '**',
                //         price: product.price / 2,
                //     }
                // } )
                // return saleProducts
            } */
        },
        methods: {
            reducePrice() {
                // *** This code is moved to mutation in the store
                //  this.$store.state.products.forEach(element => {
                //     element.price -= 1.0
                // });

                 // *** If we want to commit mutation from our store(but this is syncronous):
                this.$store.commit('reducePriceMutation')

                // *** We dispatch our action which commits mutation(it is asyncronous) but it moved to PorductListTwo:
                //this.$store.dispatch('reducePriceAction')
            }
        },
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