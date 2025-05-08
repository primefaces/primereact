import { ComponentInstance } from '@primereact/types/core';
import { BaseComponentProps } from '..';
import { usePanelProps } from './usePanel.types';

/**
 * Panel component instance.
 */
export type PanelInstance = ComponentInstance<PanelProps>;

export interface PanelProps extends BaseComponentProps<usePanelProps> {
    toggleable?: boolean;
}

export interface PanelHeaderProps extends BaseComponentProps {}

export interface PanelTitleProps extends BaseComponentProps {}

export interface PanelHeaderActionsProps extends BaseComponentProps {}

export interface PanelContentProps extends BaseComponentProps {}

export interface PanelFooterProps extends BaseComponentProps {}

export interface PanelCollapseProps extends BaseComponentProps {}
