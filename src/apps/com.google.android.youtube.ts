import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'YouTube',
  groups: [
    {
      key: 0,
      name: '全屏广告-视频播放-跳过广告',
      desc: '点击跳过广告按钮',
      enable: false,
      rules: [
        {
          fastQuery: true,
          key: 0,
          activityIds: [
            'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          ],
          matches: '[vid="skip_ad_button" || vid="modern_skip_ad_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797491',
            'https://i.gkd.li/i/12565261',
            'https://i.gkd.li/i/13705106',
          ],
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
      rules: [
        {
          matches:
            '@[desc="关闭广告面板" || desc="Close ad panel"][clickable=true] - ImageView <<3 FrameLayout < [vid="panel_header"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797491',
            'https://i.gkd.li/i/13705106', // 纯id？
            'https://i.gkd.li/i/14784199',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-会员广告',
      desc: '关闭首页和视频页的会员广告提示',
      enable: false,
      fastQuery: true,
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules: [
        {
          key: 0,
          name: '视频',
          matches:
            '[!(getChild(0).getChild(0).desc="Image attachment")] + @[desc="不用了，谢谢" || desc="关闭" || desc="我暂时不要" || desc="Close" || desc="No thanks"][visibleToUser=true] <3 ViewGroup <<(-n+8) [vid="bottom_ui_container" || vid="custom"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797512',
            'https://i.gkd.li/i/19578085',
            'https://i.gkd.li/i/25865404',
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/21978683',
          exampleUrls: 'https://e.gkd.li/1292c8c9-26e3-4053-bec4-e5ebe50cde8e',
        },
        {
          key: 1,
          name: '开屏', // 疑似开屏，但有可能不是
          matches:
            '[!(getChild(0).getChild(0).desc="Image attachment")] + @[desc="不用了，谢谢" || desc="关闭" || desc="我暂时不要" || desc="Close" || desc="No thanks"][visibleToUser=true] -n ImageView < * < [vid="custom"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18017075',
            'https://i.gkd.li/i/18549944',
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/21978683',
          exampleUrls: 'https://e.gkd.li/11cdf5b2-97a8-42f0-a2eb-dc1cb2c98ac1',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动翻译评论',
      desc: '评论区自动点击[翻译成/Translate to]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionCd: 500,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@Button[desc^="翻译成"||desc^="Translate to"][clickable=true][visibleToUser=true] -n [desc^="@"] <<3 ViewGroup -n * < [vid="results" || vid="section_list"]',
          exampleUrls: 'https://e.gkd.li/e9d6eaa8-9fbf-4b16-8f0c-50239597c687',
          snapshotUrls: [
            'https://i.gkd.li/i/17068544', // 翻译前
            'https://i.gkd.li/i/17068647', // 翻译后
            'https://i.gkd.li/i/17501400',
            'https://i.gkd.li/i/25462152', // En_translate前
            'https://i.gkd.li/i/25462248', // En_translate后
          ],
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-播放页广告',
      desc: '点击[Dismiss/关闭]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '[vid="mealbar_action_button"] - [vid="mealbar_dismiss_button"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/aa8f2617-fd6d-43a8-951d-1bd6efc504d3',
          snapshotUrls: [
            'https://i.gkd.li/i/19930694',
            'https://i.gkd.li/i/25461814',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '局部广告',
      desc: '点击关闭各类局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@ImageView[clickable=true][index=parent.childCount.minus(1)] - [desc="更多选项"] < ViewGroup[childCount=2] < * < [vid="panel_header"]',
          snapshotUrls: 'https://i.gkd.li/i/23787178',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25461943',
        },
      ],
    },
    {
      key: 9,
      name: '分段广告-播放器广告',
      desc: '点击关闭播放器广告',
      enable: false,
      fastQuery: true,
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            '[vid="collapsible_ad_cta_overlay_container"] >4 [vid="overflow_button"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23790199',
            'https://i.gkd.li/i/26672553',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          matches:
            '@[clickable=true] >(1,2) [vid="list_item_text"][text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23772979',
            'https://i.gkd.li/i/25461885',
          ],
        },
      ],
    },
  ],
});
