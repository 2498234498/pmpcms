<template>
  <div class="standard-control">
    <div class="to-banner">
      <div class="banner">
        <router-link to="/mainView">
          <i class="home-house"></i>
          首页
        </router-link>
        <span class="gt">></span>
        <span>站点管理</span>
        <span class="gt">></span>
        <span class="active">国标反控</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="month-table">
      <div class="table-left">
        <div class="left-header">
          <i class="list"></i>
          监控点列表
        </div>
        <div class="left-con">
          <Tree :data="test" @on-select-change="clickme"></Tree>
        </div>
      </div>
      <div class="table-right">
        <ul class="table-th">
          <li>名称</li>
          <li>设置</li>
          <li></li>
          <li>名称</li>
          <li>设置</li>
          <li>提取</li>
          <li>信息栏</li>
        </ul>
        <ul class="table-tr table-th">
          <li>补发历史数据</li>
          <li @click="isShow.aa=true">设置</li>
          <li></li>
          <li>系统时间</li>
          <li @click="isShow.ab=true">设置</li>
          <li>提取</li>
          <li></li>
          <history-win v-show="isShow.aa" @close="isShow.aa=false"></history-win>
          <system-time v-show="isShow.ab" @close="isShow.ab=false"></system-time>
        </ul>
        <ul class="table-tr table-th">
          <li>校零校满</li>
          <li @click="isShow.ba=true">设置</li>
          <li></li>
          <li>污染物报警上下限</li>
          <li @click="isShow.bb=true">设置</li>
          <li @click="isShow.bc=true">提取</li>
          <li></li>
          <correction-win v-show="isShow.ba" @close="isShow.ba=false"></correction-win>
          <pollution-limit v-show="isShow.bb" @close="isShow.bb=false"></pollution-limit>
          <pollution-collect v-show="isShow.bc" @close="isShow.bc=false"></pollution-collect>
        </ul>
        <ul class="table-tr table-th">
          <li>访问密码</li>
          <li @click="isShow.ca=true">设置</li>
          <li></li>
          <li>上位机地址</li>
          <li @click="isShow.cb=true">设置</li>
          <li>提取</li>
          <li></li>
          <set-password v-show="isShow.ca" @close="isShow.ca=false"></set-password>
          <set-address v-show="isShow.cb" @close="isShow.cb=false"></set-address>
        </ul>
        <ul class="table-tr table-th">
          <li>启动清洗</li>
          <li @click="isShow.da=true">设置</li>
          <li></li>
          <li>即时采样</li>
          <li @click="isShow.db=true">设置</li>
          <li></li>
          <li></li>
          <start-clean v-show="isShow.da" @close="isShow.da=false"></start-clean>
          <real-time v-show="isShow.db" @close="isShow.db=false"></real-time>
        </ul>
        <ul class="table-tr table-th">
          <li>对比采样</li>
          <li @click="isShow.ea=true">设置</li>
          <li></li>
          <li>超限报警时间间隔</li>
          <li @click="isShow.eb=true">设置</li>
          <li></li>
          <li></li>
          <comparative-sampling v-show="isShow.ea" @close="isShow.ea=false"></comparative-sampling>
          <limit-alarm v-show="isShow.eb" @close="isShow.eb=false"></limit-alarm>
        </ul>
        <ul class="table-tr table-th">
          <li>超时时间与重发次数</li>
          <li @click="isShow.fa=true">设置</li>
          <li></li>
          <li>实时数据上报间隔</li>
          <li @click="isShow.fb=true">设置</li>
          <li>提取</li>
          <li></li>
          <time-outs v-show="isShow.fa" @close="isShow.fa=false"></time-outs>
          <time-interval v-show="isShow.fb" @close="isShow.fb=false"></time-interval>
        </ul>
        <ul class="table-tr table-th">
          <li>启动超标留样</li>
          <li>设置</li>
          <li></li>
          <li>采样时间周期</li>
          <li @click="isShow.gb=true">设置</li>
          <li @click="isShow.gc=true">提取</li>
          <li></li>
          <collection-time v-show="isShow.gb" @close="isShow.gb=false"></collection-time>
          <collection-cycle v-show="isShow.gc" @close="isShow.gc=false"></collection-cycle>
        </ul>
        <ul class="table-tr table-th">
          <li>提取出样时间</li>
          <li @click="isShow.hb=true">设置</li>
          <li></li>
          <li>提取现场机信息(日志)</li>
          <li @click="isShow.hc=true">提取</li>
          <li></li>
          <li></li>
          <sample-time v-show="isShow.hb" @close="isShow.hb=false"></sample-time>
          <field-log v-show="isShow.hc" @close="isShow.hc=false"></field-log>
        </ul>
        <ul class="table-tr table-th">
          <li>提取设备唯一标识</li>
          <li @click="isShow.ia=true">提取</li>
          <li></li>
          <li>现场机信息(参数)</li>
          <li @click="isShow.ib=true">设置</li>
          <li @click="isShow.ic=true">提取</li>
          <li></li>
          <equipment-identity v-show="isShow.ia" @close="isShow.ia=false"></equipment-identity>
          <equipment-parameter v-show="isShow.ib" @close="isShow.ib=false"></equipment-parameter>
          <collection-equipment v-show="isShow.ic" @close="isShow.ic=false"></collection-equipment>
        </ul>
        <ul class="table-tr table-th">
          <li>提取现场机信息(状态)</li>
          <li @click="isShow.ja=true">提取</li>
          <li></li>
          <li>分钟数据间隔</li>
          <li @click="isShow.jb=true">设置</li>
          <li>提取</li>
          <li></li>
          <equipment-status v-show="isShow.ja" @close="isShow.ja=false"></equipment-status>
          <minute-interval v-show="isShow.jb" @close="isShow.jb=false"></minute-interval>
        </ul>
        <ul class="table-tr table-th">
          <li>设备运行时间日历史数据</li>
          <li @click="isShow.ka=true">提取</li>
          <li></li>
          <li>数据上报时间</li>
          <li @click="isShow.kb=true">设置</li>
          <li>提取</li>
          <li></li>
          <runtime-history v-show="isShow.ka" @close="isShow.ka=false"></runtime-history>
          <update-time v-show="isShow.kb" @close="isShow.kb=false"></update-time>
        </ul>

        <ul class="table-tr table-th">
          <li>提取污染物报警历史数据</li>
          <li @click="isShow.la=true">提取</li>
          <li></li>
          <li>污染物实时数据</li>
          <li>获取</li>
          <li>停止</li>
          <li></li>
          <collection-alarm v-show="isShow.la" @close="isShow.la=false"></collection-alarm>
        </ul>
        <ul class="table-tr table-th">
          <li></li>
          <li></li>
          <li></li>
          <li>设备运行状态数据</li>
          <li>获取</li>
          <li>停止</li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>  
