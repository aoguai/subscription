import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 2,
      name: '分段广告-支付完成界面广告卡片',
      desc: '关闭支付完成页面底部的广告卡片',
      enable: false,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070564',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070974',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-浮窗广告',
      desc: '点击关闭浮窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.unionpay.activity.UPActivityMain',
          matches: '[vid="close_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20239453',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-各类全屏弹窗广告',
      desc: '点击关闭各类全屏弹窗广告，例如获得新勋章提示、我的页面广告弹窗、领取优惠弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          name: '天天签到-获得新勋章提示',
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13440341',
        },
        {
          key: 1,
          name: '我的页面-广告弹窗',
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: 'com.unionpay.activity.UPActivityMain',
          matches:
            '[id="com.unionpay:id/container"] + [id="com.unionpay:id/image"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13440341', // 快照错误
        },
        {
          key: 2,
          name: '领取优惠弹窗',
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            '[id="com.unionpay:id/view_content_container"] View[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13848688',
        },
      ],
    },
  ],
});
