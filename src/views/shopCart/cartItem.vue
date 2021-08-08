<template>
  <div class="content">
    <div v-for="(item, index) in cartList" class="item">
      <!-- <div style="display: none;">{{ab}}</div> -->
      <div
        class="choice"
        :class="{ check: isCheck(index) }"
        @click="click(index)"
      >
        √
      </div>
      <img :src="item.swiperImage[0]" alt="" />
      <div class="text">
        <h4>{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
        <span class="price"> ￥{{ item.realPrice }} </span>
        <span class="count"> ×{{ item.count }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dcartList: this.$store.state.cartList,
    }
  },
  props: {
    cartList: {
      type: Array,
      default: [],
    },
  },
  computed: {
    isCheck() {
      return (index) => {
        return  this.dcartList[index].check
      }
    },
  },
  methods: {
    click(index) {
      this.$store.commit('editCheck', index)
      let check = 1
        for (let goods of this.dcartList) {
          if (!goods.check) {
            this.$store.commit('editbool', false)
            check = 0
            break
          }
        }
        if(check){       
          this.$store.commit('editbool', true)
        }
    },
  },
}
</script>

<style scoped>
.choice {
  float: left;
  margin-left: 5px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 1px solid gray;
  text-align: center;
  line-height: 25px;
  font-size: 24px;
  margin-top: 50px;
  color: white;
}
.item .check {
  border: 1px solid white;
  background-color: rgb(255, 88, 88);
}
.item {
  height: 140px;
  margin-top: 10px;
  border-bottom: 1px solid gray;
}
img {
  float: left;
  height: 90%;
  width: 25%;
  margin-left: 5px;
}
.text {
  float: right;
  height: 90%;
  width: 60%;
  margin-right: 6px;
}
h4 {
  margin-bottom: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 18px;
}
p {
  margin-bottom: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
}
.price {
  font-size: 18px;
  color: rgb(223, 100, 100);
}
.count {
  float: right;
}
.content {
  margin-top: 44px;
  margin-bottom: 49px;
}
</style>
