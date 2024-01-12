import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
import { ProgressBarBase } from './ProgressBarBase';

export const ProgressBar = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ProgressBarBase.getProps(inProps, context);
        const { ptm, cx, isUnstyled } = ProgressBarBase.setMetaData({
            props,
            ...props.__parentMetadata
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
                    className: classNames(props.className, cx('root')),
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
                    style: { width: props.value + '%', display: 'flex', backgroundColor: props.color }
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
                <div id={props.id} ref={elementRef} {...rootProps}>
                    <div {...valueProps}>{label != null && <div {...labelProps}>{label}</div>}</div>
                </div>
            );
        };

        const createIndeterminate = () => {
            const rootProps = mergeProps(
                {
                    className: classNames(props.className, cx('root')),
                    style: props.style,
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    'aria-valuenow': props.value,
                    'aria-valuemax': '100'
                },
                ProgressBarBase.getOtherProps(props),
                ptm('root')
            );

            const containerProps = mergeProps(
                {
                    className: cx('container')
                },
                ptm('container')
            );

            const valueProps = mergeProps(
                {
                    className: cx('value'),
                    style: { backgroundColor: props.color }
                },
                ptm('value')
            );

            return (
                <div id={props.id} ref={elementRef} {...rootProps}>
                    <div {...containerProps}>
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
