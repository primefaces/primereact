import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';

export class Dialog extends Component {

    static defaultProps = {
        id: null,
        header: null,
        footer: null,
        visible: false,
        modal: true,
        onHide: null,
        onShow: null,
        contentStyle: null,
        closeOnEscape: true,
        dismissableMask: false,
        rtl: false,
        closable: true,
        style: null,
        className: null,
        showHeader: true,
        appendTo: null,
        baseZIndex: 0,
        maximizable: false,
        blockScroll: true,
        iconsTemplate: null,
        ariaCloseIconLabel: 'Close',
        focusOnShow: true
    }

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        footer: PropTypes.any,
        visible: PropTypes.bool,
        modal: PropTypes.bool,
        onHide: PropTypes.func.isRequired,
        onShow: PropTypes.func,
        contentStyle: PropTypes.object,
        closeOnEscape: PropTypes.bool,
        dismissableMask: PropTypes.bool,
        rtl: PropTypes.bool,
        closable: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        showHeader: PropTypes.bool,
        appendTo: PropTypes.object,
        baseZIndex: PropTypes.number,
        maximizable: PropTypes.bool,
        blockScroll: PropTypes.bool,
        iconsTemplate: PropTypes.func,
        ariaCloseIconLabel: PropTypes.string,
        focusOnShow: PropTypes.bool
    };
    
    constructor(props) {
        super(props);
        this.state = {
            maximized: false
        };
        this.onClose = this.onClose.bind(this);
        this.toggleMaximize = this.toggleMaximize.bind(this);

        this.id = this.props.id || UniqueComponentId();
    }

    onClose(event) {
        this.props.onHide();
        event.preventDefault();
    }

    hide() {
        this.unbindMaskClickListener();
        this.unbindGlobalListeners();
        
        this.props.onHide();

        if (this.props.modal) {
            this.disableModality();
        }

        if (this.state.maximized) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }

    focus() {
        let focusable = DomHandler.findSingle(this.container, 'button');
        if (focusable) {
            focusable.focus();
        }
    }

    show() {
        this.bindGlobalListeners();
        
        if (this.props.onShow) {
            this.props.onShow();
        }
        
        this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        
        if (this.props.focusOnShow) {
            this.focus();
        }

        if (this.props.modal) {
            this.enableModality();
        }

        if (this.state.maximized) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }
    
    toggleMaximize(event) {
        this.setState({
            maximized: !this.state.maximized
        });
        event.preventDefault();
    }

    maximize() {
        DomHandler.addClass(this.container, 'p-dialog-maximized');
        DomHandler.addClass(document.body, 'p-overflow-hidden');

        const diffHeight = DomHandler.getOuterHeight(this.headerElement) + DomHandler.getOuterHeight(this.footerElement);
        this.contentElement.style.minHeight = 'calc(100vh - ' + diffHeight +'px)';
    }

    restoreMaximize() {
        DomHandler.removeClass(this.container, 'p-dialog-maximized');
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
        this.contentElement.style.minHeight = 'auto';
    }
   
    enableModality() {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
            DomHandler.addMultipleClasses(this.mask, 'p-component-overlay p-dialog-mask');

            if (this.props.closable && this.props.dismissableMask) {
                this.maskClickListener = (event) => {
                   this.onClose(event);
                };

                this.mask.addEventListener('click', this.maskClickListener);
            }
            document.body.appendChild(this.mask);

            if (this.props.blockScroll) {
                DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        }
    }

    disableModality() {
        if (this.mask) {
            this.unbindMaskClickListener();

            document.body.removeChild(this.mask);
            if (this.props.blockScroll) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
            this.mask = null;
        }
    }

    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.mask.removeEventListener('click', this.maskClickListener);
            this.maskClickListener = null;
		}
    }

    bindGlobalListeners() {     
        if (this.props.closeOnEscape && this.props.closable) {
            this.bindDocumentEscapeListener();
        }
    }
    
    unbindGlobalListeners() {
        this.unbindDocumentEscapeListener();
    }
    
    bindDocumentEscapeListener() {
        this.documentEscapeListener = (event) => {
            if (event.which === 27) {
                if (parseInt(this.container.style.zIndex, 10) === DomHandler.getCurrentZIndex()) {
                    this.onClose(event);
                }
            }
        };
        document.addEventListener('keydown', this.documentEscapeListener);
    }
    
    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            document.removeEventListener('keydown', this.documentEscapeListener);
            this.documentEscapeListener = null;
        }
    }

    componentDidMount() {
        if (this.props.visible) {
            this.show();
            this.currentHeight = DomHandler.getOuterHeight(this.container);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.visible !== this.props.visible) {
            if (this.props.visible)
                this.show();
            else
                this.hide();
        }

        if (prevState.maximized !== this.state.maximized) {
            if (this.state.maximized) {
                this.maximize();
            }
            else {
                this.restoreMaximize();
            }
        }
    }

    componentWillUnmount() {
        this.disableModality();
        this.unbindGlobalListeners();
		this.unbindMaskClickListener();
    }

    renderCloseIcon() {
        if (this.props.closable) {
            return (
                <button className="p-dialog-titlebar-icon p-dialog-titlebar-close p-link" aria-label={this.props.ariaCloseIconLabel} onClick={this.onClose}>
                    <span className="p-dialog-titlebar-close-icon pi pi-times"></span>
                </button>
            );
        }
        else {
            return null;
        }
    }

    renderMaximizeIcon() {
        const iconClassName = classNames('p-dialog-titlebar-maximize-icon pi', {'pi-window-maximize': !this.state.maximized, 'pi-window-minimize': this.state.maximized});

        if (this.props.maximizable) {
            return (
                <button className="p-dialog-titlebar-icon p-dialog-titlebar-maximize p-link" onClick={this.toggleMaximize}>
                    <span className={iconClassName}></span>
                </button>
            );
        }
        else {
            return null;
        }
    }

    renderIconsTemplate() {
        if (this.props.iconsTemplate) {
            return this.props.iconsTemplate(this);
        }
        else {
            return null;
        }
    }

    renderHeader() {
        if (this.props.showHeader) {
            const closeIcon = this.renderCloseIcon();
            const maximizeIcon = this.renderMaximizeIcon();
            const iconsTemplate = this.renderIconsTemplate();

            return (
                <div ref={el => this.headerElement = el} className="p-dialog-titlebar">
                    <span id={this.id + '_label'} className="p-dialog-title">{this.props.header}</span>
                    <div className="p-dialog-titlebar-icons">
                        {iconsTemplate}
                        {maximizeIcon}
                        {closeIcon}
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }

    renderContent() {
        return (
            <div ref={el => this.contentElement = el} className="p-dialog-content" style={this.props.contentStyle}>
                {this.props.children}
            </div>
        );
    }

    renderFooter() {
        if (this.props.footer) {
            return (
                <div ref={el => this.footerElement = el} className="p-dialog-footer">{this.props.footer}</div>
            );
        }
        else {
            return null;
        }
    }

    renderElement() {
        const className = classNames('p-dialog p-component', this.props.className, {
            'p-dialog-rtl': this.props.rtl,
            'p-dialog-visible': this.props.visible
        });

        const header = this.renderHeader();
        const content = this.renderContent();
        const footer = this.renderFooter();

        return (
            <CSSTransition classNames="p-dialog" timeout={{enter: 150, exit: 75}} in={this.props.visible}>
                <div id={this.id} className={className} style={this.props.style} ref={el => this.container = el} aria-labelledby={this.id + '_label'} role="dialog">
                    {header}
                    {content}
                    {footer}
                </div>
            </CSSTransition>
        );
    }

    render() {
        const element = this.renderElement();
    
        if (this.props.appendTo)
            return ReactDOM.createPortal(element, this.props.appendTo);
        else
            return element;
    }
}