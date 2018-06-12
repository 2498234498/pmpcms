<template>
  <div>
    <header-view></header-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>
<script>
import HeaderView from './Header';
import FooterView from './Footer';
export default {
  data(){
    return {
      isSwitch: false
    }
  },
  components:{
    HeaderView,
    FooterView
  }
}
</script>
<style lang='scss' scoped>
  
</style>