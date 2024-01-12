import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
import { AvatarGroupBase } from './AvatarGroupBase';

export const AvatarGroup = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = AvatarGroupBase.getProps(inProps, context);

    const { ptm, cx, isUnstyled } = AvatarGroupBase.setMetaData({
        props
    });

    useHandleStyle(AvatarGroupBase.css.styles, isUnstyled, { name: 'avatargroup' });

    const elementRef = React.useRef(null);

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    const rootProps = mergeProps(
        {
            ref: elementRef,
            style: props.style,
            className: classNames(props.className, cx('root'))
        },
        AvatarGroupBase.getOtherProps(props),
        ptm('root')
    );

    return <div {...rootProps}>{props.children}</div>;
});

AvatarGroup.displayName = 'AvatarGroup';
