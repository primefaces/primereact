import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '../../../assets/menu/navigation';

export default function AppRootMenu() {
    const pathname = usePathname();

    return (
        <div className="space-y-0.5 border-b border-surface pb-2 mb-4">
            {navigation.map((nav, i) => (
                <Link
                    key={nav.name + i}
                    className="h-8 rounded-lg px-3 flex items-center gap-3 text-sm font-medium text-surface-600 dark:text-surface-400 hover:bg-surface-200/50 hover:text-surface-900 dark:hover:bg-surface-900 dark:hover:text-surface-0 data-active:bg-primary-500/10 dark:data-active:bg-primary-400/10 data-active:text-primary data-active:hover:text-primary-600 dark:data-active:hover:text-primary-300"
                    href={nav.href}
                    {...(pathname.startsWith(nav.href) ? { 'data-active': '' } : {})}
                >
                    <i className={`pi ${nav.icon} text-sm!`}></i>
                    {nav.name}
                </Link>
            ))}
        </div>
    );
}
