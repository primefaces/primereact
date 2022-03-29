import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { Portal } from '../portal/Portal';
import { CSSTransition } from '../csstransition/CSSTransition';
import { DomHandler, ObjectUtils, classNames, ZIndexUtils, UniqueComponentId } from '../utils/Utils';
import { useMountEffect, useUnmountEffect, useUpdateEffect, useEventListener } from '../hooks/Hooks';

export const Dialog = forwardRef((props, ref) => {
    const [idState, setIdState] = useState(props.id);
    const [maskVisibleState, setMaskVisibleState] = useState(false);
    const [visibleState, setVisibleState] = useState(false);
    const [maximizedState, setMaximizedState] = useState(props.maximized);
    const dialogRef = useRef(null);
    const maskRef = useRef(null);
    const contentRef = useRef(null);
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const closeRef = useRef(null);
    const dragging = useRef(false);
    const resizing = useRef(false);
    const lastPageX = useRef(null);
    const lastPageY = useRef(null);
    const styleElement = useRef(null);
    const attributeSelector = useRef('');
    const maximized = props.onMaximize ? props.maximized : maximizedState;

    const [bindDocumentKeyDownListener, unbindDocumentKeyDownListener] = useEventListener({ type: 'keydown', listener: (event) => onKeyDown(event) });
    const [bindDocumentResizeListener, unbindDocumentResizeListener] = useEventListener({ type: 'mousemove', target: () => window.document, listener: (event) => onResize(event) });
    const [bindDocumentResizeEndListener, unbindDocumentResizEndListener] = useEventListener({ type: 'mouseup', target: () => window.document, listener: (event) => onResizeEnd(event) });
    const [bindDocumentDragListener, unbindDocumentDragListener] = useEventListener({ type: 'mousemove', target: () => window.document, listener: (event) => onDrag(event) });
    const [bindDocumentDragEndListener, unbindDocumentDragEndListener] = useEventListener({ type: 'mouseup', target: () => window.document, listener: (event) => onDragEnd(event) });

    const onClose = (event) => {
        props.onHide();
        event.preventDefault();
    }

    const focus = () => {
        let activeElement = document.activeElement;
        let isActiveElementInDialog = activeElement && dialogRef.current && dialogRef.current.contains(activeElement);
        if (!isActiveElementInDialog && props.closable && props.showHeader) {
            closeRef.current.focus();
        }
    }

    const onMaskClick = (event) => {
        if (props.dismissableMask && props.modal && maskRef.current === event.target) {
            onClose(event);
        }

        props.onMaskClick && props.onMaskClick(event);
    }

    const toggleMaximize = (event) => {
        if (props.onMaximize) {
            props.onMaximize({
                originalEvent: event,
                maximized: !maximized
            });
        }
        else {
            setMaximizedState((prevMaximized) => !prevMaximized);
        }

        event.preventDefault();
    }

    const onKeyDown = (event) => {
        let currentTarget = event.currentTarget;

        if (currentTarget && currentTarget.primeDialogParams) {
            let params = currentTarget.primeDialogParams;
            let paramLength = params.length;
            let dialogId = params[paramLength - 1] ? params[paramLength - 1].id : undefined;

            if (dialogId === idState && props.closeOnEscape) {
                let dialog = document.getElementById(dialogId);

                if (event.which === 27) {
                    onClose(event);
                    event.stopImmediatePropagation();

                    params.splice(paramLength - 1, 1);
                }
                else if (event.which === 9) {
                    event.preventDefault();
                    let focusableElements = DomHandler.getFocusableElements(dialog);
                    if (focusableElements && focusableElements.length > 0) {
                        if (!document.activeElement) {
                            focusableElements[0].focus();
                        }
                        else {
                            let focusedIndex = focusableElements.indexOf(document.activeElement);
                            if (event.shiftKey) {
                                if (focusedIndex === -1 || focusedIndex === 0)
                                    focusableElements[focusableElements.length - 1].focus();
                                else
                                    focusableElements[focusedIndex - 1].focus();
                            }
                            else {
                                if (focusedIndex === -1 || focusedIndex === (focusableElements.length - 1))
                                    focusableElements[0].focus();
                                else
                                    focusableElements[focusedIndex + 1].focus();
                            }
                        }
                    }
                }
            }
        }
    }

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
    }

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

            dialogRef.current.style.position = 'fixed';

            if (props.keepInViewport) {
                if (leftPos >= props.minX && (leftPos + width) < viewport.width) {
                    lastPageX.current = event.pageX;
                    dialogRef.current.style.left = leftPos + 'px';
                }

                if (topPos >= props.minY && (topPos + height) < viewport.height) {
                    lastPageY.current = event.pageY;
                    dialogRef.current.style.top = topPos + 'px';
                }
            }
            else {
                lastPageX.current = event.pageX;
                dialogRef.current.style.left = leftPos + 'px';
                lastPageY.current = event.pageY;
                dialogRef.current.style.top = topPos + 'px';
            }

            props.onDrag && props.onDrag(event);
        }
    }

    const onDragEnd = (event) => {
        if (dragging.current) {
            dragging.current = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');

            props.onDragEnd && props.onDragEnd(event);
        }
    }

    const onResizeStart = (event) => {
        if (props.resizable) {
            resizing.current = true;
            lastPageX.current = event.pageX;
            lastPageY.current = event.pageY;
            DomHandler.addClass(document.body, 'p-unselectable-text');

            props.onResizeStart && props.onResizeStart(event);
        }
    }

    const convertToPx = (value, property, viewport) => {
        !viewport && (viewport = DomHandler.getViewport());

        const val = parseInt(value);
        if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(value)) {
            return val * (viewport[property] / 100);
        }

        return val;
    }

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

            if ((!minWidth || newWidth > minWidth) && (offset.left + newWidth) < viewport.width) {
                dialogRef.current.style.width = newWidth + 'px';
            }

            if ((!minHeight || newHeight > minHeight) && (offset.top + newHeight) < viewport.height) {
                dialogRef.current.style.height = newHeight + 'px';
            }

            lastPageX.current = event.pageX;
            lastPageY.current = event.pageY;

            props.onResize && props.onResize(event);
        }
    }

    const onResizeEnd = (event) => {
        if (resizing.current) {
            resizing.current = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');

            props.onResizeEnd && props.onResizeEnd(event);
        }
    }

    const resetPosition = () => {
        dialogRef.current.style.position = '';
        dialogRef.current.style.left = '';
        dialogRef.current.style.top = '';
        dialogRef.current.style.margin = '';
    }

    const getPositionClass = () => {
        const positions = ['center', 'left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
        const pos = positions.find(item => item === props.position || item.replace('-', '') === props.position);

        return pos ? `p-dialog-${pos}` : '';
    }

    const onEnter = () => {
        dialogRef.current.setAttribute(attributeSelector.current, '');
    }

    const onEntered = () => {
        props.onShow && props.onShow();

        if (props.focusOnShow) {
            focus();
        }

        enableDocumentSettings();
    }

    const onExiting = () => {
        if (props.modal) {
            DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
        }
    }

    const onExited = () => {
        dragging.current = false;
        ZIndexUtils.clear(maskRef.current);
        setMaskVisibleState(false);
        disableDocumentSettings();
    }

    const enableDocumentSettings = () => {
        bindGlobalListeners();

        if (props.blockScroll || (props.maximizable && maximized)) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }

    const disableDocumentSettings = () => {
        unbindGlobalListeners();

        if (props.modal) {
            let hasBlockScroll = document.primeDialogParams && document.primeDialogParams.some(param => param.hasBlockScroll);
            if (!hasBlockScroll) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        }
        else if (props.blockScroll || (props.maximizable && maximized)) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }

    const bindGlobalListeners = () => {
        if (props.draggable) {
            bindDocumentDragListener();
            bindDocumentDragEndListener();
        }

        if (props.resizable) {
            bindDocumentResizeListener();
            bindDocumentResizeEndListener();
        }

        if (props.closable) {
            bindDocumentKeyDownListener();

            const newParam = { id: idState, hasBlockScroll: props.blockScroll };
            document.primeDialogParams = document.primeDialogParams ? [...document.primeDialogParams, newParam] : [newParam];
        }
    }

    const unbindGlobalListeners = () => {
        unbindDocumentDragListener();
        unbindDocumentDragEndListener();
        unbindDocumentResizeListener();
        unbindDocumentResizEndListener();
        unbindDocumentKeyDownListener();

        document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(param => param.id !== idState);
    }

    const createStyle = () => {
        if (!styleElement.current) {
            styleElement.current = DomHandler.createInlineStyle(PrimeReact.nonce);

            let innerHTML = '';
            for (let breakpoint in props.breakpoints) {
                innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${attributeSelector.current}] {
                            width: ${props.breakpoints[breakpoint]} !important;
                        }
                    }
                `
            }

            styleElement.current.innerHTML = innerHTML;
        }
    }

    const changeScrollOnMaximizable = () => {
        if (!props.blockScroll) {
            let funcName = maximized ? 'addClass' : 'removeClass';
            DomHandler[funcName](document.body, 'p-overflow-hidden');
        }
    }

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }

        attributeSelector.current = UniqueComponentId();

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
            ZIndexUtils.set('modal', maskRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['modal']);
            setVisibleState(true);
        }
    }, [maskVisibleState]);

    useUpdateEffect(() => {
        changeScrollOnMaximizable();
    }, [props.maximized, maximizedState]);

    useUnmountEffect(() => {
        disableDocumentSettings();
        DomHandler.removeInlineStyle(styleElement.current);
        ZIndexUtils.clear(maskRef.current);
    });

    useImperativeHandle(ref, () => ({
        resetPosition
    }));

    const createCloseIcon = () => {
        if (props.closable) {
            return (
                <button ref={closeRef} type="button" className="p-dialog-header-icon p-dialog-header-close p-link" aria-label={props.ariaCloseIconLabel} onClick={onClose}>
                    <span className="p-dialog-header-close-icon pi pi-times"></span>
                    <Ripple />
                </button>
            )
        }

        return null;
    }

    const createMaximizeIcon = () => {
        const iconClassName = classNames('p-dialog-header-maximize-icon pi', {
            'pi-window-maximize': !maximized,
            'pi-window-minimize': maximized
        });

        if (props.maximizable) {
            return (
                <button type="button" className="p-dialog-header-icon p-dialog-header-maximize p-link" onClick={toggleMaximize}>
                    <span className={iconClassName}></span>
                    <Ripple />
                </button>
            )
        }

        return null;
    }

    const createHeader = () => {
        if (props.showHeader) {
            const closeIcon = createCloseIcon();
            const maximizeIcon = createMaximizeIcon();
            const icons = ObjectUtils.getJSXElement(props.icons, props);
            const header = ObjectUtils.getJSXElement(props.header, props);
            const headerId = idState + '_header';

            return (
                <div ref={headerRef} className="p-dialog-header" onMouseDown={onDragStart}>
                    <div id={headerId} className="p-dialog-title">{header}</div>
                    <div className="p-dialog-header-icons">
                        {icons}
                        {maximizeIcon}
                        {closeIcon}
                    </div>
                </div>
            )
        }

        return null;
    }

    const createContent = () => {
        const className = classNames('p-dialog-content', props.contentClassName);
        const contentId = idState + '_content';

        return (
            <div id={contentId} ref={contentRef} className={className} style={props.contentStyle}>
                {props.children}
            </div>
        )
    }

    const createFooter = () => {
        const footer = ObjectUtils.getJSXElement(props.footer, props);

        return footer && <div ref={footerRef} className="p-dialog-footer">{footer}</div>
    }

    const createResizer = () => {
        if (props.resizable) {
            return <div className="p-resizable-handle" style={{ zIndex: 90 }} onMouseDown={onResizeStart}></div>
        }

        return null;
    }

    const createElement = () => {
        const className = classNames('p-dialog p-component', props.className, {
            'p-dialog-rtl': props.rtl,
            'p-dialog-maximized': maximized
        });
        const maskClassName = classNames('p-dialog-mask', getPositionClass(), {
            'p-component-overlay p-component-overlay-enter': props.modal,
            'p-dialog-visible': maskVisibleState,
            'p-dialog-draggable': props.draggable,
            'p-dialog-resizable': props.resizable,
        }, props.maskClassName);
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

        return (
            <div ref={maskRef} style={props.maskStyle} className={maskClassName} onClick={onMaskClick}>
                <CSSTransition nodeRef={dialogRef} classNames="p-dialog" timeout={transitionTimeout} in={visibleState} options={props.transitionOptions}
                    unmountOnExit onEnter={onEnter} onEntered={onEntered} onExiting={onExiting} onExited={onExited}>
                    <div ref={dialogRef} id={idState} className={className} style={props.style} onClick={props.onClick}
                        role="dialog" aria-labelledby={headerId} aria-describedby={contentId} aria-modal={props.modal}>
                        {header}
                        {content}
                        {footer}
                        {resizer}
                    </div>
                </CSSTransition>
            </div>
        )
    }

    const createDialog = () => {
        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} visible />
    }

    return maskVisibleState && createDialog();
});

Dialog.defaultProps = {
    __TYPE: 'Dialog',
    id: null,
    header: null,
    footer: null,
    visible: false,
    position: 'center',
    draggable: true,
    resizable: true,
    modal: true,
    onHide: null,
    onShow: null,
    contentStyle: null,
    contentClassName: null,
    closeOnEscape: true,
    dismissableMask: false,
    rtl: false,
    closable: true,
    style: null,
    className: null,
    maskStyle: null,
    maskClassName: null,
    showHeader: true,
    appendTo: null,
    baseZIndex: 0,
    maximizable: false,
    blockScroll: false,
    icons: null,
    ariaCloseIconLabel: 'Close',
    focusOnShow: true,
    minX: 0,
    minY: 0,
    keepInViewport: true,
    maximized: false,
    breakpoints: null,
    transitionOptions: null,
    onMaximize: null,
    onDragStart: null,
    onDrag: null,
    onDragEnd: null,
    onResizeStart: null,
    onResize: null,
    onResizeEnd: null,
    onClick: null,
    onMaskClick: null
}

Dialog.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    header: PropTypes.any,
    footer: PropTypes.any,
    visible: PropTypes.bool,
    position: PropTypes.string,
    draggable: PropTypes.bool,
    resizable: PropTypes.bool,
    modal: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onShow: PropTypes.func,
    contentStyle: PropTypes.object,
    contentClassName: PropTypes.string,
    closeOnEscape: PropTypes.bool,
    dismissableMask: PropTypes.bool,
    rtl: PropTypes.bool,
    closable: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    maskStyle: PropTypes.object,
    maskClassName: PropTypes.string,
    showHeader: PropTypes.bool,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    baseZIndex: PropTypes.number,
    maximizable: PropTypes.bool,
    blockScroll: PropTypes.bool,
    icons: PropTypes.any,
    ariaCloseIconLabel: PropTypes.string,
    focusOnShow: PropTypes.bool,
    minX: PropTypes.number,
    minY: PropTypes.number,
    keepInViewport: PropTypes.bool,
    maximized: PropTypes.bool,
    breakpoints: PropTypes.object,
    transitionOptions: PropTypes.object,
    onMaximize: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrag: PropTypes.func,
    onDragEnd: PropTypes.func,
    onResizeStart: PropTypes.func,
    onResize: PropTypes.func,
    onResizeEnd: PropTypes.func,
    onClick: PropTypes.func,
    onMaskClick: PropTypes.func
}
