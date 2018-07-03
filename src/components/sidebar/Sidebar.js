import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class Sidebar extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        visible: false,
        position: 'left',
        fullScreen: false,
        blockScroll: false,
        baseZIndex: 0,
        onShow: null,
        onHide: null
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        visible: PropTypes.bool,
        position: PropTypes.string,
        fullScreen: PropTypes.bool,
        blockScroll: PropTypes.bool,
        baseZIndex: PropTypes.number,
        onShow: PropTypes.func,
        onHide: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    componentDidMount() {
        if (this.props.visible) {
            this.show();
        }
    }

    componentWillUnmount() {
        this.unbindMaskClickListener();
        this.disableModality();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.visible !== this.props.visible) {
            if (this.props.visible)
                this.onShow();
            else
                this.onHide();
        }
    }

    onShow() {
        this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        this.enableModality();

        if (this.props.onShow) {
            this.props.onShow();
        }
    }

    enableModality() {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
            DomHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-sidebar-mask');
            this.maskClickListener = (event) => {
                this.onCloseClick(event);
            };
            this.mask.addEventListener('click', this.maskClickListener);
            document.body.appendChild(this.mask);
            if (this.props.blockScroll) {
                DomHandler.addClass(document.body, 'ui-overflow-hidden');
            }
        }
    }

    disableModality() {
        if (this.mask) {
            this.unbindMaskClickListener();
            document.body.removeChild(this.mask);
            if(this.props.blockScroll) {
                DomHandler.removeClass(document.body, 'ui-overflow-hidden');
            }
            this.mask = null;
        }
    }

    onCloseClick(event) {
        this.props.onHide();
        event.preventDefault();
    }

    onHide() {
        this.unbindMaskClickListener();
        this.disableModality();
    }

    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.mask.removeEventListener('click', this.maskClickListener);
            this.maskClickListener = null;
        }
    }

    render() {
        const className = classNames('ui-sidebar ui-widget ui-widget-content ui-shadow', this.props.className, 'ui-sidebar-' + this.props.position,
                                       {'ui-sidebar-active': this.props.visible, 'ui-sidebar-full': this.props.fullScreen});

        return (
            <div ref={(el) => this.container=el} id={this.props.id} className={className} style={this.props.style}>
                <a className="ui-sidebar-close ui-corner-all" role="button" onClick={this.onCloseClick}>
                    <span className="pi pi-times"/>
                </a>
                {this.props.children}
            </div>
        );
    }
}