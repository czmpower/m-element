---
title: Tooltip
description: Tooltip 组件的文档
---

# Tooltip 组件

常用于展示鼠标 hover 时的提示信息。

## 基础用法

使用 content 属性来决定 hover 时的提示信息。 由 placement 属性决定展示效果： placement 属性值为：[方向]-[对齐位置]；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

<preview path="../demo/Tooltip/Basic.vue"></preview>

<preview path="../demo/Tooltip/manual.vue"></preview>

### Tooltip Attributes

| Name       | Description                    | Type                                                                                                              | Default      |
| ---------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------ |
| content    | 提示框内容                     | string                                                                                                            | -            |
| trigger    | 提示框触发方式                 | `hover` / `click`                                                                                                 | `hover`      |
| placement  | 提示框显示位置                 | `top-start` / `top-end` / `bottom-start` / `bottom-end` / `right-start` / `right-end` / `left-start` / `left-end` | `bottom-end` |
| manual     | 是否手动控制提示框的显示与隐藏 | `boolean`                                                                                                         | `false`      |
| openDelay  | 打开提示框的延迟时间           | `number`                                                                                                          | `0`          |
| closeDelay | 关闭提示框的延迟时间           | `number`                                                                                                          | `0`          |

### Tooltip Slots

| 插槽名  | 说明                      |
| ------- | ------------------------- |
| default | Tooltip 触发 & 引用的元素 |
| content | 自定义内容                |

### Tooltip Exposes

| 属性名 | 说明       | 类型     |
| ------ | ---------- | -------- |
| show   | 显示提示框 | Function |
| hide   | 隐藏提示框 | Function |
