import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bilibili.studio',
  name: '必剪',
  deprecatedKeys: [0],
  groups: [
    {
      key: 3,
      name: '更新提示-版本更新',
      desc: '勾选【忽略】-点击【以后再说】',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.bcut.homepage.widget.MainActivity',
      rules: [
        {
          key: 0,
          name: '勾选【忽略】',
          matches:
            '[id="com.bilibili.studio:id/update_cbx_ignore_version"][checked=false]',
        },
        {
          preKeys: 0,
          name: '点击【以后再说】',
          matches: '[id="com.bilibili.studio:id/update_btn_cancel"]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/13496049',
    },
  ],
});
