import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Divider = React.forwardRef((props, ref) => {
    const horizontal = props.layout === 'horizontal';
    const vertical = props.layout === 'vertical';
    const otherProps = ObjectUtils.findDiffKeys(props, Divider.defaultProps);
    const className = classNames(`p-divider p-component p-divider-${props.layout} p-divider-${props.type}`, {
        'p-divider-left': horizontal && (!props.align || props.align === 'left'),
        'p-divider-right': horizontal && props.align === 'right',
        'p-divider-center': (horizontal && props.align === 'center') || (vertical && (!props.align || props.align === 'center')),
        'p-divider-top': vertical && props.align === 'top',
        'p-divider-bottom': vertical && props.align === 'bottom',
    }, props.className);

    return (
        <div className={className} style={props.style} role="separator" {...otherProps}>
            <div className="p-divider-content">
                {props.children}
            </div>
        </div>
    )
});

Divider.displayName = 'Divider';
Divider.defaultProps = {
    __TYPE: 'Divider',
    align: null,
    layout: 'horizontal',
    type: 'solid',
    style: null,
    className: null
}
