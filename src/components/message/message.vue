<template>
  <transition name="animateType">
  </transition>
</template>

<script>
export default {
  name: 'Vue-Message',
  data () {
    return {
      // 默认文案
      text: 'Hello World',
      // 默认显示位置
      position: 'bottom',
      // 持续时间
      duration: 3000,
      // 默认背景色
      background: 'rgba(7,17,27,0.8)',
      // 提示的类型
      type: 'default',
      // 进入动画类型
      animateType: 'fade-up',
      // 提示类型 (default: 6 1节日toast的提示信息，圆润的，胖胖的)
      typeList: ['default']
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
// @import './../../style/base.less';
.vue-Message{
  // 6 1节日toast的提示信息，圆润的，胖胖的
  &.default{
    position: fixed;
    top: 8.76rem;
    left: 0;
    width: 100%;
    z-index: 103;
    display: flex;
    align-items: center;
    justify-content: center;
    .vue-Message-Detail{
      border-radius: 0.48rem;
      user-select: none;
      line-height: 1.5;
      padding: 0.2rem 0.3rem;
      word-wrap: break-word;
      color: #fff;
      max-width: 80%;
      font-family: 'SourceHanSansCN-Regular';
      font-size: 0.28rem;
    }
  }
  &.bottom{
    transform:translate(0,0);
    &.fade-up-enter{
      opacity: 0;
      transform:translate(0,10px);
    }
  }
  &.center{
    top: 50%;
    left:0;
    transform:translate(0,-50%);
    &.fade-up-enter{
      opacity: 0;
      transform:translate(0,calc(-50% + 10px));
    }
  }
  &.top{
    top: 10%;
    transform:translate(0,0);
    &.fade-up-enter{
      opacity: 0;
      transform:translate(0,10px);
    }
  }
  &.fade-up-enter-to,&.fade-up-leave-to{
    transition: all .3s ease;
  }
  &.fade-up-leave-to{
    opacity: 0;
  }
}
</style>