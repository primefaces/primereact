'use client';
import { PrimeReactProvider } from '@primereact/core/config';
import { PrimeReactStyleSheet } from '@primereact/core/stylesheet';
import Aura from '@primeuix/themes/aura';
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
        <PrimeReactProvider theme={{ preset: Aura }} stylesheet={styledStyleSheet}>
            {children}
        </PrimeReactProvider>
    );
}
