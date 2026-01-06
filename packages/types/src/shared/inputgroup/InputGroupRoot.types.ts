/**
 *
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.primereact.org/inputgroup/)
 *
 * @module inputgrouproot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInputGroupExposes, useInputGroupProps, useInputGroupState } from './useInputGroup.types';

/**
 * Defines passthrough(pt) options type in InputGroup component.
 */
export type InputGroupRootPassThroughType<E> = PassThroughType<InputGroupRootInstance, E>;

/**
 * Defines passthrough(pt) options of InputGroup component.
 */
export interface InputGroupRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputGroupRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the addon's DOM element.
     */
    addon?: InputGroupRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InputGroup component.
 */
export interface InputGroupRootProps extends BaseComponentProps<InputGroupRootInstance, useInputGroupProps, InputGroupRootPassThrough> {}

/**
 * Defines valid state in InputGroup component.
 * @extends useInputGroupState
 */
export interface InputGroupRootState extends useInputGroupState {}

/**
 * Defines the methods and properties exposed by InputGroup component.
 * @extends useInputGroupExposes
 */
export interface InputGroupRootExposes extends useInputGroupExposes {}

/**
 * Instance of InputGroup component.
 */
export type InputGroupRootInstance = ComponentInstance<InputGroupRootProps, InputGroupRootState, InputGroupRootExposes>;
