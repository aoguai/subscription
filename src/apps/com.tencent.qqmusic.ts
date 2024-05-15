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
          key: 1,
          matches: '[text^="广告"] + [text="跳过"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13985169', // 播放界面
        },
        {
          key: 2,
          matches: '[text="广告"] +n [desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206534', //歌单页
            'https://i.gkd.li/i/13797001', //我的页
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206982',
            'https://i.gkd.li/i/13218134',
          ],
        },
        {
          key: 4,
          quickFind: true,
          matches: '@[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15041019',
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
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          forcedTime: 5000,
          matches: 'View[id="js_close_btn"][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13115121',
            'https://i.gkd.li/i/14798904',
          ],
        },
        {
          key: 1,
          name: '免流弹窗',
          quickFind: true,
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
      name: '全屏广告-推荐开启高品质音质弹窗',
      desc: '点击关闭',
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
          quickFind: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15010226',
        },
      ],
    },
  ],
});
