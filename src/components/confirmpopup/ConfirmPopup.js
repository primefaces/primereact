import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { Button } from '../button/Button';
import { CSSTransition } from '../transition/CSSTransition';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { localeOption } from '../api/Locale';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { Portal } from '../portal/Portal';
import { ZIndexUtils } from '../utils/ZIndexUtils';

export function confirmPopup(props) {
    let appendTo = props.appendTo || document.body;

    let confirmPopupWrapper = document.createDocumentFragment();
    DomHandler.appendChild(confirmPopupWrapper, appendTo);

    props = {...props, ...{visible: props.visible === undefined ? true : props.visible}};

    let confirmPopupEl = React.createElement(ConfirmPopup, props);
    ReactDOM.render(confirmPopupEl, confirmPopupWrapper);

    let updateConfirmPopup = (newProps) => {
        props = { ...props, ...newProps };
        ReactDOM.render(React.cloneElement(confirmPopupEl, props), confirmPopupWrapper);
    };

    return {
        _destroy: () => {
            ReactDOM.unmountComponentAtNode(confirmPopupWrapper);
        },
        show: () => {
            updateConfirmPopup({ visible: true, onHide: () => {
                updateConfirmPopup({ visible: false }); // reset
            }});
        },
        hide: () => {
            updateConfirmPopup({ visible: false });
        },
        update: (newProps) => {
            updateConfirmPopup(newProps);
        }
    }
}

export class ConfirmPopup extends Component {

    static defaultProps = {
        target: null,
        visible: false,
        message: null,
        rejectLabel: null,
        acceptLabel: null,
        icon: null,
        rejectIcon: null,
        acceptIcon: null,
        rejectClassName: null,
        acceptClassName: null,
        className: null,
        style: null,
        appendTo: null,
        dismissable: true,
        footer: null,
        onShow: null,
        onHide: null,
        accept: null,
        reject: null,
        transitionOptions: null
    }

    static propTypes = {
        target: PropTypes.any,
        visible: PropTypes.bool,
        message: PropTypes.any,
        rejectLabel: PropTypes.string,
        acceptLabel: PropTypes.string,
        icon: PropTypes.string,
        rejectIcon: PropTypes.string,
        acceptIcon: PropTypes.string,
        rejectClassName: PropTypes.string,
        acceptClassName: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        dismissable: PropTypes.bool,
        footer: PropTypes.any,
        onShow: PropTypes.func,
        onHide: PropTypes.func,
        accept: PropTypes.func,
        reject: PropTypes.func,
        transitionOptions: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.reject = this.reject.bind(this);
        this.accept = this.accept.bind(this);
        this.hide = this.hide.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onExited = this.onExited.bind(this);

        this.overlayRef = React.createRef();
    }

    acceptLabel() {
        return this.props.acceptLabel || localeOption('accept');
    }

    rejectLabel() {
        return this.props.rejectLabel || localeOption('reject');
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
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.props.target, () => {
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

    onCloseClick(event) {
        this.hide();

        event.preventDefault();
    }

    onPanelClick(event) {
        this.isPanelClicked = true;

        OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.props.target
        });
    }

    accept() {
        if (this.props.accept) {
            this.props.accept();
        }

        this.hide('accept');
    }

    reject() {
        if (this.props.reject) {
            this.props.reject();
        }

        this.hide('reject');
    }

    show() {
        this.setState({ visible: true }, () => {
            OverlayEventBus.on('overlay-click', (e) => {
                if (!this.isOutsideClicked(e.target)) {
                    this.isPanelClicked = true;
                }
            });
        });
    }

    hide(result) {
        this.setState({ visible: false }, () => {
            OverlayEventBus.off('overlay-click');

            if (this.props.onHide) {
                this.props.onHide(result);
            }
        });
    }

    onEnter() {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.align();
    }

    onEntered() {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        this.props.onShow && this.props.onShow();
    }

    onExit() {
        this.unbindDocumentClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    onExited() {
        ZIndexUtils.clear(this.overlayRef.current);
    }

    align() {
        if (this.props.target) {
            DomHandler.absolutePosition(this.overlayRef.current, this.props.target);

            const containerOffset = DomHandler.getOffset(this.overlayRef.current);
            const targetOffset = DomHandler.getOffset(this.props.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }
            this.overlayRef.current.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                DomHandler.addClass(this.overlayRef.current, 'p-confirm-popup-flipped');
            }
        }
    }

    componentDidMount() {
        if (this.props.visible) {
            this.setState({ visible: true });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.visible !== this.props.visible) {
            this.setState({ visible: this.props.visible });
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        ZIndexUtils.clear(this.overlayRef.current);
    }

    renderContent() {
        const iconClassName = classNames('p-confirm-popup-icon', this.props.icon);
        const message = ObjectUtils.getJSXElement(this.props.message, this.props);

        return (
            <div className="p-confirm-popup-content">
                <i className={iconClassName} />
                <span className="p-confirm-popup-message">{message}</span>
            </div>
        );
    }

    renderFooter() {
        const acceptClassName = classNames('p-confirm-popup-accept p-button-sm', this.props.acceptClassName);
        const rejectClassName = classNames('p-confirm-popup-reject p-button-sm', {
            'p-button-text': !this.props.rejectClassName
        }, this.props.rejectClassName);

        const content = this.props.footer ? ObjectUtils.getJSXElement(this.props.footer, this.props) : (
            <>
                <Button label={this.rejectLabel()} icon={this.props.rejectIcon} className={rejectClassName} onClick={this.reject} />
                <Button label={this.acceptLabel()} icon={this.props.acceptIcon} className={acceptClassName} onClick={this.accept} autoFocus />
            </>
        )

        return (
            <div className="p-confirm-popup-footer">
                {content}
            </div>
        )
    }

    renderElement() {
        const className = classNames('p-confirm-popup p-component', this.props.className);
        const content = this.renderContent();
        const footer = this.renderFooter();

        return (
            <CSSTransition nodeRef={this.overlayRef} classNames="p-connected-overlay" in={this.state.visible} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExit={this.onExit} onExited={this.onExited}>
                <div ref={this.overlayRef} id={this.props.id} className={className} style={this.props.style} onClick={this.onPanelClick}>
                    {content}
                    {footer}
                </div>
            </CSSTransition>
        );
    }

    render() {
        let element = this.renderElement();

        return <Portal element={element} appendTo={this.props.appendTo} visible />;
    }
}
