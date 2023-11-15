---
title: Message
description: Message 组件的文档
---

# Message 消息组件

适用于在主动操作后的反馈提示

## 基础用法

从顶部出现，默认 3 秒后自动消失，按 esc 按键会全部消失，也可以手动一个个关闭

<preview path="../demo/Message/Basic.vue"></preview>

### Message 配置项

| Name      | Description                          | Type                                      | Default |
| --------- | ------------------------------------ | ----------------------------------------- | ------- |
| message   | 消息内容                             | `string`                                  | -       |
| duration  | 消息显示时间， 设置为 0 不会自动消失 | `number`                                  | 3000    |
| showClose | 是否显示关闭按钮，默认显示           | `boolean`                                 | true    |
| type      | 消息类型                             | `success` / `info` / `warning` / `danger` | true    |
| offset    | 消息距离顶部的偏移量                 | `number`                                  | 20      |
