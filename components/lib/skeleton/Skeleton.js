import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useStyle } from '../hooks/Hooks';
import { mergeProps } from '../utils/Utils';
import { SkeletonBase } from './SkeletonBase';

export const Skeleton = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);

        useStyle(SkeletonBase.css.styles, { name: 'primereact_skeleton_style' });

        const props = SkeletonBase.getProps(inProps, context);
        const { ptm, cx, sx } = SkeletonBase.setMetaData({
            props
        });

        const elementRef = React.useRef(null);

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className: cx('root'),
                style: sx('root')
            },
            SkeletonBase.getOtherProps(props),
            ptm('root')
        );

        return <div {...rootProps}></div>;
    })
);

Skeleton.displayName = 'Skeleton';
