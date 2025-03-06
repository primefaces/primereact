import { ThemeContext } from '@primereact/core/theme';
import { Theme, ThemeService } from '@primeuix/styled';
import { cn, getKeyValue } from '@primeuix/utils';
import * as React from 'react';
import type { ComponentInstance } from './Component.types';
import { useComponentStyleHandler } from './useComponentStyleHandler';

// @todo - move to correct location
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

export const useComponentStyle = (instance: ComponentInstance, styles?: any, callback?: any) => {
    const theme = React.useContext(ThemeContext);
    const $style = useComponentStyleHandler(styles);

    const { props, attrs, state, parent, $primereact, $attrSelector } = instance || {};

    // @todo
    const $params = {
        instance,
        props,
        state,
        attrs,
        parent
    };

    // methods
    const _load = () => {
        if (!Base.isStyleNameLoaded('base')) {
            const { name, css } = $style.baseStyles;

            $style.load(css, { name });

            Base.setLoadedStyleName('base');
        }
    };

    const _loadStyles = () => {
        _load();
        _themeChangeListener(_load);
    };

    const _loadCoreStyles = () => {
        if (!Base.isStyleNameLoaded($style?.name) && $style?.name) {
            $style.loadCSS($styleOptions);

            Base.setLoadedStyleName($style.name);
        }
    };

    const _loadThemeStyles = () => {
        if ($isUnstyled || theme === 'none') return;

        // common
        if (!Theme.isStyleNameLoaded('common')) {
            const { primitive, semantic, global, style } = $style?.getCommonTheme?.() || {};

            $style.load(primitive?.css, { name: 'primitive-variables', ...$styleOptions });
            $style.load(semantic?.css, { name: 'semantic-variables', ...$styleOptions });
            $style.load(global?.css, { name: 'global-variables', ...$styleOptions });
            $style.load($style.baseStyles.style, { name: 'global-style', ...$styleOptions }, style, true);

            Theme.setLoadedStyleName('common');
        }

        // component
        if (!Theme.isStyleNameLoaded($style?.name) && $style?.name) {
            const { css, style } = $style?.getComponentTheme?.() || {};

            $style.load(css, { name: `${$style.name}-variables`, ...$styleOptions });
            $style.loadStyle({ name: `${$style.name}-style`, ...$styleOptions }, style);

            Theme.setLoadedStyleName($style.name);
        }

        // layer order
        if (!Theme.isStyleNameLoaded('layer-order')) {
            const layerOrder = $style?.getLayerOrderThemeCSS?.();

            $style.load(layerOrder, { name: 'layer-order', first: true, ...$styleOptions });

            Theme.setLoadedStyleName('layer-order');
        }
    };

    /*const _loadScopedThemeStyles = (preset) => {
        const { css } = $style?.getPresetTheme?.(preset, `[${$attrSelector}]`) || {};
        const scopedStyle = $style?.load(css, { name: `${$attrSelector}-${$style.name}`, ...$styleOptions });

        scopedStyleEl = scopedStyle.el;
    };

    const _unloadScopedThemeStyles = () => {
        scopedStyleEl?.value?.remove();
    };*/

    const _themeChangeListener = (callback = () => {}) => {
        Base.clearLoadedStyleNames();
        ThemeService.on('theme:change', callback);
    };

    /*const _removeThemeListeners = () => {
        ThemeService.off('theme:change', _loadCoreStyles);
        ThemeService.off('theme:change', _load);
        ThemeService.off('theme:change', _themeScopedListener);
    };*/

    // exposed methods
    const cx = (key = '', params = {}) => {
        return !$isUnstyled ? cn(getKeyValue(styles.classes, key, { ...$params, ...params })) : undefined;
    };

    const sx = (key = '', when = true, params = {}) => {
        if (when) {
            const self = getKeyValue(styles.inlineStyles, key, { ...$params, ...params });
            const base = getKeyValue(BaseComponentStyle.inlineStyles, key, { ...$params, ...params });

            return { ...base, ...self };
        }

        return undefined;
    };

    // computed values
    const $isUnstyled = React.useMemo(() => (props.unstyled !== undefined ? props.unstyled : $primereact?.config?.unstyled), [props, $primereact?.config]);
    const $styleOptions = React.useMemo(() => ({ nonce: $primereact?.config?.csp?.nonce }), [$primereact?.config]);

    // effects
    if (!$isUnstyled) {
        _loadCoreStyles();
        _loadStyles();
    }

    //useCSS();

    const common = {
        ...instance,
        styles,
        cx,
        sx,
        isUnstyled: $isUnstyled,
        $style,
        $primereact: {
            ...$primereact,
            theme
        }
    };

    debugger;

    // new instance
    return { ...common, ...callback?.(common) };
};
