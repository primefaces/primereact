import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useEventListener, useGlobalOnEscapeKey, useMergeProps, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { TimesIcon } from '../icons/times';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { SidebarBase } from './SidebarBase';

export const Sidebar = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = SidebarBase.getProps(inProps, context);

    const [maskVisibleState, setMaskVisibleState] = React.useState(false);
    const [visibleState, setVisibleState] = React.useState(false);
    const { ptm, cx, sx, isUnstyled } = SidebarBase.setMetaData({
        props,
        state: {
            containerVisible: maskVisibleState
        }
    });

    useHandleStyle(SidebarBase.css.styles, isUnstyled, { name: 'sidebar' });

    const sidebarRef = React.useRef(null);
    const maskRef = React.useRef(null);
    const closeIconRef = React.useRef(null);
    const sidebarDisplayOrder = useDisplayOrder('sidebar', visibleState);

    useGlobalOnEscapeKey({
        callback: (event) => {
            onClose(event);
        },
        when: visibleState && props.closeOnEscape && sidebarDisplayOrder,
        priority: [ESC_KEY_HANDLING_PRIORITIES.SIDEBAR, sidebarDisplayOrder]
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

    const focus = () => {
        const activeElement = document.activeElement;
        const isActiveElementInDialog = activeElement && sidebarRef && sidebarRef.current.contains(activeElement);

        if (!isActiveElementInDialog && props.showCloseIcon && closeIconRef.current) {
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
            !isUnstyled() && DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
        }
    };

    const onExited = () => {
        ZIndexUtils.clear(maskRef.current);
        setMaskVisibleState(false);
        disableDocumentSettings();
    };

    const enableDocumentSettings = () => {
        if (props.dismissable && !props.modal) {
            bindDocumentClickListener();
        }

        if (props.blockScroll) {
            DomHandler.blockBodyScroll();
        }
    };

    const disableDocumentSettings = () => {
        unbindDocumentClickListener();

        if (props.blockScroll) {
            DomHandler.unblockBodyScroll();
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
        const ariaLabel = props.ariaCloseLabel || localeOption('close');
        const closeButtonProps = mergeProps(
            {
                type: 'button',
                ref: closeIconRef,
                className: cx('closeButton'),
                onClick: (e) => onClose(e),
                'aria-label': ariaLabel
            },
            ptm('closeButton')
        );

        const closeIconProps = mergeProps(
            {
                className: cx('closeIcon')
            },
            ptm('closeIcon')
        );

        const icon = props.closeIcon || <TimesIcon {...closeIconProps} />;
        const closeIcon = IconUtils.getJSXIcon(icon, { ...closeIconProps }, { props });

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

    const createHeader = () => {
        return props.header ? ObjectUtils.getJSXElement(props.header, props) : null;
    };

    const createIcons = () => {
        return props.icons ? ObjectUtils.getJSXElement(props.icons, props) : null;
    };

    const maskProps = mergeProps(
        {
            ref: maskRef,
            style: sx('mask'),
            className: cx('mask', { maskVisibleState }),
            onMouseDown: (e) => onMaskClick(e)
        },
        ptm('mask')
    );

    const rootProps = mergeProps(
        {
            id: props.id,
            className: cx('root', { context }),
            style: props.style,
            role: 'complementary'
        },
        SidebarBase.getOtherProps(props),
        ptm('root')
    );

    const headerProps = mergeProps(
        {
            className: cx('header')
        },
        ptm('header')
    );

    const contentProps = mergeProps(
        {
            className: cx('content')
        },
        ptm('content')
    );

    const iconsProps = mergeProps(
        {
            className: cx('icons')
        },
        ptm('icons')
    );

    const transitionTimeout = {
        enter: props.fullScreen ? 150 : 300,
        exit: props.fullScreen ? 150 : 300
    };

    const transitionProps = mergeProps(
        {
            classNames: cx('transition'),
            in: visibleState,
            timeout: transitionTimeout,
            options: props.transitionOptions,
            unmountOnExit: true,
            onEntered,
            onExiting,
            onExited
        },
        ptm('transition')
    );

    const createTemplateElement = () => {
        const templateElementProps = { closeIconRef, hide: onClose };

        return (
            <div {...maskProps}>
                <CSSTransition nodeRef={sidebarRef} {...transitionProps}>
                    <div ref={sidebarRef} {...rootProps}>
                        {ObjectUtils.getJSXElement(inProps.content, templateElementProps)}
                    </div>
                </CSSTransition>
            </div>
        );
    };

    const createElement = () => {
        const closeIcon = createCloseIcon();
        const icons = createIcons();
        const header = createHeader();

        return (
            <div {...maskProps}>
                <CSSTransition nodeRef={sidebarRef} {...transitionProps}>
                    <div ref={sidebarRef} {...rootProps}>
                        <div {...headerProps}>
                            {header}
                            <div {...iconsProps}>
                                {icons}
                                {closeIcon}
                            </div>
                        </div>
                        <div {...contentProps}>{props.children}</div>
                    </div>
                </CSSTransition>
            </div>
        );
    };

    const createSidebar = () => {
        const element = inProps?.content ? createTemplateElement() : createElement();

        return <Portal element={element} appendTo={props.appendTo} visible />;
    };

    return maskVisibleState && createSidebar();
});

Sidebar.displayName = 'Sidebar';
