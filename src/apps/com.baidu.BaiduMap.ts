import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 1,
      name: '局部广告-各类局部广告',
      rules: [
        {
          key: 1,
          name: '地图上方黄页横幅',
          fastQuery: true,
          activityIds: [
            'com.baidu.baidumaps.MapsActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
            'com.lbe.security.ui.CountdownDialogActivity',
          ],
          matches: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642301',
            'https://i.gkd.li/i/12801465',
            'https://i.gkd.li/i/12909281',
          ],
        },
        {
          key: 2,
          name: '局部广告-打车界面右侧悬浮球',
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
          snapshotUrls: 'https://i.gkd.li/i/12642307',
        },
        {
          key: 3,
          name: '路线广告-1',
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="banner_ad_close_icon"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22656085',
        },
        {
          key: 4,
          name: '路线广告-2',
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/22616267',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-各类弹窗广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '美食大礼包弹窗',
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642310',
        },
        {
          key: 1,
          name: '酒店提前订弹窗',
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[id="lottie_box"] + TextView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642319',
        },
        {
          key: 2,
          name: '打车界面弹窗广告',
          fastQuery: true,
          activityIds: [
            'com.baidu.baidumaps.MapsActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          ],
          matches:
            'ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12909300',
            'https://i.gkd.li/i/12930699',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="img_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22616256',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      enable: false,
      ignoreGlobalGroupMatch: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="push_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15284736',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-通勤卡添加至桌面',
      desc: '点击取消',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: ['[text="添加至桌面"]', '[text="取消"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13439258',
            'https://i.gkd.li/i/16920986', // 防止误触
          ],
        },
      ],
    },
  ],
});
