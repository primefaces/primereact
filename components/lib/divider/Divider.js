import * as React from 'react';
import { classNames } from '../utils/Utils';
import { DividerBase } from './DividerBase';

export const Divider = React.forwardRef((inProps, ref) => {
    const props = DividerBase.getProps(inProps);

    const elementRef = React.useRef(null);
    const horizontal = props.layout === 'horizontal';
    const vertical = props.layout === 'vertical';
    const otherProps = DividerBase.getOtherProps(props);
    const className = classNames(
        `p-divider p-component p-divider-${props.layout} p-divider-${props.type}`,
        {
            'p-divider-left': horizontal && (!props.align || props.align === 'left'),
            'p-divider-right': horizontal && props.align === 'right',
            'p-divider-center': (horizontal && props.align === 'center') || (vertical && (!props.align || props.align === 'center')),
            'p-divider-top': vertical && props.align === 'top',
            'p-divider-bottom': vertical && props.align === 'bottom'
        },
        props.className
    );

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    return (
        <div ref={elementRef} className={className} style={props.style} role="separator" {...otherProps}>
            <div className="p-divider-content">{props.children}</div>
        </div>
    );
});

Divider.displayName = 'Divider';
