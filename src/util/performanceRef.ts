import { customRef, Ref } from "vue";

/**
 * @description 自定义防抖 Ref
 * @param rawValue
 * @param delay
 * @see https://staging-cn.vuejs.org/api/reactivity-advanced.html#customref
 * @author {Shalling}
 * @returns {Ref<T>}
 */
export function DebounceRef<T>(rawValue: T, delay: number = 200): Ref<T> {
  let timer: number;
  return customRef((track, trigger) => {
    return {
      get(): T {
        track();
        return rawValue;
      },
      set(newValue: T): void {
        if (timer) {
          clearTimeout();
        }
        timer = window.setTimeout(() => {
          rawValue = newValue;
          trigger();
        }, delay);
      },
    };
  });
}

/**
 * @description 自定义节流 Ref
 * @param rawValue
 * @param delay
 * @see https://staging-cn.vuejs.org/api/reactivity-advanced.html#customref
 * @author {Shalling}
 * @returns {Ref<T>}
 */
export function ThrottleRef<T>(rawValue: T, delay: number = 200): Ref<T> {
  let isLock: boolean = false;
  return customRef((track, trigger) => {
    return {
      get(): T {
        track();
        return rawValue;
      },
      set(newValue: T): void {
        if (isLock) {
          return;
        }
        isLock = true;
        setTimeout(() => {
          rawValue = newValue;
          trigger();
          isLock = false;
        }, delay);
      },
    };
  });
}
