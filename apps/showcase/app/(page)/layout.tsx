import AppLayout from '@/components/layout/AppLayout';

export default function DocsLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AppLayout>{children}</AppLayout>
        </>
    );
}
