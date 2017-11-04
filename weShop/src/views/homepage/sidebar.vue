<template lang="html">
  <ul>
    <li v-for="item in classifications">{{item}}</li>
  </ul>
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
