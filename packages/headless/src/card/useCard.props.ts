import type { usePanelProps } from './useCard.types';

export const defaultProps = {
    __TYPE: 'Card',
    collapsed: undefined,
    toggleable: undefined,
    // events
    onCollapse: undefined,
    onExpand: undefined,
    onToggle: undefined
} as Partial<usePanelProps>;
