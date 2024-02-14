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
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          quickFind: true,
          activityIds: [
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
          ],
          matches: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12867751',
            'https://i.gkd.li/import/12894813',
          ],
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds: 'com.bbk.launcher2.Launcher',
          matches:
            '[text="广告"] <2 ViewGroup -3 ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13346628',
        },
        {
          key: 2,
          name: '快手广告-2',
          activityIds:
            'com.zmzx.college.search.activity.main.activity.MainActivity',
          matches: [
            'ViewGroup > ViewGroup > ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup > ViewGroup > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13451304',
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
          matches:
            '[id="com.zmzx.college.search:id/ad_flag_source_layout"] + [id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13522998',
        },
        {
          key: 4,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches: '@Image < View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13523288',
        },
        {
          key: 5,
          name: '字节广告-3',
          quickFind: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[clickable=true] > [id="com.zmzx.college.search:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12893408',
        },
      ],
    },
  ],
});
