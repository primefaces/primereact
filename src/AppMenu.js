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
        axios.get('showcase/resources/menu/menu.json')
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
            return item.meta.filter(meta => meta.indexOf(searchVal) !== -1).length > 0
        }

        return false;
    }

    componentDidMount() {
        this.getMenu();
    }

    renderSubmenu(menuitem, menuitemIndex) {
        if (menuitem.children) {
            return (
                <ul className="layout-submenu">
                    {
                        menuitem.children.map((item, index) => {
                            return (
                                <li key={`menuitem_${menuitemIndex}_${index}`}>
                                    <Link to={item.to}>{item.name}</Link>
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
                                <li key={`menuitem_${index}`}>
                                    <span className="layout-menu-header">
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
            <div className="layout-sidebar" onClick={this.props.onSidebarClick}>
                <div className="layout-sidebar-search-wrapper">
                    <i className="pi pi-search layout-sidebar-search-icon"></i>
                    <input type="text" onChange={this.onSearchInputChange} placeholder="Search..."/>
                </div>

                <ul className="layout-menu">
                    { menuItems }
                </ul>
            </div>
        );
    }
}
