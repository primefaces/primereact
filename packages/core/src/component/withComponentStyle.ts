import { PrimeReactContext } from '@primereact/core/config';
import { Theme, dt } from '@primeuix/styled';
import { minifyCSS, resolve } from '@primeuix/utils/object';
import * as React from 'react';

export const withComponentStyle = (callback) => {
    // (inInstance, ref) @todo
    return (options, ref) => {
        const { name = 'base', css, theme } = options?.style || {};
        const config = React.useContext(PrimeReactContext);

        const _load = (css, options) => {
            config?.sheet?.add(options.name, css);
        };

        const $style = {
            ...options?.style,
            load: (style, options = {}, transform = (cs) => cs) => {
                const computedStyle = transform(resolve(style, { dt }));

                return computedStyle ? _load(minifyCSS(computedStyle), { name, ...options }) : {};
            },
            loadCSS(css, options = {}) {
                return this.load(css, options);
            },
            loadTheme(options = {}) {
                return this.load(theme, options, (computedStyle) => Theme.transformCSS(options.name || name, computedStyle));
            },
            _loadTheme(css, options = {}) {
                // @todo: remove
                return this.load(css, options, (computedStyle) => Theme.transformCSS(options.name || name, computedStyle));
            },
            getCommonTheme(params) {
                return Theme.getCommon(name, params);
            },
            getComponentTheme(params) {
                return Theme.getComponent(name, params);
            },
            getPresetTheme(preset, selector, params) {
                return Theme.getCustomPreset(name, preset, selector, params);
            },
            getLayerOrderThemeCSS() {
                return Theme.getLayerOrderCSS(name);
            },
            getStyleSheet(extendedCSS = '', props = {}) {
                if (css) {
                    const _css = resolve(css, { dt });
                    const _style = minifyCSS(`${_css}${extendedCSS}`);
                    const _props = Object.entries(props)
                        .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                        .join(' ');

                    return `<style type="text/css" data-primereact-style-id="${name}" ${_props}>${_style}</style>`;
                }

                return '';
            },
            getCommonThemeStyleSheet(params, props = {}) {
                return Theme.getCommonStyleSheet(name, params, props);
            },
            getThemeStyleSheet(params, props = {}) {
                const cssArr = [Theme.getStyleSheet(name, params, props)];

                if (theme) {
                    const _name = name === 'base' ? 'global-style' : `${name}-style`;
                    const _css = resolve(theme, { dt });
                    const _style = minifyCSS(Theme.transformCSS(name, _css));
                    const _props = Object.entries(props)
                        .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                        .join(' ');

                    cssArr.push(`<style type="text/css" data-primereact-style-id="${_name}" ${_props}>${_style}</style>`);
                }

                return cssArr.join('');
            }
        };

        return callback({ ...options, $style }, ref);
    };
};
