import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'youtube',
  groups: [
    {
      key: 0,
      name: '全屏广告-视频播放-跳过广告',
      desc: '点击跳过广告按钮',
      enable: false,
      fastQuery: true,
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
      desc: '关闭视频播放中的赞助商广告',
      enable: false,
      fastQuery: true,
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
      name: '全屏广告-会员广告',
      desc: '关闭首页和视频页的会员广告提示',
      enable: false,
      activityIds: [
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      ],
      rules:
        '[getChild(0).getChild(0).desc!="Image attachment"] + @[desc="不用了，谢谢" || desc="关闭" || desc="Close" || desc="No thanks"][visibleToUser=true] <<n [vid="bottom_ui_container" || vid="custom"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12877357',
        'https://i.gkd.li/i/13797512',
        'https://i.gkd.li/i/18017075',
        'https://i.gkd.li/i/18549944',
        'https://i.gkd.li/i/19578085',
      ],
      excludeSnapshotUrls: 'https://i.gkd.li/i/21978683',
    },
    {
      key: 3,
      name: '局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@ImageView[clickable=true][width<100 && height<100] <<n [vid="panel_header"]',
          snapshotUrls: 'https://i.gkd.li/i/23787178',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动翻译评论',
      desc: '点击评论区的翻译成中文按钮',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionCd: 500,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@Button[desc^="翻译成中文"][clickable=true][visibleToUser=true] <<n [vid="results" || vid="section_list"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17068544', // 翻译前
            'https://i.gkd.li/i/17068647', // 翻译后
            'https://i.gkd.li/i/17501400',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-播放页广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@[vid="overflow_button"][clickable=true] <<n [vid="collapsible_ad_cta_overlay_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23790199',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@[clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/23772979',
        },
      ],
    },
  ],
});
