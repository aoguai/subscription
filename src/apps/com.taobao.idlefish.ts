import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '通知提示',
      desc: '关闭消息推送开启提示',
      ignoreGlobalGroupMatch: true,
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
        '.maincontainer.activity.MainActivity',
      ],
      rules:
        '[desc^="开启系统通知"||desc^="开启消息通知"] > ImageView[clickable=true][desc=null]',
      snapshotUrls: 'https://i.gkd.li/import/13538351',
    },
    {
      key: 2,
      name: '通知提示-开启个性化',
      desc: '关闭开启个性化提示',
      ignoreGlobalGroupMatch: true,
      enable: false,
      resetMatch: 'app',
      activityIds: ['.maincontainer.activity.MainActivity'],
      rules:
        '[text*="开启个性化"] +n View[childCount=1] > Image[text.length>20]',
      snapshotUrls: 'https://i.gkd.li/i/22319225',
    },
    {
      key: 4,
      name: '全屏广告',
      desc: '关闭首页各种全屏弹窗广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '红包弹窗',
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          matches:
            'WebView[text="Rax App"] > [id="root"] >(3,6) View[index=parent.childCount.minus(1)][index>=1]',
          snapshotUrls: [
            'https://i.gkd.li/i/14551046',
            'https://i.gkd.li/i/24981766',
            'https://i.gkd.li/i/26865707',
          ],
        },
        {
          key: 1,
          name: '夜市弹窗',
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.maincontainer.activity.MainActivity',
          matches:
            '@[clickable=true][width<200] <<(4,6) View[id="root"] <<(5,8) [vid="fish_layer_container_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23694103',
            'https://i.gkd.li/i/23183586',
            'https://i.gkd.li/i/25796344',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.taobao.idlefish.search_implement.SearchResultActivity',
          matches:
            '@[index=parent.childCount.minus(1)][clickable=true][width<250][height<250] <n View <<6 m0 <<6 [vid="fish_layer_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/23125419',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-信息流广告',
      desc: '通过长按然后点击关闭按钮来移除信息流中的广告',
      fastQuery: true,
      forcedTime: 100000,
      rules: [
        {
          key: 1,
          action: 'longClick',
          activityIds: '.search_implement.SearchResultActivity', //搜索结果页面
          matches: '@[longClickable=true] >3 [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19603954',
          exampleUrls: 'https://e.gkd.li/ca42e088-6fae-4402-a000-06418bf054cf',
        },
        {
          key: 2,
          action: 'longClick',
          activityIds: [
            '.maincontainer.activity.MainActivity',
            '.detail.DetailActivity',
          ],
          matches:
            '@[longClickable=true][childCount=0][height>width] < [childCount>1] >(1,4) [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19604324',
            'https://i.gkd.li/i/29751786',
            'https://i.gkd.li/i/29753749', //同城商品页
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/29753324', // 广告的上半部分被遮住时,[长按]广告不会出现弹窗, 用 [height>width] 排除
          exampleUrls: 'https://e.gkd.li/738c623e-58fe-45a1-9a28-957f0f812c72',
        },
        {
          key: 3,
          action: 'longClick',
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            'View[desc$="广告"][longClickable=true][visibleToUser=true][childCount>2]', //无快查
          snapshotUrls: 'https://i.gkd.li/i/19593497',
          excludeSnapshotUrls: 'https://i.gkd.li/i/19604467', // [childCount=1]
        },

        // 第二段
        {
          key: 20,
          name: '②点击[引起不适]',
          preKeys: [1, 2, 3, 20], //有时候需点击第2次,故包含 key20 自身
          actionCd: 500,
          actionDelay: 50, // 在首页时点击太早容易误触
          activityIds: [
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          ],
          matches: '[desc="引起不适"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19593500',
            'https://i.gkd.li/i/19603913',
            'https://i.gkd.li/i/19604317',
            'https://i.gkd.li/i/29751857',
          ],
        },
        {
          key: 21,
          name: '②点击[不感兴趣]',
          preKeys: [2],
          activityIds: '.maincontainer.activity.MainActivity',
          matches: '@[clickable=true] +2 [text="商品不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/29753752', //同城商品页
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动查看原图',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      activityIds: [
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
      ],
      rules: [
        {
          matches: '@[desc="查看原图"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15463399',
            'https://i.gkd.li/i/27207770',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: '[clickable=true][desc="原图"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18824808',
            'https://i.gkd.li/i/30770701',
            'https://i.gkd.li/i/30770836',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-登录授权',
      desc: '点击确认授权按钮',
      enable: false,
      fastQuery: true,
      activityIds: 'com.taobao.login4android.scan.QrScanActivity',
      rules: [
        {
          key: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          matches: '@[clickable=true] > [vid="confirm"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25619592', // 未打勾_纯手拍快照
            'https://i.gkd.li/i/25620240', // 未打勾
          ],
        },
        {
          key: 1, // 目的跟key0一样，只不过以弹窗的形式出现
          matches: [
            '[text="服务协议及隐私保护"]',
            '[text="同意"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25620304',
        },
        {
          key: 2,
          matches: [
            '[text="扫码登录"]',
            '[text="确认登录"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25619659', // 旧版,无需打勾
            'https://i.gkd.li/i/25620267', // 已打勾(节点状态无变化)
          ],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告',
      desc: '关闭各类局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.maincontainer.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][width<100] <(2,5) FrameLayout <<(3,4) [vid="fish_layer_container_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25796897',
            'https://i.gkd.li/i/26184285',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.detail.DetailActivity',
          matches:
            'Image[width<60 && height<60] < @View <n [childCount=2] < [id="root"] <<2 * <2 WebView <<2 [vid="fish_layer_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/26837679',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-关闭小额免密支付',
      desc: '关闭支付时的小额免密支付选项',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@CheckBox[clickable=true][checked=true] < * - [text$="免密支付"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22656242',
            'https://i.gkd.li/i/23455398',
            'https://i.gkd.li/i/23455378', // 关闭后
          ],
        },
      ],
    },
  ],
});
