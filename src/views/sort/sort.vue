<template>
  <div>
    <scroll class="wrapper">
      <div class="left" @click='click'>
        <div class="item" v-for="item of scotList" >
          <!-- <div v-for='i of item.data.list'>
          <img :src="i.image" alt=""><span>{{i.title}}</span>
        </div> -->
          <img :src="item.data.list[0].image" alt="" /><span>{{
            item.data.list[0].title
          }}</span>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from '@/components/common/scroll'
import BScroll from 'better-scroll'

import { getSortList, getSort } from '@/network/home.js'
export default {
  name: 'sort',
  components: {
    scroll,
  },
  data() {
    return {
      scotList: [],
    }
  },
  methods: {
    /*     getContent() {
      this.$store
        .dispatch('getContent')
        .then((res) => this.$store.commit('getContent', res))
        .catch((err) => this.$store.commit('getContent', err))
    }, */
    click(e) {
      console.log(e.target.localName);
    }
  },
  mounted() {
    getSortList().then((res) => {
      for (let i of res.data.category.list) {
        getSort(i).then((res) => {
          this.scotList.push(res)
        })
      }
    })
    console.log(this.scotList)
  },
  /*   mounted() {
      let wrapper = document.querySelector(".wrapper");
      let s = new BScroll(wrapper, {
        // probeType:0,
        pullUpLoad:true
      })
      // s.on('scroll' ,(position) => {
      //   console.log(position);
      // })
      s.on('pullingUp',()=>{
        console.log('加载更多');
      })
    } */
}
</script>
<style scoped>
.wrapper {
  height: calc(100vh - 49px);
  overflow: hidden;
  font-size: 14px;
  /* overflow-y: scroll; */
}
.wrapper .left {
  display: inline-block;
  width: 60px;
  padding:0px 10px;
  border-right: 1px solid rgba(102, 102, 102, 0.13);
  text-align: center;
}
.item {
  width: 100%;
  box-sizing: border-box;
  margin:10px 0px ;
}
img {
  width: 100%;
}
</style>
