import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.phone.remotecontroller',
  name: '万能遥控',
  groups: [
    {
      key: 0,
      name: '局部广告-底部横幅广告',
      desc: '关闭主界面底部的横幅广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2',
          matches: '[vid="image_close_banner"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22451785',
        },
      ],
    },
  ],
});
