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
      <li>通道编号</li>
      <li>信息类型</li>
      <li>污染物</li>
      <li>维护状态</li>
      <li>更新时间</li>
    </ul>
    <div class="tr-container" v-for="(v,i) in 4" :key="i">
      <ul class="table-th table-tr" @click="isShow=i">
        <li>{{v}}</li>
        <li>+</li>
        <li>{{v}}</li>
        <li>我是内容</li>
        <li>我是内容</li>
        <li>我是内容</li>
        <li>我是内容</li>
      </ul>
      <div class="expansion" v-show="i==isShow">
        <ul class="expansion-th">
          <li></li>
          <li>污染物</li>
          <li>系数</li>
          <li>基数</li>
          <li>报警上限</li>
          <li>报警下限</li>
          <li>单位</li>
          <li>量程上限</li>
          <li>量程下限</li>
          <li>公式计算</li>
          <li>是否采集</li>
        </ul>
        <ul class="expansion-tr expansion-th">
          <li>1</li>
          <li>硫</li>
          <li>1.0</li>
          <li>100</li>
          <li>12</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isShow: 0
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
    width: 116px;
  }
  li:nth-child(4){
    width: 126px;
  }
  li:nth-child(5){
    width: 152px;
  }
  li:nth-child(6){
    width: 175px;
  }
  li:nth-child(7){
    width: 170px;
  }
}
.table-tr{
  cursor: pointer;
  li:nth-child(n+2){
    background-color: #fff; 
  }
}
.expansion{
  height: 76px;
  padding-top: 6px;
  border: 1px solid #d9d9d9;
  border-top: none;
  .expansion-th{
    width: 758px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #f5f5f5;
    li{
      float: left;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-right: 1px solid #d9d9d9;
      border-top: 1px solid #d9d9d9;
    }
    li:nth-child(1){
      width: 32px;
      border-left: 1px solid #d9d9d9;
    }
    li:nth-child(2){
      width: 75px;
    }
    li:nth-child(3){
      width: 58px;
    }
    li:nth-child(4){
      width: 58px;
    }
    li:nth-child(5){
      width: 81px;
    }
    li:nth-child(6){
      width: 77px;
    }
    li:nth-child(7){
      width: 46px;
    }
    li:nth-child(8){
      width: 73px;
    }
    li:nth-child(9){
      width: 80px;
    }
    li:nth-child(10){
      width: 85px;
    }
    li:nth-child(11){
      width: 93px;
    }
  }
  .expansion-tr.expansion-th{
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9;
  }
}        
</style>