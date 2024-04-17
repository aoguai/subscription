import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhaopin.social',
  name: '智联招聘',
  groups: [
    {
      key: 2,
      name: '局部广告-我的页面卡片广告',
      activityIds: 'com.zhaopin.social.homepage.ZSC_MainTabActivity',
      rules:
        '[id="com.zhaopin.social:id/rl_banner_close"][visibleToUser=true][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12706181'],
    },
    {
      key: 3,
      name: '全屏广告-社区页面弹窗广告',
      enable: false,
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      rules:
        'ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]',
      snapshotUrls: 'https://i.gkd.li/import/13063442',
    },
  ],
});
