import Link from 'next/link';
import { classNames } from '../lib/utils/ClassNames';
import { CSSTransition } from 'react-transition-group';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { InputText } from '../lib/inputtext/InputText';
import MenuData from "./menu.json";
import getConfig from 'next/config';

export default function Menu(props) {
    const [filteredMenu, setFilteredMenu] = useState(MenuData.data || []);
    const [activeSubmenus, setActiveSubmenus] = useState({});
    const router = useRouter();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const toggleSubmenu = (name) => {
        let _activeSubmenus = { ...activeSubmenus };
        _activeSubmenus[name] = _activeSubmenus[name] ? false : true;
        setActiveSubmenus(_activeSubmenus);
    }

    const isSubmenuActive = (name) => {
        if (activeSubmenus.hasOwnProperty(name)) {
            return activeSubmenus[name];
        }

        return false;
    }

    const renderBadge = (item) => {
        const badge = item.badge;
        if (badge) {
            return (
                <span className={classNames('layout-menu-badge p-tag p-tag-rounded ml-2 uppercase', { [`${badge}`]: true, 'p-tag-success': badge === 'new', 'p-tag-info': badge === 'updated' })}>{badge}</span>
            );
        }

        return null;
    }

    const renderLink = (item, linkProps) => {
        const { name, to, href } = item;
        const badge = renderBadge(item);
        const content = (
            <>
                {name}
                {badge}
            </>
        );

        if (href)
            return <a href={href} role="menuitem" target="_blank" rel="noopener noreferrer" onClick={props.onMenuItemClick}>{content}</a>
        else if (!to)
            return <button type="button" className="p-link" {...linkProps}>{content}</button>

        return (
            <Link href={to}>
                <a className={(to === router.pathname) ? 'router-link-exact-active router-link-active' : undefined}
                    onClick={props.onMenuItemClick}>{content}</a>
            </Link>
        );
    }

    const renderCategorySubmenuItems = (item, submenuKey) => {
        const cSubmenuRef = React.createRef();

        return (
            <CSSTransition nodeRef={cSubmenuRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={isSubmenuActive(item.name) || item.expanded} unmountOnExit>
                <div ref={cSubmenuRef} className="p-toggleable-content">
                    <ul role="menu">
                        {
                            item.children.map((item, index) => {
                                const link = renderLink(item);
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

    const renderCategoryItem = (menuitem, menuitemIndex) => {
        if (menuitem.children) {
            return (
                <>
                    {
                        menuitem.children.map((item, index) => {
                            const submenuKey = `${menuitemIndex}_${index}`;
                            const link = renderLink(item, { onClick: () => toggleSubmenu(item.name) });

                            return (
                                <React.Fragment key={`menuitem_${submenuKey}`}>
                                    {link}
                                    {item.children && renderCategorySubmenuItems(item, submenuKey)}
                                </React.Fragment>
                            )
                        })
                    }
                </>
            );
        }

        return null;
    }

    const renderMenu = () => {
        return (
            <>
                {
                    filteredMenu.map((menuitem, index) => {
                        const categoryItem = renderCategoryItem(menuitem, index);
                        const badge = renderBadge(menuitem);

                        return (
                            <React.Fragment key={`category_${index}`}>
                                <div className="menu-category">
                                    {menuitem.name}
                                    {badge}
                                </div>
                                {menuitem.children && <div className="menu-items">
                                    {categoryItem}
                                </div>}
                                {menuitem.banner && <div className="menu-image menu-banner">
                                    <a href={menuitem.href}>
                                        <img src={contextPath + (props.darkTheme ? menuitem.imageDark : menuitem.imageLight)} alt="banner" />
                                    </a>
                                </div>}
                            </React.Fragment>
                        )
                    })
                }
            </>
        );
    }

    const onSearchInputChange = (event) => {
        if (!MenuData.data) {
            setFilteredMenu([]);
        }
        else if (!event.target.value) {
            setFilteredMenu(MenuData.data);
        }
        else if (MenuData.data) {
            const searchVal = event.target.value && event.target.value.toLowerCase();
            let _filteredMenu = [];
            for (let item of MenuData.data) {
                let copyItem = { ...item };
                if (isFilterMatched(copyItem, searchVal) || findFilteredItems(copyItem, searchVal)) {
                    _filteredMenu.push(copyItem);
                }
            }

            setFilteredMenu(_filteredMenu);
        }
    }

    const findFilteredItems = (item, searchVal) => {
        if (item) {
            let matched = false;
            if (item.children) {
                let childItems = [...item.children];
                item.children = [];
                for (let childItem of childItems) {
                    let copyChildItem = { ...childItem };
                    if (isFilterMatched(copyChildItem, searchVal)) {
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

    const isFilterMatched = (item, searchVal) => {
        let matched = false;
        if (onFilterOnOptions(item, searchVal, ['name', 'meta', 'badge'])) {
            matched = true;
        }

        if (!matched || !(item.children && item.children.length)) {
            matched = findFilteredItems(item, searchVal) || matched;
        }

        return matched;
    }

    const onFilterOnOptions = (item, searchVal, optionKeys) => {
        if (item && optionKeys) {
            const isMatched = (val) => {
                if (searchVal.indexOf('&') < 0) {
                    return val.toLowerCase().indexOf(searchVal) > -1;
                }
                else {
                    return searchVal.split('&').some(s => !!s && val.toLowerCase().indexOf(s) > -1);
                }
            };

            return optionKeys.some(optionKey => {
                const value = item[optionKey];

                return value && (typeof value === 'string' ? isMatched(value) : value.filter(meta => isMatched(meta)).length > 0);
            });
        }

        return false;
    }

    const resetFilter = () => {
        setFilteredMenu(MenuData.data);
        searchInput.current.value = '';
        searchInput.current.focus();
    }

    const menuItems = renderMenu();
    const showClearIcon = filteredMenu.length !== MenuData.data.length;
    const sidebarClassName = classNames('layout-sidebar', { 'active': props.active });
    const filterContentClassName = classNames('layout-sidebar-filter-content p-input-icon-left p-fluid', { 'p-input-icon-right': showClearIcon });
    const searchInput = useRef();

    return (
        <div className={sidebarClassName} role="navigation">
            <Link href="/">
                <a className="logo" aria-label="PrimeReact logo">
                    <img alt="logo" src={`${contextPath}/images/primereact-logo${props.darkTheme ? '-light' : '-dark'}.svg`} />
                </a>
            </Link>
            <div className="layout-sidebar-filter">
                <div className={filterContentClassName}>
                    <i className="pi pi-search" />
                    <InputText ref={searchInput} type="text" onChange={onSearchInputChange} placeholder="Search" aria-label="Search input" autoComplete="off" />
                    {showClearIcon && <i className="clear-icon pi pi-times" onClick={resetFilter} />}
                </div>
            </div>
            <div className="layout-menu" role="menubar">
                {menuItems}
            </div>
        </div>
    );
}