<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="top-control"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      v-show="isTop"
      ref="tab2"
    />
    <scroll
      class="goodshow"
      ref="scroll"
      :probeType="3"
      @scroll="scroll"
      @pullingUp="pulingUp"
      :pullUpLoad="true"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tab" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="back" v-show="isShow" />
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
import BackTop from "components/content/backtop/BackTop";

// 网络请求
import { getHomeMultidata, getHomeGoods } from "network/home.js";

// 混入
import {itemListener} from '@/common/mixin'

// 返回常量
import {BACK_POSITION} from '@/const/const'

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
      currentType: "pop",
      isShow: false,
      flag: false,
      isTop: false,
      saveY:0
    };
  },

  mixins:[itemListener],

  created() {
    this.getHomeMultidata();
    // 初始化三种商品分类
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },



  computed:{
    offset(){
      return this.$refs.tab.$el.offsetTop
    }

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

  activated() {
    this.$nextTick(() => {
      this.refresh();
      this.$refs.scroll.scrollTo(0,this.saveY, 0)
    });
  },

  deactivated() {
    // 离开时位置位置
    this.saveY =this.$refs.scroll.scroll.y
    // 离开时清除时间总线监听
    this.$bus.$off('down',this.itemListener)

  },

  methods: {
    // 获取商品
    getHomeGoods(type) {
      // page为初始data+1
      const page = this.goods[type].page + 1;
      // 发送请求
      getHomeGoods(type, page).then(res => {
        // 将请求到的数据push到data.list中
        this.goods[type].list.push(...res.data.data.list);
        // list数据增加后使page增1
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();
        this.flag = true;
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
    back() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    // 图标隐藏与显示
    scroll(pos) {
      this.isShow = Math.abs(pos.y) > [BACK_POSITION];
      this.isTop = Math.abs(pos.y) > this.offset;
    },

    // 滑到底部
    pulingUp() {
      if (this.flag) {
        this.getHomeGoods(this.currentType);
      }
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

      this.$refs.tab2.currentIndex = index;
      this.$refs.tab.currentIndex = index;
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.home-nav {
  background: var(--color-tint);
  color: #fff;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 8;
}

.goodshow {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.top-control {
  position: relative;
  z-index: 9;
}
</style>