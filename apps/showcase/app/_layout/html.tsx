import '@/assets/styles/global.css';
import Body from './body';

export default function Html({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
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
            {children}
        </html>
    );
}

Html.Body = Body;
