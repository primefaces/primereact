import * as React from 'react';
import { classNames } from '../utils/Utils';
import { SkeletonBase } from './SkeletonBase';

export const Skeleton = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = SkeletonBase.getProps(inProps);

        const elementRef = React.useRef(null);
        const otherProps = SkeletonBase.getOtherProps(props);
        const style = props.size ? { width: props.size, height: props.size, borderRadius: props.borderRadius } : { width: props.width, height: props.height, borderRadius: props.borderRadius };
        const className = classNames(
            'p-skeleton p-component',
            {
                'p-skeleton-circle': props.shape === 'circle',
                'p-skeleton-none': props.animation === 'none'
            },
            props.className
        );

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        return <div ref={elementRef} style={style} className={className} {...otherProps}></div>;
    })
);

Skeleton.displayName = 'Skeleton';
