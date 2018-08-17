import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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
        onForward: null,
        appendTo: null
    }

    static propsTypes = {
        model: PropTypes.any,
        level: PropTypes.number,
        easing: PropTypes.string,
        effectDuration: PropTypes.number,
        menuWidth: PropTypes.number,
        parentActive: PropTypes.bool,
        onForward: PropTypes.func,
        appendTo: PropTypes.any
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
            <li key={'separator_' + index} className="ui-menu-separator ui-widget-content"></li>
        );
    }
    
    renderIcon(item) {
        const className = classNames('ui-menuitem-icon', item.icon);
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
                <span className="ui-submenu-icon pi pi-fw pi-caret-right"></span>
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
        const className = classNames('ui-menuitem ui-widget ui-corner-all', {'ui-menuitem-active': this.state.activeItem === item, 'ui-state-disabled': item.disabled}, item.className);
        const icon = this.renderIcon(item);
        const submenuIcon = this.renderSubmenuIcon(item);
        const submenu = this.renderSubmenu(item);

        return (
            <li key={item.label + '_' + index} className={className} style={item.style}>
                <a href={item.url || '#'} className="ui-menuitem-link ui-corner-all" target={item.target} onClick={(event) => this.onItemClick(event, item, index)}>
                    {icon}
                    <span className="ui-menuitem-text">{item.label}</span>
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
        const className = classNames({'ui-slidemenu-rootlist': this.props.root, 'ui-submenu-list': !this.props.root, 'ui-active-submenu': this.props.parentActive});
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
        onShow: null,
        onHide: null
    }

    static propsTypes = {
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
        const className = classNames('ui-slidemenu-backward ui-widget-header ui-corner-all', {'ui-helper-hidden': this.state.level === 0});

        return (
            <div ref={el => this.backward = el} className={className} onClick={this.navigateBack}>
                <span className="ui-slidemenu-backward-icon pi pi-fw pi-caret-left"></span>
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
            DomHandler.addClass(this.container, 'ui-menu-overlay-visible');
            DomHandler.removeClass(this.container, 'ui-menu-overlay-hidden');
        }, 1);

        DomHandler.absolutePosition(this.container,  event.currentTarget);
        this.bindDocumentResizeListener();
        
        if (this.props.onShow) {
            this.props.onShow(event);
        }
    }

    hide(event) {
        if (this.container) {
            DomHandler.addClass(this.container, 'ui-menu-overlay-hidden');
            DomHandler.removeClass(this.container, 'ui-menu-overlay-visible');

            setTimeout(() => {
                if (this.container) {
                    this.container.style.display = 'none';
                    DomHandler.removeClass(this.container, 'ui-menu-overlay-hidden');
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

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
    }
    
    renderElement() {
        const className = classNames('ui-slidemenu ui-widget ui-widget-content ui-corner-all', {'ui-slidemenu-dynamic ui-menu-overlay ui-shadow': this.props.popup});
        const backward = this.renderBackward();

        return (
            <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container = el} onClick={this.onMenuClick}>
                <div className="ui-slidemenu-wrapper" style={{height: this.props.viewportHeight + 'px'}}>
                    <div className="ui-slidemenu-content" ref={el => this.slideMenuContent = el}>
                        <SlideMenuSub model={this.props.model} root={true} index={0} menuWidth={this.props.menuWidth} effectDuration={this.props.effectDuration} 
                                level={this.state.level} parentActive={this.state.level === 0} onForward={this.navigateForward} />
                    </div>
                    {backward}
                 </div>
            </div>
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