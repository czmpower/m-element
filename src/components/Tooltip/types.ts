import type { Placement, Options } from '@popperjs/core';
// 导出接口TooltipProps，用于定义Tooltip的属性
export interface TooltipProps {
  // 提示框内容
  content?: string;
  // 提示框触发方式，默认为hover，也可以设置为click
  trigger?: 'hover' | 'click';
  // 提示框显示位置，默认为bottom-end
  placement?: Placement;
  // 是否手动控制提示框的显示与隐藏，默认为false
  manual?: boolean;
  // popper配置项，默认为空对象
  popperOptions?: Partial<Options>;
  // 提示框动画，默认为transition-in-left
  transition?: string;
  // 打开提示框的延迟时间，默认为0
  openDelay?: number;
  // 关闭提示框的延迟时间，默认为0
  closeDelay?: number;
}

// 导出接口TooltipEmits，用于定义Tooltip的事件
export interface TooltipEmits {
  // 可见性改变时触发的事件，参数为boolean类型
  (e: 'visible-change', value: boolean): void;
  // 点击提示框外部时触发的事件，参数为boolean类型
  (e: 'click-outside', value: boolean): void;
}

// 导出接口TooltipInstance，用于定义Tooltip的实例
export interface TooltipInstance {
  // 显示提示框
  show: () => void;
  // 隐藏提示框
  hide: () => void;
}
