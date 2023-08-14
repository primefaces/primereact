import * as React from 'react';
import { classNames, ObjectUtils, mergeProps } from '../utils/Utils';
import { BadgeBase } from './BadgeBase';
import { PrimeReactContext } from '../api/Api';

export const Badge = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = BadgeBase.getProps(inProps, context);

        const { ptm } = BadgeBase.setMetaData({
            props
        });

        const elementRef = React.useRef(null);
        const className = classNames(
            'p-badge p-component',
            {
                'p-badge-no-gutter': ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
                'p-badge-dot': ObjectUtils.isEmpty(props.value),
                'p-badge-lg': props.size === 'large',
                'p-badge-xl': props.size === 'xlarge',
                [`p-badge-${props.severity}`]: props.severity !== null
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
                style: props.style,
                className: className
            },
            BadgeBase.getOtherProps(props),
            ptm('root')
        );

        return <span {...rootProps}>{props.value}</span>;
    })
);

Badge.displayName = 'Badge';
