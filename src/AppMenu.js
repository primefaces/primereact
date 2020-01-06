import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class AppMenu extends Component {

    constructor() {
        super();
        this.state = {
            menu: null,
        };
    }

    getMenu() {
        axios.get('showcase/resources/menu/menu.json')
            .then(res => res.data.data)
            .then(data => this.setState({ menu: data }));
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
                        this.state.menu.map((menuitem, index) => {
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
                <ul className="layout-menu">
                    { menuItems }
                </ul>
            </div>
        );
    }
}
