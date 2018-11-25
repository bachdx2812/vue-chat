import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import conversation from './modules/conversation'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    conversation
  }
})
