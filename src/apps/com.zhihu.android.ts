import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhihu.android',
  name: '知乎',
  deprecatedKeys: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 13],
  groups: [
    {
      key: 6,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[id=null][clickable=true] <<n * <n * > * >n [text$="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f6498773-af55-4ba9-96fa-4c0597523d55',
          snapshotUrls: [
            'https://i.gkd.li/import/13849671',
            'https://i.gkd.li/import/12647525',
            'https://i.gkd.li/import/14178516', //activityId: com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity
            'https://i.gkd.li/import/13849442',
            'https://i.gkd.li/import/14178979',
            'https://i.gkd.li/import/14206988',
          ],
        },
        {
          key: 1,
          matches: '@ViewGroup[clickable=true] <4 * -3 * >2 [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14192451',
        },
        {
          key: 2,
          matches:
            '[text*="广告"] <<n [vid="bottom_container"] > [vid="menu_container"] > [vid="menu"][visibleToUser!=false]',
          exampleUrls:
            'https://m.gkd.li/57941037/689c77eb-9026-44db-b22e-d890961a0ad6',
          snapshotUrls: [
            'https://i.gkd.li/import/14321041',
            'https://i.gkd.li/i/14468152',
            'https://i.gkd.li/i/14558110', // 防误触
          ],
        },
        {
          key: 90,
          preKeys: [0, 1, 2],
          matches: '@[clickable=true] >3 [text$="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13849689',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-会员页面月卡红包',
      desc: '点击关闭',
      enable: false,
      quickFind: false,
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[id="com.zhihu.android:id/floating_close_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/335dee89-4b55-40f1-8316-b7b4f86a8ee6',
          snapshotUrls: 'https://i.gkd.li/import/12647421',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-会员页面广告弹窗',
      desc: '点击关闭',
      enable: false,
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9eb78a95-c2dc-4a8b-9b86-f9d0fc0ed6fd',
          snapshotUrls: 'https://i.gkd.li/import/12707676',
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      activityIds: [
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[name$=".ImageView"||name$=".Image"][clickable=true] <n * > [text$="广告"||text="创作者小助手"||text="知乎游戏"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0443d5cb-aa24-4447-afd7-58c5a09af835',
          snapshotUrls: [
            'https://i.gkd.li/import/14178980',
            'https://i.gkd.li/import/14206949',
            'https://i.gkd.li/import/14232195', // text="创作者小助手"
            'https://i.gkd.li/import/14235024', // text="知乎游戏"
            'https://i.gkd.li/i/14391614',
            'https://i.gkd.li/i/14548763',
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches: '@[vid="menu"][visibleToUser=true] < * - * > [text^="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14296163',
        },
        {
          key: 3,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          quickFind: true,
          matches: '@ViewGroup[clickable=true] <3 * < * -2 * >2 [text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14332161',
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-悬浮小广告',
      rules: [
        {
          key: 0,
          name: '发现页面-右侧年卡折扣悬浮窗',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          quickFind: true,
          matches: '@[vid="activity_close"] + * > [vid="activity_img"]',
          snapshotUrls: 'https://i.gkd.li/import/14296251',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-自动授权',
      desc: '包括扫码登录授权',
      enable: false,
      activityIds: 'com.zhihu.android.app.ui.activity.HostActivity',
      rules: [
        {
          matches: '[text="取消"] <n * > [text="确认登录"]',
          snapshotUrls: 'https://i.gkd.li/import/14341536',
        },
      ],
    },
    {
      key: 101,
      name: '功能类-自动展开回答',
      desc: '自动点击展开',
      enable: false,
      rules: [
        {
          activityIds:
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          matches:
            'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6f6e5fd0-98a8-4a92-be02-7f34e3c5b8bd',
          snapshotUrls: [
            'https://i.gkd.li/import/12647688',
            'https://i.gkd.li/import/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
          ],
        },
      ],
    },
  ],
});
