import { ThemeContext } from '@primereact/core/theme';
import { isClient, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';

export function useStyle() {
    const theme = React.useContext(ThemeContext);

    const _load = React.useCallback(
        (name, css, element) => {
            if (isClient() && isNotEmpty(css)) {
                let root = element?.getRootNode();

                if (!root || root === document) root = document.head;

                const styleElement = root.querySelector(`style[data-primereact-style-id="${name}"]`) || document.createElement('style');

                if (!styleElement.isConnected) {
                    // @todo - add attributes and prepend
                    root.appendChild(styleElement);
                    styleElement.setAttribute('data-primereact-style-id', name);
                }

                styleElement.textContent = css;
            }
        },
        [theme]
    );

    const load = React.useCallback(
        ({ name, css, element }) => {
            if (isNotEmpty(css)) {
                // @todo
                if (!theme?.stylesheet?.has(name) && !isClient()) {
                    theme?.stylesheet?.add(name, css);
                }

                _load(name, css, element);
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

// @todo - Remove this
/*function useCSS(cssMap = {}) {
    const { theme } = usePrimeReact();

    if (typeof window === 'undefined') {
        Object.entries(cssMap).forEach(([key, value]) => {
            config?.sheet?.add(key, value.css);
        });
    }

    React.useInsertionEffect(() => {
        theme.stylesheet?._styles?.forEach((value, key) => {
            const styleElement = document.head.querySelector(`style[data-primereact-style-id="${key}"]`) || document.createElement('style');

            if (!styleElement.isConnected) {
                //setAttributes(styleElement, value.styleOptions);
                value.first ? document.head.prepend(styleElement) : document.head.appendChild(styleElement);
                setAttribute(styleElement, 'data-primereact-style-id', key);
                //styleRef.current.onload = (event: React.ReactEventHandler<HTMLStyleElement>) => onStyleLoaded?.(event, { name: styleNameRef.current });
                //onStyleMounted?.(styleNameRef.current);
            }

            styleElement.textContent = value.css;
        });
    });
    //return rule;
}*/
