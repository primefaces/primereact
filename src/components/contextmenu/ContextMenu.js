import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import DomHandler from '../utils/DomHandler';

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
            activeItem : null
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.resetMenu === true) {
            return {
                activeItem: null
            }
        }

        return null;
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

    componentDidUpdate() {
        if (this.element.offsetParent) {
            this.position();
        }
    }

    position() {
        const parentItem = this.element.parentElement;
        const containerOffset = DomHandler.getOffset(this.element.parentElement)
        const viewport = DomHandler.getViewport();
        const sublistWidth = this.element.offsetParent ? this.element.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.element);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

        this.element.style.top = '0px';

        if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
            this.element.style.left = -1 * sublistWidth + 'px';
        }
        else {
            this.element.style.left = itemOuterWidth + 'px';
        }
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="p-menu-separator" role="separator"></li>
        );
    }

    renderIcon(item) {
        const className = classNames('p-menuitem-icon', item.icon);
        if (item.icon) {
            return (
                <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderSubmenuIcon(item) {
        if (item.items) {
            return (
                <span className="p-submenu-icon pi pi-fw pi-caret-right"></span>
            );
        }
        else {
            return null;
        }
    }

    renderSubmenu(item) {
        if (item.items) {
            return (
                <ContextMenuSub model={item.items} resetMenu={item !== this.state.activeItem} onLeafClick={this.props.onLeafClick} />
            );
        }
        else {
            return null;
        }
    }

    renderMenuitem(item, index) {
        const className = classNames('p-menuitem', {'p-menuitem-active': this.state.activeItem === item, 'p-disabled': item.disabled}, item.className);
        const icon = this.renderIcon(item);
        const submenuIcon = this.renderSubmenuIcon(item);
        const submenu = this.renderSubmenu(item);

        return (
            <li key={item.label + '_' + index} role="none" className={className} style={item.style} onMouseEnter={(event) => this.onItemMouseEnter(event, item)}>
                <a href={item.url || '#'} className="p-menuitem-link" target={item.target} onClick={(event) => this.onItemClick(event, item, index)} role="menuitem"
                   aria-haspopup={item.items != null}>
                    {icon}
                    <span className="p-menuitem-text">{item.label}</span>
                    {submenuIcon}
                </a>
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
        else {
            return null;
        }
    }

    render() {
        const className = classNames({'p-submenu-list': !this.props.root});
        const submenu = this.renderMenu();

        return (
            <ul ref={el => this.element = el} className={className}>
                {submenu}
            </ul>
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
        super();
        this.state = {
            resetMenu: false
        }
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onLeafClick = this.onLeafClick.bind(this);
        this.onMenuMouseEnter = this.onMenuMouseEnter.bind(this);
    }

    componentDidMount() {
        if (this.props.global) {
            this.bindDocumentContextMenuListener();
        }
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
        this.container.style.display = 'block';
        this.position(event);
        if (this.props.autoZIndex) {
            this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
        DomHandler.fadeIn(this.container, 250);

        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();

        if (this.props.onShow) {
            this.props.onShow(event);
        }

        event.stopPropagation();
        event.preventDefault();
    }

    hide(event) {
        if (this.container) {
            this.container.style.display = 'none';
        }

        if (this.props.onHide) {
            this.props.onHide(event);
        }

        this.unbindDocumentResizeListener();
        this.unbindDocumentClickListener();
    }

    position(event) {
        if (event) {
            let left = event.pageX + 1;
            let top = event.pageY + 1;
            let width = this.container.offsetParent ? this.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.container);
            let height = this.container.offsetParent ? this.container.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.container);
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

            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
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
        return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target));
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
                if (this.container.offsetParent) {
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

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindDocumentContextMenuListener();
    }

    renderContextMenu() {
        const className = classNames('p-contextmenu p-component', this.props.className);

        return(
            <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container = el} onClick={this.onMenuClick} onMouseEnter={this.onMenuMouseEnter}>
                <ContextMenuSub model={this.props.model} root={true} resetMenu={this.state.resetMenu} onLeafClick={this.onLeafClick} />
            </div>
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
