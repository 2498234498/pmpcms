<template>
  <div class="month-data">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>数据报表</span>
        <span class="gt">></span>
        <span class="active">月数据报表</span>
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
          </div>
          <ul class="table-th">
            <li></li>
            <li>月份</li>
            <li>
              <p class="p-top">pH值(无量纲)</p>
              <div class="p-bots">
                <p class="p1">平均值</p>
                <p class="p2">累计值</p>
              </div>
            </li>
          </ul>
          <ul class="table-tr" v-for="(v,i) in 4" :key="i">
            <li>{{v}}</li>
            <li>我是内容</li>
            <li>我是内容</li>
            <li>我是内容</li>
          </ul>
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
      clickme: function(arr){
        console.log('选中数据id数组:' , arr[0].title)
      }
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
  .month-data{
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
            .search{
              margin: 0 10px;
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
                background: url('../../assets/img/search-white.png') no-repeat;
              }
            }
          }
          .table-th{
            background-color: #f5f5f5;
            border-top: 1px solid #d9d9d9;
            font-size: 12px;
            overflow: hidden;
            li{
              height: 60px;
              float: left;
              text-align: center;
              border-right: 1px solid #d9d9d9; 
            }
            li:nth-child(1){
              width: 32px;
              border-left: 1px solid #d9d9d9; 
            }
            li:nth-child(2){
              line-height: 60px;
              width: 249px;
            }
            li:nth-child(3){
              width: 522px;
              .p-top{
                height: 31px;
                line-height: 31px;
              }
              .p-bots{
                overflow: hidden;
                p{
                  height: 29px;
                  line-height: 29px;
                  float: left;
                  border-top: 1px solid #d9d9d9;
                }
                .p1{
                  width: 265px;
                  border-right: 1px solid #d9d9d9;
                }
                .p2{
                  width: 256px;
                }
              }
            }
          }
          .table-tr{
            overflow: hidden;
            font-size: 12px;
            li{
              height: 30px;
              line-height: 30px;
              float: left;
              text-align: center;
              border-top: 1px solid #d9d9d9;
              border-right: 1px solid #d9d9d9;
            }
            li:nth-child(1){
              background-color: #f5f5f5;
              width: 32px;
              border-left: 1px solid #d9d9d9;
            }
            li:nth-child(2){
              width: 249px;
            }
            li:nth-child(3){
              width: 265px;
            }
            li:nth-child(4){
              width: 257px;
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