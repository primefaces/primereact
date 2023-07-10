import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useStyle } from '../hooks/Hooks';
import { classNames, IconUtils, mergeProps } from '../utils/Utils';
import { TagBase } from './TagBase';

export const Tag = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = TagBase.getProps(inProps, context);

    useStyle(TagBase.css.styles, { name: 'primereact_tag_style' });

    const { ptm, cx } = TagBase.setMetaData({
        props
    });

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
            className: cx('root'),
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
