import DocAds from '@/components/docs/doc-ads';
import DocSidebar from '@/components/docs/doc-sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container min-h-min xl:grid grid-cols-[var(--sidebar-width)_minmax(0,1fr)] gap-(--docs-layout-gap) [--docs-layout-gap:2rem] xl:[--docs-layout-gap:3.5rem] [--docs-layout-spacing:1.75rem] xl:[--docs-layout-spacing:2.5rem]">
            <DocSidebar />
            <div className="w-full h-full">{children}</div>
            <DocAds />
        </div>
    );
}
