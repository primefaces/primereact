import React, { useRef, forwardRef, useState, useImperativeHandle, memo } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { ContextMenuSub } from './ContextMenuSub';
import { Portal } from '../portal/Portal';
import { CSSTransition } from '../csstransition/CSSTransition';
import { DomHandler, ZIndexUtils, classNames } from '../utils/Utils';
import { useMountEffect, useUnmountEffect, useUpdateEffect, useEventListener, useResizeListener } from '../hooks/Hooks';

export const ContextMenu = memo(forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(false);
    const [reshowState, setReshowState] = useState(false);
    const [resetMenuState, setResetMenuState] = useState(false);
    const menuRef = useRef(null);
    const currentEvent = useRef(null);

    const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
        type: 'click', listener: event => {
            if (isOutsideClicked(event) && event.button !== 2) {
                hide(event);
                setResetMenuState(true);
            }
        }
    });

    const [bindDocumentContextMenuListener, ] = useEventListener({
        type: 'contextmenu', listener: event => {
            show(event);
        }
    });

    const [bindDocumentResizeListener, unbindDocumentResizeListener] = useResizeListener({
        listener: event => {
            if (visibleState && !DomHandler.isTouchDevice()) {
                hide(event);
            }
        }
    });

    const onMenuClick = () => {
        setResetMenuState(false);
    }

    const onMenuMouseEnter = () => {
        setResetMenuState(false);
    }

    const show = (event) => {
        event.stopPropagation();
        event.preventDefault();

        currentEvent.current = event;

        if (visibleState) {
            setReshowState(true);
        }
        else {
            setVisibleState(true);
            props.onShow && props.onShow(currentEvent.current);
        }
    }

    const hide = (event) => {
        currentEvent.current = event;

        setVisibleState(false);
        setReshowState(false);
        props.onHide && props.onHide(currentEvent.current);
    }

    const onEnter = () => {
        if (props.autoZIndex) {
            ZIndexUtils.set('menu', menuRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['menu']);
        }

        position(currentEvent.current);
    }

    const onEntered = () => {
        bindDocumentListeners();
    }

    const onExit = () => {
        unbindDocumentListeners();
        ZIndexUtils.clear(menuRef.current);
    }

    const onExited = () => {
        ZIndexUtils.clear(menuRef.current);
    }

    const position = (event) => {
        if (event) {
            let left = event.pageX + 1;
            let top = event.pageY + 1;
            let width = menuRef.current.offsetParent ? menuRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(menuRef.current);
            let height = menuRef.current.offsetParent ? menuRef.current.offsetHeight : DomHandler.getHiddenElementOuterHeight(menuRef.current);
            let viewport = DomHandler.getViewport();

            //flip
            if (left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }

            //flip
            if (top + height - document.body.scrollTop > viewport.height) {
                top -= height;
            }

            //fit
            if (left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }

            //fit
            if (top < document.body.scrollTop) {
                top = document.body.scrollTop;
            }

            menuRef.current.style.left = left + 'px';
            menuRef.current.style.top = top + 'px';
        }
    }

    const onLeafClick = (event) => {
        setResetMenuState(true);
        hide(event);

        event.stopPropagation();
    }

    const isOutsideClicked = (event) => {
        return menuRef && menuRef.current && !(menuRef.current.isSameNode(event.target) || menuRef.current.contains(event.target));
    }

    const bindDocumentListeners = () => {
        bindDocumentResizeListener();
        bindDocumentClickListener();
    }

    const unbindDocumentListeners = () => {
        unbindDocumentResizeListener();
        unbindDocumentClickListener();
    }

    useMountEffect(() => {
        if (props.global) {
            bindDocumentContextMenuListener();
        }
    });

    useUpdateEffect(() => {
        if (visibleState) {
            setVisibleState(false);
            setReshowState(false);
            setResetMenuState(true);
        }
        else if (!reshowState && !visibleState && resetMenuState) {
            show(currentEvent.current);
        }
    }, [reshowState]);

    useUnmountEffect(() => {
        ZIndexUtils.clear(menuRef.current);
    });

    useImperativeHandle(ref, () => ({
        show,
        hide
    }));

    const createContextMenu = () => {
        const className = classNames('p-contextmenu p-component', props.className);

        return (
            <CSSTransition nodeRef={menuRef} classNames="p-contextmenu" in={visibleState} timeout={{ enter: 250, exit: 0 }} options={props.transitionOptions}
                unmountOnExit onEnter={onEnter} onEntered={onEntered} onExit={onExit} onExited={onExited}>
                <div ref={menuRef} id={props.id} className={className} style={props.style} onClick={onMenuClick} onMouseEnter={onMenuMouseEnter}>
                    <ContextMenuSub model={props.model} root resetMenu={resetMenuState} onLeafClick={onLeafClick} />
                </div>
            </CSSTransition>
        )
    }

    const element = createContextMenu();

    return <Portal element={element} appendTo={props.appendTo} />
}));

ContextMenu.defaultProps = {
    __TYPE: 'ContextMenu',
    id: null,
    model: null,
    style: null,
    className: null,
    global: false,
    autoZIndex: true,
    baseZIndex: 0,
    appendTo: null,
    transitionOptions: null,
    onShow: null,
    onHide: null
}

ContextMenu.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    model: PropTypes.array,
    style: PropTypes.object,
    className: PropTypes.string,
    global: PropTypes.bool,
    autoZIndex: PropTypes.bool,
    baseZIndex: PropTypes.number,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    transitionOptions: PropTypes.object,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
