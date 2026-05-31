import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 1,
      name: '全屏广告-软件更新/安装后的用户引导',
      desc: '自动点击更新或安装后的引导页面跳过按钮',
      enable: false,
      fastQuery: true,
      activityIds: 'com.ct.client.activity.UserGuideActivity',
      rules: '[id="com.ct.client:id/tvSkip"]',
      snapshotUrls: ['https://i.gkd.li/import/12508971'],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '关闭首页和查询办理页面的浮窗广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.ct.client.common.ConfirmDialogActivity',
        'com.ct.client.activity.MainActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'ImageView[id="com.ct.client:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12819676',
            'https://i.gkd.li/import/12913735',
            'https://i.gkd.li/i/15104434',
          ],
        },
        {
          key: 1,
          matches: 'ImageView[id="com.ct.client:id/ivFloatClose"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13043345',
            'https://i.gkd.li/i/15137220',
          ],
        },
        {
          key: 2,
          activityIds: [
            'com.ct.client.common.webview.OnlineBusinessWebkitActivity',
          ],
          matches: 'Image[text="tishi-close"]',
          snapshotUrls: ['https://i.gkd.li/import/12913804'],
        },
      ],
    },
  ],
});
