<template>
  <div class="goods">
      <goods-list-item v-for="v in goods" :key="v.shopid" :goods-item="v" />
  </div>
</template>

<script>
import GoodsListItem from './GoodListItem'
export default {


  
    props:{
        goods:{
            type:Array,
            default(){
                return []
            },

        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style>
 .goods{
    display: flex;
    /*选择包裹 根据内部组件的宽度显示合适的组件个数*/
    /*小组件设置了宽度*/
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>