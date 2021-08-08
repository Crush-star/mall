<template>
  <div class="main">
    <div class="choice" :class="{ check: firstChoice }" @click="allCheckClick">
      √
    </div>
    <span>全选</span>
    <div class="jiesuan">结算(￥{{totalPrice}})</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // firstChoice:this.$store.state.cartListIsAllCheck
    }
  },
  computed:{
    firstChoice() {
      if(this.$store.state.cartList.length){

        return this.$store.state.cartListIsAllCheck
      }else{
        return false
      }
    },
    totalPrice() {
      let price = 0
      for(let goods of this.$store.state.cartList){
        if(goods.check){
          price += goods.count * goods.realPrice
        }
      }
      return price
    }
  },
  methods: {
    allCheckClick() {
      // this.isCheck = !this.isCheck
      this.$store.commit('nobool')
    },

  },
  mounted() {
      this.$bus.$on('check',b=>{
      this.isCheck = b
      })
  },
}
</script>

<style scoped>
.main {
  position: fixed;
  bottom: 49px;
  height: 44px;
  line-height: 44px;
  width: 100%;
}
.choice {
  float: left;
  margin-left: 5px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid gray;
  text-align: center;
  line-height: 23px;
  font-size: 22px;
  margin: 10px 10px 0 5%;
  color: white;
}
.check {
  border: 1px solid rgb(255, 88, 88);
  background-color: rgb(255, 88, 88);
}
.jiesuan {
  float: right;
  height: 100%;
  width: 35%;
  font-size: 20px;
  color: white;
  text-align: center;
  background-color: pink;
}
</style>
