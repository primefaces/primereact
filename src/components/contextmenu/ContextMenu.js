import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ReactDOM from 'react-dom';
import DomHandler from '../utils/DomHandler';
import { CSSTransition } from 'react-transition-group';
import { Ripple } from '../ripple/Ripple';
import ObjectUtils from '../utils/ObjectUtils';

class ContextMenuSub extends Component {

    static defaultProps = {
        model: null,
        root: false,
        className: null,
        resetMenu: false,
        onLeafClick: null
    };

    static propTypes = {
        model: PropTypes.any,
        root: PropTypes.bool,
        className: PropTypes.string,
        resetMenu: PropTypes.bool,
        onLeafClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            activeItem: null
        };

        this.onEnter = this.onEnter.bind(this);
        this.submenuRef = React.createRef();
    }

    onItemMouseEnter(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        this.setState({
            activeItem: item
        });
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

        if (!item.items) {
            this.props.onLeafClick(event);
        }
    }

    position() {
        const parentItem = this.submenuRef.current.parentElement;
        const containerOffset = DomHandler.getOffset(this.submenuRef.current.parentElement)
        const viewport = DomHandler.getViewport();
        const sublistWidth = this.submenuRef.current.offsetParent ? this.submenuRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.submenuRef.current);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

        this.submenuRef.current.style.top = '0px';

        if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
            this.submenuRef.current.style.left = -1 * sublistWidth + 'px';
        }
        else {
            this.submenuRef.current.style.left = itemOuterWidth + 'px';
        }
    }

    onEnter() {
        this.position();
    }

    isActive() {
        return this.props.root || !this.props.resetMenu;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.resetMenu === true) {
            return {
                activeItem: null
            }
        }

        return null;
    }

    componentDidUpdate() {
        if (this.isActive()) {
            this.position();
        }
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="p-menu-separator" role="separator"></li>
        );
    }

    renderSubmenu(item) {
        if (item.items) {
            return (
                <ContextMenuSub model={item.items} resetMenu={item !== this.state.activeItem} onLeafClick={this.props.onLeafClick} />
            );
        }

        return null;
    }

    renderMenuitem(item, index) {
        const active = this.state.activeItem === item;
        const className = classNames('p-menuitem', { 'p-menuitem-active': active }, item.className);
        const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const submenuIconClassName = 'p-submenu-icon pi pi-angle-right';
        const icon = item.icon && <span className={iconClassName}></span>;
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
        const submenu = this.renderSubmenu(item);
        let content = (
            <a href={item.url || '#'} className={linkClassName} target={item.target} onClick={(event) => this.onItemClick(event, item, index)} role="menuitem"
                aria-haspopup={item.items != null}>
                {icon}
                {label}
                {submenuIcon}
                <Ripple />
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => this.onItemClick(event, item, index),
                className: linkClassName,
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
            <li key={item.label + '_' + index} role="none" className={className} style={item.style} onMouseEnter={(event) => this.onItemMouseEnter(event, item)}>
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

    renderMenu() {
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
        const className = classNames({ 'p-submenu-list': !this.props.root });
        const submenu = this.renderMenu();
        const isActive = this.isActive();

        return (
            <CSSTransition nodeRef={this.submenuRef} classNames="p-contextmenusub" in={isActive} timeout={{ enter: 0, exit: 0 }}
                unmountOnExit onEnter={this.onEnter}>
                <ul ref={this.submenuRef} className={className}>
                    {submenu}
                </ul>
            </CSSTransition>
        );
    }
}

export class ContextMenu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        style: null,
        className: null,
        global: false,
        autoZIndex: true,
        baseZIndex: 0,
        appendTo: null,
        onShow: null,
        onHide: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        global: PropTypes.bool,
        autoZIndex: PropTypes.bool,
        baseZIndex: PropTypes.number,
        appendTo: PropTypes.any,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            reshow: false,
            resetMenu: false
        };

        this.onMenuClick = this.onMenuClick.bind(this);
        this.onLeafClick = this.onLeafClick.bind(this);
        this.onMenuMouseEnter = this.onMenuMouseEnter.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExit = this.onExit.bind(this);

        this.menuRef = React.createRef();
    }

    onMenuClick() {
        this.setState({
            resetMenu: false
        });
    }

    onMenuMouseEnter() {
        this.setState({
            resetMenu: false
        });
    }

    show(event) {
        if (!(event instanceof Event)) {
            event.persist();
        }

        event.stopPropagation();
        event.preventDefault();

        this.currentEvent = event;

        if (this.state.visible) {
            this.setState({ reshow: true });
        }
        else {
            this.setState({ visible: true }, () => {
                if (this.props.onShow) {
                    this.props.onShow(this.currentEvent);
                }
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.visible && prevState.reshow !== this.state.reshow) {
            let event = this.currentEvent;
            this.setState({
                visible: false,
                reshow: false,
                rePosition: false,
                resetMenu: true
            }, () => this.show(event));
        }
    }

    hide(event) {
        if (!(event instanceof Event)) {
            event.persist();
        }

        this.currentEvent = event;
        this.setState({ visible: false, reshow: false }, () => {
            if (this.props.onHide) {
                this.props.onHide(this.currentEvent);
            }
        });
    }

    onEnter() {
        if (this.props.autoZIndex) {
            this.menuRef.current.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }

        this.position(this.currentEvent);
    }

    onEntered() {
        this.bindDocumentListeners();
    }

    onExit() {
        this.currentEvent = null;
        this.unbindDocumentListeners();
    }

    position(event) {
        if (event) {
            let left = event.pageX + 1;
            let top = event.pageY + 1;
            let width = this.menuRef.current.offsetParent ? this.menuRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.menuRef.current);
            let height = this.menuRef.current.offsetParent ? this.menuRef.current.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.menuRef.current);
            let viewport = DomHandler.getViewport();

            //flip
            if (left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }

            //flip
            if (top + height - document.body.scrollTop > viewport.height) {
                top -= height;
            }

            //fit
            if (left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }

            //fit
            if (top < document.body.scrollTop) {
                top = document.body.scrollTop;
            }

            this.menuRef.current.style.left = left + 'px';
            this.menuRef.current.style.top = top + 'px';
        }
    }

    onLeafClick(event) {
        this.setState({
            resetMenu: true
        });

        this.hide(event);

        event.stopPropagation();
    }

    isOutsideClicked(event) {
        return this.menuRef && this.menuRef.current && !(this.menuRef.current.isSameNode(event.target) || this.menuRef.current.contains(event.target));
    }

    bindDocumentListeners() {
        this.bindDocumentResizeListener();
        this.bindDocumentClickListener();
    }

    unbindDocumentListeners() {
        this.unbindDocumentResizeListener();
        this.unbindDocumentClickListener();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.isOutsideClicked(event) && event.button !== 2) {
                    this.hide(event);

                    this.setState({
                        resetMenu: true
                    });
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    bindDocumentContextMenuListener() {
        if (!this.documentContextMenuListener) {
            this.documentContextMenuListener = (event) => {
                this.show(event);
            };

            document.addEventListener('contextmenu', this.documentContextMenuListener);
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

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    unbindDocumentContextMenuListener() {
        if (this.documentContextMenuListener) {
            document.removeEventListener('contextmenu', this.documentContextMenuListener);
            this.documentContextMenuListener = null;
        }
    }

    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    componentDidMount() {
        if (this.props.global) {
            this.bindDocumentContextMenuListener();
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
        this.unbindDocumentContextMenuListener();
    }

    renderContextMenu() {
        const className = classNames('p-contextmenu p-component', this.props.className);

        return (
            <CSSTransition nodeRef={this.menuRef} classNames="p-contextmenu" in={this.state.visible} timeout={{ enter: 250, exit: 0 }}
                unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExit={this.onExit}>
                <div ref={this.menuRef} id={this.props.id} className={className} style={this.props.style} onClick={this.onMenuClick} onMouseEnter={this.onMenuMouseEnter}>
                    <ContextMenuSub model={this.props.model} root resetMenu={this.state.resetMenu} onLeafClick={this.onLeafClick} />
                </div>
            </CSSTransition>
        );
    }

    render() {
        const element = this.renderContextMenu();

        if (this.props.appendTo)
            return ReactDOM.createPortal(element, this.props.appendTo);
        else
            return element;
    }
}
