import * as React from 'react';
import { classNames } from '../utils/Utils';
import { ProgressBarBase } from './ProgressBarBase';

export const ProgressBar = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ProgressBarBase.getProps(inProps);

        const elementRef = React.useRef(null);

        const createLabel = () => {
            if (props.showValue && props.value != null) {
                const label = props.displayValueTemplate ? props.displayValueTemplate(props.value) : props.value + props.unit;

                return label;
            }

            return null;
        };

        const createDeterminate = () => {
            const otherProps = ProgressBarBase.getOtherProps(props);
            const className = classNames('p-progressbar p-component p-progressbar-determinate', props.className);
            const label = createLabel();

            return (
                <div role="progressbar" id={props.id} ref={elementRef} className={className} style={props.style} aria-valuemin="0" aria-valuenow={props.value} aria-valuemax="100" {...otherProps}>
                    <div className="p-progressbar-value p-progressbar-value-animate" style={{ width: props.value + '%', display: 'flex', backgroundColor: props.color }}>
                        {props.value != null && props.value !== 0 && props.showValue && <div className={`p-progressbar-label`}>{label}</div>}
                    </div>
                </div>
            );
        };

        const createIndeterminate = () => {
            const otherProps = ProgressBarBase.getOtherProps(props);
            const className = classNames('p-progressbar p-component p-progressbar-indeterminate', props.className);

            return (
                <div role="progressbar" id={props.id} ref={elementRef} className={className} style={props.style} {...otherProps}>
                    <div className="p-progressbar-indeterminate-container">
                        <div className="p-progressbar-value p-progressbar-value-animate" style={{ backgroundColor: props.color }}></div>
                    </div>
                </div>
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        if (props.mode === 'determinate') return createDeterminate();
        else if (props.mode === 'indeterminate') return createIndeterminate();
        else throw new Error(props.mode + " is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'");
    })
);

ProgressBar.displayName = 'ProgressBar';
