/**
 *
 * IconFieldIcon is a component that displays an icon inside an IconField.
 *
 * [Live Demo](https://www.primereact.org/iconfield/)
 *
 * @module iconfieldicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { IconFieldRootInstance } from './IconFieldRoot.types';

/**
 * Defines passthrough(pt) options type in IconFieldIcon component.
 */
export type IconFieldIconPassThroughType<E> = PassThroughType<IconFieldIconInstance, E>;

/**
 * Defines passthrough(pt) options of IconFieldIcon component.
 */
export interface IconFieldIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: IconFieldIconPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in IconFieldIcon component.
 */
export interface IconFieldIconProps extends BaseComponentProps<IconFieldIconInstance, unknown, IconFieldIconPassThrough> {}

/**
 * Defines valid state in IconFieldIcon component.
 */
export interface IconFieldIconState {}

/**
 * Defines the methods and properties exposed by IconFieldIcon component.
 */
export interface IconFieldIconExposes {
    /**
     * The IconField component instance.
     */
    iconfield: IconFieldRootInstance | undefined | null;
}

/**
 * Instance of IconFieldIcon component.
 */
export type IconFieldIconInstance = ComponentInstance<IconFieldIconProps, IconFieldIconState, IconFieldIconExposes>;
