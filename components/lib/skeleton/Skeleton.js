import * as React from 'react';
import { classNames, mergeProps } from '../utils/Utils';
import { SkeletonBase } from './SkeletonBase';
import { PrimeReactContext } from '../api/Api';

export const Skeleton = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = SkeletonBase.getProps(inProps, context);
        const { ptm } = SkeletonBase.setMetaData({
            props
        });

        const elementRef = React.useRef(null);
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

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className,
                style
            },
            SkeletonBase.getOtherProps(props),
            ptm('root')
        );

        return <div {...rootProps}></div>;
    })
);

Skeleton.displayName = 'Skeleton';
