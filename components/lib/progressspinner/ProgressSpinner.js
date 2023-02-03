import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';
import { ProgressSpinnerDefaultProps } from './ProgressSpinnerBase';

export const ProgressSpinner = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ObjectUtils.getProps(inProps, ProgressSpinnerDefaultProps);

        const elementRef = React.useRef(null);
        const otherProps = ObjectUtils.findDiffKeys(props, ProgressSpinnerDefaultProps);
        const className = classNames('p-progress-spinner', props.className);

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        return (
            <div id={props.id} ref={elementRef} style={props.style} className={className} role="alert" aria-busy {...otherProps}>
                <svg className="p-progress-spinner-svg" viewBox="25 25 50 50" style={{ animationDuration: props.animationDuration }}>
                    <circle className="p-progress-spinner-circle" cx="50" cy="50" r="20" fill={props.fill} strokeWidth={props.strokeWidth} strokeMiterlimit="10" />
                </svg>
            </div>
        );
    })
);

ProgressSpinner.displayName = 'ProgressSpinner';
