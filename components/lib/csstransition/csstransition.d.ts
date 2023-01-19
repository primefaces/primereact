/**
 *
 * @todo Write the documentation.
 *
 * @todo Write the documentation.
 *
 * @module csstransition
 *
 */
import * as React from 'react';
import { CSSTransitionProps as ReactCSSTransitionProps } from 'react-transition-group/CSSTransition';

/**
 * Defines valid properties in CSSTransition component. In addition to these, all properties of HTMLElement can be used in this component.
 * @group Properties
 */
export type CSSTransitionProps<Ref extends undefined | HTMLElement = undefined> = ReactCSSTransitionProps<Ref> & {
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
};

/**
 * @group Component
 */
export declare class CSSTransition<Ref extends undefined | HTMLElement> extends React.Component<CSSTransitionProps<Ref>, any> {}