</template>
<script>
import HistoryWin from './PopupBox/FirstHistoryWin'
import SystemTime from './PopupBox/FirstSystemTimeWin'
import CorrectionWin from './PopupBox/SecondCorrectionWin'
import PollutionLimit from './PopupBox/SecondPollutionLimit'
import PollutionCollect from './PopupBox/SecondPollutionCollect'
import SetPassword from './PopupBox/ThirdSetPassword'
import SetAddress from './PopupBox/ThirdSetAddress'
import StartClean from './PopupBox/FourthStartClean'
import RealTime from './PopupBox/FourthRealTime'
import ComparativeSampling from './PopupBox/FifthComparativeSampling'
import LimitAlarm from './PopupBox/FifthLimitAlarm'
import TimeOuts from './PopupBox/SixthTimeOuts'
import TimeInterval from './PopupBox/SixthTimeInterval'
import CollectionTime from './PopupBox/SeventhCollectionTime'
import CollectionCycle from './PopupBox/SeventhCollectionCycle'
import SampleTime from './PopupBox/EighthCollectionSampleTime'
import FieldLog from './PopupBox/EighthFieldLog'
import EquipmentIdentity from './PopupBox/NinthEquipmentIdentity'
import EquipmentParameter from './PopupBox/NinthEquipmentParameter'
import CollectionEquipment from './PopupBox/NinthCollectionEquipment'
import EquipmentStatus from './PopupBox/TenthEquipmentStatus'
import MinuteInterval from './PopupBox/TenthMinuteInterval'
import RuntimeHistory from './PopupBox/EleventhRuntimeHistory'
import UpdateTime from './PopupBox/EleventhUpdateTime'
import CollectionAlarm from './PopupBox/TwelfthCollectionAlarm'

