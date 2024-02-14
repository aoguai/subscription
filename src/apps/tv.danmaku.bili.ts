import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  deprecatedKeys: [0, 1, 3, 5, 6, 9, 11],
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '开屏广告,任意界面切回APP开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="tv.danmaku.bili:id/count_down"][text^="跳"]',
      snapshotUrls: 'https://i.gkd.li/import/12705270',
    },
    {
      key: 2,
      name: '分段广告-动态推荐广告卡片',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      enable: false,
      quickFind: true,
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
      name: '分段广告-视频底部与评论区中间卡片式广告',
      desc: '需点击二次弹窗 屏蔽原因',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右侧菜单图标',
          matches:
            'FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"] >n [id^="tv.danmaku.bili:id/more"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642260', // n = 2
            'https://i.gkd.li/import/12705266', // n = 3
            'https://i.gkd.li/import/12776568', // id="tv.danmaku.bili:id/more_layout"
            'https://i.gkd.li/import/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击屏蔽广告',
          matches:
            '[id="tv.danmaku.bili:id/dislike_reasons"] @RelativeLayout > [text*="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642261', // 屏蔽广告菜单弹窗
            'https://i.gkd.li/import/13495649',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-视频悬浮广告',
      desc: '领取大会员月卡,B站免流星卡',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      rules: ['[id="tv.danmaku.bili:id/toast_x"]'],
      snapshotUrls: [
        'https://i.gkd.li/import/12892611',
        'https://i.gkd.li/import/13308344',
        'https://i.gkd.li/import/13538048', // activityIds: 'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
      ],
    },
    {
      key: 8,
      name: '局部广告-直播间卡片广告',
      desc: '直播间底部售卖卡片-点击右上角x',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: '[id="tv.danmaku.bili:id/shopping_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13200549',
    },
    {
      key: 10,
      name: '分段广告-首页推荐视频卡片广告', // 流程与 key=4 视频底部广告 基本一致
      enable: false,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 0,
          name: '点击广告卡片右下角菜单按钮',
          actionMaximum: 1,
          actionCd: 500,
          matches:
            'RelativeLayout[desc^="广告"] > ViewGroup[childCount=3] > FrameLayout[index=2]',
          snapshotUrls: 'https://i.gkd.li/import/14083540',
        },
        {
          key: 3,
          name: '点击巨幅广告卡片右下角菜单按钮',
          actionMaximum: 1,
          actionCd: 500,
          matches:
            'ViewGroup[desc^="广告"] >2 ViewGroup[childCount=3] > FrameLayout[index=2]',
          snapshotUrls: 'https://i.gkd.li/import/14059876',
        },
        {
          preKeys: [0],
          key: 1,
          quickFind: true,
          name: '点击[不感兴趣]',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13742257',
            'https://i.gkd.li/import/13256605',
            'https://i.gkd.li/import/14155801',
            'https://i.gkd.li/import/13742257',
          ],
        },
        {
          preKeys: [0, 3],
          key: 4,
          name: '点击[相似内容过多]',
          quickFind: true,
          matches: '@[clickable=true] > [text="相似内容过多"]',
          exampleUrls:
            'https://m.gkd.li/57941037/acd89b46-45fc-459f-8d17-3913d98dcbad',
          snapshotUrls: [
            'https://i.gkd.li/import/13945597',
            'https://i.gkd.li/import/14155272',
            'https://i.gkd.li/import/14059882',
          ],
        },
        {
          preKeys: [0],
          key: 5,
          name: '点击[up主不感兴趣]',
          quickFind: true,
          matches: '@[clickable=true] > [text="up主不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9c2f42d7-c262-4e06-b3c6-40f0908e7a94',
          snapshotUrls: 'https://i.gkd.li/import/13625309',
        },
      ],
    },
  ],
});
