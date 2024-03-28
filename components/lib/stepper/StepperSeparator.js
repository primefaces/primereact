import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';

export const StepperSeparator = React.memo(
    React.forwardRef((props) => {
        const mergeProps = useMergeProps();

        const separatorProps = mergeProps({
            'aria-hidden': true,
            className: props.separatorClass,
            ...props.getStepPT(props.stepperpanel, 'separator', props.index)
        });

        return props.template ? props.template() : <span {...separatorProps} />;
    })
);

StepperSeparator.displayName = 'StepperSeparator';
