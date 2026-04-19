import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  groups: [
    {
      key: 1,
      name: '分段广告-首页文档列表广告',
      desc: '关闭首页文档列表中的广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.documentmanager.PreStartActivity',
        'cn.wps.moffice.main.local.HomeRootActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.mopub.ad.xiaomi:id/nativeclose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505350',
            'https://i.gkd.li/i/12505286',
          ],
        },
        {
          preKeys: [0],
          key: 99,
          matches: '[text="不喜欢此广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505365',
            'https://i.gkd.li/i/13259090',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '关闭登录后弹窗和体验会员提示弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'cn.wps.moffice.main.AfterLoginActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          ],
          matches: '[vid="afterlogin_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13259097',
            'https://i.gkd.li/i/12882712',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '@TextView[clickable=true] -2 Image[text!=null] <<2 View - [id="app"] <<5 [vid="push_tips_ptr_super_webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13945835',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'cn.wps.moffice.plugin.cloudPage.newpage.NewCloudSettingNewActivity',
          matches: '[vid="cloud_popup_close_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23786698',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-关闭[开启WPS云服务]弹窗',
      desc: '自动点击不开启',
      enable: false,
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.cloud.roaming.login.core.QingLoginActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.base.w',
      ],
      rules: [
        {
          key: 1,
          matches: '[vid="cloud_protocol_dialog_not_start_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882536',
            'https://i.gkd.li/i/12882610',
            'https://i.gkd.li/i/12882678',
          ],
        },
        {
          key: 2,
          matches: '[vid="dialog_button_positive"]',
          snapshotUrls: 'https://i.gkd.li/i/12882554',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-文档末尾广告',
      desc: '关闭文档末尾的广告内容',
      enable: false,
      fastQuery: true,
      activityIds: 'cn.wps.moffice.writer.multiactivity.Writer',
      rules: [
        {
          key: 1,
          matches: '[vid="doc_end_ad_container_main"] >2 [vid="btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13513911',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[text="关闭当前广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13513914',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告',
      desc: '关闭各类局部广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '[vid="home_banner_ad_spread_close" || vid="phone_message_close_button" || vid="close_home_ad_banner_iv" || vid="iv_item_close" || vid="iv_cloud_sync_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804525',
            'https://i.gkd.li/i/17893252',
            'https://i.gkd.li/i/18047731',
            'https://i.gkd.li/i/23577590',
            'https://i.gkd.li/i/23786789',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.writer.multiactivity.Writer1',
          matches:
            '[vid="public_login"] <2 LinearLayout[childCount=2] + [vid="public_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26026279',
          exampleUrls: 'https://e.gkd.li/a17eca15-c7bd-4ea6-ba84-0d3242641697',
        },
      ],
    },
  ],
});
