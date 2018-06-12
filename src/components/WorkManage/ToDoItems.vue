<template>
  <div class="todo">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>事务管理</span>
        <span class="gt">></span>
        <span class="active">待办事项</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="todo-table">
      <div class="table-header">
        <span>监控点:</span>
        <select class="select1" name="" id="">
          <option value=""></option>
        </select>
        <span>任务类型:</span>
        <select class="select2" name="" id="">
          <option value=""></option>
        </select>
        <span>处理单环节:</span>
        <select class="select3" name="" id="">
          <option value=""></option>
        </select>
        <button class="search"><i></i>查询</button>
        <button class="verify"><i></i>审核</button>
      </div>
      <ul class="table-th">
        <li></li>
        <li></li>
        <li>任务名称</li>
        <li>任务类型</li>
        <li>任务编号</li>
        <li>当前处理环节</li>
        <li>监控点名称</li>
        <li>主要内容</li>
        <li>备注</li>
        <li>监控设施运行状况</li>
        <li>拟处罚金额</li>
        <li>办结时限</li>
      </ul>
      <ul class="table-th table-tr" v-for="index in 8" :key="index">
        <li>{{index}}</li>
        <li><input type="checkbox" name="" id=""></li>
        <li>这里是博控</li>
        <li>这里是博控</li>
        <li>这里是博控</li>
        <li>这里是博控</li>
        <li>这里是博控</li>
        <li>这里是博控</li>
        <li>这里是博控</li>
        <li>这里是博控</li>
        <li>这里是博控</li>
        <li>这里是博控</li>
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
      console.log('go to');
    }
  }
}
</script>
<style lang='scss' scoped>
  .todo{
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
    .todo-table{
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
          margin: 0 10px;
        }
        select{
          border-radius: 5px;
          color: #bcbbbb;
        }
        .select1,.select2{
          width: 130px;
          height: 26px;
        }
        .select3{
          width: 85px;
          height: 26px;
        }
        .search,.verify{
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
        .verify{
          background-color: #f86634;
          i{
            background: url('../../assets/img/verify.png') no-repeat;
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
          width: 35px;
          padding-top: 2px;
        }
        li:nth-child(3){
          width: 88px;
        }
        li:nth-child(4){
          width: 79px;
        }
        li:nth-child(5){
          width: 88px;
        }
        li:nth-child(6){
          width: 90px;
        }
        li:nth-child(7){
          width: 100px;
        }
        li:nth-child(8){
          width: 93px;
        }
        li:nth-child(9){
          width: 74px;
        }
        li:nth-child(10){
          width: 134px;
        }
        li:nth-child(11){
          width: 96px;
        }
        li:nth-child(12){
          width: 105px;
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