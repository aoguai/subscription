import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-我的页面弹窗广告',
      enable: false,
      rules: [
        {
          activityIds: 'com.ccb.start.view.startdialog.StartDialogActivity',
          matches:
            '[id="com.chinamworld.main:id/indicator_container_container"] + [id="com.chinamworld.main:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/12726961',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-VPN风险弹窗',
      desc: '点击[知晓风险，继续使用]',
      enable: false,
      ignoreGlobalGroupMatch: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ccb.start.MainActivity',
          matches: '[text="知晓风险，继续使用"]',
          snapshotUrls: 'https://i.gkd.li/i/18113538',
        },
      ],
    },
  ],
});
