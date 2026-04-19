import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches: '@[desc="关闭"] > [vid="btn_action"]',
          snapshotUrls: 'https://i.gkd.li/i/17691747',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches:
            '@Image[clickable=true][childCount=0][visibleToUser=true][width<150 && height<150] <2 View[childCount=2] < View <4 View < View < WebView < WebView < [vid="webview_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/19567854',
        },
        {
          key: 2,
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches:
            '@Image[width<80 && height<80] <2 View[childCount=2] <<2 View[index=parent.childCount.minus(1)] <n [id="app"] <<4 [vid="webview_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/26644706',
        },
      ],
    },
  ],
});
