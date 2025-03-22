import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 7,
      name: '功能类-放弃开启安全守护',
      desc: '勾选不再提示并点击放弃开启安全守护',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
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
      desc: '自动点击安装/更新和完成按钮(需关闭应用安全验证和安全守护)',
      enable: false,
      matchRoot: true,
      fastQuery: true,
      actionMaximum: 1,
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
          preKeys: [0],
          key: 1,
          name: '点击[完成]',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: '[text="完成"]',
          snapshotUrls: 'https://i.gkd.li/i/16487274',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-自动允许应用安装软件',
      desc: '(存在安全风险)自动勾选记住选择并允许应用安装软件',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
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
            'https://i.gkd.li/i/18937578',
          ],
        },
        {
          preKeys: [0],
          name: '点击[允许]',
          matches: '[text="允许"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16487365',
            'https://i.gkd.li/i/18937576',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '功能类-备案信息弹窗',
      desc: '自动点击备案信息弹窗的继续安装按钮',
      enable: false,
      actionMaximum: 1,
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
    {
      key: 16,
      name: '功能类-无视风险继续安装',
      desc: '(存在安全风险)自动点击无视风险继续安装并授权',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] >2 [text="无视风险继续安装"]',
          exampleUrls: 'https://e.gkd.li/46f06948-5ec1-4054-8aa3-a8f39e5d1f26',
          snapshotUrls: 'https://i.gkd.li/i/18002566',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="继续"]',
          exampleUrls: 'https://e.gkd.li/375fc2ec-841a-4af6-be99-9391ebeb7dc5',
          snapshotUrls: 'https://i.gkd.li/i/18002704',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '@[clickable=true][desc="更多"] > [vid="action_menu_item_child_icon"]',
          exampleUrls: 'https://e.gkd.li/de8fb9c9-ea4e-4c03-93bd-047bf31cd4c8',
          snapshotUrls: 'https://i.gkd.li/i/18002708',
        },
        {
          preKeys: [2],
          key: 3,
          matches: '@[clickable=true] > [text="单次安装授权"]',
          exampleUrls: 'https://e.gkd.li/0e8afdd7-04d3-46fd-9095-b61123d041b2',
          snapshotUrls: 'https://i.gkd.li/i/18002712',
        },
      ],
    },
  ],
});
