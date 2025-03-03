import * as React from 'react';
import { LocaleContext } from './Locale.context';

export const useLocale = () => {
    const context = React.useContext(LocaleContext);

    if (context === undefined) {
        throw new Error('Context must be used within a LocaleProvider');
    }

    return context;
};
