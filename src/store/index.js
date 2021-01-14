import { createStore } from 'vuex'
import imageStore from './modules/imageStore'

export default createStore({
  modules: {
    imageStore
  },
  state: {
    currentScreenType: 'mobile',
  },
  mutations: {
    updateScreenType(state, type) {
      state.currentScreenType = type
    }
  },
  actions: {
    updateScreenType({ commit }, payload) {
      commit('updateScreenType', payload)

    }
  },
 
})
