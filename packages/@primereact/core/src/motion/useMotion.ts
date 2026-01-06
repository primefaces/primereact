import { withHeadless } from '@primereact/core/headless';
import type { useMotionProps } from '@primereact/types/shared/motion';
import { createMotion, type MotionInstance, type MotionOptions } from '@primeuix/motion';
import * as React from 'react';
import { defaultUseMotionProps } from './useMotion.props';

export const useMotion = withHeadless({
    name: 'useMotion',
    defaultProps: defaultUseMotionProps,
    setup({ props, elementRef }) {
        const motionRef = React.useRef<MotionInstance | null>(null);

        // methods
        const enter = React.useCallback(() => motionRef.current?.enter(), [motionRef.current]);
        const leave = React.useCallback(() => motionRef.current?.leave(), [motionRef.current]);
        const cancel = React.useCallback(() => motionRef.current?.cancel(), [motionRef.current]);
        const update = React.useCallback(
            (element: Element, motionProps?: useMotionProps) => {
                const options: MotionOptions = {
                    ...motionProps,
                    name: motionProps?.name,
                    enterClass: {
                        from: motionProps?.enterFromClassName,
                        to: motionProps?.enterToClassName,
                        active: motionProps?.enterActiveClassName
                    },
                    leaveClass: {
                        from: motionProps?.leaveFromClassName,
                        to: motionProps?.leaveToClassName,
                        active: motionProps?.leaveActiveClassName
                    }
                };

                if (!motionRef.current) {
                    motionRef.current = createMotion(element, options);
                } else {
                    motionRef.current?.update(element, options);
                }
            },
            [motionRef.current]
        );

        React.useLayoutEffect(() => {
            if (elementRef.current) {
                update(elementRef.current, props);
            }
        }, []);

        return {
            motionRef,
            // methods
            enter,
            leave,
            cancel,
            update
        };
    }
});
