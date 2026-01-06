import { cn } from '@primeuix/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '../../../assets/menu/navigation';

export default function AppRootMenu() {
    const pathname = usePathname();

    return (
        <div className="mb-4 flex flex-col gap-0.5 p-0.5 bg-surface-0 dark:bg-surface-900 shadow-xs border border-surface rounded-lg">
            {navigation.map((nav, i) => (
                <div key={nav.name + i}>
                    <AppRootMenuItem name={nav.name} icon={nav.icon} isActive={pathname.startsWith(nav.to)} href={nav.to} />
                    {nav.items && (
                        <div className="flex flex-col gap-0.5 mt-0.5">
                            {nav.items?.map((child, j) => (
                                <AppRootMenuItem key={child.name + i + j} name={child.name} icon={child.icon} isActive={pathname.startsWith(child.to)} href={child.to} level={i} />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export function AppRootMenuItem({ name, icon, isActive, level = 0, className, ...props }: React.ComponentProps<typeof Link> & { name: string; icon: string; isActive: boolean; level?: number }) {
    return (
        <Link
            className={cn(
                'pr-3 h-9 pl-[calc(var(--spacing)*(3+7*var(--menu-item-level)))] flex items-center gap-2.5 capitalize text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 data-active:text-surface-900 dark:data-active:text-surface-0 font-medium rounded-md text-sm transition-colors duration-150 hover:bg-surface-50 dark:hover:bg-surface-800',
                className
            )}
            style={
                {
                    '--menu-item-level': level
                } as React.CSSProperties
            }
            {...(isActive ? { 'data-active': '' } : {})}
            {...props}
        >
            <i className={`pi ${icon} text-sm!`}></i>
            {name}
        </Link>
    );
}
