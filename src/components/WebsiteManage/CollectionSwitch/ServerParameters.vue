<template>
  <div>
    <div class="operations">
      <div class="left-btns">
        <div class="setting"><i></i>设置</div>
        <div class="extract"><i></i>提取</div>
        <div class="synchronize"><i></i>刷新</div>
      </div>
    </div>
    <ul class="table-th">
      <li></li>
      <li></li>
      <li>编号</li>
      <li>平台类型</li>
      <li>通信链路</li>
      <li>服务器IP地址</li>
      <li>端口</li>
      <li>MNNUM</li>
      <li>更新时间</li>
    </ul>
    <div class="tr-container" v-for="(v,i) in 4" :key="i">
      <ul class="table-th table-tr">
        <li>{{v}}</li>
        <li><input type="checkbox" name="" id=""></li>
        <li>{{v}}</li>
        <li>国家平台</li>
        <li>网口1</li>
        <li>192.168.1.225</li>
        <li>7007</li>
        <li>46446464654</li>
        <li>2018-5-30 16:27:16</li>
      </ul>
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
.table-th{
  overflow: hidden;
  background-color: #f5f5f5;
  font-size: 12px;
  li{
    text-align: center;
    float: left;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
  }
  li:nth-child(1){
    width: 32px;
    border-left: 1px solid #d9d9d9; 
  }
  li:nth-child(2){
    width: 32px;
    font-size: 18px;
  }
  li:nth-child(3){
    width: 74px;
  }
  li:nth-child(4){
    width: 124px;
  }
  li:nth-child(5){
    width: 121px;
  }
  li:nth-child(6){
    width: 119px;
  }
  li:nth-child(7){
    width: 56px;
  }
  li:nth-child(8){
    width: 108px;
  }
  li:nth-child(9){
    width: 137px;
  }
}
.table-tr{
  cursor: pointer;
  li:nth-child(n+2){
    background-color: #fff; 
  }
}
</style>