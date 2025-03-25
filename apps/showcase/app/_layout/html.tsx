import '@/assets/styles/global.css';
import Body from './body';

export default function Html({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    return <html lang="en">{children}</html>;
}

Html.Body = Body;
