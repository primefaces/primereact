import type { GlobalComponentProps } from '@primereact/types/core';

export interface PanelProps extends GlobalComponentProps {
    readonly __TYPE?: 'Panel';
    toggleable?: boolean;
}

export interface PanelHeaderProps extends GlobalComponentProps {
    readonly __TYPE?: 'PanelHeader';
}

export interface PanelContentProps extends GlobalComponentProps {
    readonly __TYPE?: 'PanelContent';
}

export interface PanelFooterProps extends GlobalComponentProps {
    readonly __TYPE?: 'PanelFooter';
}

export interface PanelCollapseProps extends GlobalComponentProps {
    readonly __TYPE?: 'PanelCollapse';
}
