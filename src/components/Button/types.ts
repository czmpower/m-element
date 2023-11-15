import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// 导出按钮类型
export type ButtonType = 'primary'|'success'|'waring'|'danger'|'info'
// 导出按钮尺寸
export type ButtonSize = 'large'|'small'

// 导出按钮属性接口
export interface ButtonProps {
    // 按钮类型
    type?: ButtonType,
    // 按钮尺寸
    size?: ButtonSize,
    // 是否朴素
    plain?: boolean,
    // 是否圆角
    round?: boolean,
    // 是否圆形
    circle?: boolean,
    // 是否禁用
    disabled?: boolean
    // icon
    icon?: object | Array<string> | string | IconDefinition
    //loading
    loading?: boolean
}

// 导出按钮暴露接口
export interface ButtonExpose {
    // 按钮引用
    ref: HTMLButtonElement|null
}
