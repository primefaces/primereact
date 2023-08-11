import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { classNames, mergeProps } from '../utils/Utils';
import { ProgressBarBase } from './ProgressBarBase';

export const ProgressBar = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ProgressBarBase.getProps(inProps, context);
        const { ptm, cx, sx, isUnstyled } = ProgressBarBase.setMetaData({
            props
        });

        useHandleStyle(ProgressBarBase.css.styles, isUnstyled, { name: 'progressbar' });
        const elementRef = React.useRef(null);

        const createLabel = () => {
            if (props.showValue && props.value != null) {
                const label = props.displayValueTemplate ? props.displayValueTemplate(props.value) : props.value + props.unit;

                return label;
            }

            return null;
        };

        const createDeterminate = () => {
            const label = createLabel();
            const rootProps = mergeProps(
                {
                    id: props.id,
                    ref: elementRef,
                    className: cx('root'),
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
                    className: cx('value'),
                    style: sx('value')
                },
                ptm('value')
            );

            const labelProps = mergeProps(
                {
                    className: cx('label')
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
            const rootProps = mergeProps(
                {
                    id: props.id,
                    ref: elementRef,
                    className: classNames(props.className, cx('root')),
                    style: props.style,
                    role: 'progressbar'
                },
                ProgressBarBase.getOtherProps(props),
                ptm('root')
            );

            const indeterminateContainerProps = mergeProps(
                {
                    className: cx('indeterminateContainer')
                },
                ptm('indeterminateContainer')
            );

            const valueProps = mergeProps(
                {
                    className: cx('value'),
                    style: sx('value')
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
