import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页悬浮窗广告',
      enable: false,
      activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
      rules: '[id="com.xiaomi.market:id/webview_container"] >n [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13248808',
    },
    {
      key: 9,
      name: '局部广告-应用升级界面顶部广告横幅',
      fastQuery: true,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: '[id="com.xiaomi.market:id/iv_close_tip"]',
      snapshotUrls: 'https://i.gkd.li/import/13197334',
    },
    {
      key: 10,
      name: '功能类-忽略升级',
      desc: '应用升级界面-自动点击忽略',
      fastQuery: true,
      enable: false,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.xiaomi.market:id/fold_text"][text^="查看全部升级"]',
          snapshotUrls: 'https://i.gkd.li/import/12674261',
        },
        {
          key: 1,
          matches: '[vid="expand_button"][visibleToUser=true]',
          excludeMatches: '[text="忽略本次"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12674264',
            'https://i.gkd.li/i/14931577',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[text="忽略本次"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12674269',
            'https://i.gkd.li/i/14931578',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '功能类-自动点击[查看全部升级]',
      desc: '应用升级页面',
      fastQuery: true,
      enable: false,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: '@[clickable=true] > [text^="查看全部升级"]',
      snapshotUrls: 'https://i.gkd.li/i/14782814',
    },
  ],
});
