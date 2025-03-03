import { PrimeReactContext } from '@primereact/core/config';
import { style } from '@primereact/styles/base';
import { Theme, ThemeService } from '@primeuix/styled';
import { classNames, setAttribute, uuid } from '@primeuix/utils';
import { getKeyValue } from '@primeuix/utils/object';
import * as React from 'react';
import { ComponentContext } from './Component.context';
import { withComponentStyle } from './withComponentStyle';

const Base = {
    _loadedStyleNames: new Set(),
    getLoadedStyleNames() {
        return this._loadedStyleNames;
    },
    isStyleNameLoaded(name) {
        return this._loadedStyleNames.has(name);
    },
    setLoadedStyleName(name) {
        this._loadedStyleNames.add(name);
    },
    deleteLoadedStyleName(name) {
        this._loadedStyleNames.delete(name);
    },
    clearLoadedStyleNames() {
        this._loadedStyleNames.clear();
    }
};

// @todo: use @primereact/styles/base
const BaseStyle = style;

function useCSS(cssMap = {}) {
    const config = React.useContext(PrimeReactContext);

    if (typeof window === 'undefined') {
        /*Object.entries(cssMap).forEach(([key, value]) => {
            config?.sheet?.add(key, value.css);
        });*/
    }

    React.useInsertionEffect(() => {
        config?.sheet?._styles?.forEach((value, key) => {
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
}

export const useComponentStyle = withComponentStyle(({ props, attrs, state, style, $style, ...rest }, ref) => {
    const config = React.useContext(PrimeReactContext);
    const parent = React.useContext(ComponentContext);
    const name = props.__TYPE;
    // @todo
    const instance = {
        ref,
        name,
        props,
        attrs,
        state,
        parent,
        $primereact: {
            config
        },
        ...rest
    };
    // @todo
    const $params = {
        instance,
        props,
        state,
        attrs,
        parent,
        $primereact: {
            config
        }
    };

    // computed values
    const $isUnstyled = React.useMemo(() => (props.unstyled !== undefined ? props.unstyled : config?.unstyled), [props, config]);
    const $attrSelector = React.useMemo(() => uuid('pc'), []);
    const $styleOptions = React.useMemo(() => ({ nonce: config?.csp?.nonce }), [config]);

    const _loadStyles = () => {
        const _load = () => {
            _loadGlobalStyles();
            _loadThemeStyles();
        };

        _load();
        //_themeChangeListener(_load);
    };

    const _loadCoreStyles = () => {
        const _load = () => {
            if (!Base.isStyleNameLoaded('base')) {
                $style.loadCSS(BaseStyle.css, { name: 'base' });
                Base.setLoadedStyleName('base');
            }

            if (!Base.isStyleNameLoaded(style?.name) && style?.name) {
                $style.loadCSS(style.css);
                Base.setLoadedStyleName(style.name);
            }
        };

        _load();
        //_themeChangeListener(_load);
    };

    const _loadGlobalStyles = () => {
        /*
         * @todo Add self custom css support;
         * <Panel :pt="{ css: `...` }" .../>
         *
         * const selfCSS = this._getPTClassValue(this.pt, 'css', this.$params);
         * const defaultCSS = this._getPTClassValue(this.defaultPT, 'css', this.$params);
         * const mergedCSS = mergeProps(selfCSS, defaultCSS);
         * isNotEmpty(mergedCSS?.class) && this.$css.loadCustomStyle(mergedCSS?.class);
         */
        //const globalCSS = this._useGlobalPT(this._getOptionValue, 'global.css', this.$params);
        //isNotEmpty(globalCSS) && BaseStyle.load(globalCSS, { name: 'global', ...this.$styleOptions });
    };

    const _loadThemeStyles = () => {
        if ($isUnstyled) return;

        // common
        if (!Theme.isStyleNameLoaded('common')) {
            const { primitive, semantic } = $style?.getCommonTheme() || {}; // @todo

            $style.load(primitive?.css, { name: 'primitive-variables' });
            $style.load(semantic?.css, { name: 'semantic-variables' });
            $style._loadTheme(BaseStyle?.theme, { name: 'global-style' }); // @todo

            Theme.setLoadedStyleName('common');
        }

        // component
        if (!Theme.isStyleNameLoaded(style?.name) && style?.name) {
            const { css } = $style?.getComponentTheme?.() || {};

            $style?.load(css, { name: `${style?.name}-variables` });
            $style?.loadTheme({ name: `${style?.name}-style` });

            Theme.setLoadedStyleName(style?.name);
        }

        // layer order
        if (!Theme.isStyleNameLoaded('layer-order')) {
            const layerOrder = $style?.getLayerOrderThemeCSS?.();

            $style.load(layerOrder, { name: 'layer-order', first: true });

            Theme.setLoadedStyleName('layer-order');
        }
    };

    const _themeChangeListener = (callback = () => {}) => {
        Base.clearLoadedStyleNames();
        ThemeService.on('theme:change', callback);
    };

    if (!$isUnstyled) {
        _loadCoreStyles();
        _loadStyles();
    }

    useCSS();

    // exposed methods
    const cx = (key = '', params = {}) => {
        return !$isUnstyled ? classNames(getKeyValue(style.classes, key, { ...$params, ...params })) : undefined;
    };

    const sx = (key = '', when = true, params = {}) => {
        if (when) {
            const self = getKeyValue(style.inlineStyles, key, { ...$params, ...params });
            const base = {}; //getKeyValue(BaseComponentStyle.inlineStyles, key, { ...this.$params, ...params }); // @todo

            return { ...base, ...self };
        }

        return undefined;
    };

    return {
        cx,
        sx,
        isUnstyled: $isUnstyled
    };
});
