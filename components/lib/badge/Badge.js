import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Badge = React.memo(React.forwardRef((props, ref) => {
    const otherProps = ObjectUtils.findDiffKeys(props, Badge.defaultProps);
    const className = classNames('p-badge p-component', {
        'p-badge-no-gutter': props.value && String(props.value).length === 1,
        'p-badge-dot': !props.value,
        'p-badge-lg': props.size === 'large',
        'p-badge-xl': props.size === 'xlarge',
        [`p-badge-${props.severity}`]: props.severity !== null
    }, props.className);

    return (
        <span className={className} style={props.style} {...otherProps}>
            {props.value}
        </span>
    )
}));

Badge.displayName = 'Badge';
Badge.defaultProps = {
    __TYPE: 'Badge',
    value: null,
    severity: null,
    size: null,
    style: null,
    className: null
}
