import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '点击广告卡片右上角,直接关闭/出现菜单,确认关闭',
      enable: false,
      activityIds: [
        'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
        'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
        'com.tencent.mm.plugin.profile.ui.ContactInfoUI',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角',
          matches:
            'LinearLayout[visibleToUser=true][checked=false] >2 LinearLayout[visibleToUser=true][focusable=false] > TextView[text.length!=null] +1 LinearLayout[text.length=null&&desc=null&&clickable=true&&focusable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642588',
            'https://i.gkd.li/import/12888129', // ImageView - TextView[text="广告"][id!=null][index=0]这个规则无法匹配该广告，需要删除[index=0]
            'https://i.gkd.li/import/12907641',
            'https://i.gkd.li/import/13000395',
            'https://i.gkd.li/i/14647413',
            'https://i.gkd.li/i/16568338',
            'https://i.gkd.li/i/14647413',
            'https://i.gkd.li/import/14164508', // TextView[text.length!=null] +1 LinearLayout[text.length=null&&clickable=true&&focusable=true]
            'https://i.gkd.li/import/12905837', // 英文
            'https://i.gkd.li/import/13791200', // 繁体
            'https://i.gkd.li/import/14193379', // 误触，用 LinearLayout[visibleToUser=true] 排除
            'https://i.gkd.li/import/14193181', // 误触，用 desc=null 排除
          ],
        },
        {
          key: 1,
          fastQuery: true,
          position: {
            left: 'width * 0.9223',
            top: 'width * 0.0349',
          },
          matches: '@LinearLayout >2 [text="广告"][visibleToUser=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/14783802',
            'https://i.gkd.li/i/15531539',
          ],
        },
        // 以下是点击广告卡片右上角后出现的情况
        // 情况1 - 选择关闭该广告的原因->直接关闭
        {
          preKeys: [0, 1],
          key: 2,
          name: '关闭该广告的原因-点击[直接关闭]',
          matches: [
            '[(name$=".LinearLayout")||((name$=".TextView")&&text.length>3)][visibleToUser=true] + [(name$=".LinearLayout")||((name$=".TextView")&&(text="直接关闭"||text~="Repetitive.*"||text="關閉此廣告"))][visibleToUser=true][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12642584',
            'https://i.gkd.li/import/14164530', // @LinearLayout[clickable=true][childCount=2] > [text="关闭该广告"]无法匹配
            'https://i.gkd.li/import/14164548', // 选择后将减少该类推荐
            'https://i.gkd.li/import/12663984',
            'https://i.gkd.li/import/14164574',
            'https://i.gkd.li/import/12905838', // text="Close the ad"
            'https://i.gkd.li/import/13791202', // text="關閉此廣告"
            'https://i.gkd.li/i/14647839',
            'https://i.gkd.li/i/15284966',
          ],
        },
        // 情况2 - 选择关闭该广告的原因->关闭该广告
        {
          preKeys: [0, 1],
          key: 3,
          name: '选择关闭该广告的原因->关闭该广告',
          matches:
            'TextView[(text^="关闭"&&text$="广告")||(text^="關閉"&&text$="廣告")||text~="(?is).*Close.*"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12907642',
            'https://i.gkd.li/import/13926578',
            'https://i.gkd.li/i/14207480',
            'https://i.gkd.li/i/15137016',
          ],
        },
        // 情况3 - 点击[确认]关闭该广告
        {
          preKeys: [2, 3],
          key: 4,
          name: '点击[确认]关闭该广告',
          fastQuery: true,
          matches: '[text="确认"||text="Close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/14164601',
            'https://i.gkd.li/import/12905846', // text="Close"
            'https://i.gkd.li/i/14647940',
          ],
        },
      ],
    },
    {
      // Key 1,3,4 均为授权类的规则
      key: 1,
      name: '功能类-微信自动授权',
      desc: '微信相关平台扫码登录动授权',
      enable: false,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'activity',
      activityIds: [
        '.plugin.webwx.ui.ExtDeviceWXLoginUI',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
        'com.tencent.mm.ui.LauncherUI',
        'com.tencent.mm.plugin.base.stub.UIEntryStub',
      ],
      rules: [
        {
          key: 0,
          name: 'PC 微信扫码登录',
          matches: 'TextView[text="取消登录"] - Button[text="登录"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13522625', // activityIds: 'com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI'
            'https://i.gkd.li/import/13522577', // activityIds: 'com.tencent.mm.ui.LauncherUI'
          ],
        },
        {
          key: 1,
          name: '浏览器扫码登录',
          matches: ['[text^="获取你的"]', '[text="允许"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13065462', //com.tencent.mm.ui.LauncherUI
            'https://i.gkd.li/import/12663602',
            'https://i.gkd.li/import/14164920',
            'https://i.gkd.li/i/15271716',
          ],
        },
        {
          key: 2,
          name: '网页版文件传输助手扫码登录',
          matches: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
          snapshotUrls: ['https://i.gkd.li/import/12793745'],
        },
        {
          key: 3,
          name: '微信表情开发平台扫码登录',
          matches: 'View[desc="取消登录"] - Button[text="登录"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14164954', // com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI
          ],
        },
        {
          key: 4,
          name: '微信红包封面开放平台扫码登录',
          matches: 'Button[text="取消"] - Button[text="确定"]',
          snapshotUrls: ['https://i.gkd.li/import/14164990'],
        },
        {
          key: 5,
          name: '微信开发者工具扫码登录',
          matches: '[desc="取消"] - [desc="确认登录"]',
          snapshotUrls: ['https://i.gkd.li/i/14472990'],
        },
        {
          key: 6,
          name: '微信读书网页版扫码登录',
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/import/12506197',
        },
        {
          preKeys: [4, 6],
          key: 10,
          name: '点击[X]返回',
          matches: [
            '[text="登录成功"||text="已确定"]',
            'ImageView[desc="返回"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14193413',
            'https://i.gkd.li/import/12506201',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '功能类-微信红包自动领取',
      desc: '自动领取私聊红包,群聊红包',
      enable: false,
      activityIds: [
        'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI',
        'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/32cfda78-b2e1-456c-8d85-bfb2bc4683aa',
      rules: [
        {
          name: '从红包结算界面返回',
          preKeys: [1, 2],
          matches: 'ImageView[desc="返回"]',
          snapshotUrls: 'https://i.gkd.li/import/12567696',
        },
        {
          key: 1,
          name: '点击红包-开',
          // Button[desc="开"] 会在出现金币动画时会消失
          matches: 'ImageButton[desc="开"] + Button[desc="开"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12567697',
            'https://i.gkd.li/import/12567698', // 额外增加,金币动画的快照,规则不在这个快照上运行
          ],
        },
        {
          key: 2,
          name: '点击别人发的红包',
          // 第一个 LinearLayout[childCount=1] 区分是自己发的红包还是别人发的
          // 第二个 LinearLayout[childCount=1] 区分这个红包是否被领取过
          matches:
            'LinearLayout[childCount=1] >5 LinearLayout[childCount=1] - ImageView < LinearLayout + View + RelativeLayout > TextView[text="微信红包"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12567637',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-订阅号文章广告',
      desc: '自动点击关闭',
      enable: false,
      activityIds: [
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewTooLMpUI',
        'com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI',
      ],
      rules: [
        {
          key: 0,
          name: '点击「广告」按钮',
          excludeMatches: '[text="感谢你的反馈"][visibleToUser=true]',
          matches: [
            '[name$=".View"||name$=".TextView"][text^="广告"][visibleToUser=true] <n @View < View[childCount=1] <<3 View[childCount=1] <<2 View[childCount=1]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12642232', // ui.TmplWebViewMMUI
            'https://i.gkd.li/import/13199281', // ui.TmplWebViewTooLMpUI
            'https://i.gkd.li/import/14006180', // com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI
            'https://i.gkd.li/import/12714427', // 优化规则，使用 View[id="ad_container"] 作为特征节点
            'https://i.gkd.li/import/12700183',
            'https://i.gkd.li/import/12714424',
            'https://i.gkd.li/import/14293295',
            'https://i.gkd.li/i/14802057',
            'https://i.gkd.li/i/16798663',
            'https://i.gkd.li/i/15198413', // 无id
            'https://i.gkd.li/i/15198455', // 无id
            'https://i.gkd.li/i/15198455', // 无id
            'https://i.gkd.li/import/12678937', // 防误触, 文章未浏览至页面底部，广告反馈按钮不可见，使用 [visibleToUser=true] 进行限定，防止打开文章就频繁触发规则
            'https://i.gkd.li/import/12646837', // 防误触, 事件完成后，反馈按钮仍然存在，使用 View[childCount=1] 进行限定，防止频繁触发规则
            'https://i.gkd.li/import/12642234', // 防误触, 出现反馈菜单后应该不匹配
            'https://i.gkd.li/import/12722301', // 防误触
            'https://i.gkd.li/import/12722331', // 防误触, 使用 [id="feedbackTagContainer"][visibleToUser=true] 进行限定，防止反馈界面未出现就触发规则
            'https://i.gkd.li/import/14006203', // 防误触
            'https://i.gkd.li/import/12701503', // 防误触, 事件完成后，采用[childCount=1]进行限定，防止频繁触发规则
            'https://i.gkd.li/import/14292844', // 防误触, 出现反馈菜单后应该不匹配
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击「不感兴趣」或「关闭此广告」',
          excludeMatches: '[text="感谢你的反馈"][visibleToUser=true]',
          matches:
            '[text*="广告"&&text.length<5] <n View < View >n [text="不感兴趣"||text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12745280',
            'https://i.gkd.li/import/14293434',
            'https://i.gkd.li/import/12700191',
            'https://i.gkd.li/i/14633366',
            'https://i.gkd.li/i/14834975',
            'https://i.gkd.li/i/16798661',
            'https://i.gkd.li/i/15198422', // 无id
            'https://i.gkd.li/i/15198459', // 无id
            'https://i.gkd.li/i/15198459', // 无id
            'https://i.gkd.li/i/15061424', // 使用excludeMatches防止在文章末尾广告关闭后误触
          ],
        },
        {
          key: 2,
          preKeys: [0, 1],
          name: '点击「与我无关」',
          matches:
            '[text*="广告"&&text.length<5] <n View < View >n [text="与我无关"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642238',
            'https://i.gkd.li/import/14006206', // com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI
            'https://i.gkd.li/i/15198461', // 无id
            'https://i.gkd.li/i/15198461', // 无id
            'https://i.gkd.li/i/16798658', // clickable=false，使用clickable=true避免误触
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: '@[desc="未选中,原图,复选框"] + [text="原图"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12686641', // 未选中
        'https://i.gkd.li/import/12840865', // 未选中
        'https://i.gkd.li/import/12686640', // 已选中
        'https://i.gkd.li/i/14661734',
      ],
    },
    {
      key: 9,
      name: '功能类-自动查看原图/原视频',
      desc: '自动点击[查看原图]/[查看原视频]按钮',
      enable: false,
      fastQuery: true,
      activityIds: '.ui.chatting.gallery.ImageGalleryUI',
      rules: {
        anyMatches: [
          '[text^="查看原图"][clickable=true][visibleToUser=true]',
          '[text^="查看原视频"][clickable=true][visibleToUser=true]',
        ],
      },
      snapshotUrls: [
        'https://i.gkd.li/import/13523031',
        'https://i.gkd.li/i/14661736',
        'https://i.gkd.li/i/16833732',
      ],
    },
    {
      key: 10,
      name: '全屏广告-小程序部分广告',
      desc: '包括部分开屏广告',
      enable: false,
      matchTime: 10000,
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
        'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          key: 0,
          name: '开屏广告',
          actionDelay: 800, // 过早点击首次大概率跳不过
          forcedTime: 10000,
          fastQuery: true,
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12701979',
            'https://i.gkd.li/import/12777076',
            'https://i.gkd.li/import/12785012',
            'https://i.gkd.li/import/12785183',
            'https://i.gkd.li/import/13306883',
            'https://i.gkd.li/import/12785246',
            'https://i.gkd.li/import/13407275',
            'https://i.gkd.li/i/15108441',
          ],
        },
        {
          key: 1,
          name: '提瓦特助手小程序-弹窗广告1',
          matches: [
            'ImageView[childCount=0][visibleToUser=true] < FrameLayout < @FrameLayout[visibleToUser=true] <2 * - * >5 [text="查看详情"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12926021',
        },
        {
          key: 2,
          name: '提瓦特助手小程序-弹窗广告2',
          fastQuery: true,
          matches:
            'ImageView[childCount=0][visibleToUser=true] < FrameLayout < @FrameLayout[visibleToUser=true] <2 * - * >4 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13459614',
        },
        {
          key: 3,
          name: '京东购物小程序-低价包邮广告',
          actionDelay: 500,
          actionMaximum: 1,
          resetMatch: 'activity',
          matches:
            'View[childCount=8] > View[index=6] > View[childCount=4] > Image[visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13298294',
            'https://i.gkd.li/import/14156176', // 误触快照
          ],
        },
      ],
    },
    {
      key: 14,
      name: '分段广告-小程序-内部广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: [
        {
          key: 0,
          name: '【广告】0',
          matches:
            'FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text="广告"][visibleToUser=true]',
          excludeMatches:
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13199282', // [childCount=3]避免在点击展开菜单后重复点击
            'https://i.gkd.li/import/13407275', // excludeMatches中添加key10中规则，避免误触
          ],
        },
        {
          key: 1,
          name: '【广告】1',
          matches: 'Image[text="feedback_icon"] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13378208',
        },
        {
          preKeys: [0, 1],
          key: 11,
          name: '点击原因【不感兴趣】',
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13200044',
        },
        {
          preKeys: 11,
          key: 12,
          name: '点击原因【与我无关】',
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13200048',
        },
      ],
    },
    {
      key: 18,
      name: '功能类-青少年模式自动点击验证密码',
      desc: '点击“验证密码”以申请临时访问',
      enable: false,
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: [
        'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
        'com.tencent.mm.plugin.teenmode.ui.AuthorizationRequestUI',
      ],
      rules: [
        {
          key: 0,
          matches: ['[text="申请今天临时访问"]', '[text="验证密码"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13631987',
            'https://i.gkd.li/import/13588338',
            'https://i.gkd.li/i/14050004',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '功能类-订阅号-展开更早的消息',
      enable: false,
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '@[clickable=true] > [text="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/import/13790550',
        },
        {
          key: 1,
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/import/13790949',
        },
      ],
    },
    {
      key: 21,
      name: '分段广告-订阅号消息页面广告',
      desc: '自动点击“x”',
      enable: false,
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          name: '点击[X]',
          matches:
            'View[childCount>=2] >n View[desc$="推​荐​"][childCount>=2] > ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14436176',
            'https://i.gkd.li/i/14392392',
            'https://i.gkd.li/i/14548701',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不喜欢此类视频]',
          matches:
            '[desc="不喜欢此类视频"||desc="不看此类内容"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14444654',
            'https://i.gkd.li/i/14549566',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击[确定]',
          matches: '[desc="确定"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14436190',
            'https://i.gkd.li/i/14549567',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '功能类-付款后自动点击完成/返回商家',
      enable: false,
      fastQuery: true,
      activityIds: 'com.tencent.mm.framework.app.UIPageFragmentActivity',
      rules: [
        {
          matches: [
            '[text="支付成功"]',
            '[text*="￥"||text*="¥"]',
            '[text="完成"||text="返回商家"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14399355',
            'https://i.gkd.li/i/14532946', // 避免在此页面误触
            'https://i.gkd.li/i/14558398',
            'https://i.gkd.li/i/14662147',
            'https://i.gkd.li/i/16215946',
          ],
        },
      ],
    },
  ],
});
