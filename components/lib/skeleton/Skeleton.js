import * as React from 'react';
import { classNames } from '../utils/Utils';

export const Skeleton = React.memo(React.forwardRef((props, ref) => {
    const style = props.size ?
        { width: props.size, height: props.size, borderRadius: props.borderRadius } :
        { width: props.width, height: props.height, borderRadius: props.borderRadius };
    const className = classNames('p-skeleton p-component', {
        'p-skeleton-circle': props.shape === 'circle',
        'p-skeleton-none': props.animation === 'none'
    }, props.className);

    return <div style={style} className={className}></div>
}));

Skeleton.displayName = 'Skeleton';
Skeleton.defaultProps = {
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
