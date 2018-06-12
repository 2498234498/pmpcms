<template>
  <div class="list-data">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>站点管理</span>
        <span class="gt">></span>
        <span class="active">数据一览</span>
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
          <div class="con-left">
            <div class="con-tr">
              <div class="first-d">监控点名称 :</div>
              <div class="second-d">xxx</div>
              <div class="first-d">MN号 :</div>
              <div class="second-d">xxx</div>
            </div>
            <div class="con-tr">
              <div class="first-d">监控点类型 :</div>
              <div class="second-d">xxx</div>
              <div class="first-d">所属企业 :</div>
              <div class="second-d">xxx</div>
            </div>
            <div class="con-tr">
              <div class="first-d">企业地址 :</div>
              <div class="second-d">xxx</div>
              <div class="first-d">地理位置 :</div>
              <div class="second-d">xxx</div>
            </div>
            <div class="con-tr">
              <div class="first-d">监控范围 :</div>
              <div class="second-d">xxx</div>
              <div class="first-d">运维企业 :</div>
              <div class="second-d">xxx</div>
            </div>
            <div class="con-tr">
              <div class="first-d">运维有效期 :</div>
              <div class="second-d">xxx</div>
              <div class="first-d">生产状态 :</div>
              <div class="second-d">xxx</div>
            </div>
            <div class="con-tr">
              <div class="first-d">运行状态 :</div>
              <div class="second-d">xxx</div>
              <div class="first-d">最新数据时间 :</div>
              <div class="second-d">xxx</div>
            </div>
          </div>
          <div class="con-right"></div>
        </div>
        <div class="data-list">
          <div class="table-header">
            <div class="two-btn">
              <button @click="isClicked=true" :style="{backgroundColor: isClicked?'#62bdc1':''}">数据图形</button>
              <button @click="isClicked=false" :style="{backgroundColor: isClicked?'':'#62bdc1'}">数据列表</button>
            </div>
          </div>
          <ul class="table-th">
            <li></li>
            <li>污染物名称</li>
            <li>实时值</li>
            <li>超标上限</li>
            <li>超标下限</li>
            <li>单位</li>
            <li>数据状态</li>
            <li>设备名称</li>
            <li>数据时间</li>
          </ul>
          <ul class="table-th table-tr" v-for="(v,i) in 8" :key="i">
            <li>{{v}}</li>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
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
                                }
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
  }
}
</script>
<style lang='scss' scoped>
  .list-data{
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
          overflow: hidden;
          .con-left{
            float: left;
            width: 521px;
            border-right: 1px solid #d9d9d9;
            border-bottom: 1px solid #d9d9d9;
            .con-tr{
              height: 46px;
              line-height: 46px;
              >div{
                height: 46px;
                float: left;
                border-left: 1px solid #d9d9d9;
                border-top: 1px solid #d9d9d9;
                text-align: center;
              }
              .first-d{
                background-color: #f9fafc;
                width: 110px;
              }
              .second-d{
                width: 150px;
              }
            }
          }
          .con-right{
            float: left;
            width: 282px;
            height: 277px;
            border: 1px solid #d9d9d9;
            border-left: none;
          }
        }
        .data-list{
          margin-top: 8px;
          .table-header{
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
              width: 92px;
            }
            li:nth-child(3){
              width: 99px;
            }
            li:nth-child(4){
              width: 99px;
            }
            li:nth-child(5){
              width: 76px;
            }
            li:nth-child(6){
              width: 71px;
            }
            li:nth-child(7){
              width: 86px;
            }
            li:nth-child(8){
              width: 79px;
            }
            li:nth-child(9){
              width: 169px;
            }
          }
          .table-tr{
            li:nth-child(n+2){
              background-color: #fff; 
            }
          }
          .table-tr:last-child{
            border-bottom: 1px solid #d9d9d9;
          }
        }
        .todo-pageination{
          margin-top: 30px;
        }
      }
    }
  }
</style>