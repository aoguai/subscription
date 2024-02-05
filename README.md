# @aoguai/subscription

本仓库为由 aoguai 维护的 GKD 订阅规则

秉持 “如无必要，勿增实体” 的原则，该仓库只会维护 [适配 APP 列表](./AppList.md) 内的 APP 规则

**同时本项目的目标是编写尽量精简通用的规则，所以部分针对APP的规则可能已存在全局规则中，希望您多留意**

## 使用

在 [GKD](https://github.com/gkd-kit/gkd) 内添加以下链接即可使用此规则

```txt
https://cdn.jsdelivr.net/gh/aoguai/subscription@custom/dist/aoguai_gkd.json5
```

注意：本项目维护的规则仅启用 `开屏广告` 一类规则, 其它所有规则均需用户手动打开

## 说明

当前版本: v2

当前订阅文件已适配 62 个 APP, 共有 245 规则组

**查看详细 [适配 APP 列表](./AppList.md)**

**由于精力有限本项目仅接受 [适配 APP 列表](./AppList.md) 或改进 全局规则 的相关 issues or PR 提交**

如果您有额外的 APP 规则需求，您可以通过自己编写规则并添加到本地规则中使用

如果您希望参与或学习编写订阅/贡献此项目 -> [CONTRIBUTING.md](./CONTRIBUTING.md)

## License 说明

[@aoguai/subscription](https://github.com/aoguai/subscription) 遵循 [MIT license](./LICENSE)。

## 感谢原项目

[gkd-kit/subscription](https://github.com/gkd-kit/subscription)

### 感谢原开发者们的贡献

![img](https://contrib.rocks/image?repo=gkd-kit/subscription&_v=2)
