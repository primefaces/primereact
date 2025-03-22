import { useApp } from '@/hooks/useApp';
import type { AppMenuProps } from '@/types/App.types';
import { cn } from '@primeuix/utils';
import AppMenuItem from './AppMenuItem';

export default function AppMenu(props: AppMenuProps) {
    const app = useApp();

    return (
        <aside className={cn('layout-sidebar', { active: props.active })}>
            <nav>
                <ol className="layout-menu">
                    <AppMenuItem menu={app.menu} />
                </ol>
            </nav>
        </aside>
    );
}
