import type { useSpeedDialProps } from '@primereact/types/shared/speeddial';

export const defaultProps: useSpeedDialProps = {
    visible: false,
    defaultVisible: false,
    direction: 'up',
    transitionDelay: 30,
    type: 'linear',
    radius: 0,
    hideOnClickOutside: true,
    onVisibleChange: undefined
};
