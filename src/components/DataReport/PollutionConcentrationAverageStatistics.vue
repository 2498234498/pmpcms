<template>
  <div class="total-report">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>数据报表</span>
        <span class="gt">></span>
        <span class="active">污染物浓度均值统计</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="total-table">
      <div class="table-header">
        <span>地区:</span>
        <select class="select1" name="" id="">
          <option value=""></option>
        </select>
        <span>污染物:</span>
        <select name="" id="">
          <option value=""></option>
        </select>
        <span>企业:</span>
        <select name="" id="">
          <option value=""></option>
        </select>
        <span>时间单位:</span>
        <select class="time-unit" name="" id="">
          <option value=""></option>
        </select>
        <span>时间:</span>
        <select name="" id="">
          <option value=""></option>
        </select>
        <span>-</span>
        <select name="" id="">
          <option value=""></option>
        </select>
        <button class="search"><i></i>查询</button>
        <button class="export"><i></i>导出</button>
      </div>
      <ul class="table-th">
        <li></li>
        <li>监控点</li>
        <li>污染物</li>
        <li>实际排放量</li>
        <li>排放量上限</li>
        <li>排放量超标倍数</li>
        <li>实际平均浓度</li>
        <li>浓度上限</li>
        <li>浓度超标倍数</li>
      </ul>
      <ul class="table-th table-tr" v-for="index in 8" :key="index">
        <li>{{index}}</li>
        <li>博控</li>
        <li>博控</li>
        <li>博控</li>
        <li>博控</li>
        <li>博控</li>
        <li>博控</li>
        <li>博控</li>
        <li>博控</li>
      </ul>
    </div>
    <div class="todo-pageination">
      <Page :total=100 :size=5 :page=1 :change="goTo"></Page>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    goTo(){
      console.log('goTo');
    }
  }
}
</script>
<style lang='scss' scoped>
  .total-report{
    .to-banner{
      margin-top: 6px;
      position: relative;
      height: 21px;
      .banner{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 14px;
        color: #464646;
        .home-house{
          vertical-align: middle;
          margin-top: -6px;
          display: inline-block;
          width: 22px;
          height: 20px;
          background: url('../../assets/img/home-house.png') no-repeat;
        }
        a{
          font-weight: bold;
          text-decoration: none;
          color: #464646;
          font-size: 16px;
        }
        .gt{ 
          margin: 0 11px;
        }
        .active{
          color: #136fcc;
        }
      }
    }
    .line{
      border-top: 2px solid #dfdfdd;
      margin-top: 8px;
    }
    .total-table{
      margin-top: 28px;
      color: #666;
      .table-header{
        font-size: 14px;
        height: 45px;
        line-height: 45px;
        border-radius: 5px 5px 0 0;
        background-color: #f5f5f5;
        border: 1px solid #d9d9d9;
        border-bottom: none;
        span{
          margin: 0 4px;
        }
        select{
          border-radius: 5px;
          color: #bcbbbb;
          width: 104px;
          height: 26px;
        }
        .time-unit{
          width: 50px;
        }
        .search,.export{
          text-indent: 15px;
          border-radius: 5px;
          width: 54px;
          height: 26px;
          line-height: 26px;
          color: #fff;
          position: relative;
          cursor: pointer;
          i{
            position: absolute;
            width: 15px;
            height: 15px;
            left: 6px;
            top: 6px;
          }
        }
        .search{
          margin: 0 10px;
          background-color: #54ad90;
          i{
            background: url('../../assets/img/search-white.png') no-repeat;
          }
        }
        .export{
          background-color: #49b4d4;
          i{
            background: url('../../assets/img/export.png') no-repeat;
          }
        }
      }
      .table-th{
        overflow: hidden;
        background-color: #f5f5f5;
        font-size: 12px;
        li{
          text-align: center;
          float: left;
          height: 30px;
          line-height: 30px;
          border-top: 1px solid #d9d9d9;
          border-right: 1px solid #d9d9d9;
        }
        li:nth-child(1){
          width: 32px;
          border-left: 1px solid #d9d9d9;
        }
        li:nth-child(2){
          width: 117px;
        }
        li:nth-child(3){
          width: 122px;
        }
        li:nth-child(4){
          width: 113px;
        }
        li:nth-child(5){
          width: 112px;
        }
        li:nth-child(6){
          width: 135px;
        }
        li:nth-child(7){
          width: 123px;
        }
        li:nth-child(8){
          width: 122px;
        }
        li:nth-child(9){
          width: 138px;
        }
      }
      .table-tr{
        li:nth-child(n+2){
          background-color: #fff; 
        }
      }
      .table-tr:last-child{
        border-radius: 0 0 5px 5px;
        border-bottom: 1px solid #d9d9d9;
      }
    }
    .todo-pageination{
      margin-top: 30px;
    }
  }
</style>