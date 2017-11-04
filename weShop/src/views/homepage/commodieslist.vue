<template lang="html">
  <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
            <img src="images/pic_160.png" style="width: 50px;display: block">
            <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>
        </div>
        <div class="weui-cell__bd">
            <p>马克菠萝马桶</p>
            <p style="font-size: 13px;color: #888888;">￥30</p>
        </div>
      </a>
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
</style>
