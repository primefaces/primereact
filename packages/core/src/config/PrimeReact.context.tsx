import { LocaleProvider } from '@primereact/core/locale';
import { PassThroughProvider } from '@primereact/core/passthrough';
import { ThemeProvider } from '@primereact/core/theme';
import { useProps } from '@primereact/hooks';
import type { PrimeReactProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './PrimeReact.props';

export const PrimeReactContext = React.createContext<PrimeReactProps | undefined>(undefined);

export const PrimeReactProvider = (inProps: React.PropsWithChildren<PrimeReactProps> = {}) => {
    const { props, attrs } = useProps(inProps, defaultProps);

    // states
    const [ripple, setRipple] = React.useState(props.ripple);
    const [inputVariant, setInputVariant] = React.useState(props.inputVariant);

    const value = {
        ripple,
        setRipple,
        inputVariant,
        setInputVariant,
        zIndex: { modal: 1100, overlay: 1000, menu: 1000, tooltip: 1100 }
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
};
