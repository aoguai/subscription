import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  deprecatedKeys: [0, 2, 3, 4, 6, 8, 10, 11],
  groups: [
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      desc: '关闭各种活动弹窗信息',
      enable: false,
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
      key: 5,
      name: '全屏广告-相册页面激活无限空间弹窗',
      enable: false,
      quickFind: true,
      activityIds:
        'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
      rules:
        '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
      snapshotUrls: 'https://i.gkd.li/import/12648987',
    },
    {
      key: 7,
      name: '局部广告-续费横幅提示',
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
  ],
});
