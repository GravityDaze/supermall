<template>
  <tab-bar>
    <tab-item path="/home" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/all.svg" alt />
      <div slot="item-text" class="tab-text">首页</div>
    </tab-item>
    <tab-item>
      <img slot="item-icon" src="@/assets/img/tabbar/send inquiry.svg" alt />
      <div slot="item-text" class="tab-text">消息</div>
    </tab-item>
    <tab-item path="/cart" activeColor="#ddd">
      <img slot="item-icon" src="@/assets/img/tabbar/favorites-fill.svg" alt />
      <div slot="item-text" class="tab-text">收藏</div>
    </tab-item>
    <tab-item path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/bussiness-man.svg" alt />
      <div slot="item-text" class="tab-text">我的</div>
    </tab-item>
    <tab-item>
      <img slot="item-icon" src="@/assets/img/tabbar/bussiness-man.svg" alt />
      <div slot="item-text" class="tab-text">管理员</div>
    </tab-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabItem from "components/common/tabbar/TabItem";

export default {
  components: {
    TabBar,
    TabItem
  }
}
</script>

<style>
</style>