<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'labbar',
}
</script>
<style scoped>
  #tab-bar {
    z-index: 11;
  }
</style>
