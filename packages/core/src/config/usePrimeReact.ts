import * as React from 'react';
import { PrimeReactContext } from './PrimeReact.context';

export const usePrimeReact = () => {
    const context = React.useContext(PrimeReactContext);

    // @todo - export all contexts. ThemeContext etc.

    if (context === undefined) {
        throw new Error('Context must be used within a PrimeReactProvider');
    }

    return context;
};
