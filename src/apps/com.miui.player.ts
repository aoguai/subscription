import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      enable: false,
      activityIds: [
        'com.tencent.qqmusiclite.activity.MainActivity',
        'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      ],
      rules: [
        {
          key: 0,
          name: '类型1',
          quickFind: true,
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
      ],
    },
    {
      key: 11,
      name: '局部广告-我的页面顶部 banner 广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      quickFind: true,
      rules:
        '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
      snapshotUrls: 'https://i.gkd.li/import/12700984',
    },
    {
      enable: false,
      key: 12,
      name: '功能类-看广告视频领VIP',
      desc: '等待15s自动点击【退出】',
      rules: [
        {
          actionDelay: 15000,
          quickFind: true,
          activityIds: 'com.tencentmusic.ad.tmead.reward.TMERewardActivity',
          matches: '[id="com.miui.player:id/tme_ad_skip_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13610667',
        },
      ],
    },
  ],
});
