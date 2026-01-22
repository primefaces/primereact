import type { MotionProps } from '@primereact/types/shared/motion';
import * as HeadlessMotion from './useMotion.props';

export const defaultMotionProps: MotionProps = {
    ...HeadlessMotion.defaultUseMotionProps,
    as: 'div'
};
