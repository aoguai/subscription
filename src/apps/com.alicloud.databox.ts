import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 0,
      name: '功能类-自动签到',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alicloud.databox.MainActivity',
        'com.alicloud.databox.navigation.NavigationFragmentContainerActivity',
        'com.alicloud.databox.account.login.LoginActivity',
      ],
      rules: [
        {
          key: 0,
          name: '自动点击签到',
          matches: '[text="领取"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12929318',
            'https://i.gkd.li/i/15573070',
            'https://i.gkd.li/i/15942837',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后，关闭弹窗',
          action: 'back',
          matches: '[vid="ivCardBackBackground"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15573070', // 签到前
            'https://i.gkd.li/i/15573233', // 签到后
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      enable: false,
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            'WebView >3 View > Image + TextView[clickable=true&&text.length=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13228610',
            'https://i.gkd.li/import/14161216',
            'https://i.gkd.li/import/14235204',
          ],
        },
        {
          key: 1,
          matches: 'WebView >3 View > TextView[index=3][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/14414446'],
        },
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
      name: '更新提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          matches:
            '[text^="立即了解"] -3 @View[clickable=true] <<n [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/import/13806865',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-顶端横幅”',
      desc: '出现在首页、备份盘、资源库',
      enable: false,
      fastQuery: true,
      activityIds: ['com.alicloud.databox.MainActivity'],
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
    {
      key: 5,
      name: '功能类-自动授权',
      enable: false,
      desc: '包括扫码登录',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.taobao.login4android.scan.QrScanActivity',
      rules: [
        {
          matches: '[text="确认并登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14414503', // 该页面不允许截图所以快照页面是黑屏，但不影响编写规则
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-[容量使用超限]提示',
      desc: '点击关闭',
      enable: false,
      fastQuery: true,
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          matches: ['[text="容量使用超限"]', '[vid="layout_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/15158788',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-卡片广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.alicloud.databox.transferpage.TransferListActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/15433289',
        },
      ],
    },
  ],
});
