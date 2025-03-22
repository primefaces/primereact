import appConfig from '@/app.config';
import { Html } from '@/app/_layout';
import AppLayout from '@/components/layout/AppLayout';

export const { metadata, viewport } = appConfig;

export default function PagesLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Html>
            <Html.Body>
                <AppLayout>{children}</AppLayout>
            </Html.Body>
        </Html>
    );
}
