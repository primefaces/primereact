import { withHeadless } from '@primereact/core/headless';
import { useMotionProps } from '@primereact/types/shared/motion';
import { createMotion, type MotionInstance, type MotionOptions } from '@primeuix/motion';
import { nextFrame } from '@primeuix/utils';
import * as React from 'react';
import { applyHiddenStyles, resetStyles } from './Motion.utils';
import { defaultUseMotionProps } from './useMotion.props';

export const useMotion = withHeadless({
    name: 'useMotion',
    defaultProps: defaultUseMotionProps,
    setup({ props, elementRef }) {
        const [renderedState, setRenderedState] = React.useState(() => (props.visible && props.mountOnEnter) || !props.mountOnEnter);

        const state = {
            rendered: renderedState
        };

        // refs
        const motionRef = React.useRef<MotionInstance | undefined>(undefined);
        const isInitialMount = React.useRef(true);

        // helpers
        const getElement = React.useCallback(() => (props.elementRef as React.RefObject<HTMLElement>)?.current || elementRef?.current, [props.elementRef, elementRef]);

        // methods
        const enter = React.useCallback(() => motionRef.current?.enter(), [motionRef.current]);
        const leave = React.useCallback(() => motionRef.current?.leave(), [motionRef.current]);
        const cancel = React.useCallback(() => motionRef.current?.cancel(), [motionRef.current]);
        const update = React.useCallback((element: Element | null, motionProps: useMotionProps = {}) => {
            if (!element) {
                return;
            }

            const options: MotionOptions = {
                ...motionProps,
                appear: true,
                enterClass: {
                    from: motionProps.enterFromClassName,
                    to: motionProps.enterToClassName,
                    active: motionProps.enterActiveClassName
                },
                leaveClass: {
                    from: motionProps.leaveFromClassName,
                    to: motionProps.leaveToClassName,
                    active: motionProps.leaveActiveClassName
                }
            };

            if (!motionRef.current) {
                motionRef.current = createMotion(element, options);
            } else {
                motionRef.current?.update(element, options);
            }
        }, []);

        // effects
        React.useEffect(() => {
            return () => {
                const element = getElement();

                resetStyles(element, props.hideStrategy);

                isInitialMount.current = true;
            };
        }, []);

        React.useEffect(() => {
            if (props.visible && !renderedState) {
                setRenderedState(true);
            }
        }, [props.visible]);

        React.useLayoutEffect(() => {
            const element = getElement();

            update?.(element, props);
        }, []);

        React.useLayoutEffect(() => {
            const element = getElement();

            if (!element || !renderedState) {
                isInitialMount.current = false;

                return;
            }

            let cancelled = false;
            const shouldAppear = isInitialMount.current && props.visible && props.appear;

            resetStyles(element, props.hideStrategy);
            update?.(element, props);

            if (props.visible) {
                if (shouldAppear || !isInitialMount.current) {
                    enter?.();
                }
            } else {
                leave?.()?.then(() => {
                    if (!element || cancelled || props.visible) return;

                    if (props.unmountOnLeave) {
                        applyHiddenStyles(element, props.hideStrategy);
                        nextFrame().then(() => {
                            if (!cancelled) setRenderedState(false);
                        });
                    } else {
                        applyHiddenStyles(element, props.hideStrategy);
                    }
                });
            }

            isInitialMount.current = false;

            return () => {
                cancelled = true;
                cancel?.();
            };
        }, [props.visible, renderedState, props.unmountOnLeave, props.appear]);

        return {
            state,
            // methods
            enter,
            leave,
            cancel,
            update
        };
    }
});
