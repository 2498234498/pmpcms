<template>
  <div>
    <div class="operations">
      <div class="left-btns">
        <div class="upgrade"><i></i>升级</div>
        <div class="extract"><i></i>提取</div>
        <div class="synchronize"><i></i>刷新</div>
      </div>
    </div>
    <div class="network-setting">
      <p>数据更新时间</p>
      <div class="setting">
        <span>文件系统版本</span>
        <input type="text">
        <span>耗材版本</span>
        <input type="text">
      </div>
      <div class="setting">
        <span>固件版本</span>
        <input type="text">
        <span>平台协议版本</span>
        <input type="text">
      </div>
      <div class="setting">
        <span>内核版本</span>
        <input type="text">
        <span>仪表反控版本</span>
        <input type="text">
      </div>
      <div class="setting">
        <span>巡检版本</span>
        <input type="text">
        <span>采集协议版本</span>
        <input type="text">
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
    .upgrade {
      background-color: #49b4d4;
      i {
        background: url("../../../assets/img/upgrade.png") no-repeat;
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
      margin-left: 30px;
      display: inline-block;
      width: 120px;
    }
    input{
      width: 211px;
      height: 30px;
      border: 1px solid #d9d9d9;
    }
  }
}
</style>