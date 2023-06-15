import { ComponentBase } from '../componentbase/ComponentBase';

export const SkeletonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Skeleton',
        shape: 'rectangle',
        size: null,
        width: '100%',
        height: '1rem',
        borderRadius: null,
        animation: 'wave',
        style: null,
        className: null
    }
});
