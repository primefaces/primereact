import * as React from 'react';
import { BaseComponentProps } from '..';
import { usePortalProps } from './usePortal.types';

/**
 * Portal component props.
 */
export interface PortalProps extends BaseComponentProps<usePortalProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Portal';
    /**
     * The element to be rendered as the portal.
     */
    element: React.ReactNode;
    /**
     * The DOM element where the portal should be appended to.
     */
    appendTo: HTMLElement | string | null;
}
