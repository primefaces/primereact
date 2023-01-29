import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { StyleClass } from '../lib/styleclass/StyleClass';
import { classNames } from '../lib/utils/ClassNames';
import MenuData from './menu.json';

export default function Menu(props) {
    const router = useRouter();

    const renderLink = (item) => {
        const { name, to, href } = item;
        const content = (
            <>
                {item.icon && (
                    <div className="menu-icon">
                        <i class={item.icon}></i>
                    </div>
                )}
                {name}
            </>
        );

        if (href) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            );
        } else {
            return (
                <Link href={to}>
                    <a className={classNames({ 'router-link-active': to === router.pathname })}>{content}</a>
                </Link>
            );
        }
    };

    const renderChild = (menuitem, key) => {
        if (menuitem.children) {
            return (
                <li key={key}>
                    <span className="menu-child-category">{menuitem.name}</span>
                    <ol>
                        {menuitem.children.map((child, index) => {
                            const link = renderLink(child);

                            return <li key={key + '_' + index}>{link}</li>;
                        })}
                    </ol>
                </li>
            );
        } else {
            const link = renderLink(menuitem);

            return <li key={key}>{link}</li>;
        }
    };

    const renderChildren = (menuitem, parentIndex) => {
        if (menuitem.children) {
            return (
                <div className="hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <ol>{menuitem.children.map((item, index) => renderChild(item, parentIndex + '_' + index))}</ol>
                </div>
            );
        }

        return null;
    };

    const renderRootItemButton = (menuitem) => {
        const btnRef = React.createRef();

        return (
            <StyleClass nodeRef={btnRef} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <button ref={btnRef} type="button" className="p-link">
                    <div className="menu-icon">
                        <i className={menuitem.icon}></i>
                    </div>
                    <span>{menuitem.name}</span>
                    <i className="menu-toggle-icon pi pi-angle-down"></i>
                </button>
            </StyleClass>
        );
    };

    const renderMenuitems = () => {
        return (
            <>
                {MenuData.data.map((menuitem, index) => {
                    const label = menuitem.children ? renderRootItemButton(menuitem, index) : renderLink(menuitem);
                    const children = renderChildren(menuitem, index);

                    return (
                        <li key={'root_' + index}>
                            {label}
                            {children}
                        </li>
                    );
                })}
            </>
        );
    };

    const menuItems = renderMenuitems();
    const sidebarClassName = classNames('layout-sidebar', { active: props.active });

    return (
        <aside className={sidebarClassName}>
            <Link href="/">
                <a className="logo" aria-label="PrimeReact logo">
                    <img alt="logo" src={`/images/primereact-logo${props.darkTheme ? '-light' : '-dark'}.svg`} />
                </a>
            </Link>
            <nav>
                <ol className="layout-menu">{menuItems}</ol>
            </nav>
        </aside>
    );
}
