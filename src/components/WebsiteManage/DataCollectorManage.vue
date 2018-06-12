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
        <span class="active">数采仪管理</span>
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
            <div class="switch-btns">
              <div class="btn" 
              v-for="(value,index) in lists" 
              :key="index" @click="isActive(index)"
              :style="{backgroundColor: index==active?'#85d5d9':''}">
                <router-link :to='value.to'>{{value.list}}</router-link>
              </div>
            </div>
          </div>
          <router-view></router-view>
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
      lists: [
        {list: '基本参数',to: {name: 'BasicParameters'}},
        {list: '模拟量',to: {name: 'AnalogQuantity'}},
        {list: '串口',to: {name: 'SerialPort'}},
        {list: '本地网络参数',to: {name: 'NetworkParameters'}},
        {list: '用户管理',to: {name: 'UsersManage'}},
        {list: '本机信息',to: {name: 'LocalInformation'}},
        {list: '程序版本',to: {name: 'ProgramVersion'}},
        {list: '服务器参数',to: {name: 'ServerParameters'}},
        {list: '上传升级文件',to: {name: 'UpgradeFile'}}
      ],     
      active: 0
    }
  },
  methods: {
    goTo(){
      console.log('goTo');
    },
    clickme(arr){
      console.log('选中数据id数组:' , arr[0].title)
    },
    isActive(index){
      this.active = index
    }
  }
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
            overflow: hidden;
            .btn{
              float: left;
              width: 89px;
              text-align: center;
              border-right: 1px solid #ccc;
              cursor: pointer;
              a{
                color: #666;
                display: inline-block;
                width: 100%;
                height: 100%;
              }
            }
            .btn:last-child{
              border: none;
              width: 98px;
            }
            .btn:nth-child(3){
              width: 69px;;
            }
            .btn:nth-child(4){
              width: 100px;;
            }
          }
          
        }
      }
    }
  }
</style>