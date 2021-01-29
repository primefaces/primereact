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
        maximized: false,
        onMaximize: null
    }

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        footer: PropTypes.any,
        visible: PropTypes.bool,
        position: PropTypes.string,
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
        maximized: PropTypes.bool,
        onMaximize: PropTypes.func
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
        this.onMaskClick = this.onMaskClick.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExited = this.onExited.bind(this);

        this.id = this.props.id || UniqueComponentId();
    }

    onClose(event) {
        this.props.onHide();
        event.preventDefault();
    }

    focus() {
        let activeElement = document.activeElement;
        let isActiveElementInDialog = activeElement && this.dialog.contains(activeElement);
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
        this.setState({ maskVisible: false });
        this.disableDocumentSettings();
    }

    enableDocumentSettings() {
        if (this.props.modal) {
            this.bindGlobalListeners();
        }

        if (this.props.blockScroll || (this.props.maximizable && this.maximized)) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }

    disableDocumentSettings() {
        if (this.props.modal) {
            this.unbindGlobalListeners();

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
        if (this.props.closeOnEscape && this.props.closable) {
            this.bindDocumentKeyDownListener();
        }
    }

    unbindGlobalListeners() {
        this.unbindDocumentKeyDownListener();
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
                <div ref={el => this.headerElement = el} className="p-dialog-header">
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
            <div ref={el => this.contentElement = el} className={contentClassName} style={this.props.contentStyle}>
                {this.props.children}
            </div>
        );
    }

    renderFooter() {
        const footer = ObjectUtils.getJSXElement(this.props.footer, this.props);

        return footer && <div ref={el => this.footerElement = el} className="p-dialog-footer">{footer}</div>
    }

    renderElement() {
        const className = classNames('p-dialog p-component', this.props.className, {
            'p-dialog-rtl': this.props.rtl,
            'p-dialog-maximized': this.maximized
        });

        const maskClassName = classNames('p-dialog-mask', {
            'p-component-overlay': this.props.modal,
            'p-dialog-visible': this.state.maskVisible
        }, this.props.maskClassName, this.getPositionClass());

        const header = this.renderHeader();
        const content = this.renderContent();
        const footer = this.renderFooter();

        let transitionTimeout = {
            enter: this.props.position === 'center' ? 150 : 300,
            exit: this.props.position === 'center' ? 150 : 300
        };

        return (
            <div ref={(el) => this.mask = el} className={maskClassName} onClick={this.onMaskClick}>
                <CSSTransition classNames="p-dialog" timeout={transitionTimeout} in={this.state.visible} unmountOnExit
                    onEntered={this.onEntered} onExited={this.onExited}>
                    <div ref={el => this.dialog = el} id={this.id} className={className} style={this.props.style}
                         aria-labelledby={this.id + '_header'} role="dialog" aria-modal={this.props.model}>
                        {header}
                        {content}
                        {footer}
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
