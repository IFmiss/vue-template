<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter, Action } from 'vuex-class'
import { LogUtils } from '@dw/d-utils'
import { USER_INFO_GETTER, USER_INFO_SETTER } from '@/store/types'
@Component
export default class App extends Vue {
  @Action(USER_INFO_SETTER) private setUserInfo: any
  @Getter(USER_INFO_GETTER) private userInfo: any
  private created() {
    LogUtils.logSuccess(this.userInfo, 'before Action')
    this.setUserInfo({
      name: 'daiwei',
      age: 24
    })
    LogUtils.logInfo(this.userInfo, 'after Action')
    LogUtils.logSuccess(process.env, 'process.env')
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  align-items: center;
}
body, html {
  margin: 0;
}
</style>
