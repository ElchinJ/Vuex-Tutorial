<template>
    <div>
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in products" :key="product">
                <span>{{product.name}}</span>
                <span>${{product.price}}</span>
            </li>
        </ul>
        <button @click="reducePrice($event)">Reduce price by parameter</button>
        <input type="number" id="inputValue" placeholder="put a number" v-model="getAmount">
        <hr>
    </div>
</template>

<script>
// *** Import mapGetters and mapActions to wrap all our getters and actions into a single method. In this component we dont use mapGetters
import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'ProductListTwo',
        computed: {
            products() {
                return this.$store.state.products
            },
        },

        methods: {
            // *** Because of we use mapActions we comment out the reducePrice action below
            reducePrice(event) {
                // *** We dispatch our action which commits mutation(it is asyncronous):
                event = this.getAmount
                this.$store.dispatch('reducePriceAction',event)
            },

            // *** mapActions not work properly as it has to pass a parameter. Come back later
            /* ...mapActions([
                'reducePrice(event)',
                // other action should be written in here
            ]), */
            
            getAmount() {
                // *** We take an input field value
                const inputValue = document.querySelector('#inputValue').value
                // *** We take an default value from store. Amount is 0
                var amount = this.$store.state.amount

                return amount += inputValue
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