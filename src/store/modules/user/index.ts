
import * as types from './../../types'
const state = {
  [types.USER_INFO_STATE]: {}
}

const getters = {
  [types.USER_INFO_GETTER]: (s: any) => s.USER_INFO_STATE
}

const mutations = {
  [types.USER_INFO_SETTER]: (s: any, data: any) => {
    s[types.USER_INFO_STATE] = data
  }
}

const actions = {
  [types.USER_INFO_SETTER]: ({ commit }: any, data: any) => {
    commit(types.USER_INFO_SETTER, data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
