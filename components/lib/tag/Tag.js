import * as React from 'react';
import { classNames, IconUtils, mergeProps } from '../utils/Utils';
import { TagBase } from './TagBase';
import { PrimeReactContext } from '../api/Api';

export const Tag = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = TagBase.getProps(inProps, context);
    const { ptm } = TagBase.setMetaData({
        props
    });

    const elementRef = React.useRef(null);
    const className = classNames(
        'p-tag p-component',
        {
            [`p-tag-${props.severity}`]: props.severity !== null,
            'p-tag-rounded': props.rounded
        },
        props.className
    );

    const iconProps = mergeProps(
        {
            className: 'p-tag-icon'
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
            className,
            style: props.style
        },
        TagBase.getOtherProps(props),
        ptm('root')
    );

    const valueProps = mergeProps(
        {
            className: 'p-tag-value'
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
