<template>
  <div>
    <div class="operations">
      <div class="left-btns">
        <div class="setting"><i></i>设置</div>
        <div class="extract"><i></i>提取</div>
        <div class="synchronize"><i></i>刷新</div>
      </div>
    </div>
    <div class="network-setting">
      <p>网口1</p>
      <div class="setting">
        <span>本地IP1</span>
        <input type="text">
        <span>网关1</span>
        <input type="text">
      </div>
      <div class="setting">
        <span>子网掩码1</span>
        <input type="text">
        <span>DNS服务器1</span>
        <input type="text">
      </div>
      <p>网口2</p>
      <div class="setting">
        <span>本地IP2</span>
        <input type="text">
        <span>网关2</span>
        <input type="text">
      </div>
      <div class="setting">
        <span>子网掩码2</span>
        <input type="text">
        <span>DNS服务器2</span>
        <input type="text">
      </div>
      <p>无线</p>
      <div class="setting">
        <span>APN</span>
        <input type="text">
        <span>拨号名称</span>
        <input type="text">
      </div>
      <div class="setting">
        <span>拨号密码</span>
        <input type="text">
        <span>类型</span>
        <select name="" id="">
          <option value=""></option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  }
}
</script>
<style lang='scss' scoped>
.operations {
  height: 46px;
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-bottom: none;
  position: relative;
  .left-btns {
    position: absolute;
    left: 12px;
    top: 10px;
    border-radius: 5px;
    overflow: hidden;
    > div {
      float: left;
      text-indent: 22px;
      width: 54px;
      height: 26px;
      line-height: 26px;
      color: #fff;
      position: relative;
      cursor: pointer;
      i {
        position: absolute;
        width: 16px;
        height: 16px;
        left: 4px;
        top: 6px;
      }
    }
    .setting {
      background-color: #49b4d4;
      i {
        background: url("../../../assets/img/setting.png") no-repeat;
      }
    }
    .extract {
      background-color: #f0ad4e;
      i {
        background: url("../../../assets/img/extract.png") no-repeat;
      }
    }
    .synchronize {
      background-color: #d9534f;
      i {
        background: url("../../../assets/img/synchronize.png") no-repeat;
      }
    }
  }
}
.network-setting {
  border: 1px solid #d9d9d9;
  padding-left: 28px;
  height: 462px;
  border-radius: 0 0 5px 5px;
  p{
    font-size: 14px;
    margin-top: 16px;
  }
  .setting{
    margin-top: 18px;
    span{
      margin-left: 54px;
      display: inline-block;
      width: 75px;
    }
    input,select{
      width: 211px;
      height: 30px;
      border: 1px solid #d9d9d9;
    }
  }
}
</style>