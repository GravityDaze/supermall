<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    components:{
        Swiper,
        SwiperItem
    },

    props:{
        banners:{
            type:Array
        }
    }
}
</script>

<style>

</style>