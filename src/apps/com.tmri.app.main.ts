import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 1,
      name: '通知提示-请求通知弹窗',
      desc: '关闭消息推送开启提示',
      enable: false,
      ignoreGlobalGroupMatch: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
            'com.tmri.app.ui.activity.main.TmriNewActivity',
          ],
          matches: 'ImageButton[id="com.tmri.app.main:id/btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13315944', //com.tmri.app.ui.activity.main.MainTabHostNewActivity
            'https://i.gkd.li/import/13779215', //com.tmri.app.ui.activity.main.TmriNewActivity
          ],
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告通知弹窗',
      desc: '关闭公告通知弹窗',
      enable: false,
      ignoreGlobalGroupMatch: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
            'com.tmri.app.ui.activity.main.TmriNewActivity',
          ],
          action: 'back',
          matches: '[vid="dialog_content_layout"]',
          snapshotUrls: ['https://i.gkd.li/i/18810054'],
        },
      ],
    },
  ],
});
