import Vue from 'vue'
import Router from 'vue-router'
import Login from                         '../components/Login'
import MainView from                      '../components/MainView'
import HomeView from                      '../components/HomePage/Home'
import MapDetection from                  '../components/HomePage/HomeLists/MapDetection'
import CompanyIntroduction from           '../components/HomePage/HomeLists/CompanyIntroduction'
import PartnerCompany from                '../components/HomePage/HomeLists/PartnerCompany'
import IndustryStatistics from            '../components/HomePage/HomeLists/IndustryStatistics'
// 事务管理
import WorkManage from                    '../components/WorkManage/WorkManage'
import ToDoItems from                     '../components/WorkManage/ToDoItems'
import ItemsDone from                     '../components/WorkManage/ItemsDone'
import MsgReminder from                   '../components/WorkManage/MsgReminder'
import SMSReminder from                   '../components/WorkManage/SMSReminder'
//数据报表
import DataReport from                    '../components/DataReport/DataReport'
import TotalReport from                   '../components/DataReport/TotalReport'
import MeanReport from                    '../components/DataReport/MeanReport'
import MonthlyDataReport from             '../components/DataReport/MonthlyDataReport'
import YearDataReport from                '../components/DataReport/YearDataReport'
import RegionalDataStatistics from        '../components/DataReport/RegionalDataStatistics'
import ExceedingMultiplesStatistics from  '../components/DataReport/ExceedingMultiplesStatistics'
import PollutionTimeStatistics from       '../components/DataReport/PollutionTimeStatistics'
import AlarmRecordStatistics from         '../components/DataReport/AlarmRecordStatistics'
import PollutionConcentration from        '../components/DataReport/PollutionConcentrationAverageStatistics'
import PollutionOKStatistics from         '../components/DataReport/PollutionOKStatistics'
import PollutionTotalStatistics from      '../components/DataReport/PollutionTotalStatistics'
import RegionalPollution from             '../components/DataReport/RegionalPollutionTotalStatistics'
//日志管理
import LogManage from                     '../components/LogManage/LogManage'
import ControlLog from                    '../components/LogManage/ControlLog'
import MessageLog from                    '../components/LogManage/MessageLog'
import OperationLog from                  '../components/LogManage/OperationLog'
import ExceptionLog from                  '../components/LogManage/ExceptionLog'
import PlatformLog from                   '../components/LogManage/PlatformLog'
//系统管理
import SystemManage from                  '../components/SystemManage/SystemManage'
import RoleManage from                    '../components/SystemManage/RoleManage'
import UserManage from                    '../components/SystemManage/UserManage'
import CompanyManage from                 '../components/SystemManage/CompanyManage'
import CompanyDepartmentManage from       '../components/SystemManage/CompanyDepartmentManage'
import MonitoringPointsManage from        '../components/SystemManage/MonitoringPointsManage'
import RegionManage from                  '../components/SystemManage/RegionManage'
import PollutionManage from               '../components/SystemManage/PollutionManage'
import OrganizationManage from            '../components/SystemManage/OrganizationManage'
import OrganizationDepartmentManage from  '../components/SystemManage/OrganizationDepartmentManage'
import DeviceManage from                  '../components/SystemManage/DeviceManage'
import WorkProcessManage from             '../components/SystemManage/WorkProcessManage'
import IndustryManage from                '../components/SystemManage/IndustryManage'
//站点管理
import WebsiteManage from                 '../components/WebsiteManage/WebsiteManage'
import ListofData from                    '../components/WebsiteManage/ListofData'
import RealTimeData from                  '../components/WebsiteManage/RealTimeData'
import HistoryData from                   '../components/WebsiteManage/HistoryData'
import AlarmData from                     '../components/WebsiteManage/AlarmData'
import DataCollectorManage from           '../components/WebsiteManage/DataCollectorManage'
import MeterManage from                   '../components/WebsiteManage/MeterManage'
import StandardControl from               '../components/WebsiteManage/StandardControl'
//站点管理里面的数采仪管理
import BasicParameters from               '../components/WebsiteManage/CollectionSwitch/BasicParameters'
import AnalogQuantity from                '../components/WebsiteManage/CollectionSwitch/AnalogQuantity'
import SerialPort from                    '../components/WebsiteManage/CollectionSwitch/SerialPort'
import NetworkParameters from             '../components/WebsiteManage/CollectionSwitch/LocalNetworkParameters'
import UsersManage from                   '../components/WebsiteManage/CollectionSwitch/UsersManage'
import LocalInformation from              '../components/WebsiteManage/CollectionSwitch/LocalInformation'
import ProgramVersion from                '../components/WebsiteManage/CollectionSwitch/ProgramVersion'
import ServerParameters from              '../components/WebsiteManage/CollectionSwitch/ServerParameters'
import UpgradeFile from                   '../components/WebsiteManage/CollectionSwitch/UploadUpgradeFile'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login

    },
    {
      path: '/mainView',
      component: MainView,
      children: [
        {
          path: '',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'intro',
          name: 'CompanyIntroduction',
          component: CompanyIntroduction
        },
        {
          path: 'map',
          name: 'MapDetection',
          component: MapDetection
        },
        {
          path: 'partner',
          name: 'PartnerCompany',
          component: PartnerCompany
        },
        {
          path: 'statistics',
          name: 'IndustryStatistics',
          component: IndustryStatistics
        },
        {
          path: 'work',
          component: WorkManage,
          children: [
            {
              path: '',
              name: 'ToDoItems',
              component: ToDoItems
            },
            {
              path: 'itemsDone',
              name: 'ItemsDone',
              component: ItemsDone
            },
            {
              path: 'msgReminder',
              name: 'MsgReminder',
              component: MsgReminder
            },
            {
              path: 'sMSReminder',
              name: 'SMSReminder',
              component: SMSReminder
            }
          ]
        },
        {
          path: 'dataReport',
          component: DataReport,
          children: [
            {
              path: '',
              name: 'TotalReport',
              component: TotalReport
            },
            {
              path: 'meanReport',
              name: 'MeanReport',
              component: MeanReport
            },
            {
              path: 'monthlyDataReport',
              name: 'MonthlyDataReport',
              component: MonthlyDataReport
            },
            {
              path: 'yearDataReport',
              name: 'YearDataReport',
              component: YearDataReport
            },
            {
              path: 'regionalDataStatistics',
              name: 'RegionalDataStatistics',
              component: RegionalDataStatistics
            },
            {
              path: 'exceedingMultiplesStatistics',
              name: 'ExceedingMultiplesStatistics',
              component: ExceedingMultiplesStatistics
            },
            {
              path: 'pollutionTimeStatistics',
              name: 'PollutionTimeStatistics',
              component: PollutionTimeStatistics
            },
            {
              path: 'alarmRecordStatistics',
              name: 'AlarmRecordStatistics',
              component: AlarmRecordStatistics
            },
            {
              path: 'pollutionConcentration',
              name: 'PollutionConcentration',
              component: PollutionConcentration
            },
            {
              path: 'pollutionOKStatistics',
              name: 'PollutionOKStatistics',
              component: PollutionOKStatistics
            },
            {
              path: 'pollutionTotalStatistics',
              name: 'PollutionTotalStatistics',
              component: PollutionTotalStatistics
            },
            {
              path: 'regionalPollution',
              name: 'RegionalPollution',
              component: RegionalPollution
            }
          ]
        },
        {
          path: 'logManage',
          component: LogManage,
          children: [
            {
              path: '',
              name: 'ControlLog',
              component: ControlLog
            },
            {
              path: 'messageLog',
              name: 'MessageLog',
              component: MessageLog
            },
            {
              path: 'operationLog',
              name: 'OperationLog',
              component: OperationLog
            },
            {
              path: 'exceptionLog',
              name: 'ExceptionLog',
              component: ExceptionLog
            },
            {
              path: 'platformLog',
              name: 'PlatformLog',
              component: PlatformLog
            }
          ]
        },
        {
          path: 'systemManage',
          component: SystemManage,
          children: [
            {
              path: '',
              name: 'RoleManage',
              component: RoleManage
            },
            {
              path: 'userManage',
              name: 'UserManage',
              component: UserManage
            },
            {
              path: 'companyManage',
              name: 'CompanyManage',
              component: CompanyManage
            },
            {
              path: 'companyDepartment',
              name: 'CompanyDepartmentManage',
              component: CompanyDepartmentManage
            },
            {
              path: 'monitoringPoints',
              name: 'MonitoringPointsManage',
              component: MonitoringPointsManage
            },
            {
              path: 'regionManage',
              name: 'RegionManage',
              component: RegionManage
            },
            {
              path: 'pollutionManage',
              name: 'PollutionManage',
              component: PollutionManage
            },
            {
              path: 'organizationManage',
              name: 'OrganizationManage',
              component: OrganizationManage
            },
            {
              path: 'organizationDepartment',
              name: 'OrganizationDepartmentManage',
              component: OrganizationDepartmentManage
            },
            {
              path: 'deviceManage',
              name: 'DeviceManage',
              component: DeviceManage
            },
            {
              path: 'workProcess',
              name: 'WorkProcessManage',
              component: WorkProcessManage
            },
            {
              path: 'industryManage',
              name: 'IndustryManage',
              component: IndustryManage
            }
          ]  
        },
        {
          path: 'websiteManage',
          component: WebsiteManage,
          children: [
            {
              path: '',
              name: 'ListofData',
              component: ListofData
            },
            {
              path: 'realTimeData',
              name: 'RealTimeData',
              component: RealTimeData
            },  
            {
              path: 'historyData',
              name: 'HistoryData',
              component: HistoryData
            },  
            {
              path: 'alarmData',
              name: 'AlarmData',
              component: AlarmData
            },  
            {
              path: 'dataCollectorManage',
              component: DataCollectorManage,
              children: [
                {
                  path: '',
                  name: 'BasicParameters',
                  component: BasicParameters
                },
                {
                  path: 'analogQuantity',
                  name: 'AnalogQuantity',
                  component: AnalogQuantity
                },
                {
                  path: 'serialPort',
                  name: 'SerialPort',
                  component: SerialPort
                },
                {
                  path: 'networkParameters',
                  name: 'NetworkParameters',
                  component: NetworkParameters
                },
                {
                  path: 'usersManage',
                  name: 'UsersManage',
                  component: UsersManage
                },
                {
                  path: 'localInformation',
                  name: 'LocalInformation',
                  component: LocalInformation
                },
                {
                  path: 'programVersion',
                  name: 'ProgramVersion',
                  component: ProgramVersion
                },
                {
                  path: 'serverParameters',
                  name: 'ServerParameters',
                  component: ServerParameters
                },
                {
                  path: 'upgradeFile',
                  name: 'UpgradeFile',
                  component: UpgradeFile
                }
              ]  
            },  
            {
              path: 'meterManage',
              name: 'MeterManage',
              component: MeterManage
            },  
            {
              path: 'standardControl',
              name: 'StandardControl',
              component: StandardControl
            }  
          ]   
        }     
      ] 
    }
  ]
})
