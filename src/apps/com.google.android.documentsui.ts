import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.documentsui',
  name: 'Android 系统文件选择器',
  groups: [
    {
      key: 10,
      enable: false,
      name: '功能类-授权第三方应用访问文件夹',
      desc: '(存在安全风险)自动点击使用此文件夹并允许访问权限',
      fastQuery: true,
      activityIds: 'com.android.documentsui.picker.PickActivity',
      rules: [
        {
          key: 0,
          matches: '[text="使用此文件夹"]',
          snapshotUrls: 'https://i.gkd.li/import/12799610',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="取消"] + [text="允许"]',
          snapshotUrls: 'https://i.gkd.li/import/12799603',
        },
      ],
    },
  ],
});
