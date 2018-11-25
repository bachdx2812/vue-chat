import axios from 'axios'

const FETCH_CONVERSATIONS = 'FETCH_CONVERSATIONS'

const state = {
  conversations: []
}

const getters = {
  conversationsList: state => {
    return state.conversations;
  }
}

const actions = {
  async fetchConversations({ commit }) {
    await axios.get('http://localhost:3000/conversations')
      .then((response) => {
        commit(FETCH_CONVERSATIONS, {
          data: response.data
        })
      })
  }
}

const mutations = {
  FETCH_CONVERSATIONS(state, payload) {
    state.conversations = payload.data;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
