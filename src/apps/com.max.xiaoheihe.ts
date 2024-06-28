import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.max.xiaoheihe',
  name: '小黑盒',
  groups: [
    // { key: 0 }, 开屏广告 占位
    {
      key: 1,
      name: '功能类-签到成功弹窗',
      desc: '返回关闭弹窗',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: '[text*="签到成功"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13421535',
            'https://i.gkd.li/i/15048252',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          name: '收藏帖子后底部推荐关注卡片',
          quickFind: true,
          activityIds:
            'com.max.xiaoheihe.module.bbs.post.ui.activitys.WebNewsPostPageActivity',
          matches: '[vid="iv_notify_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14914139',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-自动查看原图',
      enable: false,
      quickFind: true,
      activityIds:
      'com.max.xiaoheihe.module.bbs.post.ui.activitys.PicturePostPageActivity',
      rules: [
        {
          matches: '[vid="tv_original"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16028159',
        },
      ],
    },
  ],
});
