<template>
  <div>
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home">
        <i slot="item-icon" class="iconfont icon-shangpu"></i>
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/sort">
        <i slot="item-icon" class="iconfont icon-fenlei"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <i slot="item-icon" class="iconfont icon-gouwuche"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/porfile">
        <i slot="item-icon" class="iconfont icon-wode"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar/TabBar'
import TabBarItem from '@/components/common/TabBar/TabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style>
    @import url('~@/assets/img/tabbar/icon/iconfont.css');
</style>