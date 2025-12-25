import * as HeadlessSkeleton from '@primereact/headless/skeleton';
import type { SkeletonProps } from '@primereact/types/shared/skeleton';

export const defaultProps: SkeletonProps = {
    ...HeadlessSkeleton.defaultProps,
    as: 'div',
    shape: 'rectangle',
    size: undefined,
    width: '100%',
    height: '1rem',
    borderRadius: undefined,
    animation: 'wave'
};
