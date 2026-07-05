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
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchRoot: true, // 出现Ad时未关闭，录屏or截快照才响应
      activityIds:
        'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
      rules: [
        {
          key: 0,
          matches: '@[desc="关闭"] > [vid="btn_action"]',
          snapshotUrls: 'https://i.gkd.li/i/17691747',
        },
        {
          key: 1,
          matches:
            '@Image[text=""][desc=null] <(1,2) View[childCount=2] <<(1,2) View <n [id="app"] <<4 [vid="webview_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/19567854',
            'https://i.gkd.li/i/26644706',
            'https://i.gkd.li/i/29383961', // =!末尾子节点
          ],
        },
      ],
    },
  ],
});
