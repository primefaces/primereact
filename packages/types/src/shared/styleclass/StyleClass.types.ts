/**
 *
 * StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.
 *
 * [Live Demo](https://www.primereact.org/styleclass/)
 *
 * @module styleclass
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useStyleClassExposes, useStyleClassProps, useStyleClassState } from './useStyleClass.types';

/**
 * Defines passthrough(pt) options type in StyleClass component.
 */
export type StyleClassPassThroughOptionType<E> = PassThroughOptionType<StyleClassInstance, E>;

/**
 * Defines passthrough(pt) options of StyleClass component.
 */
export interface StyleClassPassThroughOptions {}

/**
 * Defines valid properties in StyleClass component.
 */
export interface StyleClassProps extends BaseComponentProps<StyleClassInstance, useStyleClassProps> {}

/**
 * Defines valid state in StyleClass component.
 * @extends useStyleClassState
 */
export interface StyleClassState extends useStyleClassState {}

/**
 * Defines the methods and properties exposed by StyleClass component.
 * @extends useStyleClassExposes
 */
export interface StyleClassExposes extends useStyleClassExposes {}

/**
 * Instance of StyleClass component.
 */
export type StyleClassInstance = ComponentInstance<StyleClassProps, StyleClassState, StyleClassExposes>;
