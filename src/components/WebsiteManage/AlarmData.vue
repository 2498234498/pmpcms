<template>
  <div class="alarm-data">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>站点管理</span>
        <span class="gt">></span>
        <span class="active">报警数据</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="month-table">
      <div class="table-left">
        <div class="left-header">
          <i class="list"></i>
          监控点列表
        </div>
        <div class="left-con">
          <Tree :data="test" @on-select-change="clickme"></Tree>
        </div>
      </div>
      <div class="table-right">
        <div class="table-con">
          <div class="table-header">
            <span>开始时间:</span>
            <select name="" id="">
              <option value=""></option>
            </select>
            <span>结束时间:</span>
            <select name="" id="">
              <option value=""></option>
            </select>
            <button class="search"><i></i>查询</button>
          </div>
          <div class="table-switch">
            <div class="two-btn">
              <button @click="isClicked=true" :style="{backgroundColor: isClicked?'#62bdc1':''}">数据图形</button>
              <button @click="isClicked=false" :style="{backgroundColor: isClicked?'':'#62bdc1'}">数据列表</button>
            </div>
          </div>
          <ul class="table-th" v-if="isClicked">
            <li></li>
            <li>最新时间</li>
            <li>污水 L/S</li>
            <li>累计流量</li>
            <li>化学需氧量 mg/L</li>
            <li>pH值(无量纲)</li>
          </ul>
          <ul class="table-th table-tr" v-for="(v,i) in 8" :key="i" v-if="isClicked">
            <li>{{v}}</li>
            <li>我是内容</li>
            <li>我是内容</li>
            <li>我是内容</li>
            <li>我是内容</li>
            <li>我是内容</li>
          </ul>
          <div v-if="!isClicked">
            <ve-line :data="chartData" :extend="extend"></ve-line>
          </div>
        </div>
        <div class="todo-pageination">
          <Page :total=100 :size=5 :page=1 :change="goTo"></Page>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import VeLine from 'v-charts/lib/line'
export default {
  data(){
    this.extend = {
      series: {
        smooth: false
      }
    }
    return {
      test: [
      {
          title: '广东省',
          expand: true,
          children: [
              {
                  title: '广州市',
                  expand: true,
                  children: [
                      {
                          title: '市辖区',
                          expand: true,
                          children: [
                            {
                              title: '广州博控',
                              expand: true,
                              children: [
                                {
                                  title: '林工测试监控点1'
                                },
                                {
                                  title: '林工测试监控点2'
                                },
                                {
                                  title: '林工测试监控点3'
                                },
                              ]
                            }
                          ]
                      },
                  ]
              },
              {
                  title: '清远市',
                  expand: true,
                    children: [
                      {
                          title: 'leaf 1-2-1'
                      },
                      {
                          title: 'leaf 1-2-1'
                      }
                    ]
              }
          ]
        }
      ],
      clickme: function(arr){
        console.log('选中数据id数组:' , arr[0].title)
      },
      isClicked: true
    }
  },
  methods: {
    goTo(){
      console.log('goTo');
    }
  },
  created () {
    this.chartData = {
      columns: ['月份', '当前值', '上一年值'],
      rows: [
        { '月份': '1', '当前值': 123, '上一年值': 7123 },
        { '月份': '2', '当前值': 1223, '上一年值': 3123 },
        { '月份': '3', '当前值': 2123, '上一年值': 4123 },
        { '月份': '4', '当前值': 4123, '上一年值': 2123 },
        { '月份': '5', '当前值': 3123, '上一年值': 1223 },
        { '月份': '6', '当前值': 7123, '上一年值': 123 },
        { '月份': '7', '当前值': 123, '上一年值': 7123 },
        { '月份': '8', '当前值': 1223, '上一年值': 3123 },
        { '月份': '9', '当前值': 2123, '上一年值': 4123 },
        { '月份': '10', '当前值': 4123, '上一年值': 2123 },
        { '月份': '11', '当前值': 3123, '上一年值': 1223 },
        { '月份': '12', '当前值': 7123, '上一年值': 123 }
      ]
    }
  },
  components: { VeLine }
}
</script>
<style lang='scss' scoped>
  .alarm-data{
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
    .month-table{
      margin-top: 28px;
      color: #666;
      overflow: hidden;
      .table-left{
        float: left;
        width: 201px;
        height: 554px;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        .left-header{
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #d9d9d9;
          .list{
            display: inline-block;
            width: 19px;
            height: 13px;
            background: url('../../assets/img/lists.png') no-repeat;
            margin-left: 14px;
            margin-right: 10px;
            vertical-align: middle;
            margin-top: -3px; 
          }
        }
        .left-con{
          padding-left: 6px;
        }
      }
      .table-right{
        float: left;
        margin-left: 10px;
        width: 803px;
        .table-con{
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
            select{
              border-radius: 5px;
              color: #bcbbbb;
              width: 130px;
              height: 26px;
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
          }
          .table-switch{
            height: 46px;
            padding-top: 8px;
            padding-left: 14px;
            background-color: #f5f5f5;
            border: 1px solid #d9d9d9;
            border-bottom: none;
            .two-btn{
              border-radius: 5px;
              border: 1px solid #b2b0b0;
              width: 164px;
              overflow: hidden;
              button{
                cursor: pointer;
                height: 30px;
                width: 81px;
                float: left;
                &:first-child{
                  border-right: 1px solid #b2b0b0;
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
              width: 186px;
            }
            li:nth-child(3){
              width: 163px;
            }
            li:nth-child(4){
              width: 155px;
            }
            li:nth-child(5){
              width: 147px;
            }
            li:nth-child(6){
              width: 120px;
            }
          }
          .table-tr{
            li:nth-child(n+2){
              background-color: #fff; 
            }
          }
          .table-tr:last-child{
            border-bottom: 1px solid #d9d9d9;
            border-radius: 0 0 5px 5px;
          }
        }
        .todo-pageination{
          margin-top: 30px;
        }
      }
    }
  }
</style>