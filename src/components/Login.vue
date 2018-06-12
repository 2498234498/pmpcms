<template>
  <div class="login-view">
    <div class="container">
      <div class="form">
        <h1>污染源监控平台</h1>
        <div class="first-inp">
          <input type="text">
          <span>账号：</span>
        </div>
        <div class="second-inp">
          <input type="password">
          <span>密码：</span>
        </div>
        <div class="verification">
          <input type="text">
          <span class="verify-text">验证码：</span>
          <span class="verify-box">EMSF</span>
        </div>
        <div class="remember-me">
          <label>
            <input type="checkbox">
            <span>记住密码</span>
          </label>
        </div>
        <div>
          <button class="login" @click="login">登录</button>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>©2017 ALL RIGHTS RESERVEDE <a href="http://www.bocon.cn" target="_blank">HTTP://WWW.BOCON.CN</a></p>
      <p>广州博控自动化技术有限公司 版权所有</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data(){
    return{

    }
  },
  methods: {
    login(){
      this.$router.push('mainView')
    }
  }
}
</script>
<style lang='scss' scoped>
  .login-view{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #3b83d8;
    font-size: 14px;
    color: #565353;
    .container{
      width: 1011px;
      height: 538px;
      margin: 80px auto 35px;
      background-image: url('../assets/img/bg-map.png');
      background-size: cover;
      position: relative;
      .form{
        position: absolute;
        left: 360px;
        bottom: 30px;
        h1{
          font-size: 30px;
          text-align: center;
          color: #fff;
          font-weight: normal;
        }
        .first-inp{
          margin-top: 55px;
        }
        .second-inp{
          margin-top: 18px;
        }
        .first-inp,.second-inp{
          position: relative;
          input{
            font-size: 14px;
            color: #565353;
            width: 300px;
            height: 35px;
            border-radius: 17px;
            text-indent: 60px;
          }
          span{
            position: absolute;
            left: 14px;
            top: 7px;
          }
        }
        .verification{
          margin-top: 18px;
          position: relative;
          input{
            width: 180px;
            height: 35px;
            text-indent: 75px;
            border-radius: 17px;
            vertical-align: top;
          }
          .verify-text{
            position: absolute;
            left: 14px;
            top: 8px;
          }
          .verify-box{
            margin-left: 7px;
            display: inline-block;
            width: 105px;
            height: 35px;
            border-radius: 17px;
            background-color: #fff;
            text-align: center;
            line-height: 35px;
          }
        }
        .remember-me{
          margin-top: 22px;
          input{
            margin-left: 200px;
            vertical-align: middle;
            background-color: #fff;
            color: #fff;
          }
          span{
            color: #fff;
          }
        }
        .login{
          display: inline-block;
          margin-top: 24px;
          width: 264px;
          height: 35px;
          color: #fff;
          text-align: center;
          line-height: 35px;
          background-image: url('../assets/img/login-btn.png');
          background-position: -2px -6px;
          cursor: pointer;
          border: none;
          border-radius: 16px;
        }
      }
    }
    .bottom{
      width: 455px;
      height: 50px;
      margin: 0 auto;
      color: #fff;
      p{
        text-align: center;
      }
      a{
        color: #fff;
      }
    }
  }
</style>