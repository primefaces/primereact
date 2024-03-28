import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';

export const StepperContent = React.memo(
    React.forwardRef((props) => {
        const mergeProps = useMergeProps();
        const { cx, ptm } = props;

        const rootProps = mergeProps(
            {
                id: props.id,
                className: cx('stepper.content', { stepperpanel: props.stepperpanel, index: props.index }),
                role: 'tabpanel',
                'aria-labelledby': props.ariaLabelledby,
                ...props.getStepPT(props.stepperpanel, 'root', props.index),
                ...props.getStepPT(props.stepperpanel, 'content', props.index),
                'data-p-active': props.active
            },
            ptm('stepperpanel')
        );

        const createContent = () => {
            const ComponentToRender = props.template;

            return (
                <ComponentToRender
                    index={props.index}
                    active={props.active}
                    highlighted={props.highlighted}
                    clickCallback={(event) => props.onItemClick(event, props.index)}
                    prevCallback={(event) => props.prevCallback(event, props.index)}
                    nextCallback={(event) => props.nextCallback(event, props.index)}
                />
            );
        };

        return <div {...rootProps}>{props.template ? createContent() : props.stepperpanel}</div>;
    })
);

StepperContent.displayName = 'StepperContent';
