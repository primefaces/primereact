import appConfig from '@/app.config';
import { Html } from '@/app/_layout';

export const { metadata, viewport } = appConfig;

export default function LandingLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Html>
            <Html.Body>{children}</Html.Body>
        </Html>
    );
}
