import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links
  }
})

export default store
