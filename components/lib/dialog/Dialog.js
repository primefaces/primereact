import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { TimesIcon } from '../icons/times';
import { WindowMaximizeIcon } from '../icons/windowmaximize';
import { WindowMinimizeIcon } from '../icons/windowminimize';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { DialogBase } from './DialogBase';

export const Dialog = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = DialogBase.getProps(inProps, context);

    const uniqueId = props.id ? props.id : UniqueComponentId();
    const [idState, setIdState] = React.useState(uniqueId);
    const [maskVisibleState, setMaskVisibleState] = React.useState(false);
    const [visibleState, setVisibleState] = React.useState(false);
    const [maximizedState, setMaximizedState] = React.useState(props.maximized);
    const dialogRef = React.useRef(null);
    const maskRef = React.useRef(null);
    const pointerRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const headerRef = React.useRef(null);
    const footerRef = React.useRef(null);
    const closeRef = React.useRef(null);
    const dragging = React.useRef(false);
    const resizing = React.useRef(false);
    const lastPageX = React.useRef(null);
    const lastPageY = React.useRef(null);
    const styleElement = React.useRef(null);
    const attributeSelector = React.useRef(uniqueId);
    const maximized = props.onMaximize ? props.maximized : maximizedState;

    const { ptm } = DialogBase.setMetaData({
        props,
        state: {
            id: idState,
            maximized: maximized,
            containerVisible: maskVisibleState
        }
    });

    const [bindDocumentKeyDownListener, unbindDocumentKeyDownListener] = useEventListener({ type: 'keydown', listener: (event) => onKeyDown(event) });
    const [bindDocumentResizeListener, unbindDocumentResizeListener] = useEventListener({ type: 'mousemove', target: () => window.document, listener: (event) => onResize(event) });
    const [bindDocumentResizeEndListener, unbindDocumentResizEndListener] = useEventListener({ type: 'mouseup', target: () => window.document, listener: (event) => onResizeEnd(event) });
    const [bindDocumentDragListener, unbindDocumentDragListener] = useEventListener({ type: 'mousemove', target: () => window.document, listener: (event) => onDrag(event) });
    const [bindDocumentDragEndListener, unbindDocumentDragEndListener] = useEventListener({ type: 'mouseup', target: () => window.document, listener: (event) => onDragEnd(event) });

    const onClose = (event) => {
        props.onHide();
        event.preventDefault();
    };

    const focus = () => {
        let activeElement = document.activeElement;
        let isActiveElementInDialog = activeElement && dialogRef.current && dialogRef.current.contains(activeElement);

        if (!isActiveElementInDialog && props.closable && props.showHeader) {
            closeRef.current.focus();
        }
    };

    const onDialogPointerDown = (event) => {
        pointerRef.current = event.target;
        props.onPointerDown && props.onPointerDown(event);
    };

    const onMaskPointerUp = (event) => {
        if (props.dismissableMask && props.modal && maskRef.current === event.target && !pointerRef.current) {
            onClose(event);
        }

        props.onMaskClick && props.onMaskClick(event);
        pointerRef.current = null;
    };

    const toggleMaximize = (event) => {
        if (props.onMaximize) {
            props.onMaximize({
                originalEvent: event,
                maximized: !maximized
            });
        } else {
            setMaximizedState((prevMaximized) => !prevMaximized);
        }

        event.preventDefault();
    };

    const onKeyDown = (event) => {
        const currentTarget = event.currentTarget;

        if (!currentTarget || !currentTarget.primeDialogParams) {
            return;
        }

        const params = currentTarget.primeDialogParams;
        const paramLength = params.length;
        const dialogId = params[paramLength - 1] ? params[paramLength - 1].id : undefined;

        if (dialogId !== idState) {
            return;
        }

        const dialog = document.getElementById(dialogId);

        if (props.closable && props.closeOnEscape && event.key === 'Escape') {
            onClose(event);
            event.stopImmediatePropagation();
            params.splice(paramLength - 1, 1);
        } else if (event.key === 'Tab') {
            event.preventDefault();
            const focusableElements = DomHandler.getFocusableElements(dialog);

            if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                    focusableElements[0].focus();
                } else {
                    const focusedIndex = focusableElements.indexOf(document.activeElement);

                    if (event.shiftKey) {
                        if (focusedIndex === -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();
                        else focusableElements[focusedIndex - 1].focus();
                    } else {
                        if (focusedIndex === -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();
                        else focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        }
    };

    const onDragStart = (event) => {
        if (DomHandler.hasClass(event.target, 'p-dialog-header-icon') || DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
            return;
        }

        if (props.draggable) {
            dragging.current = true;
            lastPageX.current = event.pageX;
            lastPageY.current = event.pageY;
            dialogRef.current.style.margin = '0';
            DomHandler.addClass(document.body, 'p-unselectable-text');

            props.onDragStart && props.onDragStart(event);
        }
    };

    const onDrag = (event) => {
        if (dragging.current) {
            const width = DomHandler.getOuterWidth(dialogRef.current);
            const height = DomHandler.getOuterHeight(dialogRef.current);
            const deltaX = event.pageX - lastPageX.current;
            const deltaY = event.pageY - lastPageY.current;
            const offset = dialogRef.current.getBoundingClientRect();
            const leftPos = offset.left + deltaX;
            const topPos = offset.top + deltaY;
            const viewport = DomHandler.getViewport();
            const computedStyle = getComputedStyle(dialogRef.current);
            const leftMargin = parseFloat(computedStyle.marginLeft);
            const topMargin = parseFloat(computedStyle.marginTop);

            dialogRef.current.style.position = 'fixed';

            if (props.keepInViewport) {
                if (leftPos >= props.minX && leftPos + width < viewport.width) {
                    lastPageX.current = event.pageX;
                    dialogRef.current.style.left = leftPos - leftMargin + 'px';
                }

                if (topPos >= props.minY && topPos + height < viewport.height) {
                    lastPageY.current = event.pageY;
                    dialogRef.current.style.top = topPos - topMargin + 'px';
                }
            } else {
                lastPageX.current = event.pageX;
                dialogRef.current.style.left = leftPos - leftMargin + 'px';
                lastPageY.current = event.pageY;
                dialogRef.current.style.top = topPos - topMargin + 'px';
            }

            props.onDrag && props.onDrag(event);
        }
    };

    const onDragEnd = (event) => {
        if (dragging.current) {
            dragging.current = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');

            props.onDragEnd && props.onDragEnd(event);
        }
    };

    const onResizeStart = (event) => {
        if (props.resizable) {
            resizing.current = true;
            lastPageX.current = event.pageX;
            lastPageY.current = event.pageY;
            DomHandler.addClass(document.body, 'p-unselectable-text');

            props.onResizeStart && props.onResizeStart(event);
        }
    };

    const convertToPx = (value, property, viewport) => {
        !viewport && (viewport = DomHandler.getViewport());

        const val = parseInt(value);

        if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(value)) {
            return val * (viewport[property] / 100);
        }

        return val;
    };

    const onResize = (event) => {
        if (resizing.current) {
            const deltaX = event.pageX - lastPageX.current;
            const deltaY = event.pageY - lastPageY.current;
            const width = DomHandler.getOuterWidth(dialogRef.current);
            const height = DomHandler.getOuterHeight(dialogRef.current);
            const offset = dialogRef.current.getBoundingClientRect();
            const viewport = DomHandler.getViewport();

            const hasBeenDragged = !parseInt(dialogRef.current.style.top) || !parseInt(dialogRef.current.style.left);
            const minWidth = convertToPx(dialogRef.current.style.minWidth, 'width', viewport);
            const minHeight = convertToPx(dialogRef.current.style.minHeight, 'height', viewport);
            let newWidth = width + deltaX;
            let newHeight = height + deltaY;

            if (hasBeenDragged) {
                newWidth += deltaX;
                newHeight += deltaY;
            }

            if ((!minWidth || newWidth > minWidth) && offset.left + newWidth < viewport.width) {
                dialogRef.current.style.width = newWidth + 'px';
            }

            if ((!minHeight || newHeight > minHeight) && offset.top + newHeight < viewport.height) {
                dialogRef.current.style.height = newHeight + 'px';
            }

            lastPageX.current = event.pageX;
            lastPageY.current = event.pageY;

            props.onResize && props.onResize(event);
        }
    };

    const onResizeEnd = (event) => {
        if (resizing.current) {
            resizing.current = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');

            props.onResizeEnd && props.onResizeEnd(event);
        }
    };

    const resetPosition = () => {
        dialogRef.current.style.position = '';
        dialogRef.current.style.left = '';
        dialogRef.current.style.top = '';
        dialogRef.current.style.margin = '';
    };

    const getPositionClass = () => {
        const positions = ['center', 'left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
        const pos = positions.find((item) => item === props.position || item.replace('-', '') === props.position);

        return pos ? `p-dialog-${pos}` : '';
    };

    const onEnter = () => {
        dialogRef.current.setAttribute(attributeSelector.current, '');
    };

    const onEntered = () => {
        props.onShow && props.onShow();

        if (props.focusOnShow) {
            focus();
        }

        enableDocumentSettings();
    };

    const onExiting = () => {
        if (props.modal) {
            DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
        }

        if (props.blockScroll) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    };

    const onExited = () => {
        dragging.current = false;
        ZIndexUtils.clear(maskRef.current);
        setMaskVisibleState(false);
        disableDocumentSettings();
    };

    const enableDocumentSettings = () => {
        bindGlobalListeners();

        if (props.blockScroll || (props.maximizable && maximized)) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    };

    const disableDocumentSettings = () => {
        unbindGlobalListeners();

        const isMaximized = props.maximizable && maximized;

        if (props.modal) {
            const hasBlockScroll = document.primeDialogParams && document.primeDialogParams.some((param) => param.hasBlockScroll);

            if (hasBlockScroll || isMaximized) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        } else if (props.blockScroll || isMaximized) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    };

    const bindGlobalListeners = () => {
        if (props.draggable) {
            bindDocumentDragListener();
            bindDocumentDragEndListener();
        }

        if (props.resizable) {
            bindDocumentResizeListener();
            bindDocumentResizeEndListener();
        }

        bindDocumentKeyDownListener();
        const newParam = { id: idState, hasBlockScroll: props.blockScroll };

        document.primeDialogParams = document.primeDialogParams ? [...document.primeDialogParams, newParam] : [newParam];
    };

    const unbindGlobalListeners = () => {
        unbindDocumentDragListener();
        unbindDocumentDragEndListener();
        unbindDocumentResizeListener();
        unbindDocumentResizEndListener();
        unbindDocumentKeyDownListener();

        document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter((param) => param.id !== idState);
    };

    const createStyle = () => {
        styleElement.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce);

        let innerHTML = '';

        for (let breakpoint in props.breakpoints) {
            innerHTML += `
                @media screen and (max-width: ${breakpoint}) {
                    .p-dialog[${attributeSelector.current}] {
                        width: ${props.breakpoints[breakpoint]} !important;
                    }
                }
            `;
        }

        styleElement.current.innerHTML = innerHTML;
    };

    const changeScrollOnMaximizable = () => {
        if (!props.blockScroll) {
            let funcName = maximized && visibleState ? 'addClass' : 'removeClass';

            DomHandler[funcName](document.body, 'p-overflow-hidden');
        }
    };

    useMountEffect(() => {
        if (props.visible) {
            setMaskVisibleState(true);
        }

        if (props.breakpoints) {
            createStyle();
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
        changeScrollOnMaximizable();
    }, [props.maximized, maximizedState, visibleState]);

    useUnmountEffect(() => {
        disableDocumentSettings();
        DomHandler.removeInlineStyle(styleElement.current);
        ZIndexUtils.clear(maskRef.current);
    });

    React.useImperativeHandle(ref, () => ({
        props,
        resetPosition,
        getElement: () => dialogRef.current,
        getMask: () => maskRef.current,
        getContent: () => contentRef.current,
        getHeader: () => headerRef.current,
        getFooter: () => footerRef.current,
        getCloseButton: () => closeRef.current
    }));

    const createCloseIcon = () => {
        if (props.closable) {
            const ariaLabel = props.ariaCloseIconLabel || localeOption('close');

            const closeButtonIconProps = mergeProps(
                {
                    className: 'p-dialog-header-close-icon',
                    'aria-hidden': true
                },
                ptm('closeButtonIcon')
            );

            const icon = props.closeIcon || <TimesIcon {...closeButtonIconProps} />;
            const headerCloseIcon = IconUtils.getJSXIcon(icon, { ...closeButtonIconProps }, { props });

            const closeButtonProps = mergeProps(
                {
                    ref: closeRef,
                    type: 'button',
                    className: 'p-dialog-header-icon p-dialog-header-close p-link',
                    'aria-label': ariaLabel,
                    onClick: onClose
                },
                ptm('closeButton')
            );

            return (
                <button {...closeButtonProps}>
                    {headerCloseIcon}
                    <Ripple />
                </button>
            );
        }

        return null;
    };

    const createMaximizeIcon = () => {
        let icon;
        const iconClassName = 'p-dialog-header-maximize-icon';
        const maximizableIconProps = mergeProps(
            {
                className: iconClassName
            },
            ptm('maximizableIcon')
        );

        if (!maximized) {
            icon = props.maximizeIcon || <WindowMaximizeIcon {...maximizableIconProps} />;
        } else {
            icon = props.minimizeIcon || <WindowMinimizeIcon {...maximizableIconProps} />;
        }

        const toggleIcon = IconUtils.getJSXIcon(icon, maximizableIconProps, { props });

        if (props.maximizable) {
            const maximizableButtonProps = mergeProps(
                {
                    type: 'button',
                    className: 'p-dialog-header-icon p-dialog-header-maximize p-link',
                    onClick: toggleMaximize
                },
                ptm('maximizableButton')
            );

            return (
                <button {...maximizableButtonProps}>
                    {toggleIcon}
                    <Ripple />
                </button>
            );
        }

        return null;
    };

    const createHeader = () => {
        if (props.showHeader) {
            const closeIcon = createCloseIcon();
            const maximizeIcon = createMaximizeIcon();
            const icons = ObjectUtils.getJSXElement(props.icons, props);
            const header = ObjectUtils.getJSXElement(props.header, props);
            const headerId = idState + '_header';
            const headerClassName = classNames('p-dialog-header', props.headerClassName);

            const headerProps = mergeProps(
                {
                    ref: headerRef,
                    style: props.headerStyle,
                    className: headerClassName,
                    onMouseDown: onDragStart
                },
                ptm('header')
            );

            const headerTitleProps = mergeProps(
                {
                    id: headerId,
                    className: 'p-dialog-title'
                },
                ptm('headerTitle')
            );

            const headerIconsProps = mergeProps(
                {
                    className: 'p-dialog-header-icons'
                },
                ptm('headerIcons')
            );

            return (
                <div {...headerProps}>
                    <div {...headerTitleProps}>{header}</div>
                    <div {...headerIconsProps}>
                        {icons}
                        {maximizeIcon}
                        {closeIcon}
                    </div>
                </div>
            );
        }

        return null;
    };

    const createContent = () => {
        const className = classNames('p-dialog-content', props.contentClassName);
        const contentId = idState + '_content';

        const contentProps = mergeProps(
            {
                id: contentId,
                ref: contentRef,
                style: props.contentStyle,
                className: className
            },
            ptm('content')
        );

        return <div {...contentProps}>{props.children}</div>;
    };

    const createFooter = () => {
        const footer = ObjectUtils.getJSXElement(props.footer, props);

        const footerProps = mergeProps(
            {
                ref: footerRef,
                className: 'p-dialog-footer'
            },
            ptm('footer')
        );

        return footer && <div {...footerProps}>{footer}</div>;
    };

    const createResizer = () => {
        if (props.resizable) {
            return <span className="p-resizable-handle" style={{ zIndex: 90 }} onMouseDown={onResizeStart}></span>;
        }

        return null;
    };

    const createElement = () => {
        const className = classNames('p-dialog p-component', props.className, {
            'p-dialog-rtl': props.rtl,
            'p-dialog-maximized': maximized,
            'p-dialog-default': !maximized,
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        });
        const maskClassName = classNames(
            'p-dialog-mask',
            getPositionClass(),
            {
                'p-component-overlay p-component-overlay-enter': props.modal,
                'p-dialog-visible': maskVisibleState,
                'p-dialog-draggable': props.draggable,
                'p-dialog-resizable': props.resizable
            },
            props.maskClassName
        );
        const header = createHeader();
        const content = createContent();
        const footer = createFooter();
        const resizer = createResizer();

        const headerId = idState + '_header';
        const contentId = idState + '_content';
        const transitionTimeout = {
            enter: props.position === 'center' ? 150 : 300,
            exit: props.position === 'center' ? 150 : 300
        };

        const maskProps = mergeProps(
            {
                ref: maskRef,
                style: props.maskStyle,
                className: maskClassName,
                onPointerUp: onMaskPointerUp
            },
            ptm('mask')
        );

        const rootProps = mergeProps(
            {
                ref: dialogRef,
                id: idState,
                className: className,
                style: props.style,
                onClick: props.onClick,
                role: 'dialog',
                'aria-labelledby': headerId,
                'aria-describedby': contentId,
                'aria-modal': props.modal,
                onPointerDown: onDialogPointerDown
            },
            DialogBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...maskProps}>
                <CSSTransition nodeRef={dialogRef} classNames="p-dialog" timeout={transitionTimeout} in={visibleState} options={props.transitionOptions} unmountOnExit onEnter={onEnter} onEntered={onEntered} onExiting={onExiting} onExited={onExited}>
                    <div {...rootProps}>
                        {header}
                        {content}
                        {footer}
                        {resizer}
                    </div>
                </CSSTransition>
            </div>
        );
    };

    const createDialog = () => {
        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} visible />;
    };

    return maskVisibleState && createDialog();
});

Dialog.displayName = 'Dialog';
