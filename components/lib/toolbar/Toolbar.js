import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Toolbar = React.memo(React.forwardRef((props, ref) => {
    const otherProps = ObjectUtils.findDiffKeys(props, Toolbar.defaultProps);
    const toolbarClass = classNames('p-toolbar p-component', props.className);
    const left = ObjectUtils.getJSXElement(props.left, props);
    const right = ObjectUtils.getJSXElement(props.right, props);

    return (
        <div id={props.id} className={toolbarClass} style={props.style} role="toolbar" {...otherProps}>
            <div className="p-toolbar-group-left">
                {left}
            </div>
            <div className="p-toolbar-group-right">
                {right}
            </div>
        </div>
    )
}));

Toolbar.displayName = 'Toolbar';
Toolbar.defaultProps = {
    __TYPE: 'Toolbar',
    id: null,
    style: null,
    className: null,
    left: null,
    right: null
}
