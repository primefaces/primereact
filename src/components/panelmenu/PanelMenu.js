import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames, UniqueComponentId } from '../utils/Utils';
import { CSSTransition } from '../csstransition/CSSTransition';

class PanelMenuSub extends Component {

    static defaultProps = {
        model: null,
        multiple: false
    };

    static propTypes = {
        model: PropTypes.any,
        multiple: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            activeItem: this.findActiveItem()
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

        let activeItem = this.state.activeItem;
        let active = this.isItemActive(item);

        if (active) {
            item.expanded = false;
            this.setState({
                activeItem: this.props.multiple ? activeItem.filter(a_item => a_item !== item) : null
            });
        }
        else {
            if (!this.props.multiple && activeItem) {
                activeItem.expanded = false;
            }

            item.expanded = true;
            this.setState({
                activeItem: this.props.multiple ? [...(activeItem||[]), item] : item
            });
        }
    }

    findActiveItem() {
        if (this.props.model) {
            if (this.props.multiple) {
                return this.props.model.filter(item => item.expanded);
            }
            else {
                let activeItem = null;
                this.props.model.forEach(item => {
                    if (item.expanded) {
                        if (!activeItem)
                            activeItem = item;
                        else
                            item.expanded = false;
                    }
                });

                return activeItem;
            }
        }

        return null;
    }

    isItemActive(item) {
        return this.state.activeItem && (this.props.multiple ? this.state.activeItem.indexOf(item) > -1: this.state.activeItem === item);
    }

    renderSeparator(index) {
        return <li key={'separator_' + index} className="p-menu-separator"></li>;
    }

    renderSubmenu(item, active) {
        const submenuWrapperClassName = classNames('p-toggleable-content', { 'p-toggleable-content-collapsed': !active });
        const submenuContentRef = React.createRef();

        if (item.items) {
            return (
                <CSSTransition nodeRef={submenuContentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={active} unmountOnExit>
                    <div ref={submenuContentRef} className={submenuWrapperClassName}>
                        <PanelMenuSub model={item.items} multiple={this.props.multiple} />
                    </div>
                </CSSTransition>
            );
        }

        return null;
    }

    renderMenuitem(item, index) {
        const active = this.isItemActive(item);
        const className = classNames('p-menuitem', item.className);
        const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const submenuIconClassName = classNames('p-panelmenu-icon pi pi-fw', { 'pi-angle-right': !active, 'pi-angle-down': active });
        const icon = item.icon && <span className={iconClassName}></span>;
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
        const submenu = this.renderSubmenu(item, active);
        let content = (
            <a href={item.url || '#'} className={linkClassName} target={item.target} onClick={(event) => this.onItemClick(event, item, index)} role="menuitem" aria-disabled={item.disabled}>
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
                leaf: !item.items,
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
        className: null,
        multiple: false,
        transitionOptions: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        multiple: PropTypes.bool,
        transitionOptions: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            activeItem: this.findActiveItem()
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

        let activeItem = this.state.activeItem;
        let active = this.isItemActive(item);

        if (active) {
            item.expanded = false;
            this.setState({
                activeItem: this.props.multiple ? activeItem.filter(a_item => a_item !== item) : null
            });
        }
        else {
            if (!this.props.multiple && activeItem) {
                activeItem.expanded = false;
            }

            item.expanded = true;
            this.setState({
                activeItem: this.props.multiple ? [...(activeItem||[]), item] : item
            });
        }
    }

    findActiveItem() {
        if (this.props.model) {
            if (this.props.multiple) {
                return this.props.model.filter(item => item.expanded);
            }
            else {
                let activeItem = null;
                this.props.model.forEach(item => {
                    if (item.expanded) {
                        if (!activeItem)
                            activeItem = item;
                        else
                            item.expanded = false;
                    }
                });

                return activeItem;
            }
        }

        return null;
    }

    isItemActive(item) {
        return this.state.activeItem && (this.props.multiple ? this.state.activeItem.indexOf(item) > -1: this.state.activeItem === item);
    }

    componentDidMount() {
        if (!this.state.id) {
            this.setState({ id: UniqueComponentId() });
        }
    }

    renderPanel(item, index) {
        const active = this.isItemActive(item);
        const className = classNames('p-panelmenu-panel', item.className);
        const headerClassName = classNames('p-component p-panelmenu-header', { 'p-highlight': active, 'p-disabled': item.disabled });
        const submenuIconClassName = classNames('p-panelmenu-icon pi', { 'pi-chevron-right': !active, ' pi-chevron-down': active });
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
        const itemIcon = item.icon && <span className={iconClassName}></span>;
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const contentWrapperClassName = classNames('p-toggleable-content', { 'p-toggleable-content-collapsed': !active });
        const menuContentRef = React.createRef();
        let content = (
            <a href={item.url || '#'} className="p-panelmenu-header-link" onClick={(e) => this.onItemClick(e, item)} aria-expanded={active}
                id={this.state.id + '_header'} aria-controls={this.state.id + 'content'} aria-disabled={item.disabled}>
                {submenuIcon}
                {itemIcon}
                {label}
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => this.onItemClick(event, item),
                className: 'p-panelmenu-header-link',
                labelClassName: 'p-menuitem-text',
                submenuIconClassName,
                iconClassName,
                element: content,
                props: this.props,
                leaf: !item.items,
                active
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return (
            <div key={item.label + '_' + index} className={className} style={item.style}>
                <div className={headerClassName} style={item.style}>
                    {content}
                </div>
                <CSSTransition nodeRef={menuContentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={active} unmountOnExit options={this.props.transitionOptions}>
                    <div ref={menuContentRef} className={contentWrapperClassName} role="region" id={this.state.id + '_content'} aria-labelledby={this.state.id + '_header'}>
                        <div className="p-panelmenu-content">
                            <PanelMenuSub model={item.items} className="p-panelmenu-root-submenu" multiple={this.props.multiple} />
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

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {panels}
            </div>
        );
    }
}
