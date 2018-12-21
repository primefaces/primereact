import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';

export class Dialog extends Component {

    static defaultProps = {
        id: null,
        header: null,
        footer: null,
        visible: false,
        width: 'auto',
        height: 'auto',
        modal: true,
        onHide: null,
        onShow: null,
        draggable: false,
        resizable: false,
        minWidth: 150,
        minHeight: 150,
        contentStyle: null,
        closeOnEscape: true,
        dismissableMask: false,
        rtl: false,
        closable: true,
        responsive: true,
        breakpoint: 640,
        style: null,
        className: null,
        showHeader: true,
        positionLeft: -1,
        positionTop: -1,
        appendTo: null,
        baseZIndex: 0,
        minX: 0,
        minY: 0,
        maximizable: false,
        blockScroll: true
    }

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        footer: PropTypes.any,
        visible: PropTypes.bool,
        width: PropTypes.string,
        height: PropTypes.string,
        modal: PropTypes.bool,
        onHide: PropTypes.func.isRequired,
        onShow: PropTypes.func,
        draggable: PropTypes.bool,
        resizable: PropTypes.bool,
        minWidth: PropTypes.number,
        minHeight: PropTypes.number,
        contentStyle: PropTypes.object,
        closeOnEscape: PropTypes.bool,
        dismissableMask: PropTypes.bool,
        rtl: PropTypes.bool,
        closable: PropTypes.bool,
        responsive: PropTypes.bool,
        breakpoint: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        showHeader: PropTypes.bool,
        positionLeft: PropTypes.number,
        positionTop: PropTypes.number,
        appendTo: PropTypes.object,
        baseZIndex: PropTypes.number,
        minX: PropTypes.number,
        minY: PropTypes.number,
        maximizable: PropTypes.bool,
        blockScroll: PropTypes.bool
    };
    
    constructor(props) {
        super(props);
        this.state = {
            maximized: false
        };
        this.onClose = this.onClose.bind(this);
        this.initDrag = this.initDrag.bind(this);
        this.endDrag = this.endDrag.bind(this);
        this.onCloseMouseDown = this.onCloseMouseDown.bind(this);
        this.initResize = this.initResize.bind(this);
        this.toggleMaximize = this.toggleMaximize.bind(this);

        this.id = this.props.id || UniqueComponentId();
    }

    positionOverlay() {
        let viewport = DomHandler.getViewport();
        if (DomHandler.getOuterHeight(this.container) > viewport.height) {
             this.contentElement.style.height = (viewport.height * .75) + 'px';
        }
        
        if (this.props.positionLeft >= 0 && this.props.positionTop >= 0) {
            this.container.style.left = this.props.positionLeft + 'px';
            this.container.style.top = this.props.positionTop + 'px';
        } 
        else if (this.props.positionTop >= 0) {
          this.center();
          this.container.style.top = this.props.positionTop + 'px';
        }
        else{
            this.center();
        }
    }

    onClose(event) {
        this.props.onHide();
        event.preventDefault();
    }

    hide() {
        this.unbindMaskClickListener();
        this.unbindGlobalListeners();     

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
        this.positionOverlay();
        this.focus();
        DomHandler.fadeIn(this.container, 250);

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
        this.preMaximizePageX = parseFloat(this.container.style.top);
        this.preMaximizePageY = parseFloat(this.container.style.left);
        this.preMaximizeContainerWidth = DomHandler.getOuterWidth(this.container);
        this.preMaximizeContainerHeight = DomHandler.getOuterHeight(this.container);
        this.preMaximizeContentHeight = DomHandler.getOuterHeight(this.contentElement);

        this.container.style.top = '0px';
        this.container.style.left = '0px';
        this.container.style.width = '100vw';
        this.container.style.height = '100vh';
        const diffHeight = DomHandler.getOuterHeight(this.headerElement) + DomHandler.getOuterHeight(this.footerElement) + parseFloat(this.container.style.top);
        this.contentElement.style.height = 'calc(100vh - ' + diffHeight +'px)';

        DomHandler.addClass(document.body, 'p-overflow-hidden');
    }

    restoreMaximize() {
        this.container.style.top = this.preMaximizePageX + 'px';
        this.container.style.left = this.preMaximizePageY + 'px';
        this.container.style.width = this.preMaximizeContainerWidth + 'px';
        this.container.style.height = this.preMaximizeContainerHeight + 'px';
        this.contentElement.style.height = this.preMaximizeContentHeight + 'px';

        DomHandler.removeClass(document.body, 'p-overflow-hidden');

        setTimeout(() => DomHandler.removeClass(this.container, 'p-dialog-maximized'), 300);
    }
   
    center() {
        var elementWidth = DomHandler.getOuterWidth(this.container);
        var elementHeight = DomHandler.getOuterHeight(this.container);
        if (elementWidth === 0 && elementHeight === 0) {
            this.container.style.visibility = 'hidden';
            this.container.style.display = 'block';
            elementWidth = DomHandler.getOuterWidth(this.container);
            elementHeight = DomHandler.getOuterHeight(this.container);
            this.container.style.display = 'none';
            this.container.style.visibility = 'visible';
        }
        var viewport = DomHandler.getViewport();
        var x = (viewport.width - elementWidth) / 2;
        var y = (viewport.height - elementHeight) / 2;

        this.container.style.left = x + 'px';
        this.container.style.top = y + 'px';
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

    onCloseMouseDown(event) {
        this.closeIconMouseDown = true;
    }

    initDrag(event) {
        if (this.closeIconMouseDown) {
            this.closeIconMouseDown = false;
            return;
        }

        if (this.props.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            DomHandler.addClass(document.body, 'p-unselectable-text');
        }
    }

    onDrag(event) {
        if (this.dragging) {
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let leftPos = parseFloat(this.container.style.left) + deltaX;
            let topPos = parseFloat(this.container.style.top) + deltaY;

            if (leftPos >= this.props.minX) {
                this.container.style.left = leftPos + 'px';
            }

            if (topPos >= this.props.minY) {
                this.container.style.top = topPos + 'px';
            }


            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }

    endDrag(event) {
        if (this.props.draggable) {
            this.dragging = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');
        }
    }

    initResize(event) {
        if (this.props.resizable) {
            this.preWidth = null;
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            DomHandler.addClass(document.body, 'p-unselectable-text');
        }
    }
    
    onResize(event) {
        if (this.resizing) {
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let containerWidth = DomHandler.getOuterWidth(this.container);
            let containerHeight = DomHandler.getOuterHeight(this.container);
            let contentHeight = DomHandler.getOuterHeight(this.contentElement);
            let newWidth = containerWidth + deltaX;
            let newHeight = containerHeight + deltaY;

            if (newWidth > this.props.minWidth) {
                this.container.style.width = newWidth + 'px';
            }
                
            if (newHeight > this.props.minHeight) {
                this.container.style.height = newHeight + 'px';
                this.contentElement.style.height = contentHeight + deltaY + 'px';
            }

            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    
    bindGlobalListeners() {
        if (this.props.draggable) {
            this.bindDocumentDragListener();
            this.bindDocumentDragEndListener();
        }
        
        if (this.props.resizable) {
            this.bindDocumentResizeListeners();
        }
        
        if (this.props.responsive) {
            this.bindDocumentResponsiveListener();
        }
        
        if (this.props.closeOnEscape && this.props.closable) {
            this.bindDocumentEscapeListener();
        }
    }
    
    unbindGlobalListeners() {
        this.unbindDocumentDragListener();
        this.unbindDocumentDragEndListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentResponsiveListener();
        this.unbindDocumentEscapeListener();
    }
    
    bindDocumentDragListener() {
        this.documentDragListener = (event) => {
            this.onDrag(event);
        };
        document.addEventListener('mousemove', this.documentDragListener);
    }
    
    unbindDocumentDragListener() {
        if (this.documentDragListener) {
            document.removeEventListener('mousemove', this.documentDragListener);
            this.documentDragListener = null;
        }
    }

    bindDocumentDragEndListener() {
        this.documentDragEndListener = (event) => {
            this.endDrag(event);
        };
        document.addEventListener('mouseup', this.documentDragEndListener);
    }

    unbindDocumentDragEndListener() {
        if (this.documentDragEndListener) {
            document.removeEventListener('mouseup', this.documentDragEndListener);
            this.documentDragEndListener = null;
        }
    }
    
    bindDocumentResizeListeners() {
        this.documentResizeListener = (event) => {
            this.onResize(event);
        };
        
        this.documentResizeEndListener = (event) => {
            if (this.resizing) {
                this.resizing = false;
                DomHandler.removeClass(document.body, 'p-unselectable-text');
            }
        };

        document.addEventListener('mousemove', this.documentResizeListener);
        document.addEventListener('mouseup', this.documentResizeEndListener);
    }
    
    unbindDocumentResizeListeners() {
        if (this.documentResizeListener && this.documentResizeEndListener) {
            document.removeEventListener('mousemove', this.documentResizeListener);
            document.removeEventListener('mouseup', this.documentResizeEndListener);
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
        }
    }
    
    bindDocumentResponsiveListener() {
        this.documentResponsiveListener = (event) => {
            let viewport = DomHandler.getViewport();
            let width = DomHandler.getOuterWidth(this.container);
            if (viewport.width <= this.props.breakpoint) {
                if (!this.preWidth) {
                    this.preWidth = width;
                }
                this.container.style.left = '0px';
                this.container.style.width = '100%';
            }
            else {
                this.container.style.width = this.preWidth + 'px';
                this.positionOverlay();
            }
        };

        window.addEventListener('resize', this.documentResponsiveListener);
    }
    
    unbindDocumentResponsiveListener() {
        if (this.documentResponsiveListener) {
            window.removeEventListener('resize', this.documentResponsiveListener);
            this.documentResponsiveListener = null;
        }
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
                <button className="p-dialog-titlebar-icon p-dialog-titlebar-close p-link" onClick={this.onClose} onMouseDown={this.onCloseMouseDown}>
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

    renderHeader() {
        if (this.props.showHeader) {
            let closeIcon = this.renderCloseIcon();
            let maximizeIcon = this.renderMaximizeIcon();

            return (
                <div ref={(el) => { this.headerElement = el; }} className="p-dialog-titlebar" onMouseDown={this.initDrag}>
                    <span id={this.id + '_label'} className="p-dialog-title">{this.props.header}</span>
                    <div className="p-dialog-titlebar-icons">
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
            <div ref={(el) => this.contentElement = el} className="p-dialog-content" style={this.props.contentStyle}>
                {this.props.children}
            </div>
        );
    }

    renderFooter() {
        if (this.props.footer) {
            return (
                <div ref={(el) => { this.footerElement = el; }} className="p-dialog-footer">{this.props.footer}</div>
            );
        }
        else {
            return null;
        }
    }

    renderResizer() {
        if (this.props.resizable) {
            return (
                <div className="p-resizable-handle" onMouseDown={this.initResize}></div>
            );
        }
        else {
            return null;
        }
    }

    renderElement() {
        const className = classNames('p-dialog p-component', this.props.className, {
            'p-dialog-rtl': this.props.rtl,
            'p-dialog-draggable': this.props.draggable,
            'p-dialog-resizable': this.props.resizable
        });

        const style = Object.assign({
            display: this.props.visible ? 'block': 'none',
            width: this.props.width,
            height: this.props.height,
            minWidth: this.props.minWidth
        }, this.props.style);

        const header = this.renderHeader();
        const content = this.renderContent();
        const footer = this.renderFooter();
        const resizer = this.renderResizer();

        return (
            <div id={this.id} className={className} style={style} ref={(el) => { this.container = el; }} aria-labelledby={this.id + '_label'} role="dialog">
                {header}
                {content}
                {footer}
                {resizer}
            </div>
        );
    }

    render() {
        if (this.props.visible) {
            const element = this.renderElement();
    
            if (this.props.appendTo)
                return ReactDOM.createPortal(element, this.props.appendTo);
            else
                return element;
        }
        else {
            return null;
        }
    }
}