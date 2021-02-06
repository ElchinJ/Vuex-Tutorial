import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { name: 'BMW', price: 250},
      { name: 'Mercedez', price: 350},
      { name: 'Audi', price: 260},
      { name: 'Volvo', price: 200},
    ],
    amount: 0, // is used in the ProductListTwo as initial value

    // *** This code for my own use in TestComponent
    players: [
      { name: 'Michael', lastname: 'Jordan', team: 'Chicago', division: 1},
      { name: 'Arvidas', lastname: 'Sabonis', team: 'Portland', division: 2},
      { name: 'Penny', lastname: 'Hardaway', team: 'Orlando', division: 1},
      { name: 'James', lastname: 'Lebron', team: 'Cleveland', division: 1},
      { name: 'James', lastname: 'Harden', team: 'Houston', division: 2},
    ],
    conference: ['West', 'East'],
  },

  getters: {
    // *** This code is moved from ProductListOne computed method
    saleProducts: state => {
      // *** OBS! We dont use this.$store in here because we are in the store somponent
      var saleProducts = state.products.map(product => {
        return {
            name: '**' + product.name + '**',
            price: product.price / 2,
        }
    } )
    return saleProducts
    },
  },
  
  mutations: {
    // *** OBS! We could use reducePrice: state => ... as we did in the saleProducts getter above. In that case we drop 'this' keyword. 
    // *** We put the first '_' parameter as it is unused because reducePriceMutaion method accepts two parameters(the first one is an object). Payload parameter we accept from out action reducePriceAction method
    reducePriceMutation(_, payload) {
        this.state.products.forEach(element => {
          element.price -= payload
    });
    }
  },

  actions: {
    // *** We receive our parameter from ProductListTwo as 'payload'. Payload then send further to the reducePriceMutation
    reducePriceAction: (context, payload) => {
      setTimeout(() => {
        // *** We commit our mutation inside action after 2 seconds
        context.commit('reducePriceMutation', payload)
      }, 2000);
    }
  },

  modules: {
  }
})
