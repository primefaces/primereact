import AppFooter from '@/components/layout/app-footer';
import AppNews from '@/components/layout/app-news';
import AppTopbar from '@/components/layout/app-topbar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-dvh bg-(--ground-background) relative layout-wrapper">
            <AppNews />
            <AppTopbar />
            <main className="flex flex-col flex-1">{children}</main>
            <AppFooter />
        </div>
    );
}
