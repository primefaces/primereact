import type { useTooltipProps } from '@primereact/types/shared/tooltip';

export const defaultProps: useTooltipProps = {
    showDelayDuration: 700,
    hideDelayDuration: 0,
    autoZIndex: true,
    baseZIndex: 0,
    containerRef: undefined,
    triggerRef: undefined,
    open: false,
    onOpenChange: undefined,
    defaultOpen: false,
    closeOnEscape: true,
    side: 'top',
    sideOffset: 0,
    align: 'center',
    alignOffset: 0,
    autoHide: false,
    disabled: false
};
