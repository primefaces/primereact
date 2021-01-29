import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';
import ObjectUtils from '../utils/ObjectUtils';

class PanelMenuSub extends Component {

    static defaultProps = {
        model: null
    };

    static propTypes = {
        model: PropTypes.any
    };

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
            <li key={'separator_' + index} className="p-menu-separator"></li>
        );
    }

    renderSubmenu(item, active) {
        const submenuWrapperClassName = classNames('p-toggleable-content', {'p-toggleable-content-collapsed': !active});

        if (item.items) {
            return (
                <CSSTransition classNames="p-toggleable-content" timeout={{enter: 1000, exit: 450}} in={active} unmountOnExit>
                    <div className={submenuWrapperClassName}>
                        <PanelMenuSub model={item.items} />
                    </div>
                </CSSTransition>
            );
        }

        return null;
    }

    renderMenuitem(item, index) {
        const active = this.state.activeItem === item;
        const className = classNames('p-menuitem', item.className);
        const linkClassName = classNames('p-menuitem-link', {'p-disabled': item.disabled});
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const submenuIconClassName = classNames('p-panelmenu-icon pi pi-fw', {'pi-angle-right': !active, 'pi-angle-down': active});
        const icon = item.icon && <span className={iconClassName}></span>;
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
        const submenu = this.renderSubmenu(item, active);
        let content = (
            <a href={item.url || '#'} className={linkClassName} target={item.target} onClick={(event) => this.onItemClick(event, item, index)} role="menuitem">
                {submenuIcon}
                {icon}
                {label}
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
            <li key={item.label + '_' + index} className={className} style={item.style} role="none">
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
        const className = classNames('p-submenu-list', this.props.className);
        const menu = this.renderMenu();

        return (
            <ul className={className} role="tree">
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
        super(props);
        this.state = {
            activeItem: null
        };

        this.id = this.props.id || UniqueComponentId();
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
        const className = classNames('p-menuitem-icon', item.icon);

        if (item.icon) {
            return (
                <span className={className}></span>
            );
        }

        return null;
    }

    renderPanelToggleIcon(item, active) {
        const className = classNames('p-panelmenu-icon pi', {'pi-chevron-right': !active,' pi-chevron-down': active});

        if (item.items) {
            return (
                <span className={className}></span>
            );
        }

        return null;
    }

    renderPanel(item, index) {
        const active = this.state.activeItem === item;
        const className = classNames('p-panelmenu-panel', item.className);
        const headerClassName = classNames('p-component p-panelmenu-header', {'p-highlight': active, 'p-disabled': item.disabled});
        const toggleIcon = this.renderPanelToggleIcon(item, active);
        const itemIcon = this.renderPanelIcon(item);
        const contentWrapperClassName = classNames('p-toggleable-content', {'p-toggleable-content-collapsed': !active});

        return (
            <div key={item.label + '_' + index} className={className} style={item.style}>
                <div className={headerClassName} style={item.style}>
                    <a href={item.url || '#'} className="p-panelmenu-header-link" onClick={(e) => this.onItemClick(e, item)} aria-expanded={this.state.activeItem === item}
                       id={this.id + '_header'} aria-controls={this.id + 'content'}>
                        {toggleIcon}
                        {itemIcon}
                        <span className="p-menuitem-text">{item.label}</span>
                    </a>
                </div>
                <CSSTransition classNames="p-toggleable-content" timeout={{enter: 1000, exit: 450}} in={active} unmountOnExit>
                    <div className={contentWrapperClassName} role="region" id={this.id + '_content'} aria-labelledby={this.id + '_header'}>
                        <div className="p-panelmenu-content">
                            <PanelMenuSub model={item.items} className="p-panelmenu-root-submenu" />
                        </div>
                    </div>
                </CSSTransition>

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

        return null;
    }

    render() {
        const className = classNames('p-panelmenu p-component', this.props.className);
        const panels = this.renderPanels();

        return(
            <div id={this.props.id} className={className} style={this.props.style}>
                {panels}
            </div>
        );
    }
}
