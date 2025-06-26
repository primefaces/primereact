import { useApp } from '@/hooks/useApp';
import { cn } from '@primeuix/utils';
import AppMenuItem from './AppMenuItem';

export default function AppMenu() {
    const { menu, sidebarActive } = useApp();

    return (
        <aside className={cn('layout-sidebar', { active: sidebarActive })}>
            <nav>
                <ol className="layout-menu">
                    <AppMenuItem menu={menu} />
                </ol>
            </nav>
        </aside>
    );
}
