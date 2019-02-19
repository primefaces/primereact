import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class OverlayPanel extends Component {
    
    static defaultProps = {
        id: null,
        dismissable: true,
        showCloseIcon: false,
        style: null,
        className: null,
        appendTo: null,
        onHide: null
    }

    static propTypes = {
        id: PropTypes.string,
        dismissable: PropTypes.bool,
        showCloseIcon: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        appendTo: PropTypes.any,
        onHide: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
    }
    
    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = this.onDocumentClick.bind(this);
            document.addEventListener('click', this.documentClickListener);
        }
    }
    
    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
    }

    onDocumentClick() {
        if(!this.selfClick && !this.targetEvent) {
            this.hide();
        }
        
        this.selfClick = false;
        this.targetEvent = false;
    }

    onPanelClick() {
        if(this.props.dismissable) {
            this.selfClick = true;
        }
    }

    onCloseClick(event) {
        this.hide();
        
        if(this.dismissable) {
            this.selfClick = true;
        }
        
        event.preventDefault();
    }

    toggle(event, target) {
        let currentTarget = (target||event.currentTarget||event.target);
                                
        if(this.isVisible())
            this.hide();
        else
            this.show(currentTarget);
    }

    show(target) {
        if(this.props.dismissable) {
            if(this.documentClickListener) {
                this.targetEvent = true;
            }
            
            this.bindDocumentClickListener();
        }
        
        this.container.style.zIndex = String(DomHandler.generateZIndex());

        if(this.isVisible()) {
            this.align(target);
        }
        else {
            this.container.style.display = 'block';
            this.align(target);
            DomHandler.fadeIn(this.container, 250);
        }
    }

    align(target) {
        DomHandler.absolutePosition(this.container, target);

        if (DomHandler.getOffset(this.container).top < DomHandler.getOffset(target).top) {
            DomHandler.addClass(this.container, 'p-overlaypanel-flipped');
        }
    }

    hide() {
        if (this.isVisible()) {
            this.container.style.display = 'none';
            this.unbindDocumentClickListener();

            if (this.props.onHide) {
                this.props.onHide();
            }
        }
    }

    isVisible() {
        return this.container && this.container.offsetParent;
    }

    renderCloseIcon() {
        if(this.props.showCloseIcon) {
            return (
                <button className="p-overlaypanel-close p-link" onClick={this.onCloseClick}>
                    <span className="p-overlaypanel-close-icon pi pi-times"></span>
                </button>
            );
        }
        else {
            return null;
        }
    }

    renderElement() {
        let className = classNames('p-overlaypanel p-component', this.props.className);
        let closeIcon = this.renderCloseIcon();

        return (
            <div id={this.props.id} className={className} style={this.props.style}
                onClick={this.onPanelClick} ref={el => this.container = el}>
                <div className="p-overlaypanel-content">
                    {this.props.children}
                </div>
                {closeIcon}
            </div>
        );
    }

    render() {
        let element = this.renderElement();

        if (this.props.appendTo) {
            return ReactDOM.createPortal(element, this.props.appendTo);
        }
        else {
            return element;
        }
    }
}