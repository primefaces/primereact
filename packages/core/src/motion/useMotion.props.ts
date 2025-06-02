import type { useMotionProps } from '@primereact/types/shared/motion';

export const defaultProps: useMotionProps = {
    name: undefined,
    type: undefined,
    safe: false,
    appear: false,
    enter: true,
    leave: true,
    duration: undefined,
    enterFromClassName: undefined,
    enterToClassName: undefined,
    enterActiveClassName: undefined,
    leaveFromClassName: undefined,
    leaveToClassName: undefined,
    leaveActiveClassName: undefined,
    onBeforeEnter: undefined,
    onEnter: undefined,
    onAfterEnter: undefined,
    onEnterCancelled: undefined,
    onBeforeLeave: undefined,
    onLeave: undefined,
    onAfterLeave: undefined,
    onLeaveCancelled: undefined
};
