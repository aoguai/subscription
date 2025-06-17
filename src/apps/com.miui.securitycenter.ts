import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务/小米手机管家',
  groups: [
    {
      key: 10,
      name: '功能类-USB安装时自动继续安装',
      desc: '点击USB安装应用时的【继续安装】按钮',
      enable: false,
      fastQuery: true,
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
      desc: '点击获取定位权限弹窗的【不同意】按钮',
      enable: false,
      fastQuery: true,
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
      name: '功能类-使用返回退出时直接点击[退出]',
      desc: '退出时自动点击【退出】按钮，跳过体检优化和存储空间预警提示',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.miui.securityscan.MainActivity',
          matches: [
            '[text="体检优化" || text="存储空间预警"][visibleToUser=true]',
            '[text="退出"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13474504',
            'https://i.gkd.li/i/13476770',
            'https://i.gkd.li/i/15137908',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18126157',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-高敏感权限自动确定',
      desc: '自动处理高敏感权限申请：勾选风险提示并延迟10秒后点击确定',
      enable: false,
      fastQuery: true,
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
