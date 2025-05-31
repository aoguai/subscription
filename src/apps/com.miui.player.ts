import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '关闭各类全屏弹窗广告',
      enable: false,
      activityIds: [
        'com.tencent.qqmusiclite.activity.MainActivity',
        'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      ],
      rules: [
        {
          key: 0,
          name: '类型1',
          fastQuery: true,
          matches: '[id="com.miui.player:id/iv_close_dialog_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13623503',
        },
        {
          key: 1,
          name: '会员过期续费弹窗',
          matches: '[id=null][desc="关闭弹框按钮"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12700955'],
        },
        {
          key: 2,
          name: '播放页面底部弹窗',
          matches: 'ViewGroup > @ViewGroup + ViewGroup[childCount=5]',
          snapshotUrls: ['https://i.gkd.li/import/13304343'],
        },
        {
          key: 3,
          name: '免费试听弹窗',
          fastQuery: true,
          matches:
            '@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="webview_container"]',
          snapshotUrls: 'https://i.gkd.li/i/17783777',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-首页卡片广告',
      desc: '关闭首页分段卡片广告',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="ad_more"]',
          snapshotUrls: 'https://i.gkd.li/i/20420265',
        },
        {
          preKeys: [0],
          key: 20,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="ad_close"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/20420322',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-banner 广告',
      desc: '关闭页面内的 banner 广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700984',
            'https://i.gkd.li/i/20420253',
          ],
        },
        {
          key: 1,
          matches: '[visibleToUser=true][vid="ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16773614',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-看广告视频领VIP',
      desc: '等待15s自动点击【退出】',
      enable: false,
      rules: [
        {
          actionDelay: 15000,
          fastQuery: true,
          activityIds: 'com.tencentmusic.ad.tmead.reward.TMERewardActivity',
          matches: '[id="com.miui.player:id/tme_ad_skip_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13610667',
        },
      ],
    },
  ],
});
