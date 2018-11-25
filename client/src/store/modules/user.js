import axios from 'axios';

const FETCH_USERS = 'FETCH_USERS'

const state = {
  users: []
}

const getters = {
  usersList: state => {
    return state.users;
  }
}

const actions = {
  async fetchUsers({ commit }){
    await axios.get('http://localhost:3000/users')
      .then((response) => {
        commit(FETCH_USERS, {
          data: response.data
        })
      })
  }
}

const mutations = {
  FETCH_USERS(state, payload){
    state.users = payload.data;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
