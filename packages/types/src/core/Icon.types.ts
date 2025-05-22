/**
 *
 * Icon component displays font icons.
 *
 * [Live Demo](https://www.primereact.org/icon/)
 *
 * @module icon
 * @group components
 *
 */
import type { ComponentInstance, withComponentOptions } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '../shared';

/**
 * Defines passthrough(pt) options type in Icon component.
 */
export type IconPassThroughType<E> = PassThroughType<IconInstance, E>;

/**
 * Defines passthrough(pt) options of Icon component.
 */
export interface IconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: IconPassThroughType<HTMLElement>;
}

/**
 * Defines valid properties in Icon component.
 */
export interface IconProps extends BaseComponentProps<IconInstance> {
    /**
     * Defines the size of the icon.
     */
    size?: string | undefined;
    /**
     * Defines the rotation degree of the icon.
     */
    rotate?: number | undefined;
    /**
     * Defines the flip direction of the icon.
     */
    flip?: 'horizontal' | 'vertical' | undefined;
    /**
     * When present, it specifies that the icon should be animated with a spinning effect.
     * @default false
     */
    spin?: boolean | undefined;
}

/**
 * Defines valid state in Icon component.
 */
export interface IconState {}

/**
 * Defines the methods and properties exposed by Icon component.
 */
export interface IconExposes {
    /**
     * Return the attributes of the icon element.
     *
     * @returns {Record<string, unknown>} - The attributes.
     */
    pti: () => Record<string, unknown>;
}

/**
 * Defines the CSS class names used in the Icon component.
 */
export const IconClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-icon'
} as const;

/**
 * Type representing the CSS class names used in the Icon component.
 */
export type IconClassNamesType = (typeof IconClassNames)[keyof typeof IconClassNames];

/**
 * Instance of Icon component.
 */
export type IconInstance = ComponentInstance<IconProps, IconState, IconExposes, IconPassThrough>;

export declare type withBaseIconOptions<IProps, Exposes, Styles> = withComponentOptions<IProps, IconProps, Exposes, Styles>;
