import appConfig from '@/app.config';
import { AppProvider } from '@/context/App.context';
import { Inter } from 'next/font/google';
import StyleRegistry from './registry';

export const { metadata, viewport, ...rest } = appConfig;

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin']
});

export default function Body({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    return (
        <body className={inter.variable}>
            <AppProvider {...rest}>
                <StyleRegistry>{children}</StyleRegistry>
            </AppProvider>
        </body>
    );
}
