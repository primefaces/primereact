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
        modal: false,
        onHide: null,
        onShow: null,
        draggable: true,
        resizable: true,
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
        appendTo: null
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
        appendTo: PropTypes.object
    };
    
    constructor(props) {
        super(props);
        this.state = {visible: props.visible};
        this.onClose = this.onClose.bind(this);
        this.initDrag = this.initDrag.bind(this);
        this.endDrag = this.endDrag.bind(this);
        this.moveOnTop = this.moveOnTop.bind(this);
        this.onCloseMouseDown = this.onCloseMouseDown.bind(this);
        this.initResize = this.initResize.bind(this);
    }

    componentWillMount() {
        this.id = this.props.id || UniqueComponentId();
    }

    positionOverlay() {
        let viewport = DomHandler.getViewport();
        if(DomHandler.getOuterHeight(this.container) > viewport.height) {
             this.content.style.height = (viewport.height * .75) + 'px';
        }
        
        if(this.props.positionLeft >= 0 && this.props.positionTop >= 0) {
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
        this.hide();
        event.preventDefault();
    }

    hide() {
        this.setState({visible:false});

        this.props.onHide();   
        this.unbindMaskClickListener();
        this.unbindGlobalListeners();     

        if(this.props.modal) {
            this.disableModality();
        }
    }

    show() {
        this.setState({visible: true});
        
        let zIndex = DomHandler.getZindex() ;
        this.container.style.zIndex = String(zIndex);
        
        this.bindGlobalListeners();
        
        if(this.props.modal) {
            this.enableModality();
        }
        
        if(this.props.onShow) {
            this.props.onShow();
        }
        
        this.positionOverlay();
        DomHandler.fadeIn(this.container, 250);
    }

    center() {
        var elementWidth = DomHandler.getOuterWidth(this.container);
        var elementHeight = DomHandler.getOuterHeight(this.container);
        if(elementWidth === 0 && elementHeight === 0) {
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
        if(!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
            DomHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');

            if(this.props.closable && this.props.dismissableMask) {
                this.maskClickListener = (event) => {
                   this.onClose(event);
                };

                this.mask.addEventListener('click', this.maskClickListener);
            }
            document.body.appendChild(this.mask);
            if(this.props.blockScroll) {
                DomHandler.addClass(document.body, 'ui-overflow-hidden');
            }
        }
    }

    disableModality() {
        if(this.mask) {
            document.body.removeChild(this.mask);
            if(this.props.blockScroll) {
                DomHandler.removeClass(document.body, 'ui-overflow-hidden');
            }
            this.mask = null;
        }
    }

    unbindMaskClickListener() {
        if(this.maskClickListener) {
            this.mask.removeEventListener('click', this.maskClickListener);
            this.maskClickListener = null;
		}
    }

    moveOnTop() {
        let zIndex = DomHandler.getZindex();
        this.container.style.zIndex = String(zIndex);
    }

    onCloseMouseDown(event) {
        this.closeIconMouseDown = true;
    }

    initDrag(event) {
        if(this.closeIconMouseDown) {
            this.closeIconMouseDown = false;
            return;
        }

        if(this.props.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }

    onDrag(event) {
        if(this.dragging) {
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var leftPos = parseFloat(this.container.style.left);
            var topPos = parseFloat(this.container.style.top);

            this.container.style.left = leftPos + deltaX + 'px';
            this.container.style.top = topPos + deltaY + 'px';
            
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }

    endDrag(event) {
        if(this.props.draggable) {
            this.dragging = false;
        }
    }

    initResize(event) {
        if(this.props.resizable) {
            this.preWidth = null;
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    
    onResize(event) {
        if(this.resizing) {
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let containerWidth = DomHandler.getOuterWidth(this.container);
            let containerHeight = DomHandler.getOuterHeight(this.container);
            let contentHeight = DomHandler.getOuterHeight(this.content);
            let newWidth = containerWidth + deltaX;
            let newHeight = containerHeight + deltaY;

            if(newWidth > this.props.minWidth) {
                this.container.style.width = newWidth + 'px';
            }
                
            if(newHeight > this.props.minHeight) {
                this.container.style.height = newHeight + 'px';
                this.content.style.height = contentHeight + deltaY + 'px';
            }

            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    
    bindGlobalListeners() {
        if(this.props.draggable) {
            this.bindDocumentDragListener();
        }
        
        if(this.props.resizable) {
            this.bindDocumentResizeListeners();
        }
        
        if(this.props.responsive) {
            this.bindDocumentResponsiveListener();
        }
        
        if(this.props.closeOnEscape && this.props.closable) {
            this.bindDocumentEscapeListener();
        }
    }
    
    unbindGlobalListeners() {
        this.unbindDocumentDragListener();
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
        if(this.documentDragListener) {
            document.removeEventListener('mousemove', this.documentDragListener);
            this.documentDragListener = null;
        }
    }
    
    bindDocumentResizeListeners() {
        this.documentResizeListener = (event) => {
            this.onResize(event);
        };
        
        this.documentResizeEndListener = (event) => {
            if(this.resizing) {
                this.resizing = false;
            }
        };

        document.addEventListener('mousemove', this.documentResizeListener);
        document.addEventListener('mouseup', this.documentResizeEndListener);
    }
    
    unbindDocumentResizeListeners() {
        if(this.documentResizeListener && this.documentResizeEndListener) {
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
            if(viewport.width <= this.props.breakpoint) {
                if(!this.preWidth) {
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
        if(this.documentResponsiveListener) {
            window.removeEventListener('resize', this.documentResponsiveListener);
            this.documentResponsiveListener = null;
        }
    }
    
    bindDocumentEscapeListener() {
        this.documentEscapeListener = (event) => {
            if(event.which === 27) {
                if(parseInt(this.container.style.zIndex, 10) === DomHandler.getZindex()) {
                    this.onClose(event);
                }
            }
        };
        document.addEventListener('keydown', this.documentEscapeListener);
    }
    
    unbindDocumentEscapeListener() {
        if(this.documentEscapeListener) {
            document.removeEventListener('keydown', this.documentEscapeListener);
            this.documentEscapeListener = null;
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.visible !== nextProps.visible) {
            if (nextProps.visible)
                this.show();
            else {
                if(this.preventVisibleChangePropagation)
                    this.preventVisibleChangePropagation = false;
                else
                    this.hide();
            }
        }
    }

    componentDidMount() {
        if(this.state.visible) {
            this.show();
        }
    }

    componentWillUnmount() {
        this.disableModality();
        this.unbindGlobalListeners();
		this.unbindMaskClickListener();
    }

    renderCloseIcon() {
        if(this.props.closable) {
            return (
                <a role="button" className="ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all" onClick={this.onClose} onMouseDown={this.onCloseMouseDown}>
                    <span className="fa fa-fw fa-close"></span>
                </a>
            );
        }
        else {
            return null;
        }
    }

    renderHeader() {
        if(this.props.showHeader) {
            let closeIcon = this.renderCloseIcon();

            return (
                <div className="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top" onMouseDown={this.initDrag} onMouseUp={this.endDrag}>
                    <span id={this.id + '_label'} className="ui-dialog-title">{this.props.header}</span>
                    {closeIcon}
                </div>
            );
        }
        else {
            return null;
        }
    }

    renderContent() {
        return (
            <div ref={(el) => this.content = el} className="ui-dialog-content ui-widget-content" style={this.props.contentStyle}>
                {this.props.children}
            </div>
        );
    }

    renderFooter() {
        if(this.props.footer) {
            return (
                <div className="ui-dialog-footer ui-widget-content">{this.props.footer}</div>
            );
        }
        else {
            return null;
        }
    }

    renderResizer() {
        if(this.props.resizable) {
            return (
                <div className="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style={{ 'zIndex': '90' }} onMouseDown={this.initResize}></div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow', this.props.className, {
            'ui-dialog-rtl': this.props.rtl,
            'ui-dialog-draggable': this.props.draggable
        });

        let style = Object.assign({
            display: this.state.visible ? 'block': 'none',
            width: this.props.width,
            height: this.props.height,
            minWidth: this.props.minWidth
        }, this.props.style);

        let header = this.renderHeader();
        let content = this.renderContent();
        let footer = this.renderFooter();
        let resizer = this.renderResizer();

        let element = (
            <div id={this.id} className={className} style={style} ref={(el) => { this.container = el; }} onMouseDown={this.moveOnTop} aria-labelledby={this.id + '_label'} role="dialog">
                {header}
                {content}
                {footer}
                {resizer}
            </div>
        );

        if(this.props.appendTo) {
            return ReactDOM.createPortal(element, this.props.appendTo);
        }
        else {
            return element;
        }
        
    }
}