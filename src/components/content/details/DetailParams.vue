<template>
  <div class="params">
    <!-- <div>{{itemParams.rule.key}}</div> -->
    <table class="size" v-if="itemParams.rule">
      <tr  v-for="size in itemParams.rule.tables[0]">
        <td v-for="i in size">{{i}}</td>
      </tr>
    </table>
    <table class="msg" v-if='itemParams.info'>
      <tr v-for="item in itemParams.info.set">
        <td class="itemkey">{{item.key}}</td>
        <td class="itemvalue">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name:'DetailParams',
    props:{
      itemParams:{
        type:Object,
        default:() => {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  table {
    width: 100%;
    font-size: 16px;
    /* font-weight: 400; */
  }
  tr {
    height: 40px;
    line-height: 40px;
  }
  .itemkey {
    width: 60px;
  }
  .itemvalue {
    padding-left: 30px;
    color: #eb4868;
  }
  .size tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }  
  .msg tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

</style>