import Vue from 'vue'
import Vuex from 'vuex'
import mHotels from './modules/mHotels'
import mLogin from './modules/mLogin'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    mHotels,
    mLogin,
  }
})

export default store