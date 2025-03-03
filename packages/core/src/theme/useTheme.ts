import * as React from 'react';
import { ThemeContext } from './Theme.context';

export const useTheme = () => {
    const context = React.useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('Context must be used within a ThemeProvider');
    }

    return context;
};
