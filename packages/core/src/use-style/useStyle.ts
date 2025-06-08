import { ThemeContext } from '@primereact/core/theme';
import type { useStyleLoadOptions } from '@primereact/types/core';
import { isClient, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';

export function useStyle() {
    const theme = React.useContext(ThemeContext);

    const _load = React.useCallback(
        (loadOptions: useStyleLoadOptions = {}) => {
            const { name, css, element, options = {} } = loadOptions;

            if (isClient() && isNotEmpty(css)) {
                let root = element?.getRootNode() as Element | Document | ShadowRoot | null;

                if (!root || root === document) root = document.head;

                const styleElement = root.querySelector(`style[data-primereact-style-id="${name}"]`) || document.createElement('style');

                if (!styleElement.isConnected) {
                    // @todo - add attributes and prepend
                    if (options?.first) {
                        root.prepend(styleElement);
                    } else {
                        root.appendChild(styleElement);
                    }

                    styleElement.setAttribute('data-primereact-style-id', name || '');
                }

                styleElement.textContent = css ?? '';
            }
        },
        [theme]
    );

    const load = React.useCallback(
        (loadOptions: useStyleLoadOptions = {}) => {
            const { name, css } = loadOptions;

            if (isNotEmpty(loadOptions.css)) {
                // @todo - implement
                if (!theme?.stylesheet?.has(name) && !isClient() && name !== 'layer-order') {
                    theme?.stylesheet?.add(name, css);
                }

                _load(loadOptions);
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
            _load({ name: key, css: value?.css });
        });

        return () => {
            unload();
        };
    }, [theme]);

    return [load, unload];
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
