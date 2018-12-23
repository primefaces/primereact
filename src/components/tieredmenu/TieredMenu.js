import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import {TieredMenuSub} from './TieredMenuSub';

export class TieredMenu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
        appendTo: null,
        onShow: null,
        onHide: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        popup: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        autoZIndex: PropTypes.bool,
        baseZIndex: PropTypes.number,
        appendTo: PropTypes.any,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    toggle(event) {
        if (this.props.popup) {
            if (this.container.offsetParent)
                this.hide(event);
            else
                this.show(event);
        }
    }

    show(event) {
        if (this.props.autoZIndex) {
            this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
        this.container.style.display = 'block';
        
        setTimeout(() => {
            DomHandler.addClass(this.container, 'p-menu-overlay-visible');
            DomHandler.removeClass(this.container, 'p-menu-overlay-hidden');
        }, 1);

        DomHandler.absolutePosition(this.container,  event.currentTarget);
        this.bindDocumentListeners();
        
        if (this.props.onShow) {
            this.props.onShow(event);
        }
    }

    hide(event) {
        if (this.container) {
            DomHandler.addClass(this.container, 'p-menu-overlay-hidden');
            DomHandler.removeClass(this.container, 'p-menu-overlay-visible');

            setTimeout(() => {
                if (this.container) {
                    this.container.style.display = 'none';
                    DomHandler.removeClass(this.container, 'p-menu-overlay-hidden');
                }
            }, 150);
        }

        if (this.props.onHide) {
            this.props.onHide(event);
        }

        this.unbindDocumentListeners();
    }

    bindDocumentListeners() {
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
    }
    
    unbindDocumentListeners() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.props.popup && !this.container.contains(event.target)) {
                    this.hide(event);
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    bindDocumentResizeListener() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = (event) => {
                if (this.container.offsetParent) {
                    this.hide(event);
                }
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentResizeListener() {
        if(this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
    }

    renderElement() {
        const className = classNames('p-tieredmenu p-component', {'p-tieredmenu-dynamic p-menu-overlay': this.props.popup}, this.props.className);

        return(
            <div ref={el => this.container = el} id={this.props.id} className={className} style={this.props.style}>
                <TieredMenuSub model={this.props.model} root={true} popup={this.props.popup} />
            </div>
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