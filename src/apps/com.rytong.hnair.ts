import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rytong.hnair',
  name: '海南航空',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      enable: false,
      quickFind: true,
      activityIds: 'com.hnair.airlines.ui.main.MainActivity',
      rules: 'ImageView[id="com.rytong.hnair:id/iv_cloes"]',
      snapshotUrls: 'https://i.gkd.li/import/12846381',
    },
  ],
});
