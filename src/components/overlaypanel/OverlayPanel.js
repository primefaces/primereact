import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import { CSSTransition } from 'react-transition-group';
import { Ripple } from '../ripple/Ripple';
import UniqueComponentId from '../utils/UniqueComponentId';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

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

        this.state = {
            visible: false
        };

        this.onCloseClick = this.onCloseClick.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExit = this.onExit.bind(this);

        this.id = this.props.id || UniqueComponentId();
        this.overlayRef = React.createRef();
    }

    bindDocumentClickListener() {
        if(!this.documentClickListener && this.props.dismissable) {
            this.documentClickListener = (event) => {
                if (!this.isPanelClicked && this.isOutsideClicked(event.target)) {
                    this.hide();
                }

                this.isPanelClicked = false;
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
                if (this.state.visible) {
                    this.hide();
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

    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.state.visible) {
                    this.hide();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }

    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }

    isOutsideClicked(target) {
        return this.overlayRef && this.overlayRef.current && !(this.overlayRef.current.isSameNode(target) || this.overlayRef.current.contains(target));
    }

    hasTargetChanged(event, target) {
        return this.target != null && this.target !== (target||event.currentTarget||event.target);
    }

    onCloseClick(event) {
        this.hide();

        event.preventDefault();
    }

    onPanelClick(event) {
        this.isPanelClicked = true;

        OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.target
        });
    }

    toggle(event, target) {
        if (this.state.visible) {
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

        if (this.state.visible) {
            this.align();
        }
        else {
            this.setState({ visible: true }, () => {
                OverlayEventBus.on('overlay-click', (e) => {
                    if (!this.isOutsideClicked(e.target)) {
                        this.isPanelClicked = true;
                    }
                });
            });
        }
    }

    hide() {
        this.setState({ visible: false }, () => {
            OverlayEventBus.off('overlay-click');

            if (this.props.onHide) {
                this.props.onHide();
            }
        });
    }

    onEnter() {
        this.overlayRef.current.style.zIndex = String(DomHandler.generateZIndex());
        this.align();
    }

    onEntered() {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
    }

    onExit() {
        this.unbindDocumentClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    align() {
        if (this.target) {
            DomHandler.absolutePosition(this.overlayRef.current, this.target);

            const containerOffset = DomHandler.getOffset(this.overlayRef.current);
            const targetOffset = DomHandler.getOffset(this.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }
            this.overlayRef.current.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                DomHandler.addClass(this.overlayRef.current, 'p-overlaypanel-flipped');
            }
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    }

    renderCloseIcon() {
        if(this.props.showCloseIcon) {
            return (
                <button type="button" className="p-overlaypanel-close p-link" onClick={this.onCloseClick} aria-label={this.props.ariaCloseLabel}>
                    <span className="p-overlaypanel-close-icon pi pi-times"></span>
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderElement() {
        let className = classNames('p-overlaypanel p-component', this.props.className);
        let closeIcon = this.renderCloseIcon();

        return (
            <CSSTransition nodeRef={this.overlayRef} classNames="p-overlaypanel" in={this.state.visible} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExit={this.onExit}>
                <div ref={this.overlayRef} id={this.id} className={className} style={this.props.style} onClick={this.onPanelClick}>
                    <div className="p-overlaypanel-content">
                        {this.props.children}
                    </div>
                    {closeIcon}
                </div>
            </CSSTransition>
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
