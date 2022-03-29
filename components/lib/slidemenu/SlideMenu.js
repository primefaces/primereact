import React, { useState, useRef, useImperativeHandle, forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { SlideMenuSub } from './SlideMenuSub';
import { Portal } from '../portal/Portal';
import { CSSTransition } from '../csstransition/CSSTransition';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, classNames, ZIndexUtils } from '../utils/Utils';
import { useUpdateEffect, useUnmountEffect, useOverlayListener } from '../hooks/Hooks';

export const SlideMenu = memo(forwardRef((props, ref) => {
    const [levelState, setLevelState] = useState(0);
    const [visibleState, setVisibleState] = useState(false);
    const menuRef = useRef(null);
    const targetRef = useRef(null);
    const backward = useRef(null);
    const slideMenuContent = useRef(null);

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: targetRef, overlay: menuRef, listener: (event, { valid }) => {
            valid && hide(event);
        }, when: visibleState
    });

    const onPanelClick = (event) => {
        if (props.popup) {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: targetRef.current
            });
        }
    }

    const navigateForward = () => {
        setLevelState(prevLevel => prevLevel + 1);
    }

    const navigateBack = () => {
        setLevelState(prevLevel => prevLevel - 1);
    }

    const toggle = (event) => {
        if (props.popup) {
            visibleState ? hide(event) : show(event);
        }
    }

    const show = (event) => {
        targetRef.current = event.currentTarget;
        setVisibleState(true);
        props.onShow && props.onShow(event);
    }

    const hide = (event) => {
        targetRef.current = event.currentTarget;
        setVisibleState(false);
        props.onHide && props.onHide(event);
    }

    const onEnter = () => {
        if (props.autoZIndex) {
            ZIndexUtils.set('menu', menuRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['menu']);
        }
        DomHandler.absolutePosition(menuRef.current, targetRef.current);
    }

    const onEntered = () => {
        bindOverlayListener();
    }

    const onExit = () => {
        targetRef.current = null;
        unbindOverlayListener();
    }

    const onExited = () => {
        ZIndexUtils.clear(menuRef.current);
        setLevelState(0);
    }

    useUpdateEffect(() => {
        setLevelState(0);
    }, [props.model])

    useUnmountEffect(() => {
        ZIndexUtils.clear(menuRef.current);
    });

    useImperativeHandle(ref, () => ({
        toggle,
        show,
        hide
    }));

    const createBackward = () => {
        const className = classNames('p-slidemenu-backward', {
            'p-hidden': levelState === 0
        });

        return (
            <div ref={backward} className={className} onClick={navigateBack}>
                <span className="p-slidemenu-backward-icon pi pi-fw pi-chevron-left"></span>
                <span>{props.backLabel}</span>
            </div>
        )
    }

    const createElement = () => {
        const className = classNames('p-slidemenu p-component', {
            'p-slidemenu-overlay': props.popup
        }, props.className);
        const wrapperStyle = { height: props.viewportHeight + 'px' };
        const backward = createBackward();

        return (
            <CSSTransition nodeRef={menuRef} classNames="p-connected-overlay" in={!props.popup || visibleState} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={onEnter} onEntered={onEntered} onExit={onExit} onExited={onExited}>
                <div ref={menuRef} id={props.id} className={className} style={props.style} onClick={onPanelClick}>
                    <div className="p-slidemenu-wrapper" style={wrapperStyle}>
                        <div className="p-slidemenu-content" ref={slideMenuContent}>
                            <SlideMenuSub model={props.model} root index={0} menuWidth={props.menuWidth} effectDuration={props.effectDuration}
                                level={levelState} parentActive={levelState === 0} onForward={navigateForward} />
                        </div>
                        {backward}
                    </div>
                </div>
            </CSSTransition>
        )
    }

    const element = createElement();

    return props.popup ? <Portal element={element} appendTo={props.appendTo} /> : element;
}));

SlideMenu.defaultProps = {
    __TYPE: 'SlideMenu',
    id: null,
    model: null,
    popup: false,
    style: null,
    className: null,
    easing: 'ease-out',
    effectDuration: 250,
    backLabel: 'Back',
    menuWidth: 190,
    viewportHeight: 175,
    autoZIndex: true,
    baseZIndex: 0,
    appendTo: null,
    transitionOptions: null,
    onShow: null,
    onHide: null
}

SlideMenu.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    model: PropTypes.array,
    popup: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    easing: PropTypes.string,
    effectDuration: PropTypes.number,
    backLabel: PropTypes.string,
    menuWidth: PropTypes.number,
    viewportHeight: PropTypes.number,
    autoZIndex: PropTypes.bool,
    baseZIndex: PropTypes.number,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    transitionOptions: PropTypes.object,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
