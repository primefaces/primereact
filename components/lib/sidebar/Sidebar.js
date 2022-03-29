import React, { useState, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { Portal } from '../portal/Portal';
import { CSSTransition } from '../csstransition/CSSTransition';
import { DomHandler, ObjectUtils, ZIndexUtils, classNames } from '../utils/Utils';
import { useMountEffect, useUpdateEffect, useUnmountEffect, useEventListener } from '../hooks/Hooks';

export const Sidebar = forwardRef((props, ref) => {
    const [maskVisibleState, setMaskVisibleState] = useState(false);
    const [visibleState, setVisibleState] = useState(false);
    const sidebarRef = useRef(null);
    const maskRef = useRef(null);
    const closeIconRef = useRef(null);

    const [bindDocumentEscapeListener, unbindDocumentEscapeListener] = useEventListener({
        type: 'keydown', listener: event => {
            if (event.which === 27) {
                if (ZIndexUtils.get(maskRef.current) === ZIndexUtils.getCurrent('modal', PrimeReact.autoZIndex)) {
                    onClose(event);
                }
            }
        }
    });

    const getPositionClass = () => {
        const positions = ['left', 'right', 'top', 'bottom'];
        const pos = positions.find(item => item === props.position);

        return pos ? `p-sidebar-${pos}` : '';
    }

    const focus = () => {
        const activeElement = document.activeElement;
        const isActiveElementInDialog = activeElement && sidebarRef && sidebarRef.current.contains(activeElement);
        if (!isActiveElementInDialog && props.showCloseIcon) {
            closeIconRef.current.focus();
        }
    }

    const onMaskClick = (event) => {
        if (props.dismissable && props.modal && maskRef.current === event.target) {
            onClose(event);
        }
    }

    const onClose = (event) => {
        props.onHide();
        event.preventDefault();
    }

    const onEntered = () => {
        props.onShow && props.onShow();
        focus();
        enableDocumentSettings();
    }

    const onExiting = () => {
        if (props.modal) {
            DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
        }
    }

    const onExited = () => {
        ZIndexUtils.clear(maskRef.current);
        setMaskVisibleState(false);
        disableDocumentSettings();
    }

    const enableDocumentSettings = () => {
        if (props.closeOnEscape) {
            bindDocumentEscapeListener();
        }

        if (props.blockScroll) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }

    const disableDocumentSettings = () => {
        unbindDocumentEscapeListener();

        if (props.blockScroll) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }

    useMountEffect(() => {
        if (props.visible) {
            setMaskVisibleState(true);
        }
    });

    useUpdateEffect(() => {
        if (props.visible && !maskVisibleState) {
            setMaskVisibleState(true);
        }

        if (props.visible !== visibleState && maskVisibleState) {
            setVisibleState(props.visible);
        }
    });

    useUpdateEffect(() => {
        if (maskVisibleState) {
            ZIndexUtils.set('modal', maskRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['modal']);
            setVisibleState(true);
        }
    }, [maskVisibleState]);

    useUnmountEffect(() => {
        disableDocumentSettings();
        maskRef.current && ZIndexUtils.clear(maskRef.current);
    });

    const createCloseIcon = () => {
        if (props.showCloseIcon) {
            return (
                <button type="button" ref={closeIconRef} className="p-sidebar-close p-sidebar-icon p-link" onClick={onClose} aria-label={props.ariaCloseLabel}>
                    <span className="p-sidebar-close-icon pi pi-times" />
                    <Ripple />
                </button>
            )
        }

        return null;
    }

    const createIcons = () => {
        return props.icons ? ObjectUtils.getJSXElement(props.icons, props) : null;
    }

    const createElement = () => {
        const className = classNames('p-sidebar p-component', props.className);
        const maskClassName = classNames('p-sidebar-mask', {
            'p-component-overlay p-component-overlay-enter': props.modal,
            'p-sidebar-mask-scrollblocker': props.blockScroll,
            'p-sidebar-visible': maskVisibleState,
            'p-sidebar-full': props.fullScreen
        }, getPositionClass(), props.maskClassName);

        const closeIcon = createCloseIcon();
        const icons = createIcons();

        const transitionTimeout = {
            enter: props.fullScreen ? 150 : 300,
            exit: props.fullScreen ? 150 : 300
        };

        return (
            <div ref={maskRef} style={props.maskStyle} className={maskClassName} onClick={onMaskClick}>
                <CSSTransition nodeRef={sidebarRef} classNames="p-sidebar" in={visibleState} timeout={transitionTimeout} options={props.transitionOptions}
                    unmountOnExit onEntered={onEntered} onExiting={onExiting} onExited={onExited}>
                    <div ref={sidebarRef} id={props.id} className={className} style={props.style} role="complementary">
                        <div className="p-sidebar-header">
                            {icons}
                            {closeIcon}
                        </div>
                        <div className="p-sidebar-content">
                            {props.children}
                        </div>
                    </div>
                </CSSTransition>
            </div>
        )
    }

    const createSidebar = () => {
        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} visible />;
    }

    return maskVisibleState && createSidebar();
});

Sidebar.defaultProps = {
    __TYPE: 'Sidebar',
    id: null,
    style: null,
    className: null,
    maskStyle: null,
    maskClassName: null,
    visible: false,
    position: 'left',
    fullScreen: false,
    blockScroll: false,
    baseZIndex: 0,
    dismissable: true,
    showCloseIcon: true,
    ariaCloseLabel: 'close',
    closeOnEscape: true,
    icons: null,
    modal: true,
    appendTo: null,
    transitionOptions: null,
    onShow: null,
    onHide: null
}

Sidebar.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    maskStyle: PropTypes.object,
    maskClassName: PropTypes.string,
    visible: PropTypes.bool,
    position: PropTypes.string,
    fullScreen: PropTypes.bool,
    blockScroll: PropTypes.bool,
    baseZIndex: PropTypes.number,
    dismissable: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
    ariaCloseLabel: PropTypes.string,
    closeOnEscape: PropTypes.bool,
    icons: PropTypes.any,
    modal: PropTypes.bool,
    appendTo: PropTypes.any,
    transitionOptions: PropTypes.object,
    onShow: PropTypes.func,
    onHide: PropTypes.func.isRequired
}
