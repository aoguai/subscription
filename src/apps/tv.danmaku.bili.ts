import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 2,
      name: '分段广告-动态推荐广告卡片',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      enable: false,
      fastQuery: true,
      matchDelay: 5000,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
          snapshotUrls: 'https://i.gkd.li/import/12700222',
        },
        {
          preKeys: 1,
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/import/12700243',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-视频卡片广告',
      desc: '包括 视频底部与评论区中间卡片式广告, 首页推荐视频卡片广告',
      enable: false,
      activityIds: [
        'tv.danmaku.bili.MainActivityV2',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右侧菜单图标',
          matches:
            '[(desc*="广告"||desc*="来自淘宝")&&desc*="查看"] >n * >n [id^="tv.danmaku.bili:id/more"] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12642260', // n = 2
            'https://i.gkd.li/import/12705266', // n = 3
            'https://i.gkd.li/import/12776568', // id="tv.danmaku.bili:id/more_layout"
            'https://i.gkd.li/import/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
            'https://i.gkd.li/i/14083540',
            'https://i.gkd.li/i/14059876',
            'https://i.gkd.li/i/14588315',
            'https://i.gkd.li/i/14729855',
          ],
        },
        {
          preKeys: 0,
          key: 50,
          fastQuery: true,
          name: '点击[不感兴趣]',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13495649',
            'https://i.gkd.li/i/13742257',
            'https://i.gkd.li/i/13256605',
            'https://i.gkd.li/i/14155801',
            'https://i.gkd.li/i/13742257',
          ],
        },
        {
          preKeys: 0,
          key: 51,
          name: '点击[相似内容过多]',
          fastQuery: true,
          matches: '@[clickable=true] > [text="相似内容过多"]',
          exampleUrls:
            'https://m.gkd.li/57941037/acd89b46-45fc-459f-8d17-3913d98dcbad',
          snapshotUrls: [
            'https://i.gkd.li/i/13945597',
            'https://i.gkd.li/i/14155272',
            'https://i.gkd.li/i/14059882',
          ],
        },
        {
          preKeys: 0,
          key: 52,
          name: '点击[up主不感兴趣]',
          fastQuery: true,
          matches: '@[clickable=true] > [text="up主不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9c2f42d7-c262-4e06-b3c6-40f0908e7a94',
          snapshotUrls: [
            'https://i.gkd.li/i/13625309',
            'https://i.gkd.li/i/12642261',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-视频悬浮广告',
      desc: '领取大会员月卡,B站免流星卡',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      rules: '[id="tv.danmaku.bili:id/toast_x"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12892611',
        'https://i.gkd.li/i/13308344',
        'https://i.gkd.li/i/13538048', // activityIds: 'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
    },
    {
      key: 8,
      name: '局部广告-直播间卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 0,
          name: '直播间底部售卖卡片',
          matches: '[id="tv.danmaku.bili:id/shopping_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13200549',
        },
        {
          key: 1,
          name: '[关注]弹窗',
          fastQuery: true,
          matches: '@[vid="close"] -2 * >2 [text="关注"]',
          snapshotUrls: 'https://i.gkd.li/i/14782965',
        },
      ],
    },
  ],
});
