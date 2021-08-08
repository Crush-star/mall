<template>
  <div class="lunbo">
    <img v-if='banner[0]' :src="banner[0].image" alt="" @load="lunboLoad">
  </div>
</template>

<script>
  export default {
    name:'lunbo',
    props:{
      banner:{
        type:Array,
        default:[]
      }
    },
    methods: {
    lunboLoad() {
      this.$bus.$emit('lunboLoad')
    }
  },
  }

</script>

<style>
.lunbo img{
  width: 100%;
  margin-top: 44px;
  margin-bottom: 10px;
}
</style>