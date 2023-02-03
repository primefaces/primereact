import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';
import { AvatarGroupDefaultProps } from './AvatarGroupBase';

export const AvatarGroup = React.forwardRef((inProps, ref) => {
    const props = ObjectUtils.getProps(inProps, AvatarGroupDefaultProps);

    const elementRef = React.useRef(null);
    const otherProps = ObjectUtils.findDiffKeys(props, AvatarGroupDefaultProps);
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
