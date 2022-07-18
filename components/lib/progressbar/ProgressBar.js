import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const ProgressBar = React.memo(React.forwardRef((props, ref) => {

    const createLabel = () => {
        if (props.showValue && props.value != null) {
            const label = props.displayValueTemplate ? props.displayValueTemplate(props.value) : props.value + props.unit;
            return <div className="p-progressbar-label">{label}</div>
        }

        return null;
    }

    const createDeterminate = () => {
        const otherProps = ObjectUtils.findDiffKeys(props, ProgressBar.defaultProps);
        const className = classNames('p-progressbar p-component p-progressbar-determinate', props.className);
        const label = createLabel();

        return (
            <div role="progressbar" id={props.id} className={className} style={props.style} aria-valuemin="0" aria-valuenow={props.value} aria-valuemax="100" {...otherProps}>
                <div className="p-progressbar-value p-progressbar-value-animate" style={{ width: props.value + '%', display: 'block', backgroundColor: props.color }}></div>
                {label}
            </div>
        )
    }

    const createIndeterminate = () => {
        const otherProps = ObjectUtils.findDiffKeys(props, ProgressBar.defaultProps);
        const className = classNames('p-progressbar p-component p-progressbar-indeterminate', props.className);

        return (
            <div role="progressbar" id={props.id} className={className} style={props.style} {...otherProps}>
                <div className="p-progressbar-indeterminate-container">
                    <div className="p-progressbar-value p-progressbar-value-animate" style={{ backgroundColor: props.color }}></div>
                </div>
            </div>
        )
    }

    if (props.mode === 'determinate')
        return createDeterminate();
    else if (props.mode === 'indeterminate')
        return createIndeterminate();
    else
        throw new Error(props.mode + " is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'");
}));

ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = {
    __TYPE: 'ProgressBar',
    id: null,
    value: null,
    showValue: true,
    unit: '%',
    style: null,
    className: null,
    mode: 'determinate',
    displayValueTemplate: null,
    color: null
}
