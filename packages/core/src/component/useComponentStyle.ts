import { StyleRegistry } from '@primereact/core/utils';
import type { ComputedComponentInstance } from '@primereact/types/core';
import { Theme, ThemeService } from '@primeuix/styled';
import { cn, getKeyValue } from '@primeuix/utils';
import * as React from 'react';
import { useComponentStyleHandler } from './useComponentStyleHandler';

export const useComponentStyle = <P, I, T, S>(instance: ComputedComponentInstance<P, I, T, S>, styles?: any) => {
    const { props = {}, attrs, state, parent, $primereact, $attrSelector, elementRef } = instance || {};
    const $style = useComponentStyleHandler(styles, elementRef);

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
        if (!StyleRegistry.isStyleNameLoaded('base')) {
            const { name, css } = $style.baseStyles || {};

            $style.load(css, { name });

            StyleRegistry.setLoadedStyleName('base');
        }

        _loadThemeStyles();
    };

    const _loadStyles = () => {
        _load();
        _themeChangeListener(_load);
    };

    const _loadCoreStyles = () => {
        if (!StyleRegistry.isStyleNameLoaded($style?.name) && $style?.name) {
            $style.loadCSS({ name: $style.name, ...$styleOptions });

            StyleRegistry.setLoadedStyleName($style.name);
        }
    };

    const _loadThemeStyles = () => {
        if ($isUnstyled || $primereact?.theme === 'none') return;

        // common
        if (!Theme.isStyleNameLoaded('common')) {
            const { primitive, semantic, global, style } = $style?.getCommonTheme?.() || {};

            $style.load(primitive?.css, { name: 'primitive-variables', ...$styleOptions });
            $style.load(semantic?.css, { name: 'semantic-variables', ...$styleOptions });
            $style.load(global?.css, { name: 'global-variables', ...$styleOptions });
            $style.load($style.baseStyles?.style, { name: 'global-style', ...$styleOptions }, style, true);

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
        StyleRegistry.clearLoadedStyleNames();
        ThemeService.on('theme:change', callback);
    };

    /*const _removeThemeListeners = () => {
        ThemeService.off('theme:change', _loadCoreStyles);
        ThemeService.off('theme:change', _load);
        ThemeService.off('theme:change', _themeScopedListener);
    };*/

    // exposed methods
    const cx = (key = '', params = {}) => {
        return !$isUnstyled ? cn(getKeyValue($style?.classes, key, { ...$params, ...params })) : undefined;
    };

    const sx = (key = '', when = true, params = {}) => {
        if (when) {
            const self = getKeyValue($style?.inlineStyles, key, { ...$params, ...params });
            const base = getKeyValue($style.baseStyles.inlineStyles, key, { ...$params, ...params });

            return { ...base, ...self };
        }

        return undefined;
    };

    // computed values
    const $isUnstyled = React.useMemo(() => (props.unstyled !== undefined ? props.unstyled : $primereact?.config?.unstyled), [props, $primereact?.config]);
    const $styleOptions = React.useMemo(() => ({ nonce: $primereact?.config?.csp?.nonce }), [$primereact?.config]);

    // effects
    if (!$isUnstyled) {
        // @todo - remove
        Theme.clearLoadedStyleNames();
        StyleRegistry.clearLoadedStyleNames();
        _loadCoreStyles();
        _loadStyles();
    }

    // new instance
    return {
        cx,
        sx,
        isUnstyled: $isUnstyled,
        $style
    };
};
