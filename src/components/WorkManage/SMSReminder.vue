<template>
  <div class="msg">
    <div class="msg-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>事务管理</span>
        <span class="gt">></span>
        <span class="active">短信提醒</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="msg-table">
      <div class="table-header">
        <button class="delete-btn">
          <i class="delete-icon"></i>
          删除
        </button>
        <div class="inp-con">
          <i class='search'></i>
          <input type="text" placeholder="邮件全文搜索...">
        </div>
      </div>
      <ul class="table-th table-li">
        <li></li>
        <li></li>
        <li>相关监控点名称</li>
        <li>短信内容</li>
        <li>短信接收号码</li>
        <li>短信发送时间</li>
      </ul>
      <ul class="table-tr table-li" v-for="index in 4" :key="index">
        <li>{{index}}</li>
        <li><input type="checkbox" name="" id=""></li>
        <li>我是标题</li>
        <li>我是消息内容</li>
        <li>13012345678</li>
        <li>2018-4-17 14:36:34</li>
      </ul>
    </div>
    <div class="msg-pageination">
      <Page :total=100 :size=5 :page=1 :change="goTo"></Page>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods: {
    goTo(){
      console.log('msgReminder-pageination');
    }
  }
}
</script>
<style lang='scss' scoped>
  .msg{
    .msg-banner{
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
    .msg-table{
      margin-top: 28px;
      border: 1px solid #b2b0b0;   
      border-radius: 5px;
      color: #666;
      overflow: hidden;   
      .table-header{
        height: 44px;
        background-color: #e0e0e0;
        position: relative;
        .delete-btn{
          position: absolute;
          left: 18px;
          top: 9px;
          width: 54px;
          height: 26px;
          border-radius: 5px;
          text-indent: 18px;
          color: #fff;
          background-color: #d9534f;
          .delete-icon{
            position: absolute;
            left: 5px;
            bottom: 5px;
            width: 16px;
            height: 16px;
            background: url('../../assets/img/delete.png') no-repeat;
          }
        }
        .inp-con{
          position: absolute;
          top: 8px;
          right: 18px;
          input{
            width: 202px;
            height: 26px;
            color: rgb(117, 117, 117);
            font-size: 14px;
            text-indent: 30px;
          }
          .search{
            position: absolute;
            top: 7px;
            left: 10px;
            width: 13px;
            height: 13px;
            background: url('../../assets/img/search-black.png') no-repeat;
          }
        }
      }
      .table-li{
        li{
          height: 30px;
          line-height: 30px;
          float: left;
          font-size: 12px;
        }
        li:nth-child(1){
          text-align: center;
          width: 31px;
          border-right: 1px solid #b2b0b0;
        }
        li:nth-child(2){
          text-align: center;
          width: 35px;
          padding-top: 2px;
          border-right: 1px solid #b2b0b0;
        }
        li:nth-child(3){
          width: 171px;
        }
        li:nth-child(4){
          width: 348px;
        }
        li:nth-child(5){
          width: 160px;
        }
        li:nth-child(6){
          width: 267px;
        }
      }
      .table-th{
        overflow: hidden;
        background-color: #f5f5f5;
        border-top: 1px solid #b2b0b0;
        border-bottom: 1px solid #b2b0b0;
        text-align: center;
      }
      
      .table-tr{
        overflow: hidden;
        border-bottom: 1px solid #b2b0b0;
        font-size: 14px;
        &:last-child{
          border-bottom: none;
        }
        li:first-child{
          background-color: #f5f5f5;
        }
        li:nth-child(3){
          text-indent: 20px;
        }
        li:nth-child(4){
          text-indent: 20px;
        }
        li:nth-child(5){
          text-align: center;
        }
        li:nth-child(6){
          text-align: center;
        }
      }
    }
    .msg-pageination{
      margin-top: 30px;
      
    }
  }
</style>