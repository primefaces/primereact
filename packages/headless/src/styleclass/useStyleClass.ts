import { withHeadless } from '@primereact/core/headless';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { useMountEffect } from '@primereact/hooks/use-mount-effect';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { useUpdateEffect } from '@primereact/hooks/use-update-effect';
import { addClass, hasClass, removeClass, toElement } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useStyleClass.props';

export const useStyleClass = withHeadless({
    setup: ({ props, elementRef }) => {
        // element refs
        const targetRef = React.useRef(null);
        const animating = React.useRef(false);

        // events
        const [bindTargetEnterListener, unbindTargetEnterListener] = useEventListener({
            type: 'animationend',
            listener: () => {
                removeClass(targetRef.current, props.enterActiveClassName);

                if (props.enterToClassName) {
                    addClass(targetRef.current, props.enterToClassName);
                }

                unbindTargetEnterListener();

                if (props.enterActiveClassName?.includes('slidedown')) {
                    targetRef.current.style.maxHeight = '';
                }

                animating.current = false;
            }
        });

        const [bindTargetLeaveListener, unbindTargetLeaveListener] = useEventListener({
            type: 'animationend',
            listener: () => {
                removeClass(targetRef.current, props.leaveActiveClassName);

                if (props.leaveToClassName) {
                    addClass(targetRef.current, props.leaveToClassName);
                }

                unbindTargetLeaveListener();
                animating.current = false;
            }
        });

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (!isVisible(targetRef.current) || getComputedStyle(targetRef.current).getPropertyValue('position') === 'static') {
                    unbindDocumentClickListener();
                } else if (isOutsideClick(event)) {
                    leave();
                }
            },
            when: props.hideOnOutsideClick
        });

        const [bindClickListener, unbindClickListener] = useEventListener({
            type: 'click',
            listener: () => {
                targetRef.current = resolveTarget();

                if (props.toggleClassName) {
                    if (hasClass(targetRef.current, props.toggleClassName)) {
                        removeClass(targetRef.current, props.toggleClassName);
                    } else {
                        addClass(targetRef.current, props.toggleClassName);
                    }
                } else {
                    isVisible(targetRef.current) ? leave() : enter();
                }
            }
        });

        // methods
        const enter = () => {
            if (props.enterActiveClassName) {
                if (!animating.current) {
                    animating.current = true;

                    if (props.enterActiveClassName.includes('slidedown')) {
                        targetRef.current.style.height = '0px';
                        removeClass(targetRef.current, props.hiddenClassName || props.enterFromClassName);
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

            bindDocumentClickListener({ target: elementRef.current && elementRef.current.ownerDocument });
        };

        const leave = () => {
            if (props.leaveActiveClassName) {
                if (!animating.current) {
                    animating.current = true;
                    addClass(targetRef.current, props.leaveActiveClassName);

                    if (props.leaveFromClassName) {
                        removeClass(targetRef.current, props.leaveFromClassName);
                    }

                    bindTargetLeaveListener({ target: targetRef.current });
                }
            } else {
                if (props.leaveFromClassName) {
                    removeClass(targetRef.current, props.leaveFromClassName);
                }

                if (props.leaveToClassName) {
                    addClass(targetRef.current, props.leaveToClassName);
                }
            }

            if (props.hideOnOutsideClick) {
                unbindDocumentClickListener();
            }
        };

        const resolveTarget = () => {
            if (targetRef.current) {
                return targetRef.current;
            }

            switch (props.selector) {
                case '@next':
                    return elementRef.current && elementRef.current.nextElementSibling;

                case '@prev':
                    return elementRef.current && elementRef.current.previousElementSibling;

                case '@parent':
                    return elementRef.current && elementRef.current.parentElement;

                case '@grandparent':
                    return elementRef.current && elementRef.current.parentElement.parentElement;

                default:
                    return document.querySelector(props.selector);
            }
        };

        const init = () => {
            Promise.resolve().then(() => {
                // @todo: refactor useImperativeHandle method in useComponent
                elementRef.current = toElement(props.nodeRef);
                elementRef.current?.setAttribute('data-pd-styleclass', true);
                bindClickListener({ target: elementRef.current });
            });
        };

        const destroy = () => {
            unbindClickListener();
            unbindDocumentClickListener();
            targetRef.current = null;
        };

        const isVisible = (target) => {
            return target && target.offsetParent !== null;
        };

        const isOutsideClick = (event) => {
            return !elementRef.current.isSameNode(event.target) && !elementRef.current.contains(event.target) && !targetRef.current.contains(event.target);
        };

        // effects
        useMountEffect(() => {
            bindClickListener({ target: elementRef.current });
            //init();
        });

        useUpdateEffect(() => {
            //init();

            return () => {
                //unbindClickListener();
            };
        });

        useUnmountEffect(() => {
            //destroy();
        });

        return {
            // element refs
            targetRef,
            // methods
            enter,
            leave
        };
    },
    defaultProps
});
