import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/Utils';

export const AvatarGroup = forwardRef((props, ref) => {
    const className = classNames('p-avatar-group p-component', props.className);

    return (
        <div className={className} style={props.style}>
            {props.children}
        </div>
    )
});

AvatarGroup.defaultProps = {
    __TYPE: 'AvatarGroup',
    style: null,
    className: null
}

AvatarGroup.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
}
