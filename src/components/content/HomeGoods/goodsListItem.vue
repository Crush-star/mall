<template>
  <div class="gooos-item" @click='itemClick'>
    <img :src="getimg" alt="" />
    <p class="title">{{item.title }}</p>
    <div class="price">
      <h4>{{ item.price }}</h4>
      <img class="icon" src="../../../../public/tu.png" alt="" />
      <span>{{ item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed:{
    getimg() {
      return  this.item.image || this.item.show.img
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/home/'+ this.item.iid);
    }
  },
  mounted() {
    
  },

}
</script>

<style scoped>
.gooos-item {
  width: 48%;
  margin: auto;
  font-size: 14px;
}
.gooos-item p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
  font-size: 12px;
  margin-top: 3px;
}
.gooos-item img {
  /* height: 100%; */
  width: 100%;
  flex-grow: inherit;
}
.gooos-item div h4{
  display: inline-block;
  font-weight: 400;
}
.gooos-item div img {
  margin-left: 5px;
  width: 15px;
}
.gooos-item .price {
  text-align: center;
  color: rgb(81, 92, 92);
  margin: 2px 0px;
}
</style>
