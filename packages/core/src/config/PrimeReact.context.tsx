import { LocaleProvider } from '@primereact/core/locale';
import { PassThroughProvider } from '@primereact/core/passthrough';
import { ThemeProvider } from '@primereact/core/theme';
import { useProps } from '@primereact/hooks';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './PrimeReact.props';
import type { PrimeReactProps } from './PrimeReact.types';

export const PrimeReactContext = React.createContext<PrimeReactProps | undefined>(undefined);

export const PrimeReactProvider = (inProps: React.PropsWithChildren<PrimeReactProps> = {}) => {
    const { props, attrs } = useProps(inProps, defaultProps);

    // states
    const [ripple, setRipple] = React.useState(props.ripple);

    const value = {
        ripple,
        setRipple
    };

    return (
        <PrimeReactContext.Provider value={value}>
            <LocaleProvider lang={props.locale}>
                <PassThroughProvider value={props.pt} {...props.ptOptions}>
                    <ThemeProvider preset={props.theme?.preset} {...props.theme?.options}>
                        {resolve(attrs.children, value)}
                    </ThemeProvider>
                </PassThroughProvider>
            </LocaleProvider>
        </PrimeReactContext.Provider>
    );
};
