import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
import { DividerBase } from './DividerBase';

export const Divider = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = DividerBase.getProps(inProps, context);

    const { ptm, cx, sx, isUnstyled } = DividerBase.setMetaData({
        props
    });

    useHandleStyle(DividerBase.css.styles, isUnstyled, { name: 'divider' });

    const elementRef = React.useRef(null);
    const horizontal = props.layout === 'horizontal';
    const vertical = props.layout === 'vertical';

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    const rootProps = mergeProps(
        {
            ref: elementRef,
            style: sx('root'),
            className: classNames(props.className, cx('root', { horizontal, vertical })),
            'aria-orientation': props.layout,
            role: 'separator'
        },
        DividerBase.getOtherProps(props),
        ptm('root')
    );

    const contentProps = mergeProps(
        {
            className: cx('content')
        },
        ptm('content')
    );

    return (
        <div {...rootProps}>
            <div {...contentProps}>{props.children}</div>
        </div>
    );
});

Divider.displayName = 'Divider';
