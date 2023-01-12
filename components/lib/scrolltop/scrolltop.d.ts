/**
 *
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 *
 * [Live Demo](https://www.primefaces.org/primereact/scrolltop/)
 *
 * @module scrolltop
 *
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { IconType } from '../utils';

/**
 * Defines valid properties in ScrollTop component.
 * @group Properties
 */
export interface ScrollTopProps {
    /**
     * Target of the ScrollTop, valid values are "window" and "parent".
     * @defaultValue window
     */
    target?: 'window' | 'parent' | undefined;
    /**
     * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
     * @defaultValue 400
     */
    threshold?: number;
    /**
     * Icon to display.
     * @defaultValue pi pi-chevron-up
     */
    icon?: IconType<ScrollTopProps>;
    /**
     * Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.
     * @defaultValue smooth
     */
    behavior?: 'auto' | 'smooth' | undefined;
    /**
     * Style class of the component.
     */
    className?: string | undefined;
    /**
     * @todo Write the documentation
     */
    style?: React.CSSProperties;
    /**
     * The properties of CSSTransitionProps can be customized, except for "nodeRef" and "in" properties.
     * @defaultValue smooth
     * @todo Add link for CSSTransitionProps
     */
    transitionOptions?: CSSTransitionProps;
    /**
     * Callback to invoke when overlay panel becomes visible.
     */
    onShow?(): void;
    /**
     * 	Callback to invoke when overlay becomes hidden.
     */
    onHide?(): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class ScrollTop extends React.Component<ScrollTopProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLButtonElement} Container element
     */
    public getElement(): HTMLButtonElement;
}
