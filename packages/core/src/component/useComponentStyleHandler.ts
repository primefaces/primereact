import { ThemeContext } from '@primereact/core/theme';
import { useStyle } from '@primereact/core/use-style';
import { Theme, dt } from '@primeuix/styled';
import { isNotEmpty, minifyCSS, resolve } from '@primeuix/utils';
import * as React from 'react';

export const useComponentStyleHandler = (styles?: any) => {
    const theme = React.useContext(ThemeContext);
    const { load } = useStyle();

    const _load = (css, options) => {
        load({ name: options.name, css });
    };

    return {
        name: 'base',
        ...styles,
        load: (style = '', options = {}, extendedStyle = '', enableThemeTransform = false) => {
            const name = options.name || this.name;
            const resolvedStyle = `${resolve(style, { dt })}${extendedStyle}`;
            const computedStyle = enableThemeTransform ? Theme.transformCSS(name, resolvedStyle) : resolvedStyle;

            return isNotEmpty(computedStyle) ? _load(minifyCSS(computedStyle), { name, ...options }) : {};
        },
        loadCSS(options) {
            return this.load(this.css, options);
        },
        loadStyle(options, extendedStyle = '') {
            return this.load(this.style, options, extendedStyle, true);
        },
        getCommonTheme(params) {
            return Theme.getCommon(this.name, params);
        },
        getComponentTheme(params) {
            return Theme.getComponent(this.name, params);
        },
        getPresetTheme(preset, selector, params) {
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
                    .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                    .join(' ');

                return `<style type="text/css" data-primereact-style-id="${this.name}" ${_props}>${_style}</style>`;
            }

            return '';
        },
        getCommonThemeStyleSheet(params, props = {}) {
            return Theme.getCommonStyleSheet(this.name, params, props);
        },
        getThemeStyleSheet(params, props = {}) {
            const cssArr = [Theme.getStyleSheet(this.name, params, props)];

            if (theme) {
                const _name = this.name === 'base' ? 'global-style' : `${this.name}-style`;
                const _css = resolve(theme, { dt });
                const _style = minifyCSS(Theme.transformCSS(this.name, _css));
                const _props = Object.entries(props)
                    .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                    .join(' ');

                cssArr.push(`<style type="text/css" data-primereact-style-id="${_name}" ${_props}>${_style}</style>`);
            }

            return cssArr.join('');
        }
    };
};
