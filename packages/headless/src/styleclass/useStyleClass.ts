import { withHeadless } from '@primereact/core/headless';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { useMountEffect } from '@primereact/hooks/use-mount-effect';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { useUpdateEffect } from '@primereact/hooks/use-update-effect';
import { addClass, getTargetElement, hasClass, isVisible, removeClass, setAttribute, toElement } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useStyleClass.props';

export const useStyleClass = withHeadless({
    name: 'useStyleClass',
    defaultProps,
    setup({ props, elementRef }) {
        const animating = React.useRef(false);

        // element refs
        const targetRef = React.useRef<HTMLElement | null>(null);

        // events
        const [bindTargetEnterListener, unbindTargetEnterListener] = useEventListener({
            type: 'animationend',
            listener() {
                removeClass(targetRef.current as Element, props.enterActiveClassName ?? '');

                if (props.enterToClassName) {
                    addClass(targetRef.current as Element, props.enterToClassName);
                }

                unbindTargetEnterListener();

                if (targetRef.current && props.enterActiveClassName?.includes('slidedown')) {
                    targetRef.current.style.maxHeight = '';
                }

                animating.current = false;
            }
        });

        const [bindTargetLeaveListener, unbindTargetLeaveListener] = useEventListener({
            type: 'animationend',
            listener() {
                removeClass(targetRef.current as Element, props.leaveActiveClassName ?? '');

                if (props.leaveToClassName) {
                    addClass(targetRef.current as Element, props.leaveToClassName);
                }

                unbindTargetLeaveListener();
                animating.current = false;
            }
        });

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener(event) {
                if (!isVisible(targetRef.current as HTMLElement) || getComputedStyle(targetRef.current as Element).getPropertyValue('position') === 'static') {
                    unbindDocumentClickListener();
                } else if (isOutsideClick(event as MouseEvent)) {
                    leave();
                }
            },
            when: props.hideOnOutsideClick
        });

        const [bindClickListener, unbindClickListener] = useEventListener({
            type: 'click',
            listener() {
                targetRef.current = resolveTarget() as HTMLElement;

                if (props.toggleClassName) {
                    if (hasClass(targetRef.current, props.toggleClassName)) {
                        removeClass(targetRef.current, props.toggleClassName);
                    } else {
                        addClass(targetRef.current, props.toggleClassName);
                    }
                } else {
                    if (isVisible(targetRef.current)) {
                        leave();
                    } else {
                        enter();
                    }
                }
            }
        });

        // methods
        const enter = React.useCallback(() => {
            if (!targetRef.current) return;

            if (props.enterActiveClassName) {
                if (!animating.current) {
                    animating.current = true;

                    if (props.enterActiveClassName.includes('slidedown')) {
                        targetRef.current.style.height = '0px';
                        removeClass(targetRef.current, (props.hiddenClassName || props.enterFromClassName) ?? '');
                        targetRef.current.style.maxHeight = targetRef.current.scrollHeight + 'px';
                        addClass(targetRef.current, props.hiddenClassName || props.enterActiveClassName);
                        targetRef.current.style.height = '';
                    }

                    addClass(targetRef.current, props.enterActiveClassName);

                    if (props.enterFromClassName) {
                        removeClass(targetRef.current, props.enterFromClassName);
                    }

                    bindTargetEnterListener({ target: targetRef.current });
                }
            } else {
                if (props.enterFromClassName) {
                    removeClass(targetRef.current, props.enterFromClassName);
                }

                if (props.enterToClassName) {
                    addClass(targetRef.current, props.enterToClassName);
                }
            }

            bindDocumentClickListener({ target: elementRef.current?.ownerDocument });
        }, [bindDocumentClickListener, bindTargetEnterListener, elementRef, props]);

        const leave = React.useCallback(() => {
            if (props.leaveActiveClassName) {
                if (!animating.current) {
                    animating.current = true;
                    addClass(targetRef.current as Element, props.leaveActiveClassName);

                    if (props.leaveFromClassName) {
                        removeClass(targetRef.current as Element, props.leaveFromClassName);
                    }

                    bindTargetLeaveListener({ target: targetRef.current });
                }
            } else {
                if (props.leaveFromClassName) {
                    removeClass(targetRef.current as Element, props.leaveFromClassName);
                }

                if (props.leaveToClassName) {
                    addClass(targetRef.current as Element, props.leaveToClassName);
                }
            }

            if (props.hideOnOutsideClick) {
                unbindDocumentClickListener();
            }
        }, [bindTargetLeaveListener, props, unbindDocumentClickListener]);

        const resolveTarget = React.useCallback(() => {
            return targetRef.current || getTargetElement(props.selector, elementRef.current);
        }, [elementRef, props.selector]);

        const init = React.useCallback(() => {
            Promise.resolve().then(() => {
                if (props.nodeRef?.current) {
                    elementRef.current = toElement(props.nodeRef) as HTMLElement;
                }

                setAttribute(elementRef.current, 'data-pd-styleclass', true);
                bindClickListener({ target: elementRef.current });
            });
        }, [bindClickListener, elementRef, props.nodeRef]);

        const destroy = React.useCallback(() => {
            unbindClickListener();
            unbindDocumentClickListener();
            targetRef.current = null;
        }, []);

        const isOutsideClick = (event: MouseEvent) => {
            const target = event?.target as Node;

            return !elementRef.current.isSameNode(target) && !elementRef.current.contains(target) && !targetRef.current?.contains(target);
        };

        // effects
        useMountEffect(() => {
            init();
        });

        useUpdateEffect(() => {
            init();

            return () => {
                unbindClickListener();
            };
        });

        useUnmountEffect(() => {
            destroy();
        });

        return {
            // element refs
            targetRef,
            // methods
            enter,
            leave
        };
    }
});
