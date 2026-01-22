/**
 *
 * InputTagsPortal is the overlay container for the InputTags component.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagsportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputTagsRootInstance } from './InputTagsRoot.types';

/**
 * Defines passthrough(pt) options type in InputTagsPortal component.
 */
export type InputTagsPortalPassThroughType<E> = PassThroughType<InputTagsPortalInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsPortal component.
 */
export interface InputTagsPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: InputTagsPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InputTagsPortal component.
 */
export interface InputTagsPortalProps extends BaseComponentProps<InputTagsPortalInstance, unknown, InputTagsPortalPassThrough> {}

/**
 * Defines valid state in InputTagsPortal component.
 */
export interface InputTagsPortalState {}

/**
 * Defines the methods and properties exposed by InputTagsPortal component.
 */
export interface InputTagsPortalExposes {
    /**
     * The InputTags component instance.
     */
    inputtags: InputTagsRootInstance | undefined | null;
}

/**
 * Instance of InputTagsPortal component.
 */
export type InputTagsPortalInstance = ComponentInstance<InputTagsPortalProps, InputTagsPortalState, InputTagsPortalExposes>;
