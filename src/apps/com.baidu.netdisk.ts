import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      desc: '关闭VIP推广、一刻相册推广、幸运券包等活动弹窗',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.baidu.netdisk.ui.MainActivity',
        'com.baidu.netdisk.business.guide.dialog.lifeproduct.',
        'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
      ],
      rules: [
        {
          key: 0,
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642505', // 一刻相册推广弹窗
            'https://i.gkd.li/import/12923937', // VIP弹窗
            'https://i.gkd.li/import/13806852', // 幸运券包弹窗
            'https://i.gkd.li/import/12783106', // 看视频免费享极速下载弹窗
            'https://i.gkd.li/i/14730106',
          ],
        },
        {
          key: 1,
          name: '相册页面激活无限空间弹窗',
          matches:
            '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
          snapshotUrls: 'https://i.gkd.li/import/12648987',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-各类局部广告',
      desc: '关闭各类局部广告，包括续费横幅、悬浮广告卡片等',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '续费横幅提示',
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches: 'View[desc="续费"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12924036',
        },
        {
          key: 1,
          name: '右下角悬浮卡片',
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '[vid="float_btn_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/14278618',
        },
        {
          key: 2,
          name: '播放界面下方广告',
          activityIds: '.video.VideoPlayerActivity',
          matches: '[vid="rl_ad_root"] > [vid="iv_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20414230',
        },
        {
          key: 3,
          name: '下载界面下方广告',
          activityIds: '.ui.transfer.TransferListTabActivity',
          matches: '[vid="close_singkil_tip_layout"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23694176',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-成长值页面签到',
      desc: '自动点击成长值页面签到按钮',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          activityIds: '.ui.cloudp2p.RichMediaActivity',
          matches:
            'View[childCount=7] + TextView[clickable=true][text^="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/18762226',
        },
      ],
    },
  ],
});
