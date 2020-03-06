<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="goodshow" ref="scroll" :probeType="3">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
      <back-top @click.native="back" />
  </div>
</template>

<script>
// 组件化
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop"


// 网络请求
import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },

  created() {
    this.getHomeMultidata();
    // 初始化三种商品分类
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },

  methods: {
    // 获取商品
    getHomeGoods(type) {
      // page为初始data+1
      const page = this.goods[type].page + 1;
      // 发送请求
      getHomeGoods(type, page).then(res => {
         console.log(res)
        // 将请求到的数据push到data.list中
        this.goods[type].list.push(...res.data.data.list);
        // list数据增加后使page增1
        this.goods[type].page += 1;
      });
    },

    // 获取首页数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
       
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },

    // 回到顶部
    back(){
      this.$refs.scroll.scrollTo(0,0,500)
    },

    // others
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  position:relative;
  height:100vh
}

.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background: var(--color-tint);
  color: #fff;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 8;
}

.goodshow{
position:absolute;
top:44px;
bottom:49px;
overflow:hidden;
}
</style>