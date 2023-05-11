import * as React from 'react';
import { classNames, mergeProps } from '../utils/Utils';
import { ProgressBarBase } from './ProgressBarBase';

export const ProgressBar = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ProgressBarBase.getProps(inProps);
        const { ptm } = ProgressBarBase.setMetaData({
            props
        });
        const elementRef = React.useRef(null);

        const createLabel = () => {
            if (props.showValue && props.value != null) {
                const label = props.displayValueTemplate ? props.displayValueTemplate(props.value) : props.value + props.unit;

                return label;
            }

            return null;
        };

        const createDeterminate = () => {
            const className = classNames('p-progressbar p-component p-progressbar-determinate', props.className);
            const label = createLabel();
            const rootProps = mergeProps(
                {
                    id: props.id,
                    ref: elementRef,
                    className,
                    style: props.style,
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    'aria-valuenow': props.value,
                    'aria-valuemax': '100'
                },
                ProgressBarBase.getOtherProps(props),
                ptm('root')
            );
            const valueWidth = Math.max(props.value, 2); // min 2 to display full label of 0% and 1%
            const valueColor = props.value ? props.color : 'transparent';
            const valueProps = mergeProps(
                {
                    className: 'p-progressbar-value p-progressbar-value-animate',
                    style: { width: valueWidth + '%', display: 'flex', backgroundColor: valueColor }
                },
                ptm('value')
            );

            const labelProps = mergeProps(
                {
                    className: 'p-progressbar-label'
                },
                ptm('label')
            );

            return (
                <div {...rootProps}>
                    <div {...valueProps}>{label != null && <div {...labelProps}>{label}</div>}</div>
                </div>
            );
        };

        const createIndeterminate = () => {
            const className = classNames('p-progressbar p-component p-progressbar-indeterminate', props.className);
            const rootProps = mergeProps(
                {
                    id: props.id,
                    ref: elementRef,
                    className,
                    style: props.style,
                    role: 'progressbar'
                },
                ProgressBarBase.getOtherProps(props),
                ptm('root')
            );

            const indeterminateContainerProps = mergeProps(
                {
                    className: 'p-progressbar-indeterminate-container'
                },
                ptm('indeterminateContainer')
            );

            const valueProps = mergeProps(
                {
                    className: 'p-progressbar-value p-progressbar-value-animate',
                    style: { backgroundColor: props.color }
                },
                ptm('value')
            );

            return (
                <div {...rootProps}>
                    <div {...indeterminateContainerProps}>
                        <div {...valueProps}></div>
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
