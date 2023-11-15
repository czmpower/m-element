import type { ComponentInternalInstance, VNode } from 'vue';

// 导出接口MessageProps，用于定义消息属性
export interface MessageProps {
  // 消息内容
  message: string;
  // 消息显示时间，默认不显示
  duration?: number;
  // 是否显示关闭按钮，默认显示
  showClose?: boolean;
  // 消息类型，默认success
  type?: 'success' | 'info' | 'warning' | 'danger';
  // 消息销毁时的回调函数
  onDestory: () => void;
  // 消息id
  id: number;
  // 消息的z-index属性
  zIndex: number;
  // 消息距离顶部的偏移量，默认不偏移
  offset?: number;
  // 消息动画名称
  transitionName?: string;
}

// 导出接口MessageContext，用于定义消息上下文
export interface MessageContext {
  // 消息id
  id: number;
  // 消息虚拟节点
  vnode: VNode;
  // 消息组件实例
  vm: ComponentInternalInstance;
  // 消息属性
  props: MessageProps;
  // 销毁消息的函数
  destory: () => void;
}
// 导出接口CreateMessageProps，用于创建消息属性，排除onDestory、id、zIndex属性
export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>;
