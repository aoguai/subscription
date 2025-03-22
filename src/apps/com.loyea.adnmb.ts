import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.loyea.adnmb',
  name: '蓝岛',
  groups: [
    {
      key: 5,
      name: '通知提示-通知弹窗',
      desc: '点击通知弹窗的【确定】按钮',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.loyea.adnmb.activity.MainActivity',
      rules: 'LinearLayout > Button[text="确定"||text="確定"]',
      snapshotUrls: 'https://i.gkd.li/import/13623450',
    },
  ],
});
