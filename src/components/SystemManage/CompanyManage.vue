<template>
  <div class="company-manage">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>系统管理</span>
        <span class="gt">></span>
        <span class="active">企业管理</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="mean-table">
      <div class="table-header">
        <span>公司名称:</span>
        <input class="inp">
        <span>公司类型:</span>
        <select class="inp" name="" id="">
          <option value=""></option>
        </select>
        <button class="search"><i></i>查询</button>
        <div class="right-btns">
          <div class="add"><i></i>添加</div>
          <div class="edit"><i></i>修改</div>
          <div class="delete"><i></i>删除</div>
        </div>
      </div>
      <ul class="table-th">
        <li></li>
        <li></li>
        <li>企业名称</li>
        <li>企业地址</li>
        <li>企业类型</li>
        <li>直属环保机构</li>
        <li>所属区域</li>
        <li>所属行业</li>
        <li>联系人</li>
        <li>环保负责人</li>
        <li>创建时间</li>
      </ul>
      <ul class="table-th table-tr" v-for="index in 8" :key="index">
        <li>{{index}}</li>
        <li><input type="checkbox" :checked="index==initialValue" @click="changeInit(index)"></li>
        <li>广州博控</li>
        <li>广州博控</li>
        <li>广州博控</li>
        <li>广州博控</li>
        <li>广州博控</li>
        <li>广州博控</li>
        <li>广州博控</li>
        <li>广州博控</li>
        <li>广州博控</li>
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
      initialValue: -1
    }
  },
  methods: {
    goTo(){
      console.log('goTo');
    },
    changeInit(index){
      this.initialValue = index
    }
  }
}
</script>
<style lang='scss' scoped>
  .company-manage{
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
    .mean-table{
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
        position: relative;
        span{
          margin: 0 10px;
        }
        .inp{
          color: #666;
          border-radius: 5px;
          width: 130px;
          height: 26px;
          border: 1px solid #d9d9d9;
        }
        .search{
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
        .right-btns{
          position: absolute;
          right: 12px;
          top: 10px;
          border-radius: 5px;
          overflow: hidden;
          >div{
            float: left;
            text-indent: 22px;
            width: 54px;
            height: 26px;
            line-height: 26px;
            color: #fff;
            position: relative;
            cursor: pointer;
            i{
              position: absolute;
              width: 16px;
              height: 16px;
              left: 4px;
              top: 6px;
            }
          }
          .add{
            background-color: #49b4d4;
            i{
              background: url('../../assets/img/add.png') no-repeat;
            }
          }
          .edit{
            background-color: #f0ad4e;
            i{
              background: url('../../assets/img/edit.png') no-repeat;
            }
          }
          .delete{
            background-color: #d9534f;
            i{
              background: url('../../assets/img/delete.png') no-repeat;
            }
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
          width: 36px;
          padding-top: 2px;
          input{
            width: 15px;
            height: 15px;
            cursor: pointer;
          }
        }
        li:nth-child(3){
          width: 113px;
        }
        li:nth-child(4){
          width: 110px;
        }
        li:nth-child(5){
          width: 78px;
        }
        li:nth-child(6){
          width: 89px;
        }
        li:nth-child(7){
          width: 75px;
        }
        li:nth-child(8){
          width: 78px;
        }
        li:nth-child(9){
          width: 88px;
        }
        li:nth-child(10){
          width: 120px;
        }
        li:nth-child(11){
          width: 195px;
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