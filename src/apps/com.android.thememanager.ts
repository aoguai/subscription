import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.thememanager',
  name: 'miui主题壁纸',
  groups: [
    {
      key: 2,
      name: '全屏广告-广告弹窗',
      enable: false,
      quickFind: true,
      activityIds: 'com.android.thememanager.ThemeResourceTabActivity',
      rules: 'ImageView[id="com.android.thememanager:id/cancel"][desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13215038',
    },
  ],
});
