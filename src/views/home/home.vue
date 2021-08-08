<template>
  <div class="home">
    <bar class="home-bar"><div slot="center">购物街</div></bar>
    <choiceBar ref="choiceBar1"
      class="hidden"
      v-show="!isShow"
      :titles="['流行', '新款', '精选']"
      @choiceType="choiceType"
    />
    <scroll
      class="wrapper"
      @position="position"
      @pullingUp="pullingUp"
      :pullUpLoad="true"
      ref="comscroll"
      :probe-type="3"
    >
      <!-- <lunbo :banner="banner" :recommend="recommend" /> -->
      <Swiper>
        <swiper-item v-for="item in banner">
          <a :href="item.link"
            ><img :src="item.image" alt="" @load="imageload"
          /></a>
        </swiper-item>
      </Swiper>
      <rukou :recommend="recommend" />
      <datu />
      <choiceBar ref="choiceBar2"
        :titles="['流行', '新款', '精选']"
        @choiceType="choiceType"
        @offsetTop="offsetTop"
      />
      <goodsList :goodslist="goods[this.type].list" />
    </scroll>
    <backTop v-show="!isShow" @click.native="backclick" />
  </div>
</template>

<script>
import bar from '@/components/common/bar/bar'
import lunbo from './lunbotu'
import rukou from './rukou'
import datu from './datu'
import choiceBar from '@/components/content/choiceBar'
import goodsList from '@/components/content/HomeGoods/goodsList'
import scroll from '@/components/common/scroll'
import backTop from '@/components/content/backTop'

import { getHomeMultidata, getHomeGoods } from '@/network/home'
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'home',
  components: {
    bar,
    lunbo,
    rukou,
    datu,
    choiceBar,
    goodsList,
    scroll,
    backTop,
    Swiper,
    SwiperItem,
  },

  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      type: 'pop',
      isShow: true,
      barTop: 0,
      send:false,
      homePosition:0,
    }
  },
  methods: {
    position(p) {
      this.isShow = p < this.barTop
      this.homePosition = p
      // console.log(this.homePosition);
    },
    offsetTop(a) {
      this.barTop = a
    },
    //返回顶部函数
    backclick() {
      this.$refs.comscroll.scrollTo(0, -this.barTop, 500)
    },
    //上拉加载更多
    pullingUp() {
      this.getHomeGoods(this.type).then(() => {
        this.$refs.comscroll.refresh()
        this.$refs.comscroll.finishPullUp()
      })
    },
    imageload() {
      if (!this.send) {
        this.$bus.$emit('lunboLoad')
        this.send = true
      }
    },
    /*       increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      },
      edit() {
        this.$store.dispatch('edit').then((a)=>{
          console.log(a);
        })
      } */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      let page = this.goods[type].page
      getHomeGoods(type, page).then((res) =>
        this.goods[type].list.push(...res.data.list)
      )
      this.goods[type].page += 1
      return Promise.resolve()
    },
    choiceType(type) {
      this.type = type[0]
      this.$refs.choiceBar1.currentIndex = type[1]
      this.$refs.choiceBar2.currentIndex = type[1]
    },
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
    this.$refs.comscroll.scrollTo(0,this.homePosition,0)
    this.$refs.comscroll.refresh()
  },
  deactivated() {
    this.homePosition = this.$refs.comscroll.getScrollY()
    // console.log(this.homePosition);
  },
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.home-bar {
  background-color: #ff8e96;
  color: white;
}
.wrapper {
  /* height: calc(100% - 49px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.hidden {
  position: relative;
}
</style>
