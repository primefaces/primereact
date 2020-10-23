import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { InputText } from '../src/components/inputtext/InputText';

export class AppMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: null,
            filteredMenu: [],
            activeSubmenus: {}
        };

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    }

    getMenu() {
        axios.get('showcase/menu/menu.json', { headers: { 'Cache-Control' : 'no-cache' } })
            .then(res => res.data.data)
            .then(data => this.setState({ menu: data, filteredMenu: data }));
    }

    onSearchInputChange(event) {
        if (!this.state.menu){
            this.setState({ filteredMenu : [] });
        }
        else if (!event.target.value) {
            this.setState({ filteredMenu : this.state.menu });
        }
        else if (this.state.menu) {
            const searchVal = event.target.value && event.target.value.toLowerCase();
            let filteredMenu = [];
            for (let item of this.state.menu) {
                let copyItem = {...item};
                if (this.findFilteredItems(copyItem, searchVal) || this.isFilterMatched(copyItem, searchVal)) {
                    filteredMenu.push(copyItem);
                }
            }

            this.setState({ filteredMenu });
        }
    }

    findFilteredItems(item, searchVal) {
        if (item) {
            let matched = false;
            if (item.children) {
                let childItems = [...item.children];
                item.children = [];
                for (let childItem of childItems) {
                    let copyChildItem = {...childItem};
                    if (this.isFilterMatched(copyChildItem, searchVal)) {
                        matched = true;
                        item.children.push(copyChildItem);
                        item.expanded = true;
                    }
                }
            }

            if (matched) {
                return true;
            }
        }
    }

    isFilterMatched(item, searchVal) {
        let matched = false;
        if(item.name.toLowerCase().indexOf(searchVal) > -1 || this.onFilterOnMeta(item, searchVal)) {
            matched = true;
        }

        if (!matched || !(item.children && item.children.length)) {
            matched = this.findFilteredItems(item, searchVal) || matched;
        }

        return matched;
    }

    onFilterOnMeta(item, searchVal) {
        if (item && item.meta) {
            return item.meta.filter(meta => meta.toLowerCase().indexOf(searchVal) > -1).length > 0
        }

        return false;
    }

    toggleSubmenu(event, name) {
        let activeSubmenus = {...this.state.activeSubmenus};
        activeSubmenus[name] = activeSubmenus[name] ? false: true;
        this.setState({ activeSubmenus });
        event.preventDefault();
    }

    isSubmenuActive(name) {
        if (this.state.activeSubmenus.hasOwnProperty(name)) {
            return this.state.activeSubmenus[name];
        }

        return false;
    }

    componentDidMount() {
        this.getMenu();
    }

    renderLink(item, props) {
        const { name, to, href, badge } = item;
        const content = (
            <>
                {name}
                {badge && <span className={classNames('layout-menu-badge p-tag p-tag-rounded p-ml-2 p-text-uppercase', { [`${badge}`]: true, 'p-tag-success': badge === 'new', 'p-tag-info': badge === 'updated' })}>{badge}</span> }
            </>
        );

        if (href) {
            return <a href={href} role="menuitem" target="_blank" rel="noopener noreferrer" onClick={this.props.onMenuItemClick}>{content}</a>
        }
        else if (!to) {
            return <button className="p-link" {...props}>{content}</button>
        }

        return <NavLink to={to} exact role="menuitem" activeClassName="router-link-exact-active router-link-active" onClick={this.props.onMenuItemClick}>{content}</NavLink>;
    }

    renderCategorySubmenuItems(item, submenuKey) {
        return (
            <CSSTransition classNames="p-toggleable-content" timeout={{enter: 1000, exit: 450}} in={this.isSubmenuActive(item.name) || item.expanded} unmountOnExit>
                <div className="p-toggleable-content">
                    <ul role="menu">
                        {
                            item.children.map((item, index) => {
                                const link = this.renderLink(item);
                                return (
                                    <li role="menuitem" key={`menuitem_${submenuKey}_${index}`}>
                                        {link}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </CSSTransition>
        );
    }

    renderCategoryItem(menuitem, menuitemIndex) {
        if (menuitem.children) {
            return (
                <>
                    {
                        menuitem.children.map((item, index) => {
                            const submenuKey = `${menuitemIndex}_${index}`;
                            const link = this.renderLink(item, {onClick: (e) => this.toggleSubmenu(e, item.name)});

                            return (
                                <React.Fragment key={`menuitem_${submenuKey}`}>
                                    {link}
                                    {item.children && this.renderCategorySubmenuItems(item, submenuKey)}
                                </React.Fragment>
                            )
                        })
                    }
                </>
            );
        }

        return null;
    }

    renderCategoryItems() {
        if (this.state.menu) {
            return (
                <>
                    {
                        this.state.filteredMenu && this.state.filteredMenu.map((menuitem, index) => {
                            const categoryItem = this.renderCategoryItem(menuitem, index);
                            return (
                                <React.Fragment key={`category_${index}`}>
                                    <div className="menu-category">{menuitem.name}</div>
                                    <div className="menu-items">
                                        { categoryItem }
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </>
            );
        }

        return null;
    }

    render() {
        const sidebarClassName = classNames('layout-sidebar', {'active': this.props.active});
        const menuItems = this.renderCategoryItems();

        return (
            <div className={sidebarClassName} role="navigation">
                <span className="layout-sidebar-filter p-input-icon-left p-fluid p-my-2">
                    <i className="pi pi-search" />
                    <InputText type="text" onChange={this.onSearchInputChange}  placeholder="Search..." aria-label="Search input" autoComplete="off" />
                </span>

                <div className="layout-menu" role="menubar">
                    { menuItems }
                </div>
            </div>
        );
    }
}
