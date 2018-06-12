<template>
  <div class="year-data">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>数据报表</span>
        <span class="gt">></span>
        <span class="active">年数据报表</span>
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
            <span>时间:</span>
            <select name="" id="">
              <option value=""></option>
            </select>
            <button class="search"><i></i>查询</button>
            <button class="export"><i></i>导出</button>
          </div>
          <ul class="table-th">
            <li></li>
            <li>平均值</li>
            <li>最大值</li>
            <li>最小值</li>
            <li>累计值</li>
          </ul>
          <div class="table-tr" v-for="(v,i) in rows" :key="i">
            <div class="first-space">{{i+1}}</div>
            <p class="year">{{v.yearDataTime}}</p>
            <ul>
              <li>污水(L/S)</li>
              <li>{{v['w00000-avg']}}</li>
              <li>{{v['w00000-max']}}</li>
              <li>{{v['w00000-min']}}</li>
              <li>{{v['w00000-sum']}}</li>
            </ul>
            <ul>
              <li>累计流量()</li>
              <li>{{v['w00001-avg']}}</li>
              <li>{{v['w00001-max']}}</li>
              <li>{{v['w00001-min']}}</li>
              <li>{{v['w00001-sum']}}</li>
            </ul>
            <ul>
              <li>pH值(无量纲)</li>
              <li>{{v['w01001-avg']}}</li>
              <li>{{v['w01001-max']}}</li>
              <li>{{v['w01001-min']}}</li>
              <li>{{v['w01001-sum']}}</li>
            </ul>
            <ul>
              <li>化学需氧量(mg/L)</li>
              <li>{{v['w01018-avg']}}</li>
              <li>{{v['w01018-max']}}</li>
              <li>{{v['w01018-min']}}</li>
              <li>{{v['w01018-sum']}}</li>
            </ul>
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
export default {
  data(){
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
      "rows": [
        {
          "w01001-sum": 4.04,
          "w00001-avg": 0.00,
          "w01018-min": 0.00,
          "w01018-max": 0.00,
          "w00000-min": 0.00,
          "w01018-sum": 0.00,
          "yearDataTime": "2018年份",
          "w00001-min": 0.00,
          "w01001-avg": 3.55,
          "w01018-avg": 0.00,
          "w00000-max": 0.00,
          "w00001-sum": 0.00,
          "w01001-max": 20.60,
          "w00000-avg": 0.00,
          "w01001-min": 3.44,
          "w00000-sum": 0.00,
          "w00001-max": 0.00
        },
        {
          "w01001-sum": 4.04,
          "w00001-avg": 0.00,
          "w01018-min": 0.00,
          "w01018-max": 0.00,
          "w00000-min": 0.00,
          "w01018-sum": 0.00,
          "yearDataTime": "2017年份",
          "w00001-min": 0.00,
          "w01001-avg": 3.55,
          "w01018-avg": 0.00,
          "w00000-max": 0.00,
          "w00001-sum": 0.00,
          "w01001-max": 20.60,
          "w00000-avg": 0.00,
          "w01001-min": 3.44,
          "w00000-sum": 0.00,
          "w00001-max": 0.00
        }
      ]
    }
  },
  methods: {
    goTo(){
      console.log('goTo');
    },
    clickme(arr){
      console.log('选中数据id数组:' , arr)
    }
  }
}
</script>
<style lang='scss' scoped>
  .year-data{
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
            span{
              margin: 0 10px;
            }
            select{
              border-radius: 5px;
              color: #bcbbbb;
              width: 130px;
              height: 26px;
            }
            .search,.export{
              margin-left: 10px;
              background-color: #54ad90;
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
                background: url('../../assets/img/export.png') no-repeat;
              }
            }
          }
          .table-th{
            background-color: #f5f5f5;
            text-align: center;
            line-height: 30px;
            height: 30px;
            li{
              height: 30px;
              border-top: 1px solid #d9d9d9;
              border-right: 1px solid #d9d9d9;
              float: left;
            }
            li:nth-child(1){
              width: 251px;
              border-left: 1px solid #d9d9d9;
            }
            li:nth-child(2){
              width: 138px;
            }
            li:nth-child(3){
              width: 138px;
            }
            li:nth-child(4){
              width: 138px;
            }
            li:nth-child(5){
              width: 138px;
            }
          }
          .table-tr{
            height: 120px;
            .first-space{
              float: left;
              width: 30px;
              height: 120px;
              line-height: 120px;
              background-color: #f5f5f5;
              text-align: center;
              border: 1px solid #d9d9d9;
              border-bottom: none;
            }
            .year{
              float: left;
              width: 68px;
              height: 120px;
              line-height: 120px;
              background-color: #f5f5f5;
              text-align: center;
              border-top: 1px solid #d9d9d9;
              border-right: 1px solid #d9d9d9;
            }
            ul{
              height: 30px;
              li{
                float: left;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border-top: 1px solid #d9d9d9;
                border-right: 1px solid #d9d9d9;
              }
              li:nth-child(1){
                width: 153px;
              }
              li:nth-child(2){
                width: 138px;
              }
              li:nth-child(3){
                width: 138px;
              }
              li:nth-child(4){
                width: 138px;
              }
              li:nth-child(5){
                width: 138px;
              }
            }
          }
          .table-tr:last-child{
            border-bottom: 1px solid #d9d9d9;
            border-radius: 0 0 5px 5px;
            overflow: hidden;
          }
        }
        .todo-pageination{
          margin-top: 30px;
        }
      }
    }
  }
</style>