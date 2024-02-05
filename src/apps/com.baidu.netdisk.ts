import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  deprecatedKeys: [0, 3, 10, 11],
  groups: [
    {
      key: 1,
      name: '局部广告-活动弹窗',
      desc: '关闭各种活动弹窗信息',
      activityIds: [
        'com.baidu.netdisk.ui.MainActivity',
        'com.baidu.netdisk.business.guide.dialog.lifeproduct.',
      ],
      rules:
        'ImageView[id="com.baidu.netdisk:id/iv_close"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12642505', // 一刻相册推广弹窗
        'https://i.gkd.li/import/12923937', // VIP弹窗
        'https://i.gkd.li/import/13806852', // 幸运券包弹窗
        'https://i.gkd.li/import/12783106', // 看视频免费享极速下载弹窗
      ],
    },
    {
      key: 2,
      name: '局部广告-首页广告',
      desc: '关闭首页各种广告信息',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      quickFind: true,
      rules: [
        {
          key: 1,
          name: 'banner广告',
          matches: '[id="com.baidu.netdisk:id/banner_item_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12706544',
        },
        {
          key: 2,
          name: '热门广告',
          matches: '[id="com.baidu.netdisk:id/close"]',
          snapshotUrls: ['https://i.gkd.li/import/12706544'],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-我的页面-限时福利',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      quickFind: true,
      rules: '@TextView + [text="专属福利"]',
      snapshotUrls: 'https://i.gkd.li/import/12706549',
    },
    {
      key: 5,
      name: '局部广告-相册页面-激活无限空间弹窗',
      quickFind: true,
      activityIds:
        'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
      rules:
        '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
      snapshotUrls: 'https://i.gkd.li/import/12648987',
    },
    {
      key: 6,
      name: '更新提示-更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="立即更新"] -n [text="下次再说"]', //使用ID会导致误触（例如删除确认https://i.gkd.li/import/13069049）
      snapshotUrls: 'https://i.gkd.li/import/12863984',
    },
    {
      key: 7,
      name: '通知提示-续费横幅提示',
      desc: '关闭续费横幅提示',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches: 'View[desc="续费"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12924036',
        },
      ],
    },
    {
      enable: false,
      key: 8,
      name: '通知提示-开启消息通知弹窗',
      desc: '自动点击关闭',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: 'ImageView[id="com.baidu.netdisk:id/dialog_cancel"]', //单独使用ID会导致误触（例如删除确认https://i.gkd.li/import/13069049）
      snapshotUrls: ['https://i.gkd.li/import/12923936'],
    },
  ],
});
