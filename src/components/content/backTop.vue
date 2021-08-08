<template>
  <div>
    <i id="backTop" class="iconfont icon-fanhuidingbu"></i>

  </svg>
  </div>
</template>

<script>
  export default {
    name:'backTop',

  }
</script>

<style scoped>
   @import url('~@/assets/img/tabbar/icon/iconfont.css');
  #backTop {
    position: fixed;
    right: 10px;
    bottom: 70px;
    font-size: 40px;
    color: pink;
    z-index: 100;
  }
</style>