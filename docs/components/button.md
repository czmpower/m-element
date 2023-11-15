---
title: Button | V-Element
description: Button 组件的文档
---
# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demo/Button/Basic.vue"></preview>

### Button Attributes

| Name        | Description           | Type              | Default |
| ----------- | --------------------- | ----------------- | ------- |
| size        | 尺寸                  | `enum- large `    | small   |
| type        | 类型                  | `enum - primary ` | success |
| plain       | 是否为朴素按钮        | `boolean`         | false   |
| round       | 是否为圆角按钮        | `booleanaa`       | false   |
| circle      | 是否为圆形按钮        | `boolean`         | false   |
| loading     | 是否为加载中状态      | `boolean`         | false   |
| disabled    | 按钮是否为禁用状态    | `boolean`         | false   |
| icon        | 图标组件              | `string`          | -       |
| autofocus   | 原生 `autofocus` 属性 | `boolean`         | false   |
| native-type | 原生 type 属性        | `enum - button`   | submit  |


### Button Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 按钮内容 |

### Button Exposes
| 属性名 | 说明           | 类型   |
| ------ | -------------- | ------ |
| ref    | 按钮 html 元素 | object |