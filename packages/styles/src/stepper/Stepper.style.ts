import { createStyles } from '@primereact/styles/utils';
import type { StepperInstance } from '@primereact/types/shared/stepper';
import { style } from '@primeuix/styles/stepper';

export const styles = createStyles<StepperInstance>({
    name: 'stepper',
    style,
    classes: {
        root: ({ props }) => [
            'p-stepper p-component',
            {
                'p-readonly': props.linear
            }
        ],
        separator: 'p-stepper-separator',
        panels: 'p-steppanels',
        panel: ({ context }) => [
            'p-steppanel',
            {
                'p-steppanel-active': context.isVertical && context.active
            }
        ],
        content: 'p-steppanel-content',
        list: 'p-steplist',
        item: ({ context }) => [
            'p-stepitem',
            {
                'p-stepitem-active': context.isActive
            }
        ],
        step: ({ context }) => [
            'p-step',
            {
                'p-step-active': context.active,
                'p-disabled': context.disabled
            }
        ],
        header: 'p-step-header',
        number: 'p-step-number',
        title: 'p-step-title'
    }
});
