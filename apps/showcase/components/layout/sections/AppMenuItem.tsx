import type { AppMenuItemData, AppMenuItemProps } from '@/types/App.types';
import { cn } from '@primeuix/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppMenuItem(props: AppMenuItemProps) {
    const pathname = usePathname();

    const isActiveRootmenuItem = (menuitem: AppMenuItemData) => {
        return menuitem.children && !menuitem.children.some((item) => item.to === `/${pathname.replaceAll('-', '/')}` || (item.children && item.children.some((it) => it.to === `/${pathname}`)));
    };

    return props.menu?.map((menuitem, index) => (
        <li key={`_root${index}`}>
            {menuitem.children && props.root && (
                <button type="button">
                    <span className="menu-icon">
                        <i className={menuitem.icon}></i>
                    </span>
                    <span>{menuitem.name}</span>
                    <i className="menu-toggle-icon pi pi-angle-down"></i>
                </button>
            )}

            {menuitem.href && (
                <a href={menuitem.href} target="_blank" rel="noopener noreferrer">
                    {menuitem.icon && props.root && (
                        <span className="menu-icon">
                            <i className={menuitem.icon}></i>
                        </span>
                    )}
                    <span>{menuitem.name}</span>
                    {/*<Tag v-if="menuitem.badge" :value="menuitem.badge"></Tag>*/}
                </a>
            )}

            {menuitem.to && (
                <Link href={menuitem.to} className={cn({ 'router-link-active': menuitem.to === pathname })}>
                    {menuitem.icon && props.root && (
                        <span className="menu-icon">
                            <i className={menuitem.icon}></i>
                        </span>
                    )}
                    <span>{menuitem.name}</span>
                    {/*<Tag v-if="menuitem.badge" :value="menuitem.badge"></Tag>*/}
                </Link>
            )}

            {!props.root && menuitem.children && <span className="menu-child-category">{menuitem.name}</span>}
            {menuitem.children && (
                <div className={cn({ hidden: menuitem.children && props.root && isActiveRootmenuItem(menuitem) })}>
                    <ol>
                        <AppMenuItem root={false} menu={menuitem.children} />
                    </ol>
                </div>
            )}
        </li>
    ));
}
