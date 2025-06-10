import { LocaleProvider } from '@primereact/core/locale';
import { PassThroughProvider } from '@primereact/core/passthrough';
import { ThemeProvider } from '@primereact/core/theme';
import { useProps } from '@primereact/hooks';
import type { PrimeReactProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultConfigProps } from './PrimeReact.props';

export const PrimeReactContext = React.createContext<PrimeReactProps | undefined>(undefined);

export function PrimeReactProvider(inProps: React.PropsWithChildren<PrimeReactProps> = {}) {
    const { props, attrs } = useProps(inProps, defaultConfigProps);

    // states
    const [inputVariant, setInputVariant] = React.useState(props.inputVariant);

    const value = {
        inputVariant,
        setInputVariant
    };

    return (
        <PrimeReactContext.Provider value={value}>
            <LocaleProvider lang={props.locale}>
                <PassThroughProvider value={props.pt} {...props.ptOptions}>
                    <ThemeProvider preset={props.theme?.preset} stylesheet={props.stylesheet} {...props.theme?.options}>
                        {resolve(attrs.children, value)}
                    </ThemeProvider>
                </PassThroughProvider>
            </LocaleProvider>
        </PrimeReactContext.Provider>
    );
}
