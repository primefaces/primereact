/**
 *
 * Ripple component adds ripple effect to the host element.
 *
 * [Live Demo](https://www.primefaces.org/primereact/ripple)
 *
 * @module ripple
 *
 */
import * as React from 'react';

/**
 * Defines valid properties in Ripple component.
 * @group Properties
 */
export interface RippleProps {
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class Ripple extends React.Component<RippleProps, any> {}
