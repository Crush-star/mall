<template>
  <div>
    <TopBar class="bar"><div slot='center' >购物车({{allCount}})</div></TopBar>
    <cartItem :cartList='$store.state.cartList' />
    <calcBar/>
  </div>
</template>

<script>
  import TopBar from '@/components/common/bar/bar'
  import cartItem from './cartItem'
  import calcBar from './calcBar'
  export default  {
    components:{
      cartItem,
      TopBar,
      calcBar
    },
    computed: {
      allCount() {
        return this.$store.state.cartList.length
      }
    },

  }
</script>

<style scoped>
.bar {
  position: fixed;
  top: 0;
  background-color: pink;
  color: white;
}
</style>