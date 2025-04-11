import * as HeadlessSkeleton from '@primereact/headless/skeleton';
import type { SkeletonProps } from '@primereact/types/shared/skeleton';

export const defaultProps: SkeletonProps = {
    ...HeadlessSkeleton.defaultProps,
    __TYPE: 'Skeleton',
    shape: 'rectangle',
    size: undefined,
    width: '100%',
    height: '1rem',
    borderRadius: undefined,
    animation: 'wave'
};
