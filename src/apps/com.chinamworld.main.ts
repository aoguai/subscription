import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-我的页面弹窗广告',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ccb.start.view.startdialog.StartDialogActivity',
          matches: [
            '[vid="tip_view_pager"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12726961',
            'https://i.gkd.li/i/20649291',
          ],
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
