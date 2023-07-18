import * as React from 'react';
import { mergeProps } from '../utils/Utils';
import { ProgressSpinnerBase } from './ProgressSpinnerBase';
import { PrimeReactContext } from '../api/Api';
import { useStyle } from '../hooks/Hooks';

export const ProgressSpinner = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ProgressSpinnerBase.getProps(inProps, context);

        const elementRef = React.useRef(null);

        const { ptm, cx, sx } = ProgressSpinnerBase.setMetaData({
            props
        });

        useStyle(ProgressSpinnerBase.css.styles, { name: 'progressspinner' });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className: cx('root'),
                role: 'alert',
                'aria-busy': true
            },
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
