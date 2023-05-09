import * as React from 'react';
import { classNames, mergeProps } from '../utils/Utils';
import { AvatarGroupBase } from './AvatarGroupBase';

export const AvatarGroup = React.forwardRef((inProps, ref) => {
    const props = AvatarGroupBase.getProps(inProps);

    const { ptm } = AvatarGroupBase.setMetaData({
        props
    });

    const elementRef = React.useRef(null);
    const className = classNames('p-avatar-group p-component', props.className);

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    const rootProps = mergeProps(
        {
            ref: elementRef,
            style: props.style,
            className
        },
        AvatarGroupBase.getOtherProps(props),
        ptm('root')
    );

    return <div {...rootProps}>{props.children}</div>;
});

AvatarGroup.displayName = 'AvatarGroup';
