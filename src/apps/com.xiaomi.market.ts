import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  deprecatedKeys: [11, 12],
  groups: [
    {
      key: 0,
      name: '全屏广告-首页悬浮窗广告',
      enable: false,
      quickFind: true,
      activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
      rules: '[id="com.xiaomi.market:id/webview_container"] >n [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13248808',
    },
    {
      key: 9,
      name: '局部广告-应用升级界面顶部广告横幅',
      quickFind: true,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: '[id="com.xiaomi.market:id/iv_close_tip"]',
      snapshotUrls: 'https://i.gkd.li/import/13197334',
    },
    {
      enable: false,
      key: 10,
      name: '功能类-忽略升级',
      quickFind: true,
      desc: '应用升级界面-自动点击忽略',
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/45487685/a3a61df9-7757-428e-b4fe-a960e09a0bbe',
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
          matches:
            '[id="com.xiaomi.market:id/expandable_textview"] + [id="com.xiaomi.market:id/expand_button"][desc="更多"]',
          snapshotUrls: 'https://i.gkd.li/import/12674264',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '@[id="com.xiaomi.market:id/ignore_this"][text="忽略本次"] + [id="com.xiaomi.market:id/ignore_permanently"][text="永久忽略"]',
          snapshotUrls: 'https://i.gkd.li/import/12674269',
        },
      ],
    },
  ],
});
