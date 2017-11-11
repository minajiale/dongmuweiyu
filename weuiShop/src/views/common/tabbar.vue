<template lang="html">
  <div class="weui-tabbar">
    <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
        <span style="display: inline-block;position: relative;">
            <img src="/static/logo.png" alt="" class="weui-tabbar__icon">
            <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
        </span>
        <p class="weui-tabbar__label">东牧首页</p>
    </a>
    <slot></slot>

    <a href="javascript:;" class="weui-tabbar__item">
        <img src="/static/cart.jpeg" alt="" class="weui-tabbar__icon">
        <p class="weui-tabbar__label">购物车</p>
    </a>
    <!-- <a href="javascript:;" class="weui-tabbar__item">
        <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
        <p class="weui-tabbar__label">我</p>
    </a> -->
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
