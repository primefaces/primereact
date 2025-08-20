/**
 *
 * InputGroupAddon is a component that displays a addon.
 *
 * [Live Demo](https://www.primereact.org/inputgroup/)
 *
 * @module inputgroupaddon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputGroupInstance } from './InputGroup.types';

/**
 * Defines passthrough(pt) options type in InputGroupAddon component.
 */
export type InputGroupAddonPassThroughType<E> = PassThroughType<InputGroupAddonInstance, E>;

/**
 * Defines passthrough(pt) options of InputGroupAddon component.
 */
export interface InputGroupAddonPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputGroupAddonPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in InputGroupAddon component.
 */
export interface InputGroupAddonProps extends BaseComponentProps<InputGroupAddonInstance, unknown, InputGroupAddonPassThrough> {}

/**
 * Defines valid state in InputGroupAddon component.
 */
export interface InputGroupAddonState {}

/**
 * Defines the methods and properties exposed by InputGroupAddon component.
 */
export interface InputGroupAddonExposes {
    /**
     * Instance of the InputGroup component.
     */
    inputgroup: InputGroupInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the InputGroupAddon component.
 */
export const InputGroupAddonClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputgroup-addon'
} as const;

/**
 * Type representing the CSS class names used in the InputGroupAddon component.
 */
export type InputGroupAddonClassNamesType = (typeof InputGroupAddonClassNames)[keyof typeof InputGroupAddonClassNames];

/**
 * Instance of InputGroupAddon component.
 */
export type InputGroupAddonInstance = ComponentInstance<InputGroupAddonProps, InputGroupAddonState, InputGroupAddonExposes>;
