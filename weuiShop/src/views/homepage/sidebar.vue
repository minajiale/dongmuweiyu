<template lang="html">
  <div class="">
    <div class="weui-cell weui-cell_access" v-for="item in classifications">
      {{item.name}}
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      classifications:[
        {
          name:"电热水器"
        },
        {
          name:"烟机"
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
li{
  list-style-type: none;
  border-bottom: 1px solid gray
}
</style>
