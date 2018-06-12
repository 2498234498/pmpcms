<template>
  <div>
    <div class="operations">
      <div class="left-btns">
        <div class="setting"><i></i>设置</div>
        <div class="extract"><i></i>提取</div>
        <div class="synchronize"><i></i>刷新</div>
      </div>
    </div>
    <div class="table-th">
      <div class="item" v-for="(val,index) in parameters" :key="index">
        <span>{{val}}</span>
        <input type="text">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      parameters: ['系统编码','过量空气系数','速度场系数(m²)','烟道截面积','大气压力','实时上报周期','分钟上报周期','系统时间']
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
.table-th {
  padding-top: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 0 0 5px 5px;
  .item {
    width: 334px;
    margin: 18px auto;
    span {
      display: inline-block;
      width: 90px;
      height: 30px;
      line-height: 30px;
    }
    input {
      margin-left: 26px;
      width: 213px;
      height: 30px;
      border: 1px solid #d9d9d9;
    }
  }
}
</style>