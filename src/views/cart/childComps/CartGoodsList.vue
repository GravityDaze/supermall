<template>
  <div class="cart-goods-list">
    <cart-goods-list-item :product="item" v-for="(item,i) in cartList" :key="i"></cart-goods-list-item>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CartGoodsListItem from './CartGoodsListItem'
  export default {
    name: "CartGoodsList",
    components: {
      CartGoodsListItem
    },
    computed: {
      ...mapState(['cartList'])
    }
  }
</script>

<style scoped>
</style>