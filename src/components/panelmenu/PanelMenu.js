import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class PanelMenuSub extends Component {

    static defaultProps = {
        model: null,
        className: null
    };

    static propTypes = {
        model: PropTypes.any,
        className: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            activeItem : null
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

        if (this.state.activeItem && this.state.activeItem === item) {
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

    renderSubmenuIcon(item, active) {
        const className = classNames('ui-panelmenu-icon pi pi-fw', {'pi-caret-right': !active, 'pi-caret-down': active});

        if (item.items) {
            return (
                <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderSubmenu(item, active) {
        const className = classNames({'ui-panelmenu-content-wrapper-collapsed': !active, 'ui-panelmenu-content-wrapper-expanded': active});

        if(item.items) {
            return (
                <PanelMenuSub model={item.items} className={className}/>
            );
        }
        else {
            return null;
        }
    }

    renderMenuitem(item, index) {
        const active = this.state.activeItem === item;
        const className = classNames('ui-menuitem ui-corner-all', item.className, {'ui-state-disabled': item.disabled});
        const icon = this.renderIcon(item, active);
        const submenuIcon = this.renderSubmenuIcon(item, active);
        const submenu = this.renderSubmenu(item, active);

        return (
            <li key={item.label + '_' + index} className={className} style={item.style}>
                <a href={item.url || '#'} className="ui-menuitem-link ui-corner-all" target={item.target} onClick={(event) => this.onItemClick(event, item, index)}>
                    {submenuIcon}
                    {icon}
                    <span className="ui-menuitem-text">{item.label}</span>
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
        const className = classNames('ui-submenu-list', this.props.className);
        const menu = this.renderMenu(); 

        return (
            <ul className={className}>
               {menu}
            </ul>
        );   
    }
 }

export class PanelMenu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        style: null,
        className: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string
    };

    constructor(props) {
        super();
        this.state = {
            activeItem: null
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

        if (this.state.activeItem && this.state.activeItem === item) {
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

    renderPanelIcon(item) {
        const className = classNames('ui-menuitem-icon', item.icon);

        if (item.items) {
            return (
                <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderPanelToggleIcon(item, active) {
        const className = classNames('ui-panelmenu-icon pi pi-fw', {'pi-caret-right': !active,' pi-caret-down': active});

        if (item.items) {
            return (
                <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderPanel(item, index) {
        const active = this.state.activeItem === item;
        const className = classNames('ui-panelmenu-panel', item.className, {'ui-state-disabled': item.disabled});
        const headerClassName = classNames('ui-widget ui-panelmenu-header ui-state-default', {'ui-state-active': active});
        const toggleIcon = this.renderPanelToggleIcon(item, active);
        const itemIcon = this.renderPanelIcon(item);
        const contentWrapperClassName = classNames('ui-panelmenu-content-wrapper', {'ui-panelmenu-content-wrapper-collapsed': !active, 'ui-panelmenu-content-wrapper-expanded': active});

        return (
            <div key={item.label + '_' + index} className={className} style={item.style}>
                <div className={headerClassName} style={item.style}>
                    <a href={item.url || '#'} className="ui-panelmenu-header-link ng-tns-c2-1 ng-star-inserted" onClick={(e) => this.onItemClick(e, item)}>
                        {toggleIcon}
                        {itemIcon}
                        <span className="ui-menuitem-text">{item.label}</span>
                    </a>
                </div>
                <div className={contentWrapperClassName}>
                    <div className="ui-panelmenu-content ui-widget-content">
                        <PanelMenuSub model={item.items} className="ui-panelmenu-root-submenu" />
                    </div>
                </div>
            </div>
        );
    }

    renderPanels() {
        if (this.props.model) {
            return (
                this.props.model.map((item, index) => {
                    return this.renderPanel(item, index);
                })
            );
        }
        else {
            return null;
        }
    } 

    render() {
        const className = classNames('ui-panelmenu ui-widget', this.props.className);
        const panels = this.renderPanels();

        return(
            <div id={this.props.id} className={className} style={this.props.style}>
                {panels}
            </div>
        );
    }
}