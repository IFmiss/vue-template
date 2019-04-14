import Vue from 'vue'
import Vuex from 'vuex'
// 日志打印配置
import createLogger from 'vuex/dist/logger'

import user from './modules/user/index'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    user
  }
})
export default store
