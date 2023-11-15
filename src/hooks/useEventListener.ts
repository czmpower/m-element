import { isRef, watch, type Ref, onMounted, onBeforeMount, unref } from 'vue';

export default (target: Ref<EventTarget | null> | EventTarget, event: string, handler: (e: Event) => any) => {
  if (isRef(target)) {
    watch(
      () => target.value,
      (newVal, oldVal) => {
        if (newVal) {
          newVal?.addEventListener(event, handler);
        }
        if (oldVal) {
          oldVal?.removeEventListener(event, handler);
        }
      }
    );
  } else {
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }
  onBeforeMount(() => {
    unref(target)?.removeEventListener(event, handler);
  });
};
