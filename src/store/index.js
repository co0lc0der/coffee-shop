import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import products from './products'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    products,
  }
})

export default store
