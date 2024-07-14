import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yitong.mbank.psbc',
  name: '邮储银行',
  groups: [
    {
      key: 1,
      name: '局部广告-浮窗广告',
      fastQuery: true,
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules: '[vid="img_close_float_window"]',
      snapshotUrls: 'https://i.gkd.li/i/16215989',
    },
    {
      key: 2,
      name: '全屏广告-首页广告弹窗',
      enable: false,
      fastQuery: true,
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules:
        '[id="com.yitong.mbank.psbc:id/iv_theme"] + [id="com.yitong.mbank.psbc:id/iv_theme_close_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12755516',
    },
  ],
});
