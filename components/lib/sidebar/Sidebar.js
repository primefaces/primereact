import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { TimesIcon } from '../icons/times';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { SidebarBase } from './SidebarBase';

export const Sidebar = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = SidebarBase.getProps(inProps, context);

    const [maskVisibleState, setMaskVisibleState] = React.useState(false);
    const [visibleState, setVisibleState] = React.useState(false);
    const { ptm } = SidebarBase.setMetaData({
        props,
        state: {
            containerVisible: maskVisibleState
        }
    });
    const sidebarRef = React.useRef(null);
    const maskRef = React.useRef(null);
    const closeIconRef = React.useRef(null);

    const [bindDocumentEscapeListener, unbindDocumentEscapeListener] = useEventListener({
        type: 'keydown',
        listener: (event) => {
            if (event.key === 'Escape') {
                if (ZIndexUtils.get(maskRef.current) === ZIndexUtils.getCurrent('modal', (context && context.autoZIndex) || PrimeReact.autoZIndex)) {
                    onClose(event);
                }
            }
        }
    });

    const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            if (event.button !== 0) {
                // ignore anything other than left click
                return;
            }

            if (isOutsideClicked(event)) {
                onClose(event);
            }
        }
    });

    const isOutsideClicked = (event) => {
        return sidebarRef && sidebarRef.current && !sidebarRef.current.contains(event.target);
    };

    const getPositionClass = () => {
        const positions = ['left', 'right', 'top', 'bottom'];
        const pos = positions.find((item) => item === props.position);

        return pos ? `p-sidebar-${pos}` : '';
    };

    const focus = () => {
        const activeElement = document.activeElement;
        const isActiveElementInDialog = activeElement && sidebarRef && sidebarRef.current.contains(activeElement);

        if (!isActiveElementInDialog && props.showCloseIcon) {
            closeIconRef.current.focus();
        }
    };

    const onMaskClick = (event) => {
        if (props.dismissable && props.modal && maskRef.current === event.target) {
            onClose(event);
        }
    };

    const onClose = (event) => {
        props.onHide();
        event.preventDefault();
    };

    const onEntered = () => {
        props.onShow && props.onShow();
        focus();
        enableDocumentSettings();
    };

    const onExiting = () => {
        if (props.modal) {
            DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
        }
    };

    const onExited = () => {
        ZIndexUtils.clear(maskRef.current);
        setMaskVisibleState(false);
        disableDocumentSettings();
    };

    const enableDocumentSettings = () => {
        if (props.closeOnEscape) {
            bindDocumentEscapeListener();
        }

        if (props.dismissable && !props.modal) {
            bindDocumentClickListener();
        }

        if (props.blockScroll) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    };

    const disableDocumentSettings = () => {
        unbindDocumentEscapeListener();
        unbindDocumentClickListener();

        if (props.blockScroll) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    };

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => sidebarRef.current,
        gteMask: () => maskRef.current,
        getCloseIcon: () => closeIconRef.current
    }));

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
            ZIndexUtils.set('modal', maskRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['modal']) || PrimeReact.zIndex['modal']);
            setVisibleState(true);
        }
    }, [maskVisibleState]);

    useUpdateEffect(() => {
        // #3811 if dismissible state is toggled while open we must unregister and re-regisetr
        if (visibleState) {
            unbindDocumentClickListener();

            if (props.dismissable && !props.modal) {
                bindDocumentClickListener();
            }
        }
    }, [props.dismissable, props.modal, visibleState]);

    useUnmountEffect(() => {
        disableDocumentSettings();
        maskRef.current && ZIndexUtils.clear(maskRef.current);
    });

    const createCloseIcon = () => {
        const iconClassName = 'p-sidebar-close-icon';
        const closeButtonProps = mergeProps(
            {
                type: 'button',
                ref: closeIconRef,
                className: 'p-sidebar-close p-sidebar-icon p-link',
                onClick: (e) => onClose(e),
                'aria-label': ariaLabel
            },
            ptm('closeButton')
        );

        const closeIconProps = mergeProps(
            {
                className: iconClassName
            },
            ptm('closeIcon')
        );

        const icon = props.closeIcon || <TimesIcon {...closeIconProps} />;
        const closeIcon = IconUtils.getJSXIcon(icon, { ...closeIconProps }, { props });
        const ariaLabel = props.ariaCloseLabel || localeOption('close');

        if (props.showCloseIcon) {
            return (
                <button {...closeButtonProps}>
                    {closeIcon}
                    <Ripple />
                </button>
            );
        }

        return null;
    };

    const createIcons = () => {
        return props.icons ? ObjectUtils.getJSXElement(props.icons, props) : null;
    };

    const createElement = () => {
        const className = classNames('p-sidebar p-component', props.className, {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        });
        const maskClassName = classNames(
            'p-sidebar-mask',
            {
                'p-component-overlay p-component-overlay-enter': props.modal,
                'p-sidebar-mask-scrollblocker': props.blockScroll,
                'p-sidebar-visible': maskVisibleState,
                'p-sidebar-full': props.fullScreen
            },
            getPositionClass(),
            props.maskClassName
        );

        const closeIcon = createCloseIcon();
        const icons = createIcons();

        const transitionTimeout = {
            enter: props.fullScreen ? 150 : 300,
            exit: props.fullScreen ? 150 : 300
        };

        const maskProps = mergeProps(
            {
                ref: maskRef,
                style: props.maskStyle,
                className: maskClassName,
                onMouseDown: (e) => onMaskClick(e)
            },
            ptm('mask')
        );

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: sidebarRef,
                className,
                style: props.style,
                role: 'complementary'
            },
            SidebarBase.getOtherProps(props),
            ptm('root')
        );

        const headerProps = mergeProps(
            {
                className: 'p-sidebar-header'
            },
            ptm('header')
        );

        const contentProps = mergeProps(
            {
                className: 'p-sidebar-content'
            },
            ptm('content')
        );

        return (
            <div {...maskProps}>
                <CSSTransition nodeRef={sidebarRef} classNames="p-sidebar" in={visibleState} timeout={transitionTimeout} options={props.transitionOptions} unmountOnExit onEntered={onEntered} onExiting={onExiting} onExited={onExited}>
                    <div {...rootProps}>
                        <div {...headerProps}>
                            {icons}
                            {closeIcon}
                        </div>
                        <div {...contentProps}>{props.children}</div>
                    </div>
                </CSSTransition>
            </div>
        );
    };

    const createSidebar = () => {
        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} visible />;
    };

    return maskVisibleState && createSidebar();
});

Sidebar.displayName = 'Sidebar';
