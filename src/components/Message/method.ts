import type { CreateMessageProps, MessageContext } from './type';
import MessageConstructor from './Message.vue';
import { h, mergeProps, render, shallowReactive } from 'vue';
import * as _ from 'lodash-es';
let seed = 1;
export const instances: MessageContext[] = shallowReactive([]);
//创建消息
export const createMessage = (props: CreateMessageProps) => {
  const container = document.createElement('div');
  const id = seed++;
  const destory = () => {
    const { index } = getInstanceById(id);
    if (index === -1) return;
    instances.splice(index, 1);
    render(null, container);
  };
  const newProps = {
    ...props,
    id,
    zIndex: 10000,
    onDestory: destory,
  };
  const vnode = h(MessageConstructor, newProps);
  render(vnode, container);
  document.body.appendChild(container.firstElementChild!);
  const vm = vnode.component!;

  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destory,
  };
  instances.push(instance);
  return instance;
};

//根据id获取对象
export const getInstanceById = (id: number) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx === -1) return { index: idx, vm: null };
  return { index: idx, instance: instances[idx], instances };
};

//获取当前对象距离顶部高度
export const getMessageTop = (id: number) => {
  const { index, instance } = getInstanceById(id);
  if (index === -1) return 0;
  //获取当前元素高度
  const height = instances[index].vnode.el!.getBoundingClientRect().height;
  //从属性中获取offset
  const offset = instance!.vm.props.offset as number;
  if (index === 0) {
    //把下一个的距离塞进props,方便下一个获取
    instance!.vm.props.bottomOffset = height + offset;
    return offset;
  } else {
    const bottomOffset = instances[index - 1].vm.props.bottomOffset as number;
    instance!.vm.props.bottomOffset = bottomOffset + height + offset;
    return bottomOffset + offset;
  }
};

//删除所有项
export const removeAll = () => {
  const instances_new = _.cloneDeep(instances);
  instances_new.forEach((instance) => {
    instance.destory();
  });
};
