<template>
  <div>
    <div class="operations">
      <div class="left-btns">
        <div class="add"><i></i>添加</div>
        <div class="extract"><i></i>提取</div>
        <div class="synchronize"><i></i>刷新</div>
      </div>
    </div>
    <ul class="table-th">
      <li></li>
      <li></li>
      <li>用户编码</li>
      <li>用户类型</li>
      <li>用户名</li>
      <li>电话号码</li>
      <li>操作</li>
    </ul>
    <div class="tr-container" v-for="(v,i) in 4" :key="i">
      <ul class="table-th table-tr">
        <li>{{v}}</li>
        <li><input type="checkbox" name="" id=""></li>
        <li>{{v}}</li>
        <li>管理员</li>
        <li>jack</li>
        <li>12345611111</li>
        <li><a href="javascript:;">编辑</a> <a href="javascript:;">删除</a></li>
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
    .add {
      background-color: #54ad90;
      i {
        background: url("../../../assets/img/add.png") no-repeat;
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
  a{
    display: inline-block;
    width: 60px;
  }
}
</style>