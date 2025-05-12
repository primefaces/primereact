import { ThemeContext } from '@primereact/core/theme';
import { useStyle } from '@primereact/core/use-style';
import type { StylesOptions, StyleType } from '@primereact/types/styles';
import { dt, Theme } from '@primeuix/styled';
import { isNotEmpty, minifyCSS, resolve, toElement } from '@primeuix/utils';
import * as React from 'react';

export const useComponentStyleHandler = (styles?: StylesOptions, elementRef?: React.Ref<HTMLElement>) => {
    const theme = React.useContext(ThemeContext);
    const { load } = useStyle();

    const _load = React.useCallback(
        (css?: string, options?: Record<PropertyKey, unknown>) => {
            load({ name: options?.name, css, element: toElement(elementRef) });
        },
        [load, elementRef]
    );

    return React.useMemo(() => {
        const handler = {
            name: 'base',
            ...styles,
            load: (style: StyleType = '', options: Record<PropertyKey, unknown> & { name?: string } = {}, extendedStyle = '', enableThemeTransform = false) => {
                const name = options.name || handler.name;
                const resolvedStyle = `${resolve(style, { dt })}${extendedStyle}`;
                const computedStyle = enableThemeTransform ? Theme.transformCSS(name, resolvedStyle) : resolvedStyle;

                return isNotEmpty(computedStyle) ? _load(minifyCSS(computedStyle), { name, ...options }) : {};
            },
            loadCSS(options?: Record<PropertyKey, unknown>) {
                return this.load(this.css, options);
            },
            loadStyle(options?: Record<PropertyKey, unknown>, extendedStyle = '') {
                return this.load(this.style, options, extendedStyle, true);
            },
            getCommonTheme(params?: Record<PropertyKey, unknown>) {
                return Theme.getCommon(this.name, params);
            },
            getComponentTheme(params?: Record<PropertyKey, unknown>) {
                return Theme.getComponent(this.name, params);
            },
            // @todo: preset type
            getPresetTheme(preset: unknown, selector: string, params?: Record<PropertyKey, unknown>) {
                return Theme.getCustomPreset(this.name, preset, selector, params);
            },
            getLayerOrderThemeCSS() {
                return Theme.getLayerOrderCSS(this.name);
            },
            getStyleSheet(extendedCSS = '', props = {}) {
                if (this.css) {
                    const _css = resolve(this.css, { dt });
                    const _style = minifyCSS(`${_css}${extendedCSS}`);
                    const _props = Object.entries(props)
                        .reduce<string[]>((acc, [k, v]) => {
                            acc.push(`${k}="${v}"`);

                            return acc;
                        }, [])
                        .join(' ');

                    return `<style type="text/css" data-primereact-style-id="${this.name}" ${_props}>${_style}</style>`;
                }

                return '';
            },
            getCommonThemeStyleSheet(params?: Record<PropertyKey, unknown>, props: Record<PropertyKey, unknown> = {}) {
                return Theme.getCommonStyleSheet(this.name, params, props);
            },
            getThemeStyleSheet(params?: Record<PropertyKey, unknown>, props: Record<PropertyKey, unknown> = {}) {
                const cssArr = [Theme.getStyleSheet(this.name, params, props)];

                if (theme) {
                    const _name = this.name === 'base' ? 'global-style' : `${this.name}-style`;
                    const _css = resolve(theme, { dt }) as string;
                    const _style = minifyCSS(Theme.transformCSS(this.name, _css));
                    const _props = Object.entries(props)
                        .reduce<string[]>((acc, [k, v]) => {
                            acc.push(`${k}="${v}"`);

                            return acc;
                        }, [])
                        .join(' ');

                    cssArr.push(`<style type="text/css" data-primereact-style-id="${_name}" ${_props}>${_style}</style>`);
                }

                return cssArr.join('');
            }
        };

        return handler;
    }, [styles, theme, _load]);
};
