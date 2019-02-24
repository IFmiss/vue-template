<template lang="pug">
  .page
    .title 基于Vue-cli3搭建的通用js项目
    .point
      li(@click="clickVuex")  Vuex
      li axios
      li Vue-router
      li d-js-utlis
      li typescript
      li pug模板语法
      li less全局变量配置
      li .env.development + .env.production
      li 配置rem移动端初始化字体大小
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    clickVuex () {
      this.$msg('你好')
    }
  },
})
</script>

<style lang="less" scoped>
  .page {
    width: 7.5rem;
    font-size: 0.32rem;
    .title {
      color: @primary;
      font-size: 0.36rem;
    }
    .point {
      padding: 0 0.6rem;
      margin-top: 1rem;
      text-align: left;
      li {
        line-height: 1.7;
      }
    }
  }
</style>
