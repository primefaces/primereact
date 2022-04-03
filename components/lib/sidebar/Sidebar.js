import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';

export const Sidebar = React.forwardRef((props, ref) => {
    const [maskVisibleState, setMaskVisibleState] = React.useState(false);
    const [visibleState, setVisibleState] = React.useState(false);
    const sidebarRef = React.useRef(null);
    const maskRef = React.useRef(null);
    const closeIconRef = React.useRef(null);

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
        const otherProps = ObjectUtils.findDiffKeys(props, Sidebar.defaultProps);
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
            <div ref={maskRef} style={props.maskStyle} className={maskClassName} onMouseDown={onMaskClick}>
                <CSSTransition nodeRef={sidebarRef} classNames="p-sidebar" in={visibleState} timeout={transitionTimeout} options={props.transitionOptions}
                    unmountOnExit onEntered={onEntered} onExiting={onExiting} onExited={onExited}>
                    <div ref={sidebarRef} id={props.id} className={className} style={props.style} {...otherProps} role="complementary">
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

Sidebar.displayName = 'Sidebar';
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
