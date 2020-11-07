import Vue from 'vue'
import Vuex from 'vuex'
import mHotels from './modules/mHotels'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    mHotels,
  }
})

export default store