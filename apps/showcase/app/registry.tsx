'use client';
import { PrimeReactProvider } from '@primereact/core/config';
import { PrimeReactStyleSheet } from '@primereact/core/stylesheet';
import Lara from '@primeuix/themes/lara';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

export default function StyleRegistry({ children }) {
    const [styledStyleSheet] = React.useState(() => new PrimeReactStyleSheet());

    useServerInsertedHTML(() => {
        const styleElements = styledStyleSheet.getAllElements();
        styledStyleSheet.clear();
        return <>{styleElements}</>;
    });

    //if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <PrimeReactProvider theme={{ preset: Lara }} stylesheet={styledStyleSheet}>
            {children}
        </PrimeReactProvider>
    );
}
