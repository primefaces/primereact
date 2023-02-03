import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { TagDefaultProps } from './TagBase';

export const Tag = React.forwardRef((inProps, ref) => {
    const props = ObjectUtils.getProps(inProps, TagDefaultProps);

    const elementRef = React.useRef(null);
    const otherProps = ObjectUtils.findDiffKeys(props, TagDefaultProps);
    const className = classNames(
        'p-tag p-component',
        {
            [`p-tag-${props.severity}`]: props.severity !== null,
            'p-tag-rounded': props.rounded
        },
        props.className
    );
    const icon = IconUtils.getJSXIcon(props.icon, { className: 'p-tag-icon' }, { props });

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    return (
        <span ref={elementRef} className={className} style={props.style} {...otherProps}>
            {icon}
            <span className="p-tag-value">{props.value}</span>
            <span>{props.children}</span>
        </span>
    );
});

Tag.displayName = 'Tag';
