import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 6,
      name: '分段广告-首页信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
        'com.zhihu.android.ContentActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[id=null][clickable=true] -n TextView[text=null] <<n * <n * > * >n [text$="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13849671',
            'https://i.gkd.li/import/12647525',
            'https://i.gkd.li/import/14178516', //activityId: com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity
            'https://i.gkd.li/import/13849442',
            'https://i.gkd.li/import/14178979',
            'https://i.gkd.li/import/14206988',
            'https://i.gkd.li/i/14645530',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14627437', // 避免在知了页面误触
            'https://i.gkd.li/i/17002118',
            'https://i.gkd.li/i/17002119',
            'https://i.gkd.li/i/17002120',
          ],
        },
        {
          key: 1,
          matches: '@ImageView[id=null] <<n * -3 * >2 [text*="广告"][id=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/14192451',
            'https://i.gkd.li/i/14730741',
            'https://i.gkd.li/i/15782386', // 误触
          ],
        },
        {
          key: 2,
          matches:
            '@[vid="menu"][visibleToUser=true] < * - * > [text^="广告"|| text$="商品介绍"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14321041',
            'https://i.gkd.li/import/14296163',
            'https://i.gkd.li/i/14468152',
            'https://i.gkd.li/i/17237944',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14558110', // 防误触
          ],
        },
        {
          key: 3,
          matches: '@ViewGroup[clickable=true] <3 * < * -2 * >2 [text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14332161',
        },
        {
          key: 4,
          matches: '@[vid="remove"] - [vid="subtitle"][text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17268845',
            'https://i.gkd.li/i/17268869',
          ],
        },
        {
          key: 90,
          preKeys: [0, 1, 2, 3],
          matches:
            '@[clickable=true] >(1,3) [text$="不感兴趣"|| text^="屏蔽作者"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13849689',
            'https://i.gkd.li/i/17237940',
            'https://i.gkd.li/i/17268849',
          ],
        },
        {
          key: 91,
          preKeys: [90],
          matches: '[vid="uninterest_reason"][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13849689',
            'https://i.gkd.li/i/15024017',
          ],
        },
        {
          key: 92,
          preKeys: [91],
          matches: '[vid="confirm_uninterest"]',
          snapshotUrls: ['https://i.gkd.li/i/15024032'],
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: [
        'com.zhihu.android.app.ui.activity.MainActivity',
        'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
      ],
      rules: [
        {
          key: 0,
          name: '会员页广告弹窗',
          matches: '[id="com.zhihu.android:id/dismiss"]',
          snapshotUrls: 'https://i.gkd.li/i/12707676',
        },
        {
          key: 1,
          name: '首页广告弹窗',
          matches: '[vid="tv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14648128',
        },
        {
          key: 2,
          name: '会员页红包弹窗',
          matches: '[id="com.zhihu.android:id/floating_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12647421',
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-回答底部广告',
      desc: '点击关闭',
      activityIds: [
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[text="×"||(name*=".Image"&&clickable=true)][index!=0][visibleToUser=true][!(vid="medal")] <n [!(vid!=null)] > [name!*="WebView"][(text$="热度"||text$="广告"||text="创作者小助手"||(text^="知乎"&&text!*="·"))||(text="查看详情")][text.length>2&&text.length<20]',
          snapshotUrls: [
            'https://i.gkd.li/import/14178980',
            'https://i.gkd.li/import/14206949',
            'https://i.gkd.li/import/14232195', // text="创作者小助手"
            'https://i.gkd.li/import/14235024', // text="知乎游戏"
            'https://i.gkd.li/i/14944631', // text="知乎问题商店"
            'https://i.gkd.li/i/14391614',
            'https://i.gkd.li/i/14548763',
            'https://i.gkd.li/i/14220104',
            'https://i.gkd.li/i/14421277',
            'https://i.gkd.li/i/15024185',
            'https://i.gkd.li/i/15024288',
            'https://i.gkd.li/i/15282584',
            'https://i.gkd.li/i/15285359',
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/17088832'],
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-悬浮广告',
      fastQuery: true,
      activityIds: [
        'com.zhihu.android.app.ui.activity.MainActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 0,
          name: '发现页面-右侧年卡折扣悬浮窗',
          matches: ['[vid="activity_img"]', '[vid="activity_close"]'],
          snapshotUrls: 'https://i.gkd.li/import/14296251',
        },
        {
          key: 1,
          name: '首页-右侧悬浮窗广告',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14635636',
        },
        {
          key: 2,
          name: '回答页-底部关注悬浮窗',
          matches: '[vid="close_img"]',
          snapshotUrls: 'https://i.gkd.li/i/14970008',
        },
        {
          key: 3,
          name: '回答页-底部关注悬浮窗-2',
          activityIds:
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
          matches:
            'View[childCount=3] > @View[clickable=true][childCount=1][text=""] > Image[childCount=0][text=""] <<n [vid="view_content"]',
          snapshotUrls: 'https://i.gkd.li/i/16422471',
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
      fastQuery: true,
      rules: [
        {
          activityIds:
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          matches:
            'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[text="展开"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647688',
            'https://i.gkd.li/import/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
          ],
        },
      ],
    },
  ],
});
