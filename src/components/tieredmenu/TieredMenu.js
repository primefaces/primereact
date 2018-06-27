import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

class TieredMenuSub extends Component {

    static defaultProps = {
        model: null,
        root: false,
        autoZIndex: true,
        baseZIndex: 0,
        className: null,
        parentActive: false
    };

    static propTypes = {
        model: PropTypes.any,
        root: PropTypes.bool,
        autoZIndex: PropTypes.bool,
        baseZIndex: PropTypes.number,
        className: PropTypes.string,
        parentActive: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            activeItem : null
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.parentActive === false) {
            return {
                activeItem: null
            }
        }

        return null;
    }

    onLeafClick() {
        this.setState({
            activeItem: null
        });
    }

    onItemMouseEnter(event, item) {
        if (this.props.root) {
            if (this.state.activeItem) {
                this.setState({
                    activeItem: item
                });
            }
        }
        else {
            this.setState({
                activeItem: item
            });
        }
    }

    onItemClick(event, item, index) {
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
                item: this.props.item
            });
        }
        
        if (this.props.root) {
            if (item.items) {
                if (this.state.activeItem) {
                    this.setState({
                        activeItem: null
                    });
                }
                else {
                    this.setState({
                        activeItem: item
                    });
                }
            }
        }
        else {
            if (this.props.onLeafClick) {
                this.props.onLeafClick();
            }
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
                <TieredMenuSub model={item.items} baseZIndex={this.props.baseZIndex} autoZIndex={this.props.autoZIndex} parentActive={item === this.state.activeItem} onLeafClick={this.onLeafClick}/>
            );
        }
        else {
            return null;
        }
    }

    renderMenuitem(item, index) {
        const className = classNames('ui-menuitem ui-widget ui-corner-all', {'ui-menuitem-active': (this.state.activeItem === item && this.props.parentActive)}, item.className);
        const icon = this.renderIcon(item);
        const submenuIcon = this.renderSubmenuIcon(item);
        const submenu = this.renderSubmenu(item);

        return (
            <li key={item.label + '_' + index} className={className} style={item.style} onMouseEnter={(event) => this.onItemMouseEnter(event, item)}>
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
        const className = classNames({'ui-widget-content ui-corner-all ui-shadow ui-submenu-list': !this.props.root});
        const submenu = this.renderMenu();

        return (
            <ul className={className}>
                {submenu}
            </ul>
        );   
    }
 }

export class TieredMenu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
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
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super();
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    toggle(event){
        if (this.props.popup) {
            if (this.documentClickListener) {
                this.selfClick = true;
            }
    
            if (this.container.offsetParent)
                this.hide(event);
            else
                this.show(event);
        }
    }

    onMenuClick() {
        if (this.documentClickListener) {
            this.selfClick = true;
        }
    }

    show(event) {
        this.container.style.display = 'block';
        this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        DomHandler.absolutePosition(this.container,  event.currentTarget);
        DomHandler.fadeIn(this.container, 250);
        
        this.bindDocumentListeners();
        
        if (this.props.onShow) {
            this.props.onShow(event);
        }
    }

    hide(event) {
        if (this.container) {
            this.container.style.display = 'none';
        }
            
        if (this.props.onHide) {
            this.props.onHide(event);
        }

        this.unbindDocumentListeners();
        this.selfClick = false;
    }

    bindDocumentListeners() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.selfClick)
                    this.selfClick = false;
                else
                    this.hide(event);
            };

            document.addEventListener('click', this.documentClickListener);
        }

        if (!this.documentResizeListener) {
            this.documentResizeListener = (event) => {
                if(this.container.offsetParent) {
                    this.hide(event);
                }
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentListeners() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }

        if(this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
    }

    render() {
        const className = classNames('ui-tieredmenu ui-widget ui-widget-content ui-corner-all', {'ui-tieredmenu-dynamic ui-shadow': this.props.popup}, this.props.className);

        return(
            <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container=el} onClick={this.onMenuClick}>
                <TieredMenuSub model={this.props.model} root={true} baseZIndex={this.props.baseZIndex} autoZIndex={this.props.autoZIndex} parentActive={true} />
            </div>
        );
    }
}