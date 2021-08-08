<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import ObserveDom from '@better-scroll/observe-dom'

// BScroll.use(ObserveDom)

export default {
  name: 'scroll',
  data() {
    return {
      bscroll: {},
    }
  },
  props: {
    probeType: {
      type: Number,
      default: null,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.bscroll.scrollTo(x, y, time)
    },
    refresh() {
      this.bscroll.refresh()
    },
    finishPullUp() {
      this.bscroll.finishPullUp()
    },
    getScrollY() {
      return this.bscroll ? this.bscroll.y : 0
    },
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })
    //监听滚动事件
    this.bscroll.on('scroll', (p) => {
      // console.log(p);
      if ((p.y)) this.$emit('position', -p.y)
    })
    //监听上拉事件
    this.bscroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
    //  this.$bus.$on('itemImageLoad', () => {this.bscroll.refresh()})
  },
}
</script>
<style>
.content {
  overflow: hidden;
}
</style>
