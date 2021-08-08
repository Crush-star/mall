<template>
  <div :class="{'active':IsActive}" id="tab-bar-item" @click="click">
    <div ><slot name="item-icon"></slot></div>
    <div :style="activeColor"><slot name="item-text"></slot></div>
    
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data() {
    return {
      
    }
  },
  props:{
    path:String,
    activecolor:{
      type:String,
      // default:'red',
    }
  },
  computed:{
    IsActive() {
      return this.$route.path == this.path
    },
    activeColor() {
      return !this.IsActive ? {color:this.activecolor}:{}
    },
  },
  methods: {
    click() {
      this.$router.replace(this.path).catch(()=>{})
    }
  },
}
</script>
<style>

</style>
