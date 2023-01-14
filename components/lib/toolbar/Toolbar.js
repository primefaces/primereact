import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Toolbar = React.memo(
    React.forwardRef((props, ref) => {
        const elementRef = React.useRef(null);
        const otherProps = ObjectUtils.findDiffKeys(props, Toolbar.defaultProps);
        const toolbarClass = classNames('p-toolbar p-component', props.className);
        const start = ObjectUtils.getJSXElement(props.left||props.start, props);
        const center = ObjectUtils.getJSXElement(props.center, props);
        const end = ObjectUtils.getJSXElement(props.right||props.end, props);

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        return (
            <div id={props.id} ref={elementRef} className={toolbarClass} style={props.style} role="toolbar" {...otherProps}>
                <div className="p-toolbar-group-start p-toolbar-group-left">{start}</div>
                <div className="p-toolbar-group-center">{center}</div>
                <div className="p-toolbar-group-end p-toolbar-group-right">{end}</div>
            </div>
        );
    })
);

Toolbar.displayName = 'Toolbar';
Toolbar.defaultProps = {
    __TYPE: 'Toolbar',
    id: null,
    style: null,
    className: null,
    left: null,
    right: null,
    start: null,
    center: null,
    end: null
};
