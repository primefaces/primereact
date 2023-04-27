import { ObjectUtils } from '../utils/Utils';

export const SkeletonBase = {
    defaultProps: {
        __TYPE: 'Skeleton',
        shape: 'rectangle',
        size: null,
        width: '100%',
        height: '1rem',
        borderRadius: null,
        animation: 'wave',
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, SkeletonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, SkeletonBase.defaultProps)
};
