import * as React from 'react';
import { classNames, mergeProps } from '../utils/Utils';
import { ProgressBarBase } from './ProgressBarBase';
import { PrimeReactContext } from '../api/Api';

export const ProgressBar = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ProgressBarBase.getProps(inProps, context);
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
            const valueProps = mergeProps(
                {
                    className: 'p-progressbar-value p-progressbar-value-animate',
                    style: { width: props.value + '%', display: 'flex', backgroundColor: props.color }
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
                    <div {...valueProps}>{props.value != null && props.value !== 0 && props.showValue && <div {...labelProps}>{label}</div>}</div>
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
