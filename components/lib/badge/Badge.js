import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Badge = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const otherProps = ObjectUtils.findDiffKeys(props, Badge.defaultProps);
    const className = classNames('p-badge p-component', {
        'p-badge-no-gutter': ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
        'p-badge-dot': ObjectUtils.isEmpty(props.value),
        'p-badge-lg': props.size === 'large',
        'p-badge-xl': props.size === 'xlarge',
        [`p-badge-${props.severity}`]: props.severity !== null
    }, props.className);

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    return (
        <span ref={elementRef} className={className} style={props.style} {...otherProps}>
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
