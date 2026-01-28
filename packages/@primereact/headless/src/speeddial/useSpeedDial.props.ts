import type { useSpeedDialProps } from '@primereact/types/shared/speeddial';

export const defaultProps: useSpeedDialProps = {
    visible: undefined,
    defaultVisible: undefined,
    direction: 'up',
    transitionDelay: 30,
    type: 'linear',
    radius: 0,
    hideOnClickOutside: true,
    onVisibleChange: undefined
};
