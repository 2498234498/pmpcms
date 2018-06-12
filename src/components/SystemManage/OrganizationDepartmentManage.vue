<template>
  <div class="organization-department">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>系统管理</span>
        <span class="gt">></span>
        <span class="active">组织部门管理</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="month-table">
      <div class="table-left">
        <div class="left-header">
          <i class="list"></i>
          环保组织列表
        </div>
        <div class="left-con">
          <Tree :data="test" @on-select-change="clickme"></Tree>
        </div>
      </div>
      <div class="table-right">
        <div class="table-con">
          <div class="table-header">
            <span>部门名称:</span>
            <input type="text">
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
            <li>部门名称</li>
            <li>上级部门名称</li>
            <li>创建时间</li>
          </ul>
          <ul class="table-th table-tr" v-for="(v,i) in 8" :key="i">
            <li>{{v}}</li>
            <li><input type="checkbox" :checked="v==initialValue" @click="changeInit(v)"></li>
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
      },
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
  .organization-department{
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
            input{
              border-radius: 5px;
              border: 1px solid #d9d9d9;
              color: #666;
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
              padding-top: 3px;
              input{
                width: 15px;
                height: 15px;
                cursor: pointer;
              }
            }
            li:nth-child(3){
              width: 213px;
            }
            li:nth-child(4){
              width: 265px;
            }
            li:nth-child(5){
              width: 257px;
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