import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X',
  groups: [
    {
      key: 1,
      name: '分段广告-主页信息流广告',
      desc: '点击右上角关闭,点击我不喜欢',
      actionCd: 3000, // https://github.com/gkd-kit/subscription/issues/832
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.twitter.app.main.MainActivity',
        'com.twitter.app.profiles.ProfileActivity',
      ],
      rules: [
        {
          key: 0,
          name: '视频广告-点击右上角关闭',
          matches:
            '@[id$="_action"] <2 * + * >(1,3) [text$="广告后播放" || text$="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798795',
            'https://i.gkd.li/i/14782884',
            'https://i.gkd.li/i/12813235',
            'https://i.gkd.li/i/14782897',
            'https://i.gkd.li/i/17182889',
          ],
        },
        {
          key: 1,
          matches:
            '@[vid="tweet_curation_action"] - [vid="tweet_ad_badge_top_right"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24359526',
        },
        {
          key: 2, //无快查
          activityIds: 'com.x.android.main.MainActivity',
          matches:
            '@ImageView[desc="发帖选项"] - [visibleToUser=true][text="Ad"]',
          snapshotUrls: 'https://i.gkd.li/i/29085434',
        },

        // 第二段
        {
          key: 10,
          preKeys: [0, 1],
          matches:
            '@[clickable=true] > [text^="我不喜" || text^="屏蔽" || text^="封鎖" || text^="Block"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14782902', // 我不喜欢这个广告、屏蔽
            'https://i.gkd.li/i/28415651', // 我不喜歡這個廣告、封鎖
            'https://i.gkd.li/i/20239421', // 屏蔽
          ],
        },
        {
          key: 11, //无快查
          preKeys: [2],
          activityIds: 'com.x.android.main.MainActivity',
          matches:
            '@[clickable=true] > [visibleToUser=true][text^="我不喜" || text^="屏蔽" || text^="封鎖" || text^="Block"]',
          snapshotUrls: 'https://i.gkd.li/i/29085445',
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
