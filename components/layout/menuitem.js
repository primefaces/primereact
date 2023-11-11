import React, { useRef } from 'react';
import { Badge } from '../lib/badge/Badge';
import Link from 'next/link';
import { StyleClass } from '../lib/styleclass/StyleClass';
import { classNames } from '../lib/utils/Utils';
import { useRouter } from 'next/router';

function MenuItem(props) {
    const router = useRouter();
    const { menuItem, root } = props;

    const btnRef = useRef(null);

    const isActiveRootmenuItem = (rootItem) => {
        return rootItem.children && !rootItem.children.some((item) => item.to === router.pathname || (item.children && item.children.some((it) => it.to === router.pathname)));
    };

    return (
        <li>
            {menuItem.children && root && (
                <StyleClass nodeRef={btnRef} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <button ref={btnRef} type="button" className="px-link">
                        <span className="menu-icon">
                            <i className={menuItem.icon}></i>
                        </span>
                        <span>{menuItem.name}</span>
                        <i className="menu-toggle-icon pi pi-angle-down"></i>
                    </button>
                </StyleClass>
            )}
            {menuItem?.href && (
                <Link href={menuItem.href} target="_blank" rel="noopener noreferrer">
                    <a>
                        {menuItem?.icon && root && (
                            <span className="menu-icon">
                                <i className={menuItem?.icon}></i>
                            </span>
                        )}
                        <span>{menuItem?.name}</span>
                        {menuItem?.badge && <Badge value={menuItem?.badge} className="ml-auto"></Badge>}
                    </a>
                </Link>
            )}
            {menuItem?.to && (
                <Link href={menuItem?.to}>
                    <a className={classNames({ 'router-link-active': menuItem.to === router.pathname })}>
                        {menuItem?.icon && root && (
                            <span className="menu-icon">
                                <i className={menuItem.icon}></i>
                            </span>
                        )}
                        <span>{menuItem?.name}</span>
                        {menuItem?.badge && <Badge value={menuItem.badge} className="ml-auto"></Badge>}
                    </a>
                </Link>
            )}
            {!root && menuItem.children && <span className="menu-child-category">{menuItem?.name}</span>}
            {menuItem?.children && (
                <div className={classNames('overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out', { hidden: menuItem.children && root && isActiveRootmenuItem(menuItem) })}>
                    <ol>
                        {menuItem.children.map((item, index) => (
                            <MenuItem root={false} menuItem={item} key={`_root${index}`}></MenuItem>
                        ))}
                    </ol>
                </div>
            )}
        </li>
    );
}

export default MenuItem;
