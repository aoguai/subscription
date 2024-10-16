import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 4,
      name: '功能类-截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      enable: false,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13473388',
    },
    {
      key: 10,
      name: '通知提示-地图横条广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 0,
          name: '弹窗1',
          matches:
            'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
          snapshotUrls: 'https://i.gkd.li/import/12642830',
        },
        {
          key: 1,
          name: '弹窗2',
          matches: '@ImageView[text=null] <n [vid="activity_icon_bar"]',
          snapshotUrls: 'https://i.gkd.li/i/17391938',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      enable: false,
      fastQuery: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 0,
          name: '【欢迎】弹窗',
          matches:
            'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid="fragment_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14800704',
            'https://i.gkd.li/i/17079025', // add @ImageView[clickable=true]避免在此误触
          ],
        },
        {
          key: 1,
          name: '签到弹窗',
          matches: '[desc="弹窗"] + [vid="main_map_msg_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14809993',
        },
        {
          key: 2,
          name: '加油页面优惠券弹窗',
          matches:
            '@ImageView < [desc="关闭"][clickable=true] <n * > * >n View[text="立即领取"]',
          snapshotUrls: ['https://i.gkd.li/import/12642857'],
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ViewGroup[desc="图片"][childCount=2] > ViewGroup[clickable=true] > @ImageView[childCount=0] <<n [vid="tab_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/16960367',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '@ImageView < ViewGroup[clickable=true] -2 * > View[text^="高德购票" && text$="优惠"] <<n [vid="mapInteractiveRelativeLayout"]',
          snapshotUrls: 'https://i.gkd.li/i/16960157',
        },
      ],
    },
    {
      key: 14,
      name: '权限提示-授权蓝牙',
      desc: '要求提升室内定位精度时，点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '@ImageView[clickable=true] -2 [text="授权蓝牙"]',
          snapshotUrls: 'https://i.gkd.li/i/17002003',
        },
      ],
    },
  ],
});
