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
      key: 7,
      name: '局部广告-续费横幅提示',
      desc: '关闭首页续费提醒横幅',
      fastQuery: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches: 'View[desc="续费"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12924036',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右下角悬浮卡片',
      desc: '关闭首页右下角悬浮广告卡片',
      fastQuery: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches:
            '[vid="float_btn_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/14278618',
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
