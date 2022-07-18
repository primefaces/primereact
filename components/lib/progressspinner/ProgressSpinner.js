import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const ProgressSpinner = React.memo(React.forwardRef((props, ref) => {
    const otherProps = ObjectUtils.findDiffKeys(props, ProgressSpinner.defaultProps);
    const className = classNames('p-progress-spinner', props.className);

    return (
        <div id={props.id} style={props.style} className={className} role="alert" aria-busy {...otherProps}>
            <svg className="p-progress-spinner-svg" viewBox="25 25 50 50" style={{ animationDuration: props.animationDuration }}>
                <circle className="p-progress-spinner-circle" cx="50" cy="50" r="20" fill={props.fill} strokeWidth={props.strokeWidth} strokeMiterlimit="10" />
            </svg>
        </div>
    )
}));

ProgressSpinner.displayName = 'ProgressSpinner';
ProgressSpinner.defaultProps = {
    __TYPE: 'ProgressSpinner',
    id: null,
    style: null,
    className: null,
    strokeWidth: '2',
    fill: 'none',
    animationDuration: '2s'
}
