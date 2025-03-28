import { ThemeContext } from '@primereact/core/theme';
import { isClient, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';

export function useStyle() {
    const theme = React.useContext(ThemeContext);

    const _load = React.useCallback(
        (name, css) => {
            if (isClient() && isNotEmpty(css)) {
                const styleElement = document.head.querySelector(`style[data-primereact-style-id="${name}"]`) || document.createElement('style');

                if (!styleElement.isConnected) {
                    document.head.appendChild(styleElement);
                    styleElement.setAttribute('data-primereact-style-id', name);
                }

                styleElement.textContent = css;
            }
        },
        [theme]
    );

    const load = React.useCallback(
        ({ name, css }) => {
            if (isNotEmpty(css)) {
                !theme?.stylesheet?.has(name) && theme?.stylesheet?.add(name, css);
                _load(name, css);
            }
        },
        [theme]
    );

    const unload = React.useCallback(() => {
        if (theme?.stylesheet) {
            theme.stylesheet.clear();
        }
    }, [theme]);

    React.useInsertionEffect(() => {
        theme?.stylesheet?.getStyles()?.forEach((value, key) => {
            _load(key, value.css);
        });

        return () => {
            unload();
        };
    }, [theme]);

    return { load, unload };
}