export default {
  components: { HistoryWin, SystemTime, CorrectionWin, PollutionLimit, PollutionCollect, SetPassword, SetAddress, StartClean, RealTime, ComparativeSampling, LimitAlarm, TimeOuts, TimeInterval, CollectionTime, CollectionCycle, SampleTime, FieldLog, EquipmentIdentity, EquipmentParameter, CollectionEquipment, EquipmentStatus, MinuteInterval, RuntimeHistory, UpdateTime, CollectionAlarm },
  data(){
    return {
      table: [
        ['补发历史数据','系统时间'],
        ['校零校满','污染物报警上下限'],
        ['访问密码','上位机地址'],
        ['启动清洗','即时采样']
        
      ],
      test: [
      {
          title: '广东省',
          expand: true,
          children: [
              {
                  title: '广州市',
                  expand: true,
                  children: [
                      {
                          title: '市辖区',
                          expand: true,
                          children: [
                            {
                              title: '广州博控',
                              expand: true,
                              children: [
                                {
                                  title: '林工测试监控点1'
                                },
                                {
                                  title: '林工测试监控点2'
                                },
                                {
                                  title: '林工测试监控点3'
                                },
                              ]
                            }
                          ]
                      },
                  ]
              },
              {
                  title: '清远市',
                  expand: true,
                    children: [
                      {
                          title: 'leaf 1-2-1'
                      },
                      {
                          title: 'leaf 1-2-1'
                      }
                    ]
              }
          ]
        }
      ],
      isShow: { //弹出框行aa表示第一行第一个弹出框,依次往下
        aa: false,ab: false,ac: false,
        ba: false,bb: false,bc: false,
        ca: false,cb: false,cc: false,
        da: false,db: false,dc: false,
        ea: false,eb: false,ec: false,
        fa: false,fb: false,fc: false,
        ga: false,gb: false,gc: false,
        ha: false,hb: false,hc: false,
        ia: false,ib: false,ic: false,
        ja: false,jb: false,jc: false,
        ka: false,kb: false,kc: false,
        la: false,lb: false,lc: false,
        ma: false,mb: false,mc: false
      }
    }
  },
  methods: {
    goTo(){
      console.log('goTo');
    },
    clickme(arr){
      console.log('选中数据id数组:' , arr[0].title)
    }
  }
}
</script>
<style lang='scss' scoped>
  .standard-control{
    .to-banner{
      margin-top: 6px;
      position: relative;
      height: 21px;
      .banner{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 14px;
        color: #464646;
        .home-house{
          vertical-align: middle;
          margin-top: -6px;
          display: inline-block;
          width: 22px;
          height: 20px;
          background: url('../../assets/img/home-house.png') no-repeat;
        }
        a{
          font-weight: bold;
          text-decoration: none;
          color: #464646;
          font-size: 16px;
        }
        .gt{ 
          margin: 0 11px;
        }
        .active{
          color: #136fcc;
        }
      }
    }
    .line{
      border-top: 2px solid #dfdfdd;
      margin-top: 8px;
    }
    .month-table{
      margin-top: 28px;
      color: #666;
      overflow: hidden;
      .table-left{
        float: left;
        width: 201px;
        height: 554px;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        .left-header{
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #d9d9d9;
          .list{
            display: inline-block;
            width: 19px;
            height: 13px;
            background: url('../../assets/img/lists.png') no-repeat;
            margin-left: 14px;
            margin-right: 10px;
            vertical-align: middle;
            margin-top: -3px; 
          }
        }
        .left-con{
          padding-left: 6px;
        }
      }
      .table-right{
        margin-left: 10px;
        float: left;
        .table-th{
          overflow: hidden;
          li{
            float: left;
            height: 44px;
            line-height: 44px;
            background-color: #f5f5f5;
            border-top: 1px solid #d9d9d9;
            border-right: 1px solid #d9d9d9;
            text-align: center;
          }
          li:nth-child(1){
            width: 178px;
            border-left: 1px solid #d9d9d9; 
          }
          li:nth-child(2){
            width: 86px;
          }
          li:nth-child(3){
            width: 56px;
          }
          li:nth-child(4){
            width: 192px;
          }
          li:nth-child(5){
            width: 101px;
          }
          li:nth-child(6){
            width: 95px;
          }
          li:nth-child(7){
            width: 95px;
          }
        }
        .table-tr{
          li{
            background-color: #fff; 
          }
          li:nth-child(2){
            color: #077f82;
            cursor: pointer;
          }
          li:nth-child(5){
            color: #077f82;
            cursor: pointer;
          }
          li:nth-child(6){
            color: #077f82;
            cursor: pointer;
          }
        }
        .table-tr:last-child{
          border-bottom: 1px solid #d9d9d9;
        }
      }
    }
  }
</style>