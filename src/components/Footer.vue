<template>
  <div class="foot">
    <p class="first-p">技术支持：广州博控自动化技术有限公司</p>
    <p class="second-p">当前时间：{{date}}</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      week: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
    }
  },
  computed: {
    date(){
      return new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月'+new Date().getDate()+'日 '+this.week[new Date().getDay()]
    }  
  }
}
</script>
<style lang='scss' scoped>
  .foot{
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    margin-top: 37px;
    color: #fff;
    background-color: #1e6ab7;
    position: relative;
    .first-p{
      width: 300px;
      margin: 0 auto;
    }
    .second-p{
      width: 280px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>