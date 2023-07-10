import * as React from 'react';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { StyleClassBase } from './StyleClassBase';
import { PrimeReactContext } from '../api/Api';

export const StyleClass = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = StyleClassBase.getProps(inProps, context);

    const targetRef = React.useRef(null);
    const animating = React.useRef(false);
    const elementRef = React.useRef(null);

    const [bindTargetEnterListener, unbindTargetEnterListener] = useEventListener({
        type: 'animationend',
        listener: () => {
            DomHandler.removeClass(targetRef.current, props.enterActiveClassName);

            if (props.enterToClassName) {
                DomHandler.addClass(targetRef.current, props.enterToClassName);
            }

            unbindTargetEnterListener();

            if (props.enterActiveClassName === 'slidedown') {
                targetRef.current.style.maxHeight = '';
            }

            animating.current = false;
        }
    });

    const [bindTargetLeaveListener, unbindTargetLeaveListener] = useEventListener({
        type: 'animationend',
        listener: () => {
            DomHandler.removeClass(targetRef.current, props.leaveActiveClassName);

            if (props.leaveToClassName) {
                DomHandler.addClass(targetRef.current, props.leaveToClassName);
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
                if (DomHandler.hasClass(targetRef.current, props.toggleClassName)) DomHandler.removeClass(targetRef.current, props.toggleClassName);
                else DomHandler.addClass(targetRef.current, props.toggleClassName);
            } else {
                DomHandler.isVisible(targetRef.current) ? leave() : enter();
            }
        }
    });

    const enter = () => {
        if (props.enterActiveClassName) {
            if (!animating.current) {
                animating.current = true;

                if (props.enterActiveClassName === 'slidedown') {
                    targetRef.current.style.height = '0px';
                    DomHandler.removeClass(targetRef.current, 'hidden');
                    targetRef.current.style.maxHeight = targetRef.current.scrollHeight + 'px';
                    DomHandler.addClass(targetRef.current, 'hidden');
                    targetRef.current.style.height = '';
                }

                DomHandler.addClass(targetRef.current, props.enterActiveClassName);

                if (props.enterClassName) {
                    DomHandler.removeClass(targetRef.current, props.enterClassName);
                }

                bindTargetEnterListener({ target: targetRef.current });
            }
        } else {
            if (props.enterClassName) {
                DomHandler.removeClass(targetRef.current, props.enterClassName);
            }

            if (props.enterToClassName) {
                DomHandler.addClass(targetRef.current, props.enterToClassName);
            }
        }

        bindDocumentClickListener({ target: elementRef.current && elementRef.current.ownerDocument });
    };

    const leave = () => {
        if (props.leaveActiveClassName) {
            if (!animating.current) {
                animating.current = true;
                DomHandler.addClass(targetRef.current, props.leaveActiveClassName);

                if (props.leaveClassName) {
                    DomHandler.removeClass(targetRef.current, props.leaveClassName);
                }

                bindTargetLeaveListener({ target: targetRef.current });
            }
        } else {
            if (props.leaveClassName) {
                DomHandler.removeClass(targetRef.current, props.leaveClassName);
            }

            if (props.leaveToClassName) {
                DomHandler.addClass(targetRef.current, props.leaveToClassName);
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
            elementRef.current = ObjectUtils.getRefElement(props.nodeRef);
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

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current,
        getTarget: () => targetRef.current
    }));

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

    return props.children;
});

StyleClass.displayName = 'StyleClass';
