import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { IconUtils, classNames } from '../utils/Utils';
import { TagBase } from './TagBase';

export const Tag = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = TagBase.getProps(inProps, context);
    const { ptm, cx, isUnstyled } = TagBase.setMetaData({
        props
    });

    useHandleStyle(TagBase.css.styles, isUnstyled, { name: 'tag' });

    const elementRef = React.useRef(null);

    const iconProps = mergeProps(
        {
            className: cx('icon')
        },
        ptm('icon')
    );

    const icon = IconUtils.getJSXIcon(props.icon, { ...iconProps }, { props });

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    const rootProps = mergeProps(
        {
            ref: elementRef,
            className: classNames(props.className, cx('root')),
            style: props.style
        },
        TagBase.getOtherProps(props),
        ptm('root')
    );

    const valueProps = mergeProps(
        {
            className: cx('value')
        },
        ptm('value')
    );

    return (
        <span {...rootProps}>
            {icon}
            <span {...valueProps}>{props.value}</span>
            <span>{props.children}</span>
        </span>
    );
});

Tag.displayName = 'Tag';
