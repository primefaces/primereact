import { ComponentContext } from '@primereact/core/component';
import { LocaleContext } from '@primereact/core/locale';
import { PassThroughContext } from '@primereact/core/passthrough';
import { ThemeContext } from '@primereact/core/theme';
import * as React from 'react';
import { PrimeReactContext } from './PrimeReact.context';

export const usePrimeReact = () => {
    const config = React.useContext(PrimeReactContext);
    const locale = React.useContext(LocaleContext);
    const passthrough = React.useContext(PassThroughContext);
    const theme = React.useContext(ThemeContext);
    const parent = React.useContext(ComponentContext);

    if (config === undefined) {
        throw new Error('Context must be used within a PrimeReactProvider');
    }

    return {
        config,
        locale,
        passthrough,
        theme,
        parent
    };
};
