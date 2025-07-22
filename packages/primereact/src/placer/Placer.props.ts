import * as HeadlessPlacer from '@primereact/headless/placer';
import type { PlacerProps } from '@primereact/types/shared/placer';

export const defaultProps: PlacerProps = {
    ...HeadlessPlacer.defaultProps,
    as: 'div'
};

// export const defaultProps: PlacerProps = {
//     ...HeadlessPlacer.defaultProps,
//     ...defaultMotionProps,
//     animateOnEnter: true,
//     animateOnLeave: true,
//     enterFromClassName: 'p-placer-content-enter-from',
//     enterToClassName: 'p-placer-content-enter-to',
//     enterActiveClassName: 'p-placer-content-enter-active',
//     leaveFromClassName: 'p-placer-content-leave-from',
//     leaveToClassName: 'p-placer-content-leave-to',
//     leaveActiveClassName: 'p-placer-content-leave-active',
//     shouldAnimateOnEnter: true,
//     shouldAnimateOnLeave: true
// };
