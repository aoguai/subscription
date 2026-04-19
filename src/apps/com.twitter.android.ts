import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '关闭信息流中的广告',
      enable: false,
      activityIds: [
        'com.twitter.app.main.MainActivity',
        'com.twitter.app.profiles.ProfileActivity',
        'com.twitter.tweetdetail.TweetDetailActivity',
        'com.twitter.android.search.implementation.results.SearchActivity',
      ],
      actionCd: 3000, // https://github.com/gkd-kit/subscription/issues/832
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '视频广告-点击右上角关闭',
          matches:
            '@[vid="tweet_curation_action"] <2 * + * >3 [text="视频将在广告后播放"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798795',
            'https://i.gkd.li/i/14782884',
          ],
        },
        {
          key: 1,
          name: '推荐广告-点击右上角关闭',
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <<(2,5) * <n * > * >n [id="com.twitter.android:id/tweet_promoted_badge_bottom"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12813235',
            'https://i.gkd.li/i/14782897',
            'https://i.gkd.li/i/17182889',
            'https://i.gkd.li/import/12825969', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12847584', // com.twitter.android.search.implementation.results.SearchActivity
            'https://i.gkd.li/import/12882676', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12904603', // com.twitter.app.profiles.ProfileActivity
          ],
        },
        {
          key: 2,
          name: '点击右上角关闭-英文',
          matches:
            '@[vid="tweet_curation_action"] - [vid="tweet_ad_badge_top_right"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13680756',
            'https://i.gkd.li/i/24359526',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 10,
          name: '点击屏蔽/隐藏,如果机会全用完需要取消遍再屏蔽',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"||text^="封鎖"||text^="Block"||text^="隐藏 @"||text^="Mute @"||text^="Unblock @"||text^="Unmute @"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798810',
            'https://i.gkd.li/i/14782902',
            'https://i.gkd.li/import/12828815', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12847600', // com.twitter.android.search.implementation.results.SearchActivity
            'https://i.gkd.li/import/12904602', // com.twitter.app.profiles.ProfileActivity
            'https://i.gkd.li/import/13680783', // 兼容英文
            'https://i.gkd.li/i/20034038', // 封鎖
            'https://i.gkd.li/i/20239421',
            'https://i.gkd.li/i/24359537',
            'https://i.gkd.li/i/25089665', // 屏蔽已用
            'https://i.gkd.li/i/25461007', // 隐藏已用
            'https://i.gkd.li/i/25461077', // En-Mute
            'https://i.gkd.li/i/25461050', // En-Unmute
            'https://i.gkd.li/i/26865753',
          ],
        },
        {
          preKeys: 10,
          key: 11,
          name: '二次确认-点击屏蔽',
          matches:
            '[text="取消"||text^="Cancel"] + [text="屏蔽"||text^="Block"||text="是的，我确定"||text^="Yes"||text^="屏蔽"||text^="Mute"||text^="Unmute"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12828832', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12904601', // com.twitter.app.profiles.ProfileActivity
            'https://i.gkd.li/import/13680798', // 兼容英文
            'https://i.gkd.li/i/25089666',
            'https://i.gkd.li/i/25461062', // En-Unmute
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-关闭[开启个性化广告]弹窗',
      desc: '关闭[开启个性化广告]弹窗',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.twitter.app.main.MainActivity',
          matches:
            '[vid="secondary_button"][clickable=true][getChild(0).getChild(0).getChild(0).text="保留更少相关广告"]',
          snapshotUrls: 'https://i.gkd.li/i/25150279',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动点击翻译',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionCd: 2000, //防止[译文]节点未加载完导致重复点击 [翻译]
          activityIds: 'com.twitter.tweetdetail.TweetDetailActivity',
          matches:
            '[vid="translation_link" || vid="grok_translation_link"][index=parent.childCount.minus(1)][index!=2]',
          exampleUrls: [
            'https://e.gkd.li/ced46989-9c6a-4626-b027-7953e0fdc2c6',
            'https://m.gkd.li/57941037/40ece44f-883f-429a-aa0c-17dac15a50e4',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14189817',
            'https://i.gkd.li/i/14615911',
            'https://i.gkd.li/i/25537171',
            'https://i.gkd.li/i/25461468',
            'https://i.gkd.li/i/25461607', // Grok translate
            'https://i.gkd.li/i/26642877',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/25537171', // 已翻译, 加 [index=parent.childCount.minus(1)] 排除
            'https://i.gkd.li/i/26642826', // 已翻译, 加 [index!=2] 排除
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动点击"显示更多帖子"',
      desc: '点击时间线底部的"显示更多帖子"按钮',
      enable: false,
      fastQuery: true,
      activityIds: 'com.twitter.app.main.MainActivity',
      rules: '@FrameLayout[clickable=true] > [text="显示更多帖子"]',
      snapshotUrls: 'https://i.gkd.li/import/14189847',
    },
  ],
});
