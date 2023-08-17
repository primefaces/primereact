import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { classNames, mergeProps } from '../utils/Utils';
import { SkeletonBase } from './SkeletonBase';

export const Skeleton = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = SkeletonBase.getProps(inProps, context);
        const { ptm, cx, sx, isUnstyled } = SkeletonBase.setMetaData({
            props
        });

        useHandleStyle(SkeletonBase.css.styles, isUnstyled, { name: 'skeleton' });

        const elementRef = React.useRef(null);

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className: classNames(props.className, cx('root')),
                style: sx('root')
            },
            SkeletonBase.getOtherProps(props),
            ptm('root')
        );

        return <div {...rootProps}></div>;
    })
);

Skeleton.displayName = 'Skeleton';
