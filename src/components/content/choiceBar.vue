<template>
  <div class="choiceBar" ref="choiceBar">
    <span
      v-for="(item, index) in titles"
      @click="choiceClick(index)"
      :class="{ active: index == currentIndex }"
      ><span>{{ item }}</span></span
    >
  </div>
</template>

<script>
export default {
  name: 'choiceBar',
  data() {
    return {
      currentIndex: 0,
      goodsType: ['pop', 'new', 'sell'],
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    isActive(index) {
      return 0
    },
  },
  methods: {
    choiceClick(index) {
      this.currentIndex = index
      this.$emit('choiceType', [this.goodsType[index], index])
    },
  },
  mounted() {
    this.$bus.$on('lunboLoad', () => {
      // console.log(this.$refs);
      this.$emit('offsetTop', this.$refs.choiceBar.offsetTop)
    })
  },
}
</script>

<style>
.choiceBar {
  display: flex;
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 10;
}
.choiceBar span {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.choiceBar .active span {
  color: pink;
  padding: 5p;
  border-bottom: 3px solid pink;
}
</style>
