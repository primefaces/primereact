import * as React from 'react';
import { classNames, mergeProps } from '../utils/Utils';
import { ProgressSpinnerBase } from './ProgressSpinnerBase';
import { PrimeReactContext } from '../api/Api';

export const ProgressSpinner = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ProgressSpinnerBase.getProps(inProps, context);

        const elementRef = React.useRef(null);
        const className = classNames('p-progress-spinner', props.className);

        const { ptm } = ProgressSpinnerBase.setMetaData({
            props
        });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className,
                role: 'alert',
                'aria-busy': true
            },
            ptm('spinner')
        );

        const spinnerProps = mergeProps(
            {
                className: 'p-progress-spinner-svg',
                viewBox: '25 25 50 50',
                style: { animationDuration: props.animationDuration }
            },
            ptm('spinner')
        );

        const circleProps = mergeProps(
            {
                className: 'p-progress-spinner-circle',
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
