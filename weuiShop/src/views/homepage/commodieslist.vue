<template lang="html">
  <div class="weui-cells">
    <div class="weui-cell">
       <router-link to="/commodies/commody">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
            <img src="/static/images/timg.jpeg" style="width: 100px;display: block">
            <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>
        </div>
      </router-link>
        <div class="weui-cell__bd">
            <p>马克菠萝马桶</p>
            <p style="font-size: 13px;color: #888888;">￥30</p>
            <div class="operation">
              <a href="javascript:;" class="weui-btn buy">加入购物车</a>
              <a href="javascript:;" class="weui-btn  buy">立即购买</a>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commodies:[
        {
          picture:"",
          name:"",
          price:"",
        }
      ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.operation{
  /*position: absolute;*/
  z-index: 999;
}
.buy{
  width: 20px;
  height: 10px;
  font-size:4px;
  background-color: red;
  display: inline;
}
</style>
