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
        onHide: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {visible: this.props.visible};
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        if(this.state.visible) {
            this.show();
        }
    }

    componentWillUnmount() {
        this.disableModality();
        this.unbindMaskClickListener();
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

    show(){
        this.setState({visible: true});
        this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.getZindex());
        this.enableModality();
        if(this.props.onShow) {
            this.props.onShow();
        }
    }

    enableModality() {
        if(!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex,10) - 1);
            DomHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-sidebar-mask');

            this.maskClickListener = (event) => {
                this.onClose(event);
            };
            this.mask.addEventListener('click', this.maskClickListener);
            document.body.appendChild(this.mask);
            if(this.props.blockScroll) {
                DomHandler.addClass(document.body, 'ui-overflow-hidden');
            }
        }
    }

    onClose(event) {
        this.hide();
        event.preventDefault();
    }

    hide() {
        this.setState({visible:false});
        this.unbindMaskClickListener();
        this.disableModality();
        if(this.props.onHide) {
            this.props.onHide();
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

    render() {
        let containerClass = classNames('ui-sidebar ui-widget ui-widget-content ui-shadow', this.props.className, 'ui-sidebar-' + this.props.position,
                                       {'ui-sidebar-active': this.state.visible, 'ui-sidebar-full': this.props.fullScreen});

        return (
            <div ref={(el) => this.container=el} id={this.props.id} className={containerClass} style={this.props.style}>
                <a className={'ui-sidebar-close ui-corner-all'} role="button" onClick={this.onClose}>
                    <span className="fa fa-fw fa-close"/>
                </a>
                {this.props.children}
            </div>
        );
    }
}