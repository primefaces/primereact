import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';

export const StepperHeader = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const { cx } = props;

        const buttonProps = mergeProps({
            ref: ref,
            id: props.id,
            className: cx('stepper.action'),
            role: 'tab',
            type: 'button',
            tabIndex: props.disabled ? -1 : undefined,
            'aria-controls': props.ariaControls,
            onClick: (e) => props.clickCallback(e, props.index)
        });

        return props.template ? (
            props.template()
        ) : (
            <button {...buttonProps}>
                <span className={cx('stepper.number')}>{props.index + 1}</span>
                <span className={cx('stepper.title')}>{props.getStepProp(props.stepperpanel, 'header')}</span>
            </button>
        );
    })
);

StepperHeader.displayName = 'StepperHeader';
