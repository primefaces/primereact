'use client';
import appConfig from '@/app.config';
import menu from '@/assets/menu/menu.json';
import { AppContext } from '@/context/App.context';
import pkg from '@/package.json';
import * as React from 'react';

export function useApp() {
    const context = React.useContext(AppContext);

    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }

    return {
        ...context,
        config: appConfig,
        pkg,
        menu: menu.data
    };
}
