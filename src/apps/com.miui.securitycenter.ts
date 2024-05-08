import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '小米手机管家',
  groups: [
    {
      key: 10,
      name: '功能类-自动继续安装',
      desc: 'USB安装应用,点击继续安装',
      enable: false,
      quickFind: true,
      activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
      rules: [
        {
          matches: '[text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/import/13269875',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-禁止获取定位',
      desc: '关闭【允许联网及定位】后，每次打开手机管家都会出现',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.miui.securityscan.MainActivity', // app版本v8
        'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity', // app版本v5
      ],
      rules: [
        {
          matches: [
            '[id="com.miui.securitycenter:id/title"][text="获取位置信息"]',
            '[text="不同意"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13474517',
            'https://i.gkd.li/import/13476592', // activityIds: 'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '功能类-忽略体检优化提示',
      desc: '退出时忽略[体检优化分数]/忽略[存储空间预警]',
      enable: false,
      quickFind: true,
      activityIds: 'com.miui.securityscan.MainActivity',
      rules: [
        {
          key: 1,
          name: '忽略优化分数',
          matches: [
            '[text^="手机体检分数不足"][id$="id/message"]',
            '[text="退出"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13474504', // app版本v5
            'https://i.gkd.li/import/13476770', // app版本v8
          ],
        },
        {
          key: 2,
          name: '忽略存储空间预警',
          matches: [
            '[text$="释放存储空间"][id$="id/message"]',
            '[text="退出"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/15137908'],
        },
      ],
    },
    {
      key: 13,
      name: '功能类-高敏感权限自动确定',
      desc: '勾选[我已知晓可能存在的风险]-10s后点击[确定]',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
        'com.miui.permcenter.privacymanager.DeviceManagerApplyActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="我已知晓可能存在的风险，并自愿承担可能导致的后果"]',
            '@[vid="check_box"][checked=false]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14965657',
            'https://i.gkd.li/i/15242826',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="确定"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14965656',
            'https://i.gkd.li/i/15242825',
          ],
        },
      ],
    },
  ],
});
