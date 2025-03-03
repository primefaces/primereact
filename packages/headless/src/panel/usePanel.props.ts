import type { usePanelProps } from './usePanel.types';

export const defaultProps = {
    __TYPE: 'Panel',
    collapsed: undefined,
    toggleable: undefined,
    // events
    onCollapse: undefined,
    onExpand: undefined,
    onToggle: undefined
} as Partial<usePanelProps>;
