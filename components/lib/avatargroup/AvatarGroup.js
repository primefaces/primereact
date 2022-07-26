import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const AvatarGroup = React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const otherProps = ObjectUtils.findDiffKeys(props, AvatarGroup.defaultProps);
    const className = classNames('p-avatar-group p-component', props.className);

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    return (
        <div ref={elementRef} className={className} style={props.style} {...otherProps}>
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
