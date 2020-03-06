import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class AppMenu extends Component {

    constructor() {
        super();
        this.state = {
            menu: null,
            filteredMenu: []
        };

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    }

    getMenu() {
        axios.get('showcase/resources/menu/menu.json', { headers: { 'Cache-Control' : 'no-cache' } })
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
            for(let item of this.state.menu) {
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

    componentDidMount() {
        this.getMenu();
    }

    renderSubmenu(menuitem, menuitemIndex) {
        if (menuitem.children) {
            return (
                <ul className="layout-submenu" role="menu" aria-expanded={true}>
                    {
                        menuitem.children.map((item, index) => {
                            return (
                                <li key={`menuitem_${menuitemIndex}_${index}`} role="presentation">
                                    <Link to={item.to} role="menuitem">
                                        {item.name}
                                        { item.badge && <span className="layout-menuitem-badge">{item.badge}</span> }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            );
        }

        return null;
    }

    renderRootMenuItems() {
        if (this.state.menu) {
            return (
                <React.Fragment>
                    {
                        this.state.filteredMenu && this.state.filteredMenu.map((menuitem, index) => {
                            const submenus = this.renderSubmenu(menuitem, index);
                            return (
                                <li key={`menuitem_${index}`} role="presentation">
                                    <span className="layout-menu-header" role="menuitem">
                                        <img alt={menuitem.name} className="layout-menu-icon" src={menuitem['icon']}></img>
                                        <span className="layout-menu-text">{menuitem.name}</span>
                                    </span>
                                    { submenus }
                                </li>
                            )
                        })
                    }
                </React.Fragment>
            );
        }

        return null;
    }

    render() {
        const menuItems = this.renderRootMenuItems();

        return (
            <div className="layout-sidebar" role="navigation" onClick={this.props.onSidebarClick}>
                <div className="layout-sidebar-search-wrapper">
                    <i className="pi pi-search layout-sidebar-search-icon"></i>
                    <input type="text" onChange={this.onSearchInputChange} placeholder="Search..." aria-label="Search input" autoComplete="off"/>
                </div>

                <ul className="layout-menu" role="menubar">
                    { menuItems }
                </ul>
            </div>
        );
    }
}
