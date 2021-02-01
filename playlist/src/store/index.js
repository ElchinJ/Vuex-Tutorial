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
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
