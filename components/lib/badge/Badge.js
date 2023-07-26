import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { mergeProps } from '../utils/Utils';
import { BadgeBase } from './BadgeBase';
import { useHandleStyle } from '../componentbase/ComponentBase';

export const Badge = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = BadgeBase.getProps(inProps, context);

        const { ptm, cx, isUnstyled } = BadgeBase.setMetaData({
            props
        });

        useHandleStyle(BadgeBase.css.styles, isUnstyled, { name: 'badge' });

        const elementRef = React.useRef(null);

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                ref: elementRef,
                style: props.style,
                className: cx('root')
            },
            BadgeBase.getOtherProps(props),
            ptm('root')
        );

        return <span {...rootProps}>{props.value}</span>;
    })
);

Badge.displayName = 'Badge';
