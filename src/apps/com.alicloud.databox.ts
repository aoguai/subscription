import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 0,
      name: '功能类-自动签到',
      enable: false,
      activityIds: 'com.alicloud.databox.MainActivity',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '自动签到',
          matches: ['[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]'],
          snapshotUrls: 'https://i.gkd.li/import/12929318',
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后，关闭弹窗',
          matches: ['[id="com.alicloud.databox:id/ivClose"]'],
          snapshotUrls: 'https://i.gkd.li/import/13038304',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-活动弹窗',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules:
        'WebView >n View > Image + TextView[clickable=true&&text.length=0]',
      snapshotUrls: [
        'https://i.gkd.li/import/13228610',
        'https://i.gkd.li/import/14161216',
      ],
    },
    {
      key: 2,
      name: '功能类-时光设备间-自动点击',
      desc: '自动点击“开心收下”',
      enable: false,
      activityIds:
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: 'View[childCount=9] > @Image -2 View[childCount=5]',
      snapshotUrls: 'https://i.gkd.li/import/13596924',
    },
    {
      key: 3,
      name: '更新提示-版本更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          matches: '[text^="立即了解"] -3 View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13806865',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-顶端横幅”',
      desc: '出现在首页、备份盘、资源库',
      activityIds: ['com.alicloud.databox.MainActivity'],
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '首页',
          matches: ['[id="com.alicloud.databox:id/ivTitleAction"]'],
          snapshotUrls: 'https://i.gkd.li/import/14161399',
        },
        {
          key: 1,
          name: '备份盘、资源库',
          matches: ['[id="com.alicloud.databox:id/notice_view_icon_button"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/14161340',
            'https://i.gkd.li/import/14161336',
          ],
        },
      ],
    },
  ],
});
