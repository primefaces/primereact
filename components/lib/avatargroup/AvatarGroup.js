import * as React from 'react';
import { classNames } from '../utils/Utils';

export const AvatarGroup = React.forwardRef((props, ref) => {
    const className = classNames('p-avatar-group p-component', props.className);

    return (
        <div className={className} style={props.style}>
            {props.children}
        </div>
    )
});

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.defaultProps = {
    __TYPE: 'AvatarGroup',
    style: null,
    className: null
}
