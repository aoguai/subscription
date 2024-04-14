import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  deprecatedKeys: [1, 3, 4, 5, 6, 7, 8, 9, 10],
  groups: [
    {
      key: 2,
      name: '全屏广告',
      enable: false,
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '广告-1',
          activityIds: [
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
            'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
            'com.zmzx.college.search.activity.common.CommonCacheHybridActivity',
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          ],
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12867751',
            'https://i.gkd.li/import/12894813',
            'https://i.gkd.li/import/13522998',
          ],
        },
        {
          key: 2,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches:
            '@Image[text.length=0] < View +(3,5) View > View > TextView[text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13523288',
            'https://i.gkd.li/i/14965922',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-首页底部广告',
      quickFind: true,
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: '[vid="tvClose"]',
      snapshotUrls: 'https://i.gkd.li/i/14518991',
    },
  ],
});
