import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { CSSTransition } from '../transition/CSSTransition';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { Portal } from '../portal/Portal';
import { ZIndexUtils } from '../utils/ZIndexUtils';

export class SlideMenuSub extends Component {

    static defaultProps = {
        model: null,
        level: 0,
        easing: 'ease-out',
        effectDuration: 250,
        menuWidth: 190,
        parentActive: false,
        onForward: null
    }

    static propTypes = {
        model: PropTypes.any,
        level: PropTypes.number,
        easing: PropTypes.string,
        effectDuration: PropTypes.number,
        menuWidth: PropTypes.number,
        parentActive: PropTypes.bool,
        onForward: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            activeItem: null
        };
    }

    onItemClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }

        if (item.items) {
            this.setState({
                activeItem: item
            });
            this.props.onForward();
        }
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="p-menu-separator"></li>
        );
    }

    renderSubmenu(item) {
        if (item.items) {
            return (
                <SlideMenuSub model={item.items} index={this.props.index + 1} menuWidth={this.props.menuWidth} effectDuration={this.props.effectDuration}
                    onForward={this.props.onForward} parentActive={item === this.state.activeItem} />
            );
        }

        return null;
    }

    renderMenuitem(item, index) {
        const active = this.state.activeItem === item;
        const className = classNames('p-menuitem', { 'p-menuitem-active': active, 'p-disabled': item.disabled }, item.className);
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const submenuIconClassName = 'p-submenu-icon pi pi-fw pi-angle-right';
        const icon = item.icon && <span className={iconClassName}></span>;
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
        const submenu = this.renderSubmenu(item);
        let content = (
            <a href={item.url || '#'} className="p-menuitem-link" target={item.target} onClick={(event) => this.onItemClick(event, item, index)} aria-disabled={item.disabled}>
                {icon}
                {label}
                {submenuIcon}
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => this.onItemClick(event, item, index),
                className: 'p-menuitem-link',
                labelClassName: 'p-menuitem-text',
                iconClassName,
                submenuIconClassName,
                element: content,
                props: this.props,
                active
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return (
            <li key={item.label + '_' + index} className={className} style={item.style}>
                {content}
                {submenu}
            </li>
        );
    }

    renderItem(item, index) {
        if (item.separator)
            return this.renderSeparator(index);
        else
            return this.renderMenuitem(item, index);
    }

    renderItems() {
        if (this.props.model) {
            return (
                this.props.model.map((item, index) => {
                    return this.renderItem(item, index);
                })
            );
        }

        return null;
    }

    render() {
        const className = classNames({ 'p-slidemenu-rootlist': this.props.root, 'p-submenu-list': !this.props.root, 'p-active-submenu': this.props.parentActive });
        const style = {
            width: this.props.menuWidth + 'px',
            left: this.props.root ? (-1 * this.props.level * this.props.menuWidth) + 'px' : this.props.menuWidth + 'px',
            transitionProperty: this.props.root ? 'left' : 'none',
            transitionDuration: this.props.effectDuration + 'ms',
            transitionTimingFunction: this.props.easing
        };
        const items = this.renderItems();

        return (
            <ul className={className} style={style}>
                {items}
            </ul>
        );
    }
}
export class SlideMenu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        easing: 'ease-out',
        effectDuration: 250,
        backLabel: 'Back',
        menuWidth: 190,
        viewportHeight: 175,
        autoZIndex: true,
        baseZIndex: 0,
        appendTo: null,
        transitionOptions: null,
        onShow: null,
        onHide: null
    }

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        popup: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        easing: PropTypes.string,
        effectDuration: PropTypes.number,
        backLabel: PropTypes.string,
        menuWidth: PropTypes.number,
        viewportHeight: PropTypes.number,
        autoZIndex: PropTypes.bool,
        baseZIndex: PropTypes.number,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        transitionOptions: PropTypes.object,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            visible: false
        };

        this.navigateBack = this.navigateBack.bind(this);
        this.navigateForward = this.navigateForward.bind(this);
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

    navigateForward() {
        this.setState({
            level: this.state.level + 1
        });
    }

    navigateBack() {
        this.setState({
            level: this.state.level - 1
        });
    }

    renderBackward() {
        const className = classNames('p-slidemenu-backward', { 'p-hidden': this.state.level === 0 });

        return (
            <div ref={el => this.backward = el} className={className} onClick={this.navigateBack}>
                <span className="p-slidemenu-backward-icon pi pi-fw pi-chevron-left"></span>
                <span>{this.props.backLabel}</span>
            </div>
        );
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
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
    }

    onExit() {
        this.target = null;
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
    }

    onExited() {
        ZIndexUtils.clear(this.menuRef.current);

        this.setState({ level: 0 });
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.visible && this.isOutsideClicked(event)) {
                    this.hide(event);
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    isOutsideClicked(event) {
        return this.menuRef && this.menuRef.current && !(this.menuRef.current.isSameNode(event.target) || this.menuRef.current.contains(event.target));
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

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
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

    componentDidUpdate(prevProps, prevState) {
        if (this.props.model !== prevProps.model) {
            this.setState({
                level: 0
            });
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        ZIndexUtils.clear(this.menuRef.current);
    }

    renderElement() {
        const className = classNames('p-slidemenu p-component', { 'p-slidemenu-overlay': this.props.popup }, this.props.className);
        const backward = this.renderBackward();

        return (
            <CSSTransition nodeRef={this.menuRef} classNames="p-connected-overlay" in={!this.props.popup || this.state.visible} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExit={this.onExit} onExited={this.onExited}>
                <div ref={this.menuRef} id={this.props.id} className={className} style={this.props.style} onClick={this.onPanelClick}>
                    <div className="p-slidemenu-wrapper" style={{ height: this.props.viewportHeight + 'px' }}>
                        <div className="p-slidemenu-content" ref={el => this.slideMenuContent = el}>
                            <SlideMenuSub model={this.props.model} root index={0} menuWidth={this.props.menuWidth} effectDuration={this.props.effectDuration}
                                level={this.state.level} parentActive={this.state.level === 0} onForward={this.navigateForward} />
                        </div>
                        {backward}
                    </div>
                </div>
            </CSSTransition>
        );
    }

    render() {
        const element = this.renderElement();

        return this.props.popup ? <Portal element={element} appendTo={this.props.appendTo} /> : element;
    }
}
