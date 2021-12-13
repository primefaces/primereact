import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DomHandler, ObjectUtils, ZIndexUtils, classNames } from '../utils/Utils';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Ripple } from '../ripple/Ripple';
import { Portal } from '../portal/Portal';
import PrimeReact from '../api/Api';

export class Sidebar extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        maskStyle: null,
        maskClassName: null,
        visible: false,
        position: 'left',
        fullScreen: false,
        blockScroll: false,
        baseZIndex: 0,
        dismissable: true,
        showCloseIcon: true,
        ariaCloseLabel: 'close',
        closeOnEscape: true,
        icons: null,
        modal: true,
        appendTo: null,
        transitionOptions: null,
        onShow: null,
        onHide: null
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        maskStyle: PropTypes.object,
        maskClassName: PropTypes.string,
        visible: PropTypes.bool,
        position: PropTypes.string,
        fullScreen: PropTypes.bool,
        blockScroll: PropTypes.bool,
        baseZIndex: PropTypes.number,
        dismissable: PropTypes.bool,
        showCloseIcon: PropTypes.bool,
        ariaCloseLabel: PropTypes.string,
        closeOnEscape: PropTypes.bool,
        icons: PropTypes.any,
        modal: PropTypes.bool,
        appendTo: PropTypes.any,
        transitionOptions: PropTypes.object,
        onShow: PropTypes.func,
        onHide: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            maskVisible: props.visible,
            visible: false
        }

        this.onMaskClick = this.onMaskClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

        this.sidebarRef = React.createRef();
    }

    getPositionClass() {
        const positions = ['left', 'right', 'top', 'bottom'];
        const pos = positions.find(item => item === this.props.position);

        return pos ? `p-sidebar-${pos}` : '';
    }

    focus() {
        let activeElement = document.activeElement;
        let isActiveElementInDialog = activeElement && this.sidebarRef && this.sidebarRef.current.contains(activeElement);
        if (!isActiveElementInDialog && this.props.showCloseIcon) {
            this.closeIcon.focus();
        }
    }

    onMaskClick(event) {
        if (this.props.dismissable && this.props.modal && this.mask === event.target) {
            this.onClose(event);
        }
    }

    onClose(event) {
        this.props.onHide();
        event.preventDefault();
    }

    onEntered() {
        if (this.props.onShow) {
            this.props.onShow();
        }

        this.focus();

        this.enableDocumentSettings();
    }

    onExiting() {
        if (this.props.modal) {
            DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        }
    }

    onExited() {
        ZIndexUtils.clear(this.mask);
        this.setState({ maskVisible: false });
        this.disableDocumentSettings();
    }

    enableDocumentSettings() {
        this.bindGlobalListeners();

        if (this.props.blockScroll) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }

    disableDocumentSettings() {
        this.unbindGlobalListeners();

        if (this.props.blockScroll) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }

    bindGlobalListeners() {
        if (this.props.closeOnEscape) {
            this.bindDocumentEscapeListener();
        }
    }

    unbindGlobalListeners() {
        this.unbindDocumentEscapeListener();
    }

    bindDocumentEscapeListener() {
        this.documentEscapeListener = (event) => {
            if (event.which === 27) {
                if (ZIndexUtils.get(this.mask) === ZIndexUtils.getCurrent('modal', PrimeReact.autoZIndex)) {
                    this.onClose(event);
                }
            }
        };
        document.addEventListener('keydown', this.documentEscapeListener);
    }

    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            document.removeEventListener('keydown', this.documentEscapeListener);
            this.documentEscapeListener = null;
        }
    }

    componentDidMount() {
        if (this.props.visible) {
            this.setState({ visible: true }, () => {
                ZIndexUtils.set('modal', this.mask, PrimeReact.autoZIndex, this.props.baseZIndex || PrimeReact.zIndex['modal']);
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.visible && !this.state.maskVisible) {
            this.setState({ maskVisible: true }, () => {
                ZIndexUtils.set('modal', this.mask, PrimeReact.autoZIndex, this.props.baseZIndex || PrimeReact.zIndex['modal']);
            });
        }

        if (this.props.visible !== this.state.visible && this.state.maskVisible) {
            this.setState({
                visible: this.props.visible
            });
        }
    }

    componentWillUnmount() {
        this.disableDocumentSettings();

        ZIndexUtils.clear(this.mask);
    }

    renderCloseIcon() {
        if (this.props.showCloseIcon) {
            return (
                <button type="button" ref={el => this.closeIcon = el} className="p-sidebar-close p-sidebar-icon p-link" onClick={this.onClose} aria-label={this.props.ariaCloseLabel}>
                    <span className="p-sidebar-close-icon pi pi-times" />
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderIcons() {
        if (this.props.icons) {
            return ObjectUtils.getJSXElement(this.props.icons, this.props);
        }

        return null;
    }

    renderElement() {
        const className = classNames('p-sidebar p-component', this.props.className);
        const maskClassName = classNames('p-sidebar-mask', {
            'p-component-overlay p-component-overlay-enter': this.props.modal,
            'p-sidebar-mask-scrollblocker': this.props.blockScroll,
            'p-sidebar-visible': this.state.maskVisible,
            'p-sidebar-full': this.props.fullScreen
        }, this.props.maskClassName, this.getPositionClass());

        const closeIcon = this.renderCloseIcon();
        const icons = this.renderIcons();

        const transitionTimeout = {
            enter: this.props.fullScreen ? 150 : 300,
            exit: this.props.fullScreen ? 150 : 300
        };

        return (
            <div ref={(el) => this.mask = el} style={this.props.maskStyle} className={maskClassName} onClick={this.onMaskClick}>
                <CSSTransition nodeRef={this.sidebarRef} classNames="p-sidebar" in={this.state.visible} timeout={transitionTimeout} options={this.props.transitionOptions}
                    unmountOnExit onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
                    <div ref={this.sidebarRef} id={this.props.id} className={className} style={this.props.style} role="complementary">
                        <div className="p-sidebar-header">
                            {icons}
                            {closeIcon}
                        </div>
                        <div className="p-sidebar-content">
                            {this.props.children}
                        </div>
                    </div>
                </CSSTransition>
            </div>
        );
    }

    render() {
        if (this.state.maskVisible) {
            const element = this.renderElement();

            return <Portal element={element} appendTo={this.props.appendTo} visible />;
        }

        return null;
    }
}
