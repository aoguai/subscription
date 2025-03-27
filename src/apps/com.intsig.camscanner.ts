import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.intsig.camscanner',
  name: '扫描全能王',
  groups: [
    {
      key: 1,
      name: '局部广告-主页面上方广告',
      activityIds: 'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
      rules:
        '[id="com.intsig.camscanner:id/card_ad_tag"] + [id="com.intsig.camscanner:id/card_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12668813',
    },
    {
      key: 2,
      name: '全屏广告-开通会员', // 该广告在开屏完成后立即弹出
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0, // 无`activityId`
          matches: '[vid="iv_cancel"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/16761285',
        },
        {
          key: 1,
          activityIds: '.guide.CancelAdShowCnGuidePurchaseActivity',
          matches: '[vid="iv_drop_cnl_close"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/17002087',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示-关闭[发现新截图]提示',
      enable: false,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          fastQuery: true,
          activityIds: '.mainmenu.mainactivity.MainActivity',
          matches:
            'RelativeLayout[vid="rl_screenshot"] + ImageView[vid="iv_esc"]',
          snapshotUrls: 'https://i.gkd.li/i/16975714',
        },
      ],
    },
  ],
});
