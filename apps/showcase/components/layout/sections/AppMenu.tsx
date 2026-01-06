import { menu } from '@/assets/menu/navigation';
import { useApp } from '@/hooks/useApp';
import { cn } from '@primeuix/utils';
import { usePathname } from 'next/navigation';
import AppMenuItem from './AppMenuItem';
import AppRootMenu from './AppRootMenu';

export default function AppMenu() {
    const { sidebarActive } = useApp();
    const pathname = usePathname();

    const m = menu[pathname.split('/')[2] as keyof typeof menu] || [];

    return (
        <aside className={cn('layout-sidebar', { active: sidebarActive })}>
            <nav>
                <AppRootMenu />
                {m.length > 0 && (
                    <ol className="layout-menu">
                        <AppMenuItem menu={m} />
                    </ol>
                )}
            </nav>
        </aside>
    );
}
