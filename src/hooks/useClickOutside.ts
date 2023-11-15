import { onMounted, onUnmounted, type Ref } from 'vue';

// 导出一个函数，用于监听点击事件
export default (elementRef: Ref<HTMLElement | undefined>, callback: (e: MouseEvent) => void) => {
  // 定义一个处理点击事件的函数
  const handler = (e: MouseEvent) => {
    // 如果元素引用和事件的目标节点都存在
    if (elementRef.value && e.target) {
      // 如果元素引用不包含事件的目标节点
      if (!elementRef.value.contains(e.target as Node)) {
        // 执行回调函数
        callback(e);
      }
    }
  };
  // 挂载时，为文档添加点击事件监听器
  onMounted(() => {
    document.addEventListener('click', handler);
  });
  // 卸载时，从文档中移除点击事件监听器
  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });
};
