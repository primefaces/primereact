import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames, IconUtils } from '../utils/Utils';

export const Tag = forwardRef((props, ref) => {

    const className = classNames('p-tag p-component', {
        [`p-tag-${props.severity}`]: props.severity !== null,
        'p-tag-rounded': props.rounded
    }, props.className);
    const icon = IconUtils.getJSXIcon(props.icon, { className: 'p-tag-icon' }, { props });

    return (
        <span className={className} style={props.style}>
            {icon}
            <span className="p-tag-value">{props.value}</span>
            <span>{props.children}</span>
        </span>
    )
});

Tag.defaultProps = {
    __TYPE: 'Tag',
    value: null,
    severity: null,
    rounded: false,
    icon: null,
    style: null,
    className: null
}

Tag.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    value: PropTypes.any,
    severity: PropTypes.string,
    rounded: PropTypes.bool,
    icon: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string
}
