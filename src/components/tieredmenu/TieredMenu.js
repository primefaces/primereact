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

    constructor(props) {
        super(props);
        this.state = {
            resetMenu: false
        }
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onLeafClick = this.onLeafClick.bind(this);
        this.onMenuMouseEnter = this.onMenuMouseEnter.bind(this);
    }

    componentDidMount() {
        this.bindDocumentClickListener();
    }

    toggle(event) {
        if (this.props.popup) {
            this.targetClick = true;

            this.setState({
                resetMenu: true
            });

            if (this.container.offsetParent)
                this.hide(event);
            else
                this.show(event);
        }
    }

    onMenuClick() {
        this.selfClick = true;

        this.setState({
            resetMenu: false
        });

        if (!this.props.popup && this.props.autoZIndex) {
            this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
    }

    onMenuMouseEnter() {
        this.setState({
            resetMenu: false
        });
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
        this.bindDocumentResizeListener();
        
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

        this.unbindDocumentResizeListener();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (!this.targetClick && !this.selfClick) {
                    if (this.props.popup) {
                        this.hide(event);
                    }
                    
                    this.setState({
                        resetMenu: true
                    });
                }

                this.selfClick = false;
                this.targetClick = false;
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    onLeafClick(event) {
        this.setState({
            resetMenu: true
        });

        event.stopPropagation();
    }

    bindDocumentResizeListener() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = (event) => {
                if(this.container.offsetParent) {
                    this.hide(event);
                }
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    unbindDocumentResizeListener() {
        if(this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
    }

    renderElement() {
        const className = classNames('p-tieredmenu p-component', {'p-tieredmenu-dynamic p-menu-overlay': this.props.popup}, this.props.className);

        return(
            <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container = el} onClick={this.onMenuClick} onMouseEnter={this.onMenuMouseEnter}>
                <TieredMenuSub model={this.props.model} root={true} resetMenu={this.state.resetMenu} onLeafClick={this.onLeafClick} popup={this.props.popup} />
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