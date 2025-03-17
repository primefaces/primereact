import type { FilterMatchModeType } from '@primereact/core/api';
import type { PassThroughOptions, PassThroughProps } from './PassThrough.types';
import type { ThemeOptions, ThemeProps } from './Theme.types';

/**
 * Defines the Content Security Policy (CSP) configuration.
 */
export interface CSP {
    /**
     * Defines nonce value to be used in the style tag.
     */
    nonce?: string | undefined;
}

/**
 * Defines the z-index values.
 */
export interface ZIndex {
    /**
     * Defines the base z-index value for the modals.
     * @default 1100
     */
    modal?: number | undefined;
    /**
     * Defines the base z-index value for the overlays.
     * @default 1000
     */
    overlay?: number | undefined;
    /**
     * Defines the base z-index value for the menus.
     * @default 1000
     */
    menu?: number | undefined;
    /**
     * Defines the base z-index value for the tooltip.
     * @default 1100
     */
    tooltip?: number | undefined;
}

/**
 * Defines the PrimeReact props type.
 */
export declare type PrimeReactProps = {
    /**
     * Defines the Content Security Policy (CSP) configuration.
     * @see {@link https://primereact.org/configuration/#csp}
     */
    csp?: CSP | undefined;
    /**
     * @todo Define the type.
     */
    defaults?: unknown;
    /**
     * Defines the filter match mode options.
     */
    filterMatchModeOptions?: Record<string, FilterMatchModeType[]> | undefined;
    /**
     * Defines the input variant.
     */
    inputVariant?: 'outlined' | 'filled' | undefined;
    /**
     * Defines the locale.
     */
    locale?: string | undefined;
    /**
     * Defines the passthrough options.
     */
    pt?: Pick<PassThroughProps, 'value'> | undefined;
    /**
     * Defines the passthrough options.
     */
    ptOptions?: PassThroughOptions | undefined;
    /**
     * Defines the ripple effect.
     */
    ripple?: boolean | undefined;
    /**
     * Defines the theme.
     */
    theme?: (Pick<ThemeProps, 'preset'> & { options?: ThemeOptions }) | undefined;
    /**
     * Collects styles of the used components.
     */
    stylesheet?: Pick<ThemeProps, 'stylesheet'> | undefined;
    /**
     * Defines whether the components should be unstyled.
     */
    unstyled?: boolean | undefined;
    /**
     * Defines the z-index values.
     */
    zIndex?: ZIndex | undefined;
};
