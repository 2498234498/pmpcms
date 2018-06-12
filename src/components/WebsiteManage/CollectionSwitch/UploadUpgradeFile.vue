<template>
  <div>
    <div class="operations">
      <div class="left-btns">
        <span>文件类型:</span>
        <select name="" id="">
          <option value=""></option>
        </select>
        <span>版本:</span>
        <input type="text">
        <span>所属:</span>
        <input type="text">
        <button class="search"><i></i>查询</button>
      </div>
      <div class="right-btns">
        <div class="extract" @click="isShow=true"><i></i>上传</div>
        <div class="download"><i></i>下载</div>
      </div>
    </div>
    <ul class="table-th">
      <li></li>
      <li></li>
      <li>文件名</li>
      <li>文件类型</li>
      <li>所属</li>
      <li>版本</li>
      <li>大小(KB)</li>
      <li>备注</li>
      <li>上传时间</li>
      <li>操作</li>
    </ul>
    <ul class="table-th table-tr" v-for="(v,i) in 4" :key="i">
      <li>{{v}}</li>
      <li><input type="checkbox" name="" id=""></li>
      <li>{{v}}</li>
      <li>国家平台</li>
      <li>网口1</li>
      <li>192.168.1.225</li>
      <li>7007</li>
      <li>46446464654</li>
      <li>2018-5-30</li>
      <li><a href="javascript:;">删除</a></li>
    </ul>
    <upload-win v-show="isShow" @close="isShow=false"></upload-win>
  </div>
</template>
<script>
import UploadWin from './UploadWin'
export default {
  components: { UploadWin },
  data(){
    return{
      isShow: false
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
  .left-btns{
    font-size: 14px;
    height: 46px;
    line-height: 46px;
    position: relative;
    span{
      margin: 0 10px;
    }
    select{
      border-radius: 5px;
      color: #bcbbbb;
      width: 130px;
      height: 26px;
    }
    input{
      width: 86px;
      height: 26px;
      border: 1px solid #d9d9d9;
      text-indent: 5px;
      caret-color: #d9d9d9;
      color: #666;
    }
    .search{
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
      }
    }
    .search{
      margin: 0 10px;
      background-color: #54ad90;
      i{
        background: url('../../../assets/img/search-white.png') no-repeat;
      }
    }
  }
  .right-btns {
    position: absolute;
    right: 12px;
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
    .extract {
      background-color: #f0ad4e;
      i {
        background: url("../../../assets/img/extract.png") no-repeat;
      }
    }
    .download {
      background-color: #d9534f;
      i {
        background: url("../../../assets/img/download.png") no-repeat;
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
    width: 95px;
  }  
  li:nth-child(4){
    width: 118px;
  }
  li:nth-child(5){
    width: 72px;
  }
  li:nth-child(6){
    width: 93px;
  }
  li:nth-child(7){
    width: 70px;
  }
  li:nth-child(8){
    width: 88px;
  }
  li:nth-child(9){
    width: 103px;
  }
  li:nth-child(10){
    width: 100px;
  }
}
.table-tr{
  cursor: pointer;
  li:nth-child(n+2){
    background-color: #fff; 
  }
}
</style>