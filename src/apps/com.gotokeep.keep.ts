import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gotokeep.keep',
  name: 'Keep',
  deprecatedKeys: [1, 5],
  groups: [
    {
      key: 2,
      name: '局部广告-首页广告弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
          matches:
            '[id="com.gotokeep.keep:id/layoutLottie"] +(1,2) [id="com.gotokeep.keep:id/imgCloseHomePageDialog"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12706102',
            'https://i.gkd.li/import/13761641',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页信息流广告',
      activityIds:
        'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
      rules:
        '[id="com.gotokeep.keep:id/textAdTag"] + [id="com.gotokeep.keep:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/import/12706115',
    },
    {
      key: 4,
      name: '局部广告-运动购页面-广告弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
          matches:
            'ImageView + LinearLayout > ImageView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12706111',
        },
        {
          key: 1,
          activityIds:
            'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
          matches:
            '[id="com.gotokeep.keep:id/contentContainer"] + [id="com.gotokeep.keep:id/closeImageView"]',
          snapshotUrls: 'https://i.gkd.li/import/13766358',
        },
      ],
    },
  ],
});
