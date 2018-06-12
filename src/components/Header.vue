<template>
  <div class="header">
    <div class="header-title">
      <h1>污染源监控平台3.0</h1>
      <div class="header-right">
        <div class="search-btn">
          <input type="text" placeholder="请输入查找的关键字">
          <img src="../assets/img/search-btn.png" alt="">
        </div>
        <p>欢迎,SuperChao</p>
        <div class="logout">
          <router-link to="/"><img src="../assets/img/logout.png" alt="">退出</router-link>
        </div>
      </div>
    </div>
    <div class="banner">
      <ul class="banner-ul">
        <li class="home-page"><router-link to="/mainView">首页</router-link></li>
        <li class="banner-li" v-for="(val,index) in lists" :key="index">
          <p>{{val.tit}}</p>
          <ul>
            <li class="li-li" v-for="(v,i) in val.con" :key="i">
              <router-link :to="v.to">{{v.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      lists: [
        {tit: '事务管理',con:[{name: '待办事项',to: '/mainView/work'},{name: '已办事项',to: ''},{name: '消息提醒',to: ''},{name: '短信提醒',to: ''}]},
        {tit: '站点管理',con:[{name: '数据一览',to: {name: 'ListofData'}},{name: '实时数据',to: ''},{name: '历史数据',to: ''},{name: '报警数据',to: ''},{name: '数采仪管理',to: ''},{name: '国标反控',to:''}]},
        {tit: '数据分析',con:[{name: '多站单参',to: ''},{name: '日数据环比统计',to: ''},{name: '日数据同比统计',to: ''},{name: '月数据环比分析',to: ''},{name: '月数据同比分析',to: ''}]},
        {tit: '数据报表',con:[{name: '总量报表',to: {name: 'TotalReport'}},{name: '均值报表',to: ''},{name: '月数据报表',to: ''},{name: '年数据报表',to: ''},{name: '区域数据完整率统计',to:''}]},
        {tit: '系统管理',con:[{name: '角色管理',to: {name: 'RoleManage'}},{name: '用户管理',to: ''},{name: '企业管理',to: ''},{name: '企业部门管理',to: ''},{name: '监控点管理',to: ''},{name: '地区管理',to: ''}]},
        {tit: '日志管理',con:[{name: '反控日志',to: {name: 'ControlLog'}},{name: '报文日志',to: ''},{name: '操作日志',to: ''},{name: '异常日志',to: ''},{name: '平台日志',to: ''}]}
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
  .header{
    .header-title{
      height: 70px;
      background-color: #03468a;
      position: relative;
      h1{
        color: #fff;
        font-size: 24px;
        position: absolute;
        left: 50px;
        top: 18px;
      }
      .header-right{
        position: absolute;
        right: 38px;
        top: 16px;
        width: 500px;
        font-size: 14px;
        .search-btn{
          position: absolute;
          input::-webkit-input-placeholder{
              color:#cecccc;
          }
          input::-moz-placeholder{   /* Mozilla Firefox 19+ */
              color:#cecccc;
          }
          input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
              color:#cecccc;
          }
          input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
              color:#cecccc;
          }
          input{
            color: #cecccc;
            background-color: #4c424b;
            width: 227px;
            height: 38px;
            border-radius: 19px;
            text-indent: 20px;
          }
          img{
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
          }
        }
        p{
          position: absolute;
          left: 270px;
          top: 10px;
          color: #fff;
        }
        .logout{
          position: absolute;
          right: 0;
          top: 10px;
          color: #fff;
          cursor: pointer;
          img{
            vertical-align: middle;
          }
          a{
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
    .banner{
      height: 45px;
      background-color: #1e6ab7;
      .banner-ul{
        margin: 0 auto;
        width: 1200px;
        .home-page,.banner-li{
          font-size: 14px;
          cursor: pointer;
          text-align: center;
          float: left;
          width: 170px;
          height: 45px;
          line-height: 45px;
          color: #fff;
          a{
            text-decoration: none;
            color: #fff;
            display: inline-block;
            width: 170px;
            height: 45px;
          }
        }
        .li-li{
          font-size: 14px;
          height: 35px;
          line-height: 35px;
          background-color: #2377cd;
          display: none;
        }
        .banner-li:hover,.home-page:hover{
          background-color: #2377cd;
          .li-li{
            display: block;
          }
          .li-li:hover{
            background-color: #155ea7;
          }
        }
      }
    }
  }
</style>