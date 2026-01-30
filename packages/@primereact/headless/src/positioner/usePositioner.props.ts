import type { usePositionerProps } from '@primereact/types/shared/positioner';

export const defaultProps: usePositionerProps = {
    side: 'bottom',
    align: 'center',
    sideOffset: 0,
    alignOffset: 0,
    flip: true,
    shift: true,
    hideWhenDetached: false,
    anchor: undefined,
    content: undefined,
    arrow: undefined
};
