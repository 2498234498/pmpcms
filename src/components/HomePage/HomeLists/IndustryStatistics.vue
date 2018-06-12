<template>
  <div>
    <div class="banner-img"></div>
    <div class="lists-con">
      <div class="left">
        <div class="bg-line">
          <div class="top-ball"></div>
          <div class="line"></div>
          <div class="bottom-ball"></div>
        </div>
        <ul class="left-ul">
          <li @click="toIntro">
            <img src="../../../assets/img/company1.png">
            <span>公司信息</span>
          </li>
          <li @click="toMap">
            <img src="../../../assets/img/map-icon1.png">
            <span>地图检测</span>
          </li>
          <li @click="toPartner">
            <img src="../../../assets/img/partner1.png">
            <span>合作企业</span>
          </li>
          <li @click="toStatistics" class="intro">
            <img src="../../../assets/img/statistics.png">
            <span>行业统计</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <h3>行业统计</h3>
        <div class="line"></div>
        <div class="chart">待添加饼状图...</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

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
    background: url('../../../assets/img/banner.png') no-repeat center center; 
  }
  .lists-con{
    width: 1198px;
    margin: 0 auto;
    overflow: hidden;
    .left{
      margin-top: 26px;
      width: 174px;
      height: 376px;
      position: relative;
      float: left;
      .bg-line{
        position: absolute;
        left: 79px;
        top: 0;
        .top-ball{
          margin-left: 2px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: #c7c5c5;
        }
        .line{
          border-left: 1px solid #c7c5c5;
          height: 340px;
          margin-left: 9px;
        }
        .bottom-ball{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #c7c5c5;
        }
      }
      .left-ul{
        position: relative;
        padding-top: 44px;
        li{
          width: 172px;
          height: 56px;
          line-height: 58px;
          border: 1px solid #b2b0b0;
          color: #464646;
          background-color: #fff;
          text-align: center;
          margin-bottom: 20px;
          cursor: pointer;
          img{
            vertical-align: middle;
          }
          span{
            vertical-align: middle;
          }
        }
        .intro{
          color: #fff;
          background-color: #0088ec;
        }
      }
    }
    .right{
      float: left;
      margin-left: 76px;
      h3{
        margin-top: 54px;
        font-size: 24px;
        color: #464646;
      }
      .line{
        width: 816px;
        margin-top: 6px;
        border-top: 3px solid #5da10b;
      }
      .chart{
        margin-top: 30px;

      }
    }
  }
</style>