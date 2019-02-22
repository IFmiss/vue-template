import Vue from 'vue'
import Vuex from 'vuex'
// 日志打印配置
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
  }
})
export default store
