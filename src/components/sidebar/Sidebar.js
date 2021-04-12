import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { CSSTransition } from '../transition/CSSTransition';
import { Ripple } from '../ripple/Ripple';
import { ZIndexUtils } from '../utils/ZIndexUtils';

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
        dismissable: true,
        showCloseIcon: true,
        ariaCloseLabel: 'close',
        closeOnEscape: true,
        icons: null,
        modal: true,
        transitionOptions: null,
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
        dismissable: PropTypes.bool,
        showCloseIcon: PropTypes.bool,
        ariaCloseLabel: PropTypes.string,
        closeOnEscape: PropTypes.bool,
        icons: PropTypes.any,
        modal: PropTypes.bool,
        transitionOptions: PropTypes.object,
        onShow: PropTypes.func,
        onHide: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.onCloseClick = this.onCloseClick.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onExited = this.onExited.bind(this);

        this.sidebarRef = React.createRef();
    }

    onCloseClick(event) {
        this.props.onHide();
        event.preventDefault();
    }

    onEnter() {
        ZIndexUtils.set('modal', this.sidebarRef.current, this.props.baseZIndex);
        if (this.props.modal) {
            this.enableModality();
        }
    }

    onEntered() {
        if (this.props.closeOnEscape) {
            this.bindDocumentEscapeListener();
        }

        if (this.closeIcon) {
            this.closeIcon.focus();
        }

        if (this.props.onShow) {
            this.props.onShow();
        }
    }

    onExit() {
        this.unbindMaskClickListener();
        this.unbindDocumentEscapeListener();

        if (this.props.modal) {
            this.disableModality();
        }
    }

    onExited() {
        ZIndexUtils.clear(this.sidebarRef.current);
    }

    enableModality() {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(ZIndexUtils.get(this.sidebarRef.current) - 1);
            let maskClassName = 'p-component-overlay p-sidebar-mask';
            if (this.props.blockScroll) {
                maskClassName += ' p-sidebar-mask-scrollblocker';
            }
            DomHandler.addMultipleClasses(this.mask, maskClassName);

            if (this.props.dismissable) {
                this.bindMaskClickListener();
            }

            document.body.appendChild(this.mask);

            if (this.props.blockScroll) {
                DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        }
    }

    disableModality() {
        if (this.mask) {
            this.unbindMaskClickListener();
            document.body.removeChild(this.mask);

            if (this.props.blockScroll) {
                let bodyChildren = document.body.children;
                let hasBlockerMasks;
                for (let i = 0; i < bodyChildren.length; i++) {
                    let bodyChild = bodyChildren[i];
                    if (DomHandler.hasClass(bodyChild, 'p-sidebar-mask-scrollblocker')) {
                        hasBlockerMasks = true;
                        break;
                    }
                }

                if (!hasBlockerMasks) {
                    DomHandler.removeClass(document.body, 'p-overflow-hidden');
                }
            }
            this.mask = null;
        }
    }

    bindDocumentEscapeListener() {
        this.documentEscapeListener = (event) => {
            if (event.which === 27) {
                if (ZIndexUtils.get(this.sidebarRef.current) === ZIndexUtils.getCurrent()) {
                    this.onCloseClick(event);
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

    bindMaskClickListener() {
        if (!this.maskClickListener) {
            this.maskClickListener = (event) => {
                this.onCloseClick(event);
            };
            this.mask.addEventListener('click', this.maskClickListener);
        }
    }

    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.mask.removeEventListener('click', this.maskClickListener);
            this.maskClickListener = null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.mask && prevProps.dismissable !== this.props.dismissable) {
            if (this.props.dismissable) {
                this.bindMaskClickListener();
            }
            else {
                this.unbindMaskClickListener();
            }
        }
    }

    componentWillUnmount() {
        this.unbindMaskClickListener();
        this.disableModality();

        ZIndexUtils.clear(this.sidebarRef.current);
    }

    renderCloseIcon() {
        if (this.props.showCloseIcon) {
            return (
                <button type="button" ref={el => this.closeIcon = el} className="p-sidebar-close p-sidebar-icon p-link" onClick={this.onCloseClick} aria-label={this.props.ariaCloseLabel}>
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

    render() {
        const className = classNames('p-sidebar p-component', this.props.className, 'p-sidebar-' + this.props.position,
            { 'p-sidebar-active': this.props.visible, 'p-sidebar-full': this.props.fullScreen });
        const closeIcon = this.renderCloseIcon();
        const icons = this.renderIcons();

        const transitionTimeout = {
            enter: this.props.fullScreen ? 400 : 300,
            exit: this.props.fullScreen ? 400 : 300
        };

        return (
            <CSSTransition nodeRef={this.sidebarRef} classNames="p-sidebar" in={this.props.visible} timeout={transitionTimeout} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExit={this.onExit} onExited={this.onExited}>
                <div ref={this.sidebarRef} id={this.props.id} className={className} style={this.props.style} role="complementary">
                    <div className="p-sidebar-icons">
                        {icons}
                        {closeIcon}
                    </div>
                    <div className="p-sidebar-content">
                        {this.props.children}
                    </div>
                </div>
            </CSSTransition>
        );
    }
}
