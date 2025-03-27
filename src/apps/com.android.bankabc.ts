import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[id="com.android.bankabc:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/14179162',
        },
        {
          key: 1,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17879768',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="upgrade_checkbox"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/14208545',
            'https://i.gkd.li/i/16410094',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="negativeTextView"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14208545',
        },
        {
          preKeys: [0],
          key: 2,
          matches: '[vid="iv_negative"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16410094',
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      enable: false,
      ignoreGlobalGroupMatch: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[vid="iv_notification_reminder_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14208621',
        },
      ],
    },
  ],
});
