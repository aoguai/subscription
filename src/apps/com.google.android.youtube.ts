import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.youtube',
  name: 'youtube',
  groups: [
    {
      key: 0,
      name: '全屏广告-视频播放-跳过广告',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
        'com.google.android.youtube',
      ],
      rules: [
        {
          key: 0,
          name: '类型1',
          matches: '[id="com.google.android.youtube:id/skip_ad_button_text"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13797491',
            'https://i.gkd.li/import/12565261',
          ],
        },
        {
          key: 1,
          name: '类型2',
          matches: '[id="com.google.android.youtube:id/modern_skip_ad_text"]',
          snapshotUrls: ['https://i.gkd.li/import/13705106'],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-视频播放-赞助商广告',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      ],
      rules:
        '@[desc="关闭广告面板" || desc="Close ad panel"] <<n [vid="panel_header"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12877346',
        'https://i.gkd.li/import/13797491',
        'https://i.gkd.li/import/13705106',
      ],
    },
    {
      key: 2,
      name: '局部广告-首页会员广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      rules:
        'ImageView < @Button < ViewGroup +3 Button[desc*="YouTube Premium"]',
      snapshotUrls: 'https://i.gkd.li/import/12877357',
    },
    {
      key: 3,
      name: '全屏广告-订阅浮窗广告',
      enable: false,
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules:
        'ViewGroup[desc="免费试用 1 个月"] < * - * > ViewGroup[text="不用了，谢谢"]', // 缺少英文快照
      snapshotUrls: 'https://i.gkd.li/import/13797512',
    },
  ],
});
