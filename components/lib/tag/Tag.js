import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Tag = React.forwardRef((props, ref) => {
    const otherProps = ObjectUtils.findDiffKeys(props, Tag.defaultProps);
    const className = classNames('p-tag p-component', {
        [`p-tag-${props.severity}`]: props.severity !== null,
        'p-tag-rounded': props.rounded
    }, props.className);
    const icon = IconUtils.getJSXIcon(props.icon, { className: 'p-tag-icon' }, { props });

    return (
        <span className={className} style={props.style} {...otherProps}>
            {icon}
            <span className="p-tag-value">{props.value}</span>
            <span>{props.children}</span>
        </span>
    )
});

Tag.displayName = 'Tag';
Tag.defaultProps = {
    __TYPE: 'Tag',
    value: null,
    severity: null,
    rounded: false,
    icon: null,
    style: null,
    className: null
}
