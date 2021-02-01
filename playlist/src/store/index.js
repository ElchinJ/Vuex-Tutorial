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
    }
  },
  
  mutations: {
    // *** OBS! We could use reducePrice: state => ... as we did in the saleProducts getter above. In that case we drop 'this' keyword. 
    reducePrice() {
        this.state.products.forEach(element => {
        element.price -= 1.0
    });
    }
  },
  actions: {
  },
  modules: {
  }
})
