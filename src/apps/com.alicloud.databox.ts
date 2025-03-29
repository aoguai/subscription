import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 0,
      name: '功能类-自动签到',
      desc: '自动点击签到按钮并关闭签到后的弹窗',
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
            'https://i.gkd.li/i/15942837',
            'https://i.gkd.li/i/15573070', // 签到前
            'https://i.gkd.li/i/15573233', // 签到后
          ],
        },
        {
          key: 1,
          name: '在签到后，关闭弹窗',
          action: 'back',
          anyMatches: [
            '[vid="ivCardBackBackground"][visibleToUser=true]',
            '[vid="cvCardFront"] > [vid="ivClose"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18108340',
            'https://i.gkd.li/i/19515122',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      desc: '关闭全屏活动弹窗广告',
      enable: false,
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          key: 0,
          anyMatches: [
            'WebView[text!=null && text!=""] > View[id="root"] >2 View > TextView[index=parent.childCount.minus(2)]',
            'WebView[text=null || text=""] > View[id="root"] >2 View > TextView[index=parent.childCount.minus(1)]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13228610',
            'https://i.gkd.li/import/14161216',
            'https://i.gkd.li/import/14235204',
            'https://i.gkd.li/i/14414446',
            'https://i.gkd.li/i/18108117',
          ],
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
      matchTime: 10000,
      rules: 'View[childCount=9] > @Image -2 View[childCount=5]',
      snapshotUrls: 'https://i.gkd.li/import/13596924',
    },
    {
      key: 3,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
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
      ignoreGlobalGroupMatch: true,
      fastQuery: true,
      activityIds: ['com.alicloud.databox.MainActivity'],
      rules: [
        {
          key: 0,
          name: '首页',
          excludeMatches: '[vid="layoutBanner"] > [text$=">>"]',
          matches: ['[id="com.alicloud.databox:id/ivTitleAction"]'],
          snapshotUrls: 'https://i.gkd.li/import/14161399',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17556779',
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
      desc: '关闭卡片式广告',
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
