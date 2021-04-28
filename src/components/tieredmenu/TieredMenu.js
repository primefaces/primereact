import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import { TieredMenuSub } from './TieredMenuSub';
import { CSSTransition } from '../transition/CSSTransition';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { Portal } from '../portal/Portal';
import { ZIndexUtils } from '../utils/ZIndexUtils';

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
        transitionOptions: null,
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
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        transitionOptions: PropTypes.object,
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
        this.onExited = this.onExited.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);

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
            ZIndexUtils.set('menu', this.menuRef.current, this.props.baseZIndex);
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

    onExited() {
        ZIndexUtils.clear(this.menuRef.current);
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
                if (this.state.visible && !DomHandler.isAndroid()) {
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

        ZIndexUtils.clear(this.menuRef.current);
    }

    renderElement() {
        const className = classNames('p-tieredmenu p-component', { 'p-tieredmenu-overlay': this.props.popup }, this.props.className);

        return (
            <CSSTransition nodeRef={this.menuRef} classNames="p-connected-overlay" in={this.state.visible} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExit={this.onExit} onExited={this.onExited}>
                <div ref={this.menuRef} id={this.props.id} className={className} style={this.props.style} onClick={this.onPanelClick}>
                    <TieredMenuSub model={this.props.model} root popup={this.props.popup} />
                </div>
            </CSSTransition>
        );
    }

    render() {
        const element = this.renderElement();

        return this.props.popup ? <Portal element={element} appendTo={this.props.appendTo} /> : element;
    }
}
