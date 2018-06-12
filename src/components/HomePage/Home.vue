<template>
  <div>
    <div class="banner-img"></div>
    <div class="container">
      <div class="introduction">
        <div class="intro-left">
          <div class="intro-left-up">
            <div class="img-con" @click="toIntro">
              <img src="../../assets/img/home1.png">
              <p>企业简介</p>
            </div>
            <div class="img-con map-det" @click="toMap">
              <img src="../../assets/img/home2.png">
              <p>地图检测</p>
            </div>
          </div>
          <div class="intro-left-down">
            <div class="img-con" @click="toPartner">
              <img src="../../assets/img/home3.png">
              <p>合作企业</p>
            </div>
            <div class="img-con" @click="toStatistics">
              <img src="../../assets/img/home4.png">
              <p>行业统计</p>
            </div>
          </div>
        </div>
        <div class="intro-center">
          <h2>广州博控</h2>
          <div class="line"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum error ad, iure at ut molestiae ratione animi quos quo quam tempore tenetur quidem eligendi a qui nihil mollitia! Exercitationem!</p>
        </div>
        <div class="intro-right">
          <div class="intro-r-t">
            <p class="first-p">客户服务：</p>
            <p>020-85577611</p>
            <p>销售热线:</p>
            <p>020-66224998</p>
            <img src="../../assets/img/tel-phone.png" alt="">
          </div>
          <div class="intro-r-b">
            <p>广州博控自动化技术有限公司</p>
            <p>公司网址:</p>
            <p><a href="http://www.bocon.cn" target="_blank">http://www.bocon.cn</a></p>
            <p>公司地址:</p>
            <p>广州市天河软件园建工路12号3楼302</p>
          </div>
        </div>
      </div>
      <div class="waste-water">
        <div class="w-w-banner">
          <h3>废水实时</h3>
          <img src="../../assets/img/waste-water.png">
        </div>
        <ul class="w-w-th">
          <li>在线状态</li>
          <li>企业名称</li>
          <li>排污口名称</li>
          <li>时间</li>
          <li>瞬时流量(L/s)</li>
          <li>COD浓度(mg/L)</li>
          <li>氨氮浓度(mg/L)</li>
          <li>总铬浓度(mg/L)</li>
          <li>PH</li>
        </ul>
        <ul class="w-w-tr" v-for="index in 6" :key=index>
          <li>在线</li>
          <li>xxxx有限公司</li>
          <li>排口</li>
          <li>2018/1/4 8:49:00</li>
          <li>10.66</li>
          <li>187.31</li>
          <li>0.00</li>
          <li>0.00</li>
          <li>0.00</li>
        </ul>
      </div>
      <div class="waste-gas">
        <div class="w-g-banner">
          <h3>废气实时</h3>
          <img src="../../assets/img/waste-gas.png">
        </div>
        <ul class="w-g-th">
          <li>在线状态</li>
          <li>企业名称</li>
          <li>时间</li>
          <li>SO2实测值</li>
          <li>SO2折算值(mg/m3)</li>
          <li>NOx实测值</li>
          <li>NOx折算值(mg/m3)</li>
          <li>PM实测值</li>
          <li>氧量(%)</li>
          <li>流速(m/s)</li>
          <li>流量(m3/H)</li>
          <li>压力(Pa)</li>
        </ul>
        <ul class="w-g-tr" v-for="index in 6" :key=index>
          <li>在线</li>
          <li>xxxx有限公司</li>
          <li>排口</li>
          <li>2018/1/4</li>
          <li>10.66</li>
          <li>187.31</li>
          <li>0.00</li>
          <li>0.00</li>
          <li>0.00</li>
          <li>0.00</li>
          <li>0.00</li>
          <li>0.00</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    toIntro(){
      this.$router.push('/mainView/intro');
    },
    toMap: function(){
      this.$router.push('/mainView/map');
    },
    toPartner(){
      this.$router.push('/mainView/partner');
    },
    toStatistics(){
      this.$router.push('/mainView/statistics');
    }
  }
}
</script>
<style lang='scss' scoped>
  .banner-img{
    height: 320px;
    background: url('../../assets/img/banner.png') no-repeat center center; 
  }
  .container{
    width: 1198px;
    margin: 0 auto;
    .introduction{
      margin-top: 10px;
      overflow: hidden;
      .intro-left{
        float: left;
        .img-con{
          cursor: pointer;
          border: 5px solid #fff;
          border-left: none;
          border-bottom: none;
          width: 160px;
          height: 128px;
          float: left;
          background-color: #7cc624;
          color: #fff;
          img{
            margin-left: 50px;
            margin-top: 15px;
          }
          p{
            font-size: 14px;
            margin-left: 50px;
            margin-top: 13px;
          }
        }
        .img-con.map-det img{
          margin-top: 24px;
        }
        .img-con:hover{
          background-color: #f7b608;
        }
        .intro-left-up,.intro-left-down{
          overflow: hidden;
        }
      }
      .intro-center{
        float: left;
        width: 620px;
        height: 260px;
        margin-left: 16px;
        margin-top: 10px;
        .line{
          border-bottom: 3px solid #7cc624;
          margin-top: 6px;
        }
        p{
          margin-top: 18px;
          text-indent: 2em;
          color: #666;
        }
      }
      .intro-right{
        float: left;
        width: 213px;
        margin-left: 18px;
        margin-top: 4px;
        .intro-r-t{
          font-size: 14px;
          height: 123px;
          position: relative;
          padding-left: 24px;
          background-color: #f7b608;
          color: #fff;
          .first-p{
            padding-top: 36px;
          }
          img{
            position: absolute;
            top: 8px;
            right: 20px;
          }
        }
        .intro-r-b{
          height: 131px;
          font-size: 14px;
          color: #666;
          background-color: #edf0f0;
          p{
            margin-left: 12px;
            margin-right: 12px;
          }
          p:first-child{
            padding-top: 4px;
          }
          a{
            text-decoration: none;
            color: #666;
          }
        }
      }
    }
    .waste-water{
      .w-w-banner{
        height: 42px;
        background-color: #edf0f0;
        padding-left: 40px;
        position: relative;
        h3{
          padding-top: 11px;
          color: #49638c;
        }
        img{
          position: absolute;
          left: 8px;
          top: 6px;
        }
      }
      .w-w-th{
        overflow: hidden;
        background-color: #49638c;
        li{
          font-size: 14px;
          float: left;
          height: 40px;
          width: 133px;
          text-align: center;
          line-height: 40px;
          color: #fff;
        }
      }
      .w-w-tr{
        overflow: hidden; 
        li{
          font-size: 12px;
          float: left;
          height: 30px;
          width: 133px;
          text-align: center;
          line-height: 30px;
        }
        &:nth-child(even){
          background-color: #ececec;
        }
        &:nth-child(odd){
          background-color: #f7fbfd;
        }
      }
    }
    .waste-gas{
      margin-top: 10px;
      .w-g-banner{
        height: 42px;
        background-color: #edf0f0;
        padding-left: 40px;
        position: relative;
        h3{
          padding-top: 11px;
          color: #49638c;
        }
        img{
          position: absolute;
          left: 8px;
          top: 6px;
        }
      }
      .w-g-th{
        overflow: hidden;
        background-color: #49638c;
        li{
          float: left;
          font-size: 14px;
          height: 40px;
          width: 99px;
          text-align: center;
          line-height: 40px;
          color: #fff;
        }
      }
      .w-g-tr{
        overflow: hidden; 
        li{
          font-size: 12px;
          float: left;
          height: 30px;
          width: 99px;
          text-align: center;
          line-height: 30px;
        }
        &:nth-child(even){
          background-color: #ececec;
        }
        &:nth-child(odd){
          background-color: #f7fbfd;
        }
      }
    }
  }
</style>