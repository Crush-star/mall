<template>
  <div v-if="rate.list">
    <div class="title">
      <span>用户评价</span>
      <a>更多></a>
    </div>
    <div class="content">
      <div class="user" >
        <span class="img"><img :src="rate.list[0].user.avatar" alt=""/></span>
        <span>{{ rate.list[0].user.uname }}</span>
      </div>
      <div class="commmet">
        <p>{{ rate.list[0].content }}</p>
        <span>{{ time(rate.list[0].created)}} &nbsp &nbsp</span>
        <span>{{ rate.list[0].style}}</span>
      </div>
      <img v-for='img in rate.list[0].images' :src="img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    rate: {
      type: Object,
      default: {},
    },
  },
  computed: {
    time() {
      return (created) => {
        return new Date(parseInt(created) * 1000)
          .toLocaleString()
          .replace(/ [^]+/, ' ')
      }
    },
  },
}
</script>

<style scoped>
.title {
  height: 42px;
  line-height: 42px;
  font-size: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.title span {
  margin-left: 10px;
}
.title a {
  float: right;
  margin-right: 20px;
}
.img {
  display: inline-block;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  overflow: hidden;
}
.img img {
  width: 100%;
}
.content {
  padding-left: 10px;
  padding-right: 8px;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
}
.user {
  position: relative;
  padding-left: 6px;
  margin:8px 0px;
}
.img + span {
  position: absolute;
  top: 13px;
  left: 60px;
  font-size: 16px;
}
.commmet p{
  font-size: 14px;
  color: #444;
  margin-bottom: 5px;
}
.commmet span {
  font-size: 14px;
  color: #666;
}
img {
  width: 20%;
  margin: 5px 5px 10px 0px;
}
</style>
