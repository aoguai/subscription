import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhaopin.social',
  deprecatedKeys: [1, 4],
  name: '智联招聘',
  groups: [
    {
      key: 2,
      name: '局部广告-我的页面-banner广告',
      activityIds: 'com.zhaopin.social.homepage.ZSC_MainTabActivity',
      rules: '[id="com.zhaopin.social:id/rl_banner_close"][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12706181'],
    },
    {
      key: 3,
      name: '局部广告-社区-弹窗广告',
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      rules:
        'ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]',
      snapshotUrls: 'https://inspect.gkd.li/import/13063442',
    },
  ],
});
