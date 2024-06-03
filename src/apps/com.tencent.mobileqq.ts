import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      excludeActivityIds: [
        'com.tencent.mobileqq.activity.ChatActivity', // 在聊天界面禁用
        'com.tencent.mobileqq.search.activity.UniteSearchActivity', // 在搜索页面禁用
      ],
      rules: [
        {
          excludeMatches: '[vid="root"]', // 在聊天界面禁用，若排除EditText[vid="input"]则滑动消息时会造成误触
          matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13093155',
            'https://i.gkd.li/i/13207731',
            'https://i.gkd.li/i/13217807', // 避免在聊天界面误触
            'https://i.gkd.li/i/13856647', // 误触
            'https://i.gkd.li/i/13868177', // 误触
            'https://i.gkd.li/i/14341023', // 误触
            'https://i.gkd.li/i/15334565', // 误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-消息页面顶部广告',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          name: '顶部横幅',
          matches:
            'ImageView[clickable=false] <n * >n TextView[clickable=false][text.length>0] <<n * > [name$="ImageView"||name$="Button"][desc="关闭"||(desc=null&&text=null)][childCount=0][visibleToUser=true][clickable=true][longClickable!=true][left>0&&top>0]',
          excludeMatches: [
            '[vid="chat_item_head_icon"]', // 聊天界面头像
            '[id^="com.tencent.mobileqq.qzone"]', // QQ空间
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13426912',
            'https://i.gkd.li/import/12706907',
            'https://i.gkd.li/import/13107298',
            'https://i.gkd.li/import/12793359',
            'https://i.gkd.li/import/12855048',
            'https://i.gkd.li/import/13228108',
            'https://i.gkd.li/import/12855441',
            'https://i.gkd.li/import/13188722',
            'https://i.gkd.li/import/13255493', //desc值为null快照
            'https://i.gkd.li/import/13843140', //关系选择器为-2快照
            'https://i.gkd.li/import/13931212',
            'https://i.gkd.li/import/14178669',
            'https://i.gkd.li/import/14178667',
            'https://i.gkd.li/import/12892726',
            'https://i.gkd.li/import/12774870',
            'https://i.gkd.li/import/13207766',
            'https://i.gkd.li/import/13386518',
            'https://i.gkd.li/import/13476400',
            'https://i.gkd.li/import/14155603',
            'https://i.gkd.li/import/14217033',
            'https://i.gkd.li/i/14414585', //  误触
            'https://i.gkd.li/i/15075866', // 误触
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-好友动态广告卡片',
      enable: false,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'View[desc="广告"] + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12847842',
            'https://i.gkd.li/import/13787345',
          ],
        },
        {
          key: 1,
          quickFind: true,
          matches:
            '[id="com.tencent.mobileqq:id/tv_name"] +2 @ImageView[clickable=true] - TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12749584',
            'https://i.gkd.li/import/13627967',
          ],
        },
        {
          key: 2,
          matches:
            'FrameLayout[clickable=false] >2 @ImageView[text=null][visibleToUser=true] - FrameLayout[clickable=false][childCount=0]',
          snapshotUrls: ['https://i.gkd.li/i/15388608'],
        },
        {
          preKeys: 0,
          key: 10,
          quickFind: true,
          matches: '@[clickable=true] > * > ImageView + [text="隐藏此条动态"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13761147',
            'https://i.gkd.li/import/13849730',
          ],
        },
        {
          preKeys: 0,
          key: 3,
          quickFind: true,
          matches: '@[clickable=true] >(1,2) ImageView + [text="关闭此条广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12840889',
            'https://i.gkd.li/import/13831867', //activityId: 'com.tencent.mobileqq.activity.SplashActivity'
            'https://i.gkd.li/import/14138571',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '频道页面-广告',
          quickFind: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
          ],
          matches:
            'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206663', // com.tencent.mobileqq.activity.SplashActivity
            'https://i.gkd.li/import/12642081', // com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog
          ],
        },
        {
          key: 1,
          name: '钱包页面-广告',
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '[desc="弹窗推荐活动"] + [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14822290',
        },
        {
          key: 2,
          name: '黄钻页面-广告',
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches:
            'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View[childCount<=1] > Button[text.length=0&&focusable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12914978',
            'https://i.gkd.li/import/12914886',
            'https://i.gkd.li/import/14229202', // childCount<=1 防误触
          ],
        },
        {
          key: 3,
          name: '元梦之星广告弹窗',
          activityIds:
            'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches:
            'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13797876',
        },
        {
          key: 4,
          name: '现金瓜分弹窗',
          activityIds:
            'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches:
            'RelativeLayout >5 ViewGroup[childCount=6] > ViewGroup[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/14207286',
        },
        {
          key: 5,
          quickFind: true,
          activityIds:
            'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches:
            'ViewGroup[childCount=6] > @ViewGroup[index=2][clickable=true][visibleToUser=true] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/15136939',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '@[desc="关闭"] - * > [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13386719',
        },
        {
          key: 1,
          matches: '@[text="稍后处理"] +2 [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14724108',
        },
        {
          key: 3,
          matches: '@[desc="关闭"] - * > [text="QQ测试版"]',
          snapshotUrls: 'https://i.gkd.li/i/13526551',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-好友热播',
      desc: '好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches: '@Button[clickable=true] - [text="好友热播"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12721427', // com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity
            'https://i.gkd.li/import/12894359', // com.tencent.mobileqq.activity.SplashActivity
            'https://i.gkd.li/i/14822579',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[减少好友热播]',
          matches: '@[clickable=true] >2 [text="减少好友热播"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12721433', // com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity
            'https://i.gkd.li/import/12894375', // com.tencent.mobileqq.activity.SplashActivity
            'https://i.gkd.li/i/14822576',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '通知提示',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@[desc*="关闭"] - * > [text="开启消息推送"]',
          snapshotUrls: 'https://i.gkd.li/i/15051308',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动授权',
      desc: '自动点击登录。包括 PC 登录确认、QQ 互联登录确认。',
      quickFind: true,
      activityIds: [
        'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
        'com.tencent.mobileqq.activity.DevlockQuickLoginActivity',
        'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
      ],
      rules: [
        {
          key: 1,
          name: 'PC 登录确认',
          matches:
            'Button[text*="登录"][clickable=true][visibleToUser=true][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13623520',
            'https://i.gkd.li/import/12789287',
            'https://i.gkd.li/import/13063027',
            'https://i.gkd.li/import/13166314',
          ],
        },
        {
          key: 2,
          name: '点击同意',
          matches: 'Button[text="同意"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14752498',
        },
        {
          preKeys: [2],
          key: 3,
          name: '点击确认',
          matches: 'Button[text="确认"]',
          snapshotUrls: 'https://i.gkd.li/i/14752519',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-浮窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: [
        {
          key: 0,
          name: '我的等级-浮窗广告',
          matches:
            'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
          snapshotUrls: 'https://i.gkd.li/import/12914734',
        },
        {
          key: 1,
          name: '频道-右侧悬浮广告',
          matches:
            'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12708844',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-自动勾选原图',
      desc: '发送图片时自动勾选原图',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
        'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity',
      ],
      rules: '@CheckBox[checked=false] + [text="原图"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12705556', // 未勾选原图
        'https://i.gkd.li/import/12705559', // 已勾选原图
        'https://i.gkd.li/import/13295142', // com.tencent.qqnt.qbasealbum.WinkHomeActivity
        'https://i.gkd.li/import/13476247', // com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity
      ],
    },
    {
      key: 11,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击原图',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.tencent.richframework.gallery.QQGalleryActivity',
        'com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity',
      ],
      rules: '[text^="查看原图"][checked=false]',
      snapshotUrls: [
        'https://i.gkd.li/import/12840632', // 点击原图前
        'https://i.gkd.li/import/12840633', // 点击原图后
        'https://i.gkd.li/i/14757735',
        'https://i.gkd.li/i/15024319',
      ],
    },
    {
      key: 12,
      name: '分段广告-QQ小世界评论区广告',
      desc: '点击广告-弹出原因框-关闭此条广告',
      enable: false,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.biz.qqcircle.activity.QCircleFolderActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text="广告"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12847819',
        },
        {
          preKeys: 0,
          matches:
            '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12847821',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-QQ小程序开屏广告',
      enable: false,
      quickFind: true,
      actionMaximum: 1,
      activityIds: [
        'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
        'com.tencent.mobileqq.activity.miniaio.MiniChatActivity',
      ],
      rules: [
        {
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12877215',
            'https://i.gkd.li/import/12919195',
            'https://i.gkd.li/i/15130235',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '分段广告-好友动态-为你推荐',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@ImageView[clickable=true] - [text="为你推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12929620',
            'https://i.gkd.li/import/13387606', // activityIds: 'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches:
            '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12929619',
            'https://i.gkd.li/import/13387605',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '分段广告-钱包页卡片广告',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13695087'],
        },
        {
          key: 1,
          matches: '@View[visibleToUser=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14231489',
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13699701',
        },
      ],
    },
    {
      key: 23,
      name: '分段广告-天气页卡片广告',
      desc: '点击关闭-点击关闭此条广告',
      enable: false,
      activityIds: [
        'com.tencent.mobileqq.activity.QPublicFragmentActivity',
        'com.tencent.mobileqq.activity.QQBrowserActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[desc="返回"]',
            '[desc="首页"]',
            '[desc="分享"]',
            'RecyclerView > *[childCount=1] >3 * >n @*[childCount=2][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14549503',
            'https://i.gkd.li/i/14019384',
          ],
        },
        {
          key: 1,
          preKeys: 0,
          quickFind: true,
          matches: '@LinearLayout[childCount=3] > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14019401',
        },
        {
          key: 2,
          preKeys: 0,
          matches:
            'View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/14549504',
        },
      ],
    },
    {
      key: 24,
      name: '功能类-自动领红包',
      desc: '自己发的红包、专属红包、口令红包、私聊红包不领',
      enable: false,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'ImageView < * < FrameLayout +2 * >3 TextView[text*="红包"] - @ViewGroup[childCount=5] > TextView[text!="已领取"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e',
          snapshotUrls: 'https://i.gkd.li/import/14221309',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@[desc="拆红包"] - RelativeLayout > [text!=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f',
          snapshotUrls: 'https://i.gkd.li/import/14221242',
        },
        {
          preKeys: 1,
          key: 2,
          quickFind: true,
          matches: '@[desc="返回"] + [text="红包记录"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba',
          snapshotUrls: 'https://i.gkd.li/import/14221279',
        },
      ],
    },
    {
      key: 25,
      name: '功能类-申请入群后自动点击右上角关闭',
      enable: false,
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: [
        {
          matches: [
            'TextView[text="入群申请中"][visibleToUser=true]',
            'TextView[text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/14235163',
        },
      ],
    },
    {
      key: 26,
      name: '全屏广告-个人主页广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '迷你窝弹窗',
          quickFind: true,
          action: 'back',
          activityIds:
            'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
          matches: '[text="开启迷你窝"]',
          snapshotUrls: 'https://i.gkd.li/i/14188980',
        },
        {
          key: 1,
          name: '个性装扮弹窗',
          activityIds: 'cooperation.vip.ad.UserLeadingActivity',
          matches: '[desc="关闭"][visibleToUser=true]', // 右侧关闭按钮无效
          snapshotUrls: 'https://i.gkd.li/i/15137056',
        },
      ],
    },
  ],
});
