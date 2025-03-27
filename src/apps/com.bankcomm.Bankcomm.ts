import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bankcomm.Bankcomm',
  name: '交通银行',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bankcomm.module.biz.home.MainActivity',
          matches: '[vid="popup_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15046998',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-网络代理提示弹窗',
      desc: '点击[继续使用]',
      enable: false,
      ignoreGlobalGroupMatch: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bankcomm.module.biz.home.MainActivity',
          matches: '[text="继续使用"]',
          snapshotUrls: 'https://i.gkd.li/i/17556284',
        },
      ],
    },
  ],
});
