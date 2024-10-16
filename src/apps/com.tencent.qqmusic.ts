import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      activityIds: [
        'com.tencent.qqmusic.activity.AppStarterActivity',
        'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
      ],
      rules: [
        {
          key: 2,
          fastQuery: true,
          matches: '@[desc="关闭"] -n [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206534', //歌单页
            'https://i.gkd.li/i/13797001', //我的页
          ],
        },
        {
          key: 3,
          fastQuery: true,
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206982',
            'https://i.gkd.li/i/13218134',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          matches: '@[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15041019',
        },
        {
          key: 5,
          matches:
            'RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null]',
          snapshotUrls: 'https://i.gkd.li/i/15756931',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '弹窗广告',
          forcedTime: 5000,
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          matches: 'View[id="js_close_btn"][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13115121',
            'https://i.gkd.li/i/14798904',
          ],
        },
        {
          key: 1,
          name: '免流弹窗',
          fastQuery: true,
          activityIds: [
            'com.tencent.qqmusic.activity.AppStarterActivity',
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          ],
          matches: '[text="流量够用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197868',
            'https://i.gkd.li/i/15285647',
          ],
        },
        {
          key: 2,
          name: '签到弹窗',
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '[id="android:id/content"] > FrameLayout > FrameLayout > ViewGroup[childCount=2] > ViewGroup > ViewGroup[clickable=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15443191',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-看广告免费听歌弹窗',
      desc: '点击X',
      enable: false,
      rules: [
        {
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches: '@[desc="关闭按钮"] <n * > [desc^="看广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13806773',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭',
      enable: false,
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '[id="android:id/content"] >4 ViewGroup[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13806782',
        },
        {
          key: 1,
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          matches:
            '@View[clickable=true][desc="关闭"] +2 * >2 [desc$="确认协议并开通" || desc="立即开通会员"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15209764',
            'https://i.gkd.li/i/15261116',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-音质音效弹窗',
      desc: '推广音质音效相关弹窗，自动点击关闭',
      enable: false,
      rules: [
        {
          key: 0,
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          matches:
            '[text^="推荐您开启臻品音质"] -3 [desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14549936',
        },
        {
          key: 1,
          activityIds:
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          matches:
            '[id="android:id/content"] >4 FrameLayout[childCount=6] > FrameLayout[childCount=1][text=null][index=1] > ImageView[visibleToUser=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/16914135',
        },
        {
          key: 2,
          activityIds: '.activity.AppStarterActivity',
          matches: '[desc="关闭弹窗"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17057551',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-评论区广告',
      desc: '点击右下角展开-点击[不感兴趣]',
      enable: false,
      activityIds:
        'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      rules: [
        {
          key: 0,
          matches:
            'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
          snapshotUrls: 'https://i.gkd.li/i/15010210',
        },
        {
          preKeys: [0],
          key: 99,
          fastQuery: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15010226',
        },
      ],
    },
  ],
});
