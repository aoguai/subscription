import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 2,
      name: '局部广告',
      desc: '关闭各页面的局部广告',
      enable: false,
      matchTime: 10000,
      rules: [
        {
          fastQuery: true,
          name: '调研邀请',
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches:
            '[vid="bannerAnnouncementView"] [vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24099864',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告',
      desc: '关闭各页面的全屏广告',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '活动弹窗',
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches:
            '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13537836',
        },
        {
          key: 1,
          name: '表盘广告',
          activityIds: 'com.xiaomi.wearable.yrn.views.WearableRNActivity',
          matches: '@[clickable=true] > [desc="Close"]',
          snapshotUrls: 'https://i.gkd.li/i/23923968',
        },
      ],
    },
  ],
});
