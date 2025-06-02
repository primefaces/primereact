import type { MotionProps } from '@primereact/types/shared/motion';
import * as HeadlessMotion from './useMotion.props';

export const defaultProps: MotionProps = {
    ...HeadlessMotion.defaultProps,
    as: 'div',
    in: false,
    mountOnEnter: true,
    unmountOnLeave: true
};
