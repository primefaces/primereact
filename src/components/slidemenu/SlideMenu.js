import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

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
        if(item.items) {
            return (
                <SlideMenuSub model={item.items} index={this.props.index + 1} menuWidth={this.props.menuWidth} effectDuration={this.props.effectDuration}
                    onForward={this.props.onForward} parentActive={item === this.state.activeItem} />
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
            <li key={item.label + '_' + index} className={className} style={item.style}>
                <a href={item.url || '#'} className="p-menuitem-link" target={item.target} onClick={(event) => this.onItemClick(event, item, index)}>
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

    renderItems() {
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
        const className = classNames({'p-slidemenu-rootlist': this.props.root, 'p-submenu-list': !this.props.root, 'p-active-submenu': this.props.parentActive});
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
        appendTo: PropTypes.any,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            level: 0
        };
        this.onMenuClick = this.onMenuClick.bind(this);
        this.navigateBack = this.navigateBack.bind(this);
        this.navigateForward = this.navigateForward.bind(this);
    }

    onMenuClick(event) {
        this.selfClick = true;
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
        const className = classNames('p-slidemenu-backward', {'p-hidden': this.state.level === 0});

        return (
            <div ref={el => this.backward = el} className={className} onClick={this.navigateBack}>
                <span className="p-slidemenu-backward-icon pi pi-fw pi-caret-left"></span>
                <span>{this.props.backLabel}</span>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.popup) {
            this.bindDocumentClickListener();
        }
    }

    toggle(event) {
        if (this.props.popup) {
            this.selfClick = true;

            if (this.container.offsetParent)
                this.hide(event);
            else
                this.show(event);
        }
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
                if (!this.selfClick && this.container.offsetParent) {
                    this.hide(event);
                }

                this.selfClick = false;
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
    }
    
    renderElement() {
        const className = classNames('p-slidemenu p-component', {'p-slidemenu-dynamic p-menu-overlay': this.props.popup});
        const backward = this.renderBackward();

        return (
            <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container = el} onClick={this.onMenuClick}>
                <div className="p-slidemenu-wrapper" style={{height: this.props.viewportHeight + 'px'}}>
                    <div className="p-slidemenu-content" ref={el => this.slideMenuContent = el}>
                        <SlideMenuSub model={this.props.model} root={true} index={0} menuWidth={this.props.menuWidth} effectDuration={this.props.effectDuration} 
                                level={this.state.level} parentActive={this.state.level === 0} onForward={this.navigateForward} />
                    </div>
                    {backward}
                 </div>
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