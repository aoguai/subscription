import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  deprecatedKeys: [0, 3, 4, 5, 6, 7],
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      enable: false,
      activityIds: [
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      ],
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[id="com.cainiao.wireless:id/draw_dialog_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14162087',
            'https://i.gkd.li/import/14162238',
          ],
        },
        {
          key: 1,
          matches:
            'View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13042279',
        },
        {
          key: 2,
          quickFind: true,
          matches: '[vid="dialog_full_image_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13842492',
        },
        {
          key: 3,
          matches: 'View[childCount=2][clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/14033859',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-包裹页面-地图底部横条广告',
      activityIds: [
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      ],
      rules: 'View[desc="立即查看"] +2 ImageView[id=null]',
      snapshotUrls: ['https://i.gkd.li/import/14162159'],
    },
  ],
});
