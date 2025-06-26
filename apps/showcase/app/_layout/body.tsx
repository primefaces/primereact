import appConfig from '@/app.config';
import { AppProvider } from '@/context/App.context';
import StyleRegistry from './registry';

export const { metadata, viewport, ...rest } = appConfig;

export default function Body({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    return (
        <body>
            <AppProvider {...rest}>
                <StyleRegistry>{children}</StyleRegistry>
            </AppProvider>
        </body>
    );
}
