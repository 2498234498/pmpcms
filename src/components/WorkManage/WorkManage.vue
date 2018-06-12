<template>
  <div>
    <div class="banner-img"></div>
    <div class="work-con">
      <div class="left">
        <ul>
          <li v-for="(value,index) in items" 
            :key="index" 
            :style="{ backgroundColor: active==index?'#ff7d11': '#13a291' }" 
            @click="isActive(index)">
            <router-link :to='value.to'><i class="right-arrow"></i>{{value.item}}</router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items: [
        {item: '待办事项',to: {name: 'ToDoItems'}},
        {item: '已办事项',to: {name: 'ItemsDone'}},
        {item: '消息提醒',to: {name: 'MsgReminder'}},
        {item: '短信提醒',to: {name: 'SMSReminder'}}
      ],
      active: 0
    }
  },
  methods: {
    isActive(index){
      this.active = index
    }
  },
  mounted(){
    this.$router.push({name: 'ToDoItems'})
  }
}
</script>
<style lang='scss' scoped>
  .banner-img{
    height: 286px;
    background: url('../../assets/img/banner1.png') no-repeat center center; 
  }
  .work-con{
    width: 1200px;
    margin: 24px auto;
    overflow: hidden;
    .left{
      float: left;
      width: 176px;
      font-size: 14px;
      li:hover{
        background-color: #ff7d11 !important;
      }
      li:first-child{
        border-top: none;
        border-radius: 5px 5px 0 0;
      }
      li:last-child{
        border-radius: 0 0 5px 5px;
      }
      li{
        height: 44px;
        line-height: 44px;
        border-top: 2px solid #366f68;
        cursor: pointer;
        a{
          display: block;
          height: 44px;
          padding-left: 20px;
          text-decoration: none;
          color: #fff;
          .right-arrow{
            vertical-align: middle;
            margin-right: 8px;
            display: inline-block;
            width: 6px;
            height: 5px;
            background: url('../../assets/img/right-arrow.png') no-repeat;
          }
        }
      }
    }
    .right{
      float: left;
      margin-left: 10px;
      width: 1014px;
    }
  }
</style>