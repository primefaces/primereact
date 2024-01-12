import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
import { ProgressSpinnerBase } from './ProgressSpinnerBase';

export const ProgressSpinner = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ProgressSpinnerBase.getProps(inProps, context);

        const elementRef = React.useRef(null);

        const { ptm, cx, sx, isUnstyled } = ProgressSpinnerBase.setMetaData({
            props
        });

        useHandleStyle(ProgressSpinnerBase.css.styles, isUnstyled, { name: 'progressspinner' });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className: classNames(props.className, cx('root')),
                role: 'progressbar',
                'aria-busy': true
            },
            ProgressSpinnerBase.getOtherProps(props),
            ptm('root')
        );

        const spinnerProps = mergeProps(
            {
                className: cx('spinner'),
                viewBox: '25 25 50 50',
                style: sx('spinner')
            },
            ptm('spinner')
        );

        const circleProps = mergeProps(
            {
                className: cx('circle'),
                cx: '50',
                cy: '50',
                r: '20',
                fill: props.fill,
                strokeWidth: props.strokeWidth,
                strokeMiterlimit: '10'
            },
            ptm('circle')
        );

        return (
            <div {...rootProps}>
                <svg {...spinnerProps}>
                    <circle {...circleProps} />
                </svg>
            </div>
        );
    })
);

ProgressSpinner.displayName = 'ProgressSpinner';
