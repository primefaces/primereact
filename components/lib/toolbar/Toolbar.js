import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';

export const Toolbar = memo(forwardRef((props, ref) => {
    const toolbarClass = classNames('p-toolbar p-component', props.className);
    const left = ObjectUtils.getJSXElement(props.left, props);
    const right = ObjectUtils.getJSXElement(props.right, props);

    return (
        <div id={props.id} className={toolbarClass} style={props.style} role="toolbar">
            <div className="p-toolbar-group-left">
                {left}
            </div>
            <div className="p-toolbar-group-right">
                {right}
            </div>
        </div>
    )
}));

Toolbar.defaultProps = {
    __TYPE: 'Toolbar',
    id: null,
    style: null,
    className: null,
    left: null,
    right: null
}

Toolbar.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    left: PropTypes.any,
    right: PropTypes.any
}
