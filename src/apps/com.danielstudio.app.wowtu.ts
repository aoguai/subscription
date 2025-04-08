import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.danielstudio.app.wowtu',
  name: '煎蛋',
  groups: [
    {
      key: 1,
      name: '功能类-自动查看高清图片',
      desc: '点击图片左下角[HD]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.ImageGalleryActivity',
          matches: '[vid="hd_image"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19643465',
        },
      ],
    },
  ],
});
