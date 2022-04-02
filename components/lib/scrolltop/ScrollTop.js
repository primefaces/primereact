import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useMountEffect, useUnmountEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils, ZIndexUtils } from '../utils/Utils';

export const ScrollTop = React.memo(React.forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = React.useState(false);
    const scrollElementRef = React.useRef(null);
    const helperRef = React.useRef(null);
    const isTargetParent = props.target === 'parent';

    const [bindParentScrollListener,] = useEventListener({
        target: () => helperRef.current && helperRef.current.parentElement, type: 'scroll', listener: (event) => {
            checkVisibility(event.currentTarget.scrollTop);
        }
    });

    const [bindDocumentScrollListener,] = useEventListener({
        target: 'window', type: 'scroll', listener: () => {
            checkVisibility(DomHandler.getWindowScrollTop());
        }
    });

    const onClick = () => {
        const scrollElement = props.target === 'window' ? window : helperRef.current.parentElement;
        scrollElement.scroll({
            top: 0,
            behavior: props.behavior
        });
    }

    const checkVisibility = (scrollY) => {
        setVisibleState(scrollY > props.threshold);
    }

    const onEnter = () => {
        ZIndexUtils.set('overlay', scrollElementRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
    }

    const onEntered = () => {
        props.onShow && props.onShow();
    }

    const onExited = () => {
        ZIndexUtils.clear(scrollElementRef.current);

        props.onHide && props.onHide();
    }

    useMountEffect(() => {
        if (props.target === 'window')
            bindDocumentScrollListener();
        else if (props.target === 'parent')
            bindParentScrollListener();
    });

    useUnmountEffect(() => {
        ZIndexUtils.clear(scrollElementRef.current);
    });

    const otherProps = ObjectUtils.findDiffKeys(props, ScrollTop.defaultProps);
    const className = classNames('p-scrolltop p-link p-component', {
        'p-scrolltop-sticky': props.target !== 'window'
    }, props.className);

    return (
        <>
            <CSSTransition nodeRef={scrollElementRef} classNames="p-scrolltop" in={visibleState} timeout={{ enter: 150, exit: 150 }} options={props.transitionOptions}
                unmountOnExit onEnter={onEnter} onEntered={onEntered} onExited={onExited}>
                <button ref={scrollElementRef} type="button" className={className} style={props.style} {...otherProps} onClick={onClick}>
                    {IconUtils.getJSXIcon(props.icon, { className: 'p-scrolltop-icon' }, { props })}
                    <Ripple />
                </button>
            </CSSTransition>
            {isTargetParent && <span ref={helperRef} className="p-scrolltop-helper"></span>}
        </>
    )
}));

ScrollTop.displayName = 'ScrollTop';
ScrollTop.defaultProps = {
    __TYPE: 'ScrollTop',
    target: 'window',
    threshold: 400,
    icon: 'pi pi-chevron-up',
    behavior: 'smooth',
    className: null,
    style: null,
    transitionOptions: null,
    onShow: null,
    onHide: null
}
