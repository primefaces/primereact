import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

export class Dialog extends Component {

    static defaultProps = {
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
        onMaximize: null,
        onDragStart: null,
        onDrag: null,
        onDragEnd: null,
        onResizeStart: null,
        onResize: null,
        onResizeEnd: null
    }

    static propTypes = {
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
        maskClassName: PropTypes.string,
        showHeader: PropTypes.bool,
        appendTo: PropTypes.object,
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
        onMaximize: PropTypes.func,
        onDragStart: PropTypes.func,
        onDrag: PropTypes.func,
        onDragEnd: PropTypes.func,
        onResizeStart: PropTypes.func,
        onResize: PropTypes.func,
        onResizeEnd: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            maskVisible: props.visible,
            visible: false
        };

        if (!this.props.onMaximize) {
            this.state.maximized = props.maximized;
        }

        this.onClose = this.onClose.bind(this);
        this.toggleMaximize = this.toggleMaximize.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onResizeStart = this.onResizeStart.bind(this);
        this.onMaskClick = this.onMaskClick.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExited = this.onExited.bind(this);

        this.id = this.props.id || UniqueComponentId();
        this.dialogRef = React.createRef();
    }

    onClose(event) {
        this.props.onHide();
        event.preventDefault();
    }

    focus() {
        let activeElement = document.activeElement;
        let isActiveElementInDialog = activeElement && this.dialogRef && this.dialogRef.current.contains(activeElement);
        if (!isActiveElementInDialog && this.props.closable) {
            this.closeElement.focus();
        }
    }

    onMaskClick(event) {
        if (this.props.dismissableMask && this.props.modal && this.mask === event.target) {
            this.onClose(event);
        }
    }

    toggleMaximize(event) {
        let maximized = !this.maximized;

        if (this.props.onMaximize) {
            this.props.onMaximize({
                originalEvent: event,
                maximized
            });
        }
        else {
            this.setState({
                maximized
            }, this.changeScrollOnMaximizable);
        }

        event.preventDefault();
    }

    onDragStart(event) {
        if (DomHandler.hasClass(event.target, 'p-dialog-header-icon') || DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
            return;
        }

        if (this.props.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;

            this.dialogEl.style.margin = '0';
            DomHandler.addClass(document.body, 'p-unselectable-text');

            if (this.props.onDragStart) {
                this.props.onDragStart(event);
            }
        }
    }

    onDrag(event) {
        if (this.dragging) {
            let width = DomHandler.getOuterWidth(this.dialogEl);
            let height = DomHandler.getOuterHeight(this.dialogEl);
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let offset = DomHandler.getOffset(this.dialogEl);
            let leftPos = offset.left + deltaX;
            let topPos = offset.top + deltaY;
            let viewport = DomHandler.getViewport();

            this.dialogEl.style.position = 'fixed';

            if (this.props.keepInViewport) {
                if (leftPos >= this.props.minX && (leftPos + width) < viewport.width) {
                    this.lastPageX = event.pageX;
                    this.dialogEl.style.left = leftPos + 'px';
                }

                if (topPos >= this.props.minY && (topPos + height) < viewport.height) {
                    this.lastPageY = event.pageY;
                    this.dialogEl.style.top = topPos + 'px';
                }
            }
            else {
                this.lastPageX = event.pageX;
                this.dialogEl.style.left = leftPos + 'px';
                this.lastPageY = event.pageY;
                this.dialogEl.style.top = topPos + 'px';
            }

            if (this.props.onDrag) {
                this.props.onDrag(event);
            }
        }
    }

    onDragEnd(event) {
        if (this.dragging) {
            this.dragging = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');

            if (this.props.onDragEnd) {
                this.props.onDragEnd(event);
            }
        }
    }

    onResizeStart(event) {
        if (this.props.resizable) {
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            DomHandler.addClass(document.body, 'p-unselectable-text');

            if (this.props.onResizeStart) {
                this.props.onResizeStart(event);
            }
        }
    }

    onResize(event) {
        if (this.resizing) {
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let width = DomHandler.getOuterWidth(this.dialogEl);
            let height = DomHandler.getOuterHeight(this.dialogEl);
            let contentHeight = DomHandler.getOuterHeight(this.contentEl);
            let newWidth = width + deltaX;
            let newHeight = height + deltaY;
            let minWidth = this.dialogEl.style.minWidth;
            let minHeight = this.dialogEl.style.minHeight;
            let offset = DomHandler.getOffset(this.dialogEl);
            let viewport = DomHandler.getViewport();
            let hasBeenDragged = !parseInt(this.dialogEl.style.top) || !parseInt(this.dialogEl.style.left);

            if (hasBeenDragged) {
                newWidth += deltaX;
                newHeight += deltaY;
            }

            if ((!minWidth || newWidth > parseInt(minWidth)) && (offset.left + newWidth) < viewport.width) {
                this.dialogEl.style.width = newWidth + 'px';
            }

            if ((!minHeight || newHeight > parseInt(minHeight)) && (offset.top + newHeight) < viewport.height) {
                this.contentEl.style.height = contentHeight + newHeight - height + 'px';
                this.dialogEl.style.height = newHeight + 'px';
            }

            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;

            if (this.props.onResize) {
                this.props.onResize(event);
            }
        }
    }

    onResizeEnd(event) {
        if (this.resizing) {
            this.resizing = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');

            if (this.props.onResizeEnd) {
                this.props.onResizeEnd(event);
            }
        }
    }

    resetPosition() {
        this.dialogEl.style.position = '';
        this.dialogEl.style.left = '';
        this.dialogEl.style.top = '';
        this.dialogEl.style.margin = '';
    }

    getPositionClass() {
        const positions = ['center', 'left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
        const pos = positions.find(item => item === this.props.position || item.replace('-', '') === this.props.position);

        return pos ? `p-dialog-${pos}` : '';
    }

    get zIndex() {
        return this.props.baseZIndex + DomHandler.generateZIndex();
    }

    get maximized() {
        return this.props.onMaximize ? this.props.maximized : this.state.maximized;
    }

    get dialogEl() {
        return this.dialogRef.current;
    }

    onEntered() {
        if (this.props.onShow) {
            this.props.onShow();
        }

        if (this.props.focusOnShow) {
            this.focus();
        }

        this.enableDocumentSettings();
    }

    onExited() {
        this.dragging = false;
        this.setState({ maskVisible: false });
        this.disableDocumentSettings();
    }

    enableDocumentSettings() {
        this.bindGlobalListeners();

        if (this.props.blockScroll || (this.props.maximizable && this.maximized)) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }

    disableDocumentSettings() {
        this.unbindGlobalListeners();

        if (this.props.modal) {
            let hasBlockScroll = document.primeDialogParams && document.primeDialogParams.some(param => param.hasBlockScroll);
            if (!hasBlockScroll) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        }
        else if (this.props.blockScroll || (this.props.maximizable && this.maximized)) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }

    bindGlobalListeners() {
        if (this.props.draggable) {
            this.bindDocumentDragListener();
        }

        if (this.props.resizable) {
            this.bindDocumentResizeListeners();
        }

        if (this.props.closeOnEscape && this.props.closable) {
            this.bindDocumentKeyDownListener();
        }
    }

    unbindGlobalListeners() {
        this.unbindDocumentDragListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentKeyDownListener();
    }

    bindDocumentDragListener() {
        this.documentDragListener = this.onDrag.bind(this);
        this.documentDragEndListener = this.onDragEnd.bind(this);
        window.document.addEventListener('mousemove', this.documentDragListener);
        window.document.addEventListener('mouseup', this.documentDragEndListener);
    }

    unbindDocumentDragListener() {
        if (this.documentDragListener && this.documentDragEndListener) {
            window.document.removeEventListener('mousemove', this.documentDragListener);
            window.document.removeEventListener('mouseup', this.documentDragEndListener);
            this.documentDragListener = null;
            this.documentDragEndListener = null;
        }
    }

    bindDocumentResizeListeners() {
        this.documentResizeListener = this.onResize.bind(this);
        this.documentResizeEndListener = this.onResizeEnd.bind(this);
        window.document.addEventListener('mousemove', this.documentResizeListener);
        window.document.addEventListener('mouseup', this.documentResizeEndListener);
    }

    unbindDocumentResizeListeners() {
        if (this.documentResizeListener && this.documentResizeEndListener) {
            window.document.removeEventListener('mousemove', this.documentResizeListener);
            window.document.removeEventListener('mouseup', this.documentResizeEndListener);
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
        }
    }

    bindDocumentKeyDownListener() {
        this.documentKeyDownListener = (event) => {
            let currentTarget = event.currentTarget;

            if (currentTarget && currentTarget.primeDialogParams) {
                let params = currentTarget.primeDialogParams;
                let paramLength = params.length;
                let dialogId = params[paramLength - 1].id;

                if (dialogId === this.id) {
                    let dialog = document.getElementById(dialogId);

                    if (event.which === 27) {
                        this.onClose(event);
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
        };

        let newParam = { id: this.id, hasBlockScroll: this.props.blockScroll };
        document.primeDialogParams = document.primeDialogParams ? [ ...document.primeDialogParams, newParam ] : [ newParam ];

        document.addEventListener('keydown', this.documentKeyDownListener);
    }

    unbindDocumentKeyDownListener() {
        if (this.documentKeyDownListener) {
            document.removeEventListener('keydown', this.documentKeyDownListener);
            document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(param => param.id !== this.id);
            this.documentKeyDownListener = null;
        }
    }

    componentDidMount() {
        if (this.props.visible) {
            this.setState({ visible: true }, () => {
                this.mask.style.zIndex = String(this.zIndex);
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.visible && !this.state.maskVisible) {
            this.setState({ maskVisible: true }, () => {
                this.mask.style.zIndex = String(this.zIndex);
            });
        }

        if (this.props.visible !== this.state.visible && this.state.maskVisible) {
            this.setState({
                visible: this.props.visible
            });
        }

        if (prevProps.maximized !== this.props.maximized && this.props.onMaximize) {
            this.changeScrollOnMaximizable();
        }
    }

    changeScrollOnMaximizable() {
        if (!this.props.blockScroll) {
            let funcName = this.maximized ? 'addClass' : 'removeClass';
            DomHandler[funcName](document.body, 'p-overflow-hidden');
        }
    }

    componentWillUnmount() {
        this.disableDocumentSettings();
    }

    renderCloseIcon() {
        if (this.props.closable) {
            return (
                <button ref={(el) => this.closeElement = el} type="button" className="p-dialog-header-icon p-dialog-header-close p-link" aria-label={this.props.ariaCloseIconLabel} onClick={this.onClose}>
                    <span className="p-dialog-header-close-icon pi pi-times"></span>
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderMaximizeIcon() {
        const iconClassName = classNames('p-dialog-header-maximize-icon pi', {'pi-window-maximize': !this.maximized, 'pi-window-minimize': this.maximized});

        if (this.props.maximizable) {
            return (
                <button type="button" className="p-dialog-header-icon p-dialog-header-maximize p-link" onClick={this.toggleMaximize}>
                    <span className={iconClassName}></span>
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderHeader() {
        if (this.props.showHeader) {
            const closeIcon = this.renderCloseIcon();
            const maximizeIcon = this.renderMaximizeIcon();
            const icons = ObjectUtils.getJSXElement(this.props.icons, this.props);
            const header = ObjectUtils.getJSXElement(this.props.header, this.props);

            return (
                <div ref={el => this.headerEl = el} className="p-dialog-header" onMouseDown={this.onDragStart}>
                    <span id={this.id + '_header'} className="p-dialog-title">{header}</span>
                    <div className="p-dialog-header-icons">
                        {icons}
                        {maximizeIcon}
                        {closeIcon}
                    </div>
                </div>
            );
        }

        return null;
    }

    renderContent() {
        let contentClassName = classNames('p-dialog-content', this.props.contentClassName)

        return (
            <div id={this.id + '_content'} ref={el => this.contentEl = el} className={contentClassName} style={this.props.contentStyle}>
                {this.props.children}
            </div>
        );
    }

    renderFooter() {
        const footer = ObjectUtils.getJSXElement(this.props.footer, this.props);

        return footer && <div ref={el => this.footerElement = el} className="p-dialog-footer">{footer}</div>
    }

    renderResizer() {
        if (this.props.resizable) {
            return <div className="p-resizable-handle" style={{zIndex: 90}} onMouseDown={this.onResizeStart}></div>
        }

        return null;
    }

    renderElement() {
        const className = classNames('p-dialog p-component', this.props.className, {
            'p-dialog-rtl': this.props.rtl,
            'p-dialog-maximized': this.maximized
        });

        const maskClassName = classNames('p-dialog-mask', {
            'p-component-overlay': this.props.modal,
            'p-dialog-visible': this.state.maskVisible,
            'p-dialog-draggable': this.props.draggable,
            'p-dialog-resizable': this.props.resizable,
        }, this.props.maskClassName, this.getPositionClass());

        const header = this.renderHeader();
        const content = this.renderContent();
        const footer = this.renderFooter();
        const resizer = this.renderResizer();

        let transitionTimeout = {
            enter: this.props.position === 'center' ? 150 : 300,
            exit: this.props.position === 'center' ? 150 : 300
        };

        return (
            <div ref={(el) => this.mask = el} className={maskClassName} onClick={this.onMaskClick}>
                <CSSTransition nodeRef={this.dialogRef} classNames="p-dialog" timeout={transitionTimeout} in={this.state.visible} unmountOnExit
                    onEntered={this.onEntered} onExited={this.onExited}>
                    <div ref={this.dialogRef} id={this.id} className={className} style={this.props.style}
                        role="dialog" aria-labelledby={this.id + '_header'} aria-describedby={this.id + '_content'} aria-modal={this.props.modal}>
                        {header}
                        {content}
                        {footer}
                        {resizer}
                    </div>
                </CSSTransition>
            </div>
        );
    }

    render() {
        if (this.state.maskVisible) {
            const element = this.renderElement();

            if (this.props.appendTo)
                return ReactDOM.createPortal(element, this.props.appendTo);
            else
                return element;
        }

        return null;
    }
}
