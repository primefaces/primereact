import * as React from 'react';
import { classNames, mergeProps } from '../utils/Utils';
import { DividerBase } from './DividerBase';
import { PrimeReactContext } from '../api/Api';

export const Divider = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = DividerBase.getProps(inProps, context);

    const { ptm } = DividerBase.setMetaData({
        props
    });

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
            style: props.style,
            className: classNames(
                `p-divider p-component p-divider-${props.layout} p-divider-${props.type}`,
                {
                    'p-divider-left': horizontal && (!props.align || props.align === 'left'),
                    'p-divider-right': horizontal && props.align === 'right',
                    'p-divider-center': (horizontal && props.align === 'center') || (vertical && (!props.align || props.align === 'center')),
                    'p-divider-top': vertical && props.align === 'top',
                    'p-divider-bottom': vertical && props.align === 'bottom'
                },
                props.className
            ),
            role: 'separator'
        },
        DividerBase.getOtherProps(props),
        ptm('root')
    );

    const contentProps = mergeProps(
        {
            className: 'p-divider-content'
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
