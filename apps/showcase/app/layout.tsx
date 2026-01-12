import '@/assets/styles/global.css';
import appConfig from '@/app.config';
import { Geist_Mono } from 'next/font/google';
import { AppProvider } from '@/context/App.context';
import StyleRegistry from '@/components/style-registry';

export const { metadata, viewport, ...rest } = appConfig;

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    weight: ['400']
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistMono.variable}`} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://rsms.me/" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
(function() {
  try {
    const theme = localStorage.getItem('isDarkTheme');
    if (theme === 'true') {
      document.documentElement.classList.add('p-dark');
    } else {
      document.documentElement.classList.remove('p-dark');
    }

   
  } catch (e) {}
})();
            `
                    }}
                />
            </head>
            <body className=" ">
                <AppProvider {...rest}>
                    <StyleRegistry>{children}</StyleRegistry>
                </AppProvider>
            </body>
        </html>
    );
}
