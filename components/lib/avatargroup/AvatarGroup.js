import * as React from 'react';
import { classNames, mergeProps } from '../utils/Utils';
import { AvatarGroupBase } from './AvatarGroupBase';
import { PrimeReactContext } from '../api/Api';

export const AvatarGroup = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = AvatarGroupBase.getProps(inProps, context);

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
