import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.twitter.android',
  name: 'X(推特)',
  deprecatedKeys: [5],
  groups: [
    {
      key: 1,
      name: '分段广告-主页信息流广告',
      desc: '点击右上角关闭,点击我不喜欢',
      enable: false,
      activityIds: [
        'com.twitter.app.main.MainActivity',
        'com.twitter.app.profiles.ProfileActivity',
      ],
      actionCd: 3000, // https://github.com/gkd-kit/subscription/issues/832
      quickFind: true,
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
          matches: '@[vid="tweet_curation_action"] <2 * + * > [text="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12813235',
            'https://i.gkd.li/i/14782897',
          ],
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[我不喜欢这个广告]',
          matches: '@ViewGroup[clickable=true] > [text="我不喜欢这个广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798810',
            'https://i.gkd.li/i/14782902',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-帖子详情页、搜索页信息流广告',
      desc: '点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.twitter.tweetdetail.TweetDetailActivity',
        'com.twitter.android.search.implementation.results.SearchActivity',
      ],
      actionCd: 3000,
      rules: [
        {
          name: '点击右上角关闭',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12825969', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12847584', // com.twitter.android.search.implementation.results.SearchActivity
          ],
        },
        {
          name: '点击右上角关闭',
          key: 1,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12882676', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12904603', // com.twitter.app.profiles.ProfileActivity
          ],
        },
        {
          name: '点击右上角关闭-英文',
          key: 2,
          matches:
            '[id="com.twitter.android:id/tweet_ad_badge_top_right"] + [id="com.twitter.android:id/tweet_curation_action"]',
          snapshotUrls: ['https://i.gkd.li/import/13680756'],
        },
        {
          preKeys: [0, 1, 2],
          key: 10,
          name: '点击屏蔽',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"||text^="屏蔽"||text^="Block"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12828815', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12847600', // com.twitter.android.search.implementation.results.SearchActivity
            'https://i.gkd.li/import/12904602', // com.twitter.app.profiles.ProfileActivity
            'https://i.gkd.li/import/13680783', // 兼容英文
          ],
        },
        {
          preKeys: 10,
          key: 11,
          name: '二次确认-点击屏蔽',
          matches:
            '[text="取消"||text^="Cancel"] + [text="屏蔽"||text^="Block"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12828832', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12904601', // com.twitter.app.profiles.ProfileActivity
            'https://i.gkd.li/import/13680798', // 兼容英文
          ],
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-用户资料页信息流广告',
      desc: '点击右上角关闭,点击我不喜欢',
      enable: false,
      quickFind: true,
      activityIds: ['com.twitter.app.profiles.ProfileActivity'],
      actionCd: 3000,
      rules: [
        {
          name: '点击右上角关闭',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12825969', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12847584', // com.twitter.android.search.implementation.results.SearchActivity
          ],
        },
        {
          name: '点击右上角关闭',
          key: 1,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12882676', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12904603', // com.twitter.app.profiles.ProfileActivity
          ],
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[我不喜欢这个广告]',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text="我不喜欢这个广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12798810',
        },
      ],
    },
    {
      key: 4,
      name: '评价提示-评价弹窗',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.twitter.app.main.MainActivity',
      rules: '[id="com.twitter.android:id/app_rating_button_never"]',
      snapshotUrls: 'https://i.gkd.li/import/13774150',
    },
    {
      key: 6,
      name: '功能类-自动点击翻译',
      enable: false,
      quickFind: true,
      activityIds: 'com.twitter.tweetdetail.TweetDetailActivity',
      rules: '[vid="translation_link"][text^="翻译"]',
      snapshotUrls: [
        'https://i.gkd.li/i/14189817',
        'https://i.gkd.li/i/14615911',
      ],
    },
    {
      key: 7,
      name: '功能类-自动点击"显示更多帖子"',
      enable: false,
      quickFind: true,
      activityIds: 'com.twitter.app.main.MainActivity',
      rules: '@FrameLayout[clickable=true] > [text="显示更多帖子"]',
      snapshotUrls: 'https://i.gkd.li/import/14189847',
    },
  ],
});
