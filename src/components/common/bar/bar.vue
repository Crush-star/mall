<template>
  <div class='home-bar'>
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
    <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
  export default {
    name:'bar'

  }
</script>

<style >
  .home-bar {
    width: 100%;
    display: flex;
    position: fixed;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
    z-index: 9;
  }
  .home-bar .center {
    flex:1;
  }
  .home-bar .left,.right{
    width: 60px;
  }
</style>