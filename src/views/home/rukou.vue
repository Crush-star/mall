<template>
  <div class="rukou">
    <a :href="item.link" v-for="item in recommend">
      <img :src="item.image" alt=" ">
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
  export default {
    name:'rukou',
    props:{
      recommend:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style>
 .rukou {
   display: flex;
  font-size: 14px;
  padding-bottom: 14px;
  border-bottom: 7px solid #eee;
 }
 .rukou a {
   flex: 1;
   text-align: center;
 }
 .rukou img {
   width: 80%;
   margin-bottom: 5px;
 }
</style>