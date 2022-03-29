import React, { useState, useRef, forwardRef, useImperativeHandle, memo } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { TieredMenuSub } from './TieredMenuSub';
import { CSSTransition } from '../csstransition/CSSTransition';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, classNames, ZIndexUtils } from '../utils/Utils';
import { useOverlayListener, useUnmountEffect } from '../hooks/Hooks';

export const TieredMenu = memo(forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(!props.popup);
    const menuRef = useRef(null)
    const targetRef = useRef(null);

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
    }

    useUnmountEffect(() => {
        ZIndexUtils.clear(menuRef.current);
    });

    useImperativeHandle(ref, () => ({
        toggle,
        show,
        hide
    }));

    const createElement = () => {
        const className = classNames('p-tieredmenu p-component', {
            'p-tieredmenu-overlay': props.popup
        }, props.className);

        return (
            <CSSTransition nodeRef={menuRef} classNames="p-connected-overlay" in={visibleState} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={onEnter} onEntered={onEntered} onExit={onExit} onExited={onExited}>
                <div ref={menuRef} id={props.id} className={className} style={props.style} onClick={onPanelClick}>
                    <TieredMenuSub model={props.model} root popup={props.popup} />
                </div>
            </CSSTransition>
        )
    }

    const element = createElement();

    return props.popup ? <Portal element={element} appendTo={props.appendTo} /> : element;
}));

TieredMenu.defaultProps = {
    __TYPE: 'TieredMenu',
    id: null,
    model: null,
    popup: false,
    style: null,
    className: null,
    autoZIndex: true,
    baseZIndex: 0,
    appendTo: null,
    transitionOptions: null,
    onShow: null,
    onHide: null
}

TieredMenu.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    model: PropTypes.array,
    popup: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    autoZIndex: PropTypes.bool,
    baseZIndex: PropTypes.number,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    transitionOptions: PropTypes.object,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
