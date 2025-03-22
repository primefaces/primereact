'use client';
import Noir from '@/themes/noir';
import { PrimeReactProvider } from '@primereact/core/config';
import { PrimeReactStyleSheet } from '@primereact/core/stylesheet';
import { useServerInsertedHTML } from 'next/navigation';
import * as React from 'react';

export default function StyleRegistry({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    const [styledStyleSheet] = React.useState(() => new PrimeReactStyleSheet());

    useServerInsertedHTML(() => {
        const styleElements = styledStyleSheet.getAllElements();
        styledStyleSheet.clear();
        return <>{styleElements}</>;
    });

    //if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <PrimeReactProvider theme={Noir} stylesheet={styledStyleSheet}>
            {children}
        </PrimeReactProvider>
    );
}
