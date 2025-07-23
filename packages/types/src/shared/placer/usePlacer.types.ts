/**
 *
 * The usePlacer manages the state and functionality of a placer component.
 *
 * [Live Demo](https://www.primereact.org/placer/)
 *
 * @module usePlacer
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

export type SideType = 'top' | 'right' | 'bottom' | 'left';
export type AlignType = 'start' | 'center' | 'end';
/**
 * Props for the usePlacer hook.
 */
export interface usePlacerProps {
    /**
     * The alignment of the placer.
     * @default 'center'
     */
    align?: AlignType;
    /**
     * The offset of the placer.
     * @default 0
     */
    alignOffset?: number;
    /**
     * The side of the placer.
     * @default 'top'
     */
    side?: SideType;
    /**
     * The offset of the placer.
     * @default 0
     */
    sideOffset?: number;
}

/**
 * Defines valid state in usePlacer.
 */
export interface usePlacerState {
    /**
     * The effective side of the placer.
     */
    effectiveSide: SideType | null | undefined;
    /**
     * The effective align of the placer.
     */
    effectiveAlign: AlignType | null | undefined;
}

/**
 * Defines the methods and properties exposed by usePlacer.
 */
export interface usePlacerExposes {
    /**
     * The state of the usePanel.
     */
    state: usePlacerState;
    /**
     * The container ref of the usePlacer.
     */
    containerRef: React.RefObject<HTMLElement | null | undefined>;
    /**
     * The anchor ref of the usePlacer.
     */
    anchorRef: React.RefObject<HTMLElement | null | undefined>;
    /**
     * The arrow ref of the usePlacer.
     */
    arrowRef: React.RefObject<HTMLElement | null | undefined>;
    /**
     * Applies the placement of the usePlacer.
     */
    applyPlacement: () => void;
}

/**
 * Instance of usePlacer headless.
 */
export type usePlacerInstance = HeadlessInstance<usePlacerProps, usePlacerState, usePlacerExposes>;
