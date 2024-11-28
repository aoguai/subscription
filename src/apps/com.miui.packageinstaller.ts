import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 7,
      name: '功能类-放弃开启安全守护',
      fastQuery: true,
      activityIds:
        'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
      rules: [
        {
          key: 0,
          matches: '[text="30天内不再提示"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/16487140',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="放弃"]',
          snapshotUrls: 'https://i.gkd.li/i/16487142',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-自动安装/更新应用',
      desc: '该规则仅适配关闭小米系统[安全守护]的情况',
      matchRoot: true,
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击[安装]/[更新]',
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          ],
          matches:
            '@FrameLayout[clickable=true] > LinearLayout[childCount=1] > [text^="继续"][text.length=4]',
          snapshotUrls: [
            'https://i.gkd.li/i/16487278',
            'https://i.gkd.li/i/16487282',
            'https://i.gkd.li/i/17691996',
          ],
        },
        {
          // preKeys: [0], 有概率不触发
          key: 1,
          name: '点击[完成]',
          activityIds:
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
          matches: '[text="完成"]',
          snapshotUrls: 'https://i.gkd.li/i/16487274',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-自动允许应用安装软件',
      fastQuery: true,
      activityIds: 'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
      rules: [
        {
          key: 0,
          name: '点击[记住我的选择]',
          matches: [
            '[text$="安装应用？"]',
            'CheckBox[text="记住我的选择"][checked=false]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16487366',
            'https://i.gkd.li/i/16487389',
          ],
        },
        {
          preKeys: [0],
          name: '点击[允许]',
          matches: '[text="允许"]',
          snapshotUrls: 'https://i.gkd.li/i/16487365',
        },
      ],
    },
    {
      key: 15,
      name: '功能类-备案信息弹窗',
      desc: '点击[继续安装]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          matches: ['[text$="备案信息"]', '[text="继续安装"]'],
          snapshotUrls: 'https://i.gkd.li/i/17908298',
        },
      ],
    },
  ],
});
