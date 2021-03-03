import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import { TieredMenuSub } from './TieredMenuSub';
import { CSSTransition } from 'react-transition-group';
import UniqueComponentId from '../utils/UniqueComponentId';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

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
            visible: !props.popup
        };

        this.onEnter = this.onEnter.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);

        this.id = this.props.id || UniqueComponentId();
        this.menuRef = React.createRef();
    }

    onPanelClick(event) {
        if (this.props.popup) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.target
            });
        }
    }

    toggle(event) {
        if (this.props.popup) {
            if (this.state.visible)
                this.hide(event);
            else
                this.show(event);
        }
    }

    show(event) {
        this.target = event.currentTarget;
        let currentEvent = event;

        this.setState({ visible: true }, () => {
            if (this.props.onShow) {
                this.props.onShow(currentEvent);
            }
        });
    }

    hide(event) {
        let currentEvent = event;
        this.setState({ visible: false }, () => {
            if (this.props.onHide) {
                this.props.onHide(currentEvent);
            }
        });
    }

    onEnter() {
        if (this.props.autoZIndex) {
            this.menuRef.current.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
        DomHandler.absolutePosition(this.menuRef.current, this.target);
    }

    onEntered() {
        this.bindDocumentListeners();
        this.bindScrollListener();
    }

    onExit() {
        this.target = null;
        this.unbindDocumentListeners();
        this.unbindScrollListener();
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
                if (this.props.popup && this.state.visible && this.menuRef.current && !this.menuRef.current.contains(event.target)) {
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
                if (this.state.visible) {
                    this.hide(event);
                }
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, (event) => {
                if (this.state.visible) {
                    this.hide(event);
                }
            });
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    }

    renderElement() {
        const className = classNames('p-tieredmenu p-component', { 'p-tieredmenu-overlay': this.props.popup }, this.props.className);

        return (
            <CSSTransition nodeRef={this.menuRef} classNames="p-connected-overlay" in={this.state.visible} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExit={this.onExit}>
                <div ref={this.menuRef} id={this.id} className={className} style={this.props.style} onClick={this.onPanelClick}>
                    <TieredMenuSub model={this.props.model} root popup={this.props.popup} />
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
