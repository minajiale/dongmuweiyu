<template lang="html">
  <div class="addProduct">
    <add-product :isChange="false">
      <h2 slot="header">新增商品</h2>
    </add-product>
  </div>
</template>

<script>
import addProduct from './ChangeProducts.vue'
export default {
  data () {
    return {

    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
  },
  components: {
    addProduct
  }
}
</script>

<style lang="css">
</style>
