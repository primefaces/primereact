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
        ariaCloseLabel: 'close',
        onHide: null
    }

    static propTypes = {
        id: PropTypes.string,
        dismissable: PropTypes.bool,
        showCloseIcon: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        appendTo: PropTypes.any,
        ariaCloseLabel: PropTypes.string,
        onHide: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    bindDocumentClickListener() {
        if(!this.documentClickListener && this.props.dismissable) {
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

    onDocumentClick(event) {
        if(!this.container.contains(event.target) && this.target && this.target !== event.target && !this.target.contains(event.target)) {
            this.hide();
        }
    }

    onCloseClick(event) {
        this.hide();

        event.preventDefault();
    }

    toggle(event, target) {
        if (this.isVisible()) {
            this.hide();

            if (this.hasTargetChanged(event, target)) {
                this.target = target||event.currentTarget||event.target;

                setTimeout(() => {
                    this.show(event, this.target);
                }, 200);
            }
        }
        else {
            this.show(event, target);
        }
    }

    show(event, target) {
        this.target = target||event.currentTarget||event.target;

        this.bindDocumentClickListener();

        this.container.style.zIndex = String(DomHandler.generateZIndex());

        if(this.isVisible()) {
            this.align();
        }
        else {
            this.container.style.display = 'block';
            this.align();
            DomHandler.fadeIn(this.container, 250);
        }
    }

    align() {
        if (this.target) {
            DomHandler.absolutePosition(this.container, this.target);

            if (DomHandler.getOffset(this.container).top < DomHandler.getOffset(this.target).top) {
                DomHandler.addClass(this.container, 'p-overlaypanel-flipped');
            }
        }
    }

    hide() {
        if (this.isVisible()) {
            this.container.style.display = 'none';
            DomHandler.removeClass(this.container, 'p-overlaypanel-flipped');
            this.unbindDocumentClickListener();

            if (this.props.onHide) {
                this.props.onHide();
            }
        }
    }

    isVisible() {
        return this.container && this.container.offsetParent;
    }

    hasTargetChanged(event, target) {
        return this.target != null && this.target !== (target||event.currentTarget||event.target);
    }

    renderCloseIcon() {
        if(this.props.showCloseIcon) {
            return (
                <button type="button" className="p-overlaypanel-close p-link" onClick={this.onCloseClick} aria-label={this.props.ariaCloseLabel}>
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
            <div ref={el => this.container = el} id={this.props.id} className={className} style={this.props.style}>
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
