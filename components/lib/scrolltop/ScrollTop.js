import React, { forwardRef, memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { CSSTransition } from '../csstransition/CSSTransition';
import { DomHandler, classNames, ZIndexUtils, IconUtils } from '../utils/Utils';
import { useMountEffect, useUnmountEffect, useEventListener } from '../hooks/Hooks';

export const ScrollTop = memo(forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(false);
    const scrollElementRef = useRef(null);
    const helperRef = useRef(null);
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

    const className = classNames('p-scrolltop p-link p-component', {
        'p-scrolltop-sticky': props.target !== 'window'
    }, props.className);

    return (
        <>
            <CSSTransition nodeRef={scrollElementRef} classNames="p-scrolltop" in={visibleState} timeout={{ enter: 150, exit: 150 }} options={props.transitionOptions}
                unmountOnExit onEnter={onEnter} onEntered={onEntered} onExited={onExited}>
                <button ref={scrollElementRef} type="button" className={className} style={props.style} onClick={onClick}>
                    {IconUtils.getJSXIcon(props.icon, { className: 'p-scrolltop-icon' }, { props })}
                    <Ripple />
                </button>
            </CSSTransition>
            {isTargetParent && <span ref={helperRef} className="p-scrolltop-helper"></span>}
        </>
    )
}));

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

ScrollTop.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    target: PropTypes.string,
    threshold: PropTypes.number,
    icon: PropTypes.any,
    behavior: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    transitionOptions: PropTypes.object,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
