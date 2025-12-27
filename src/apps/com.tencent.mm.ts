import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '点击卡片广告右上角,直接关闭/出现菜单,确认关闭',
      enable: false,
      activityIds: [
        '.plugin.sns.ui.SnsTimeLineUI',
        '.plugin.sns.ui.improve.ImproveSnsTimelineUI',
        '.plugin.profile.ui.ContactInfoUI',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: [
            '@LinearLayout[clickable=true] > [text="广告" || text="廣告" || text="Sponsored"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13000395',
            'https://i.gkd.li/i/12905837',
            'https://i.gkd.li/i/13791200',
            'https://i.gkd.li/i/16568338',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          actionDelay: 300,
          position: {
            left: 'width * 0.9223',
            top: 'height * 0.5',
          },
          anyMatches: [
            '@LinearLayout >2 [text="广告"][visibleToUser=false]',
            'RecyclerView > FrameLayout[childCount=1] > RelativeLayout > FrameLayout > LinearLayout > LinearLayout > LinearLayout > @LinearLayout[childCount=2][getChild(0).getChild(0).text!=null] > LinearLayout[index=1][clickable=false][visibleToUser=false]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14783802',
            'https://i.gkd.li/i/15531539',
            'https://i.gkd.li/i/19665911',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/19717709',
        },
        {
          key: 2,
          matches:
            '[name$="RecyclerView"||name$="ListView"] >(1,2) RelativeLayout >3 LinearLayout > LinearLayout > LinearLayout[childCount=2] > LinearLayout[index=1][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14647413',
            'https://i.gkd.li/i/19633571',
          ],
        },

        // 预留key
        // 第二段
        {
          preKeys: [0, 1, 2],
          key: 25,
          name: '点击[关闭]',
          fastQuery: true,
          anyMatches: [
            '[text^="关闭" || text*="Close" || text="關閉此廣告"][clickable=true][visibleToUser=true]', //1
            '@LinearLayout[clickable=true] > [text="关闭该广告" || text*="Close"][visibleToUser=true]', //2
            '@LinearLayout[index=1][clickable=true] <2 * < * - [text*="广告"]', //3
            '@[text="关闭该广告"] -2 [text^="对这条广告不感兴趣"][visibleToUser=true]', //4
          ],
          snapshotUrls: [
            //1
            'https://i.gkd.li/i/13926578',
            'https://i.gkd.li/i/15531274',
            'https://i.gkd.li/i/14207480',
            'https://i.gkd.li/i/15137016',
            'https://i.gkd.li/i/13791202',
            //2
            'https://i.gkd.li/i/14783820',
            'https://i.gkd.li/i/15284966',
            //3
            'https://i.gkd.li/i/14647839',
            'https://i.gkd.li/i/19666176',
            //4
            'https://i.gkd.li/i/19633486',
          ],
        },

        // 预留key
        // 第三段
        {
          preKeys: [25],
          key: 50,
          name: '点击[关闭]',
          matches: '[text*="关闭" || text="Close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12663984',
            'https://i.gkd.li/i/12905846',
            'https://i.gkd.li/i/14647940',
            'https://i.gkd.li/i/14783534',
          ],
        },

        // 预留key
        // 第四段
        {
          preKeys: [50],
          key: 75,
          name: '点击[确认]',
          fastQuery: true,
          matches:
            '@[text="确认"][visibleToUser=true] -2 [text="不感兴趣原因"]',
          snapshotUrls: 'https://i.gkd.li/i/14647940',
        },
      ],
    },
    {
      // Key 1,3,4 均为授权类的规则
      key: 1,
      name: '功能类-登录自动授权',
      desc: '微信相关平台扫码登录自动授权',
      enable: false,
      matchTime: 10000,
      actionMaximum: 2,
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
          matches: [
            '[text="登录 Windows 微信" || text="登入 微信 for Windows" || text^="Log in to Weixin for"][visibleToUser=true]',
            '[text="登录" || text="登入" || text="Log In"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13522625', // activityIds: 'com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI'
            'https://i.gkd.li/import/13522577', // activityIds: 'com.tencent.mm.ui.LauncherUI'
            'https://i.gkd.li/i/19399694',
            'https://i.gkd.li/i/22356438',
          ],
        },
        {
          key: 1,
          name: '浏览器扫码登录',
          matches: [
            '[text^="获取你的"||text^="取得你的"||text^="申请使用"||text^="請求使用"]',
            '[text="允许"||text="允許"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13065462', //com.tencent.mm.ui.LauncherUI
            'https://i.gkd.li/import/12663602',
            'https://i.gkd.li/import/14164920',
            'https://i.gkd.li/i/15271716',
            'https://i.gkd.li/i/18809991',
            'https://i.gkd.li/i/19496823',
            'https://i.gkd.li/i/21792855',
          ],
        },
        {
          key: 2,
          name: '网页版文件传输助手扫码登录',
          matches:
            '[text="打开网页版文件传输助手"||text="開啟網頁版檔案傳輸助手"] + * > Button[text="打开"||text="開啟"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12793745',
            'https://i.gkd.li/i/20532303',
          ],
        },
        {
          key: 3,
          name: '微信表情开发平台扫码登录',
          matches:
            'View[desc="取消登录"||desc="取消登入"] - Button[text="登录"||text="登入"]',
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
      name: '功能类-自动领取微信红包',
      desc: '自动领取私聊红包,群聊红包',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '点击别人发的红包',
          activityIds: [
            '.ui.LauncherUI',
            '.ui.chatting.variants.ChattingMainUI',
          ],
          matches:
            'LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >2 LinearLayout[getChild(1).childCount=1] +2 RelativeLayout > [text="微信红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134826',
            'https://i.gkd.li/i/24347101',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18134823', // 自己发的， LinearLayout[childCount=1] 区分
            'https://i.gkd.li/i/18134833', // 已领取的， getChild(1).childCount=1 区分
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '点击红包-开',
          matchRoot: true,
          activityIds: [
            '.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
            '.plugin.luckymoney.ui.LuckyMoneyNewReceiveUI',
          ],
          matches: '@Button[desc="开"] -3 LinearLayout >2 [text$="红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134828',
            'https://i.gkd.li/i/21177180',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/12567698', // 金币动画的快照
        },
        {
          preKeys: [1, 2],
          name: '从红包结算界面返回',
          activityIds: [
            '.plugin.luckymoney.ui.LuckyMoneyDetailUI',
            '.plugin.luckymoney.ui.LuckyMoneyNewDetailUI',
          ],
          matches: '@ImageView[desc="返回"] +2 LinearLayout >8 [text$="红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134829',
            'https://i.gkd.li/i/18135031',
            'https://i.gkd.li/i/23825631',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-订阅号文章广告',
      desc: '点击下拉框-[关闭此广告]/[不感兴趣]-[与我无关]',
      enable: false,
      matchRoot: true,
      activityIds: [
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
        '.plugin.brandservice.ui.timeline.preload.ui.TmplWebView',
        '.plugin.webview.ui.tools.fts.MMSosWebViewUI',
        '.plugin.webview.ui.tools.MMWebViewUI',
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
            'https://i.gkd.li/i/17093010', // com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI
            'https://i.gkd.li/i/14802057',
            'https://i.gkd.li/i/16798663',
            'https://i.gkd.li/i/15198413', // 无id
            'https://i.gkd.li/i/15198455', // 无id
            'https://i.gkd.li/i/17276697', // text="广告 "，有空格
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/import/12678937', // 防误触, 文章未浏览至页面底部，广告反馈按钮不可见，使用 [visibleToUser=true] 进行限定，防止打开文章就频繁触发规则
            'https://i.gkd.li/import/12646837', // 防误触, 事件完成后，反馈按钮仍然存在，使用 View[childCount=1] 进行限定，防止频繁触发规则
            'https://i.gkd.li/import/12642234', // 防误触, 出现反馈菜单后应该不匹配
            'https://i.gkd.li/import/12722301', // 防误触
            'https://i.gkd.li/import/12722331', // 防误触, 使用 [id="feedbackTagContainer"][visibleToUser=true] 进行限定，防止反馈界面未出现就触发规则
            'https://i.gkd.li/import/14006203', // 防误触
            'https://i.gkd.li/import/12701503', // 防误触, 事件完成后，采用[childCount=1]进行限定，防止频繁触发规则
            'https://i.gkd.li/import/14292844', // 防误触, 出现反馈菜单后应该不匹配
            'https://i.gkd.li/i/15198464', // 防止在文章末尾广告关闭后误触
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击「关闭此广告」',
          activityIds: [],
          excludeMatches: '[text="感谢你的反馈"][visibleToUser=true]',
          matches:
            '[text*="广告"&&text.length<5] <n View < View >n [text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12745280',
            'https://i.gkd.li/import/14293434',
            'https://i.gkd.li/import/12700191',
            'https://i.gkd.li/i/14633366',
            'https://i.gkd.li/i/14834975',
            'https://i.gkd.li/i/16798661',
            'https://i.gkd.li/i/15198422', // 无id
            'https://i.gkd.li/i/15198459', // 无id
            'https://i.gkd.li/i/16796729', // 内容中部广告
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          name: '点击「不感兴趣」',
          activityIds: [],
          excludeMatches: '[text="感谢你的反馈"][visibleToUser=true]',
          matches:
            '[text*="广告"&&text.length<5] <<n View >n [text="与我无关"||text="不感兴趣"||text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17113565', // 在某些情况下，点击“不感兴趣”会导致无法执行下一步操作
            'https://i.gkd.li/i/18702161',
            'https://i.gkd.li/i/18702159',
            'https://i.gkd.li/i/18702157',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 10,
          name: '点击「与我无关」',
          activityIds: [],
          action: 'clickCenter',
          matches:
            '[text*="广告"&&text.length<5] <<n View >n [text="与我无关"||text="不感兴趣"||text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642238',
            'https://i.gkd.li/import/14006206', // com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI
            'https://i.gkd.li/i/15198461', // 无id
            'https://i.gkd.li/i/16798658',
            'https://i.gkd.li/i/18108538',
            'https://i.gkd.li/i/19121995',
            'https://i.gkd.li/i/19281051',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15061424', // 使用excludeMatches防止在文章末尾广告关闭后误触
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
      actionMaximum: 1,
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          key: 1,
          matches:
            '@[desc="未选中,原图,复选框"][text=null||text=""][visibleToUser=true] <(1,2) [name$="Layout"][childCount=2] > [text="原图"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16987145', // 未选中
            'https://i.gkd.li/i/16987144', // 未选中
            'https://i.gkd.li/i/18413281',
            'https://i.gkd.li/i/14661734',
            'https://i.gkd.li/i/19625049',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/16987141', // 已选中
            'https://i.gkd.li/i/16987147', // 已选中
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动查看原图/原视频',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      fastQuery: true,
      activityIds: ['.ui.chatting.gallery.ImageGalleryUI', '.ui.LauncherUI'],
      rules: [
        {
          key: 0,
          anyMatches: [
            'Button[text^="查看"][clickable=true][visibleToUser=true]',
            'Button[clickable=true][text^="查看"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13523031',
            'https://i.gkd.li/i/14661736',
            'https://i.gkd.li/i/16833732',
            'https://i.gkd.li/i/17698956',
            'https://i.gkd.li/i/19515095',
            'https://i.gkd.li/i/19645122',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-小程序部分通用广告',
      desc: '包括部分开屏广告，弹窗广告等',
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
          name: '弹窗广告',
          matchTime: 20000,
          actionCd: 300, // 有时候需要点击多次
          actionDelay: 300, // 过早触发有概率无效
          resetMatch: 'app',
          fastQuery: true,
          excludeMatches: '[text="跳过"][visibleToUser=true]', // 防止提前触发导致失效
          matches: [
            'ImageView[childCount=0][visibleToUser=true] < FrameLayout < @FrameLayout[visibleToUser=true] <2 * - * >(4,5) [text="广告"||text="查看详情"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13459614',
            'https://i.gkd.li/i/16943989',
            'https://i.gkd.li/i/16920797',
            'https://i.gkd.li/import/12926021',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16958795',
        },
        {
          key: 2,
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
      key: 17,
      name: '青少年模式',
      desc: '关闭青少年模式提示弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['.plugin.finder.', '.ui.LauncherUI'],
          matches:
            '@[text="我知道了"][index=parent.childCount.minus(1)] <n LinearLayout > [text^="为呵护未成年人健康成长"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13538145',
            'https://i.gkd.li/i/13575195',
            'https://i.gkd.li/i/14735456',
            'https://i.gkd.li/i/14896723',
            'https://i.gkd.li/i/18135103',
            'https://i.gkd.li/i/19683937',
          ],
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
      desc: '自动展开订阅号历史消息',
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
      activityIds: [
        '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[X]-1',
          matches:
            'View[childCount>=2] >n [name$="View"][desc.length>=1] - View[desc$="推​荐​"][childCount>=2] > ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)][width<100&&height<100][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14436176',
            'https://i.gkd.li/i/14392392',
            'https://i.gkd.li/i/14548701',
            'https://i.gkd.li/i/22870358',
          ],
        },
        {
          key: 1,
          name: '点击[X]-2',
          matches:
            'Button[desc.length>0][childCount>=2][desc.length>=1] > ImageView[desc.length>=1][childCount>0] + @ImageView[index!=0][clickable=true][visibleToUser=true][width<100&&height<100][clickable=true] + View[desc.length=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/22870407',
            'https://i.gkd.li/i/22870408',
            'https://i.gkd.li/i/22870410',
            'https://i.gkd.li/i/23693851',
            'https://i.gkd.li/i/23832813',
          ],
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[不喜欢此类视频]',
          activityIds: [],
          anyMatches: [
            '[desc="不喜欢此类视频"][clickable=true]',
            '[desc="不看此类内容"][clickable=true]',
            '[desc="不看此類內容"][clickable=true]',
            '[desc="不看此官方賬號內容"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14444654',
            'https://i.gkd.li/i/14549566',
            'https://i.gkd.li/i/21343537',
            'https://i.gkd.li/i/22870531',
            'https://i.gkd.li/i/22870532',
          ],
        },
        {
          preKeys: 10,
          key: 15,
          name: '点击[确定]',
          activityIds: [],
          matches: '[desc="确定"||desc="確定"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14436190',
            'https://i.gkd.li/i/14549567',
            'https://i.gkd.li/i/21343507',
            'https://i.gkd.li/i/21792697',
            'https://i.gkd.li/i/22870535',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '功能类-付款后自动点击完成/返回商家',
      desc: '支付完成后自动点击完成或返回商家按钮',
      enable: false,
      matchRoot: true,
      fastQuery: true,
      activityIds: [
        'com.tencent.mm.framework.app.UIPageFragmentActivity',
        '.ui.LauncherUI',
      ],
      rules: [
        {
          matches: [
            '[text="支付成功"]',
            '[text*="￥"||text*="¥"]',
            '[text="完成"||text="返回商家"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14399355',
            'https://i.gkd.li/i/14558398',
            'https://i.gkd.li/i/14662147',
            'https://i.gkd.li/i/16215946',
            'https://i.gkd.li/i/18348017',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14532946', // 避免在此页面误触
          ],
        },
      ],
    },
    {
      key: 23,
      name: '功能类-自动语音转文字',
      desc: '点击语音旁边的转文字/长按语音后点击转文字',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: ['.ui.LauncherUI', '.ui.chatting.ChattingUI'],
          matches: '@[clickable=true] >(1,2) [text="转文字"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14497389',
            'https://i.gkd.li/i/14538322',
            'https://i.gkd.li/i/19774491',
            'https://i.gkd.li/i/19792042',
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/21792783'],
        },
      ],
    },
  ],
});
