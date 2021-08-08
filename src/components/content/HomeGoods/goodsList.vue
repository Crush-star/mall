<template>
  <div class="goodslist">
    <goods-list-item v-for="item in goodslist" :item='item' />
  </div>
</template>

<script>

  import goodsListItem from  './goodsListItem'
  export default {
    components:{
      goodsListItem,
    },
    data() {
      return {

      }
    },
    name:'goodsList',
    props:{
      goodslist:{
        type:Array,
        default() {
          return []
        }
      },
    },

  }

</script>

<style>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding:0px 5px;
}
</style>