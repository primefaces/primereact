import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useStyle } from '../hooks/Hooks';
import { mergeProps } from '../utils/Utils';
import { BadgeBase } from './BadgeBase';

export const Badge = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = BadgeBase.getProps(inProps, context);

        useStyle(BadgeBase.css.styles, { name: 'badge' });

        const { ptm, cx } = BadgeBase.setMetaData({
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
