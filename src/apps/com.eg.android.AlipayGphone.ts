import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '通知提示-关闭花呗,借呗,还款升级,推荐等弹窗',
      desc: '关闭支付成功后的升级、开通、推荐等弹窗',
      enable: false,
      ignoreGlobalGroupMatch: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views', //views.MspContainerActivity & views.MspUniRenderActivity
        'com.alipay.android.msp.ui.views.MspContainerActivity',
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[(name$=".Image"&&text.length=0)||((text^="暂不升级"||text^="放弃升级")||text="关闭")][visibleToUser=true][desc.length=null] <<n * <n * > * >n [((text^="同意")&&((text*="协议并"||text*="升级并")))&&(text$="确认交易"||text$="升级"||text$="开通"||text*="刷脸"||text$="付款")||text="确认"||text="立即领取"||text="立即开通"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
            'https://i.gkd.li/import/13915022',
            'https://i.gkd.li/import/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/import/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/import/12915864',
            'https://i.gkd.li/import/14229068',
            'https://i.gkd.li/import/13631362',
            'https://i.gkd.li/import/13857535',
            'https://i.gkd.li/import/14060628',
            'https://i.gkd.li/i/14650607',
            'https://i.gkd.li/i/15050300',
            'https://i.gkd.li/i/16106615',
            'https://i.gkd.li/i/17391739',
            'https://i.gkd.li/i/17945065',
            'https://i.gkd.li/i/14893122',
            'https://i.gkd.li/i/19449399',
            'https://i.gkd.li/i/20684144',
            'https://i.gkd.li/i/23455533',
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/19478718'],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text="立即更新" || text="马上体验"] <n * > [text*="稍后"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13327095',
            'https://i.gkd.li/i/15010554',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="版本更新" || text^="Version"]',
            '[id="com.alipay.mobile.antui:id/btn_close" || id="com.alipay.mobile.accountauthbiz:id/close_dialog_button"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13490805',
            'https://i.gkd.li/i/13580594',
            'https://i.gkd.li/i/23236828',
          ],
        },
        {
          key: 2,
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/i/13490797',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-设置支付宝小组件',
      desc: '关闭支付宝小组件设置提示和推荐',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          snapshotUrls: 'https://i.gkd.li/import/13327349',
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="添加会员小组件"] < View +3 View[childCount=2] > [text="近期不再提醒我"]',
          snapshotUrls: 'https://i.gkd.li/i/16427922',
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-小程序-12306',
      desc: '关闭12306小程序界面的推广广告',
      enable: false,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13763314',
        },
        {
          preKeys: 0,
          key: 1,
          fastQuery: true,
          matches: '[text="对该内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13763315',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-支付后自动点击完成',
      desc: '支付/充值/提交成功后自动点击完成按钮',
      enable: false,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text="支付成功" || text="充值成功" || text="提交成功"]',
            '[text="完成"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14008852',
            'https://i.gkd.li/i/17503266',
            'https://i.gkd.li/i/16328809',
            'https://i.gkd.li/i/17686972',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '分段广告-出行扫码广告',
      desc: '关闭扫码出行页面的推广广告',
      enable: false,
      fastQuery: true,
      activityIds:
        'com.alipay.android.phone.wallet.aptrip.ui.activity.result.ResultPageActivityV2',
      rules: [
        {
          key: 0,
          name: '点击[展开更多]',
          matches: '@[desc="展开更多选项"] - * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14546044',
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击[对该内容不感兴趣]',
          matches: '@RelativeLayout[clickable=true] >2 [text$="内容不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14546047',
            'https://i.gkd.li/i/15209602',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '功能类-关闭免密支付开关',
      desc: '关闭免密支付功能开关',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@[checked=true] < FrameLayout - [text*="免密"][text$="支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14630824', // 关闭前
            'https://i.gkd.li/i/14630825', // 关闭后
            'https://i.gkd.li/i/17107841',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '分段广告-服务消息页面卡片广告',
      desc: '关闭服务消息页面的卡片广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity',
        'com.alipay.android.phone.msgboxapp.ui.activity.MBoxTabPageActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14787644',
            'https://i.gkd.li/i/23935865',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14787585',
            'https://i.gkd.li/i/23935930',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-弹窗广告',
      desc: '关闭全屏弹窗广告',
      enable: false,
      rules: [
        {
          key: 0,
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            'RelativeLayout[childCount=2][desc="全屏广告"] ImageView[desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14034152',
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'WebView > View > View > View > View > @TextView[clickable=true][visibleToUser=true][text=""] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/16812751',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@[text*="跳过"] + [visibleToUser=true][text^="账单分期还"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/18409779',
        },
        {
          key: 3,
          name: '外卖红包',
          activityIds: '.com.eg.android.AlipayGphone.AlipayLogin',
          matches: '[desc="推荐广告"] + * > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/21138908',
        },
        {
          key: 4,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: 'Image[text="关闭弹屏"]',
          snapshotUrls: 'https://i.gkd.li/i/22531246',
        },
        {
          key: 5,
          name: '小组件弹窗',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches: '[text="去添加"] + [text="近期不再提醒我"]',
          snapshotUrls: [
            // 弹窗中的文字和图片每隔几秒切换
            'https://i.gkd.li/i/16427922',
            'https://i.gkd.li/i/22984695',
            'https://i.gkd.li/i/22984696',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '功能类-自动授权登录',
      desc: '自动点击登录确认',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          action: 'clickCenter', // clickNode可能无效
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '[text="支付宝授权"] >3 @[childCount=0][text="同意"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/17376764',
        },
      ],
    },
    {
      key: 18,
      name: '功能类-无法访问时点击[返回]',
      desc: '无法访问时点击[返回]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
            'com.alipay.android.living.activity.LivingNotTransparentDetailActivity',
            '.AlipayLogin',
          ],
          matches: [
            '[text="访问被拒绝" || text="人气太旺啦，请稍后再试" || text="訪問被拒絕" || text="人氣太旺啦，請稍後再試" || text="伺服器繁忙，請稍後再試"][visibleToUser=true]',
            '[id="com.alipay.mobile.antui:id/back_button"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23046994',
            'https://i.gkd.li/i/23096790',
            'https://i.gkd.li/i/23832722',
            'https://i.gkd.li/i/24353818',
            'https://i.gkd.li/i/24353826',
            'https://i.gkd.li/i/24183318',
          ],
        },
      ],
    },
  ],
});
