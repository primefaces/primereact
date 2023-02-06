import * as React from 'react';
import { classNames } from '../utils/Utils';
import { AvatarGroupBase } from './AvatarGroupBase';

export const AvatarGroup = React.forwardRef((inProps, ref) => {
    const props = AvatarGroupBase.getProps(inProps);

    const elementRef = React.useRef(null);
    const otherProps = AvatarGroupBase.getOtherProps(props);
    const className = classNames('p-avatar-group p-component', props.className);

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    return (
        <div ref={elementRef} className={className} style={props.style} {...otherProps}>
            {props.children}
        </div>
    );
});

AvatarGroup.displayName = 'AvatarGroup';
