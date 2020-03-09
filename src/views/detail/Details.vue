<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @tabClick="tabClick"></detail-nav-bar>
    <scroll class="detail-scroll" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="refresh" />
      <detail-params-info ref="params" :param-info="paramsInfo"></detail-params-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recomends" ref="recomend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top v-show="isShow" @click.native="back"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar"
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from "components/content/backtop/BackTop";
import Scroll from "components/common/scroll/Scroll";
// import Toast from 'components/common/toast'
// 网络请求
import { getGoodsInfo,getRecommend } from "network/detail";
// 类
import { Goods } from "network/detail";
import { Shop } from "network/detail";
import { GoodsParams } from "network/detail";
// 常量
import {BACK_POSITION} from '@/const/const'
// 混入
import {itemListener,backTopOption} from '@/common/mixin'



export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo:{},
      recomends:[],
      
    };
  },
  
  mixins:[itemListener,backTopOption],

  created() {
    this.iid = this.$route.query.iid;
    getGoodsInfo(this.iid).then(res => {
      const data = res.data.result;
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      // 5.获取参数信息
      this.paramsInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
       //  6.获取用户评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 获取推荐信息
    getRecommend().then( res=>{
      this.recomends = res.data.data.list

    })
  },


  // 计算属性获取异步数据
  computed:{
    topY(){
      const heights = [0]
      // 获取参数
      heights.push(this.$refs.params.$el.offsetTop)
      // 获取评论
      heights.push(this.$refs.comment.$el.offsetTop)
      // 获取推荐
      heights.push(this.$refs.recomend.$el.offsetTop)
      return heights
    }


  },

  destroyed(){
    // 离开时清除时间总线监听
    this.$bus.$off('down',this.itemListener)
  },

  methods:{
    tabClick(index){
        this.$refs.scroll.scrollTo(0,-this.topY[index],200)

    },
    scroll(pos){
      this.isShow = Math.abs(pos.y) > [BACK_POSITION];
      const y = Math.abs(pos.y)
      for(let i=0;i<this.topY.length;i++){
        
         if(y>=this.topY[i] && this.$refs.nav.curIndex !==i){
           this.$refs.nav.curIndex=i
         }
      }
    },
     async addCart(){
      const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        product.newPrice = this.goods.newPrice;
        //将商品添加购物车里 vuex
        const res = await this.$store.dispatch('addCart',product);
        console.log(this.$toast.show())
    }


  },


  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    BackTop,
    Scroll,
  }
};
</script>

<style>
.detail-scroll {
  position: absolute;
  top: 44px;
  bottom: 0;
  background: #fff;
  z-index: 19;
}
</style>