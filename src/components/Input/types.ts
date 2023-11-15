export interface InputProps {
  type?: 'text' | 'password' | 'number' | 'textarea';
  modelValue?: string;
  size?: 'large' | 'small' | 'default';
  disabled?: boolean;
  clearable?: boolean;
  showPassword?: boolean;
  placeholder?: string;
  readonly?: boolean;
  autocomplete?: string;
  autofocus?: boolean;
  form?: string;
}

// 导出接口InputEmits，用于定义输入框的事件
export interface InputEmits {
  // 更新modelValue的值
  (e: 'update:modelValue', value: string): void;
  // input 的 input事件指的是值有变化就算
  // 输入框的input事件
  (e: 'input', value: string): void;
  // input 的 change事件指的是修改了值，并且失去了 focus
  // 输入框的change事件
  (e: 'change', value: string): void;
  // 输入框的focus事件
  (e: 'focus', value: FocusEvent): void;
  // 输入框的blur事件
  (e: 'blur', value: FocusEvent): void;
  // 清除输入框的值
  (e: 'clear'): void;
}

// 导出接口InputInstance，用于定义输入框的实例
export interface InputInstance {
  // 输入框的引用
  ref: HTMLInputElement | HTMLTextAreaElement;
}
