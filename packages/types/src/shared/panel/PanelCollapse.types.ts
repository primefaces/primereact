/**
 *
 * PanelCollapse is a component that displays a collapse button.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panelcollapse
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PanelInstance } from './Panel.types';

/**
 * Defines passthrough(pt) options type in PanelCollapse component.
 */
export type PanelCollapsePassThroughType<E> = PassThroughType<PanelCollapseInstance, E>;

/**
 * Defines passthrough(pt) options of PanelCollapse component.
 */
export interface PanelCollapsePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelCollapsePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PanelCollapse component.
 */
export interface PanelCollapseProps extends BaseComponentProps<PanelCollapseInstance> {
    /**
     * Whether to show the PanelCollapse with a borderless style.
     * @default true
     */
    iconOnly?: boolean | undefined;
    /**
     * Severity type of the PanelCollapse.
     * @default 'secondary'
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'help' | 'danger' | 'contrast' | (string & {}) | undefined;
    /**
     * Variant of the PanelCollapse.
     * @default 'text'
     */
    variant?: 'text' | 'outlined' | 'link' | undefined;
    /**
     * Whether to show the PanelCollapse with a rounded style.
     * @default true
     */
    rounded?: boolean | undefined;
}

/**
 * Defines valid state in PanelCollapse component.
 */
export interface PanelCollapseState {}

/**
 * Defines the methods and properties exposed by PanelCollapse component.
 */
export interface PanelCollapseExposes {
    /**
     * Instance of the Panel component.
     */
    panel: PanelInstance | undefined | null;
}

/**
 * Instance of PanelCollapse component.
 */
export type PanelCollapseInstance = ComponentInstance<PanelCollapseProps, PanelCollapseState, PanelCollapseExposes, PanelCollapsePassThrough>;
