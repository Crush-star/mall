<template>
  <div id="detail">
    <detalibar class="bar">
      <div slot="left" class="left" @click="back">
        <img src="~@/assets/img/fanhui.png" alt="" />
      </div>
      <div slot="center" class="center">
        <span
          v-for="(item, index) in title"
          :class="{ active: index == currentindex }"
          @click="currentClick(index)"
          >{{ item }}
        </span>
      </div>
    </detalibar>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @position="position">
      <Swiper class="swiper-img">
        <swiper-item v-for="item in goodsDetail.swiperImage">
          <img :src="item" alt="" @load="imageload" />
        </swiper-item>
      </Swiper>
      <DetailBaseInfo :goods="goodsDetail" />
      <shopInfo :shop="goodsDetail.shopInfo" />
      <DetailGoodsInfo
        :detailInfo="goodsDetail.detailInfo"
        @comimgload="imageload"
      />
      <DetailParams ref="params" :itemParams="itemParams" />
      <DetailComment ref="comment" :rate="rate" />
      <goodsList ref="tuijian" :goodslist="recommend" />
    </scroll>
    <DetailBar @addToCart="addToCart" />
  </div>
</template>

<script>
import scroll from '@/components/common/scroll'
import detalibar from '@/components/common/bar/bar'
import DetailBaseInfo from './DetailBaseInfo'
import shopInfo from './DetailShopInfo'
import DetailGoodsInfo from './DetailGoodsInfo'
import DetailParams from './DetailParams'
import DetailComment from './DetailComment'
import DetailBar from './DetailBar'
import goodsList from '@/components/content/HomeGoods/goodsList'

import { Swiper, SwiperItem } from '@/components/common/swiper'
import { getDetail, mainDetail, getRecommend } from '@/network/detail.js'

export default {
  name: 'detail',
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentindex: 0, //按钮选中改变颜色
      goodsDetail: {},
      itemParams: {},
      rate: {},
      recommend: [], //一些推荐信息
      allTopY: [0],
      imgfunc: null,
    }
  },
  components: {
    scroll,
    detalibar,
    Swiper,
    SwiperItem,
    DetailBaseInfo,
    shopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    goodsList,
    DetailBar,
  },
  methods: {
    currentClick(index) {
      // this.currentindex = index
      this.$refs.scroll.scrollTo(0, -this.allTopY[index], 200)
    },
    back() {
      this.$router.back()
    },
    debouce(fun, delay = 300) {
      let timer = null
      return () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fun()
        }, delay)
      }
    },
    imageload() {
      this.imgfunc()
    },
    position(p) {
      // let len = this.allTopY.length
      // console.log(p)
      for (let i = 3; i >= 1; i--) {
        // if (
        //   (p >= this.allTopY[i] && p <= this.allTopY[i + 1]) ||
        //   (i == len - 1 && p >= this.allTopY[i])
        // )
        if (p >= this.allTopY[i]) {
          if (this.currentindex !== i) {
            this.currentindex = i
          }
          i = 0
        } else this.currentindex = 0

        // console.log(p);
        // this.currentindex= i
      }
    },
    //添加购物车
    addToCart() {
      this.goodsDetail.iid = this.$route.params.iid
      this.goodsDetail = Object.assign({},this.goodsDetail,{check:true})
      // this.goodsDetail.check = false
      // Object.defineProperty(this.goodsDetail, 'check', {
      //   get: function() {
      //     console.log('被读取了')
      //     return false
      //   },
      //   set: function(y) {
      //     console.log('被修改了')
      //   },
      // })
      this.$store.commit('addToCart', this.goodsDetail)
      // console.log(this.goodsDetail);
    },
  },
  created() {
    getDetail(this.$route.params.iid).then((res) => {
      this.itemParams = res.result.itemParams
      this.rate = res.result.rate
      this.goodsDetail = new mainDetail(res)
    })
    getRecommend().then((res) => {
      this.recommend = res.data.list
    })
    this.imgfunc = this.debouce(() => {
      this.allTopY.push(this.$refs.params.$el.offsetTop - 44)
      this.allTopY.push(this.$refs.comment.$el.offsetTop - 44)
      this.allTopY.push(this.$refs.tuijian.$el.offsetTop - 44)
    })
  },
  mounted() {},
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}
.wrapper {
  position: absolute;
  top: 0px;
  bottom: 49px;
  width: 100%;
}
.bar {
  background: #fff;
}
#detail span {
  font-size: 16px;
  flex: 1;
}
.center {
  display: flex;
}
.left img {
  position: absolute;
  top: 8px;
  left: 20px;
  width: 28px;
}
.active {
  color: pink;
}
.swiper-img {
  padding-top: 44px;
  height: 300px;
  overflow: hidden;
}
</style>
