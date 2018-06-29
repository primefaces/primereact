import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

class MenubarSub extends Component {

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

        if (!item.items) {
            this.props.onLeafClick(event);
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
        const icon = classNames('ui-submenu-icon pi pi-fw', {'pi-caret-down': this.props.root, 'pi-caret-right': !this.props.root}); 

        if (item.items) {
            return (
                <span className={icon}></span>
            );
        }
        else {
            return null;
        }
    }

    renderSubmenu(item) {
        if(item.items) {
            return (
                <MenubarSub model={item.items} resetMenu={item !== this.state.activeItem} onLeafClick={this.props.onLeafClick} />
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
        const className = classNames({'ui-widget-content ui-corner-all ui-submenu-list ui-shadow': !this.props.root, 'ui-menubar-root-list': this.props.root});
        const submenu = this.renderMenu();

        return (
            <ul className={className}>
                {submenu}
            </ul>
        );   
    }
 }

export class Menubar extends Component {

    static defaultProps = {
        id: null,
        model: null,
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        autoZIndex: PropTypes.bool,
        baseZIndex: PropTypes.number
    };

    constructor(props) {
        super();
        this.state = {
            resetMenu: false
        }
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onLeafClick = this.onLeafClick.bind(this);
    }

    componentDidMount() {
        this.bindDocumentClickListener();
    }

    onMenuClick() {
        this.selfClick = true;

        this.setState({
            resetMenu: false
        });

        if (this.props.autoZIndex) {
            this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
    }

    onLeafClick(event) {
        this.setState({
            resetMenu: true
        });

        event.stopPropagation();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (!this.selfClick) {                    
                    this.setState({
                        resetMenu: true
                    });
                }

                this.selfClick = false;
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
    componentWillUnmount() {
        this.unbindDocumentClickListener();
    }

    renderCustomContent() {
        if(this.props.children) {
            return (
                <div className="ui-menubar-custom">
                    {this.props.children}
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        const className = classNames('ui-menubar ui-widget ui-widget-content ui-corner-all', this.props.className);
        const customContent = this.renderCustomContent();

        return (
            <div id={this.props.id} className={className} style={this.props.style} onClick={this.onMenuClick} ref={el => this.container = el}>
                <MenubarSub model={this.props.model} root={true} resetMenu={this.state.resetMenu} onLeafClick={this.onLeafClick} />
                {customContent}
            </div>
        );
    }
}