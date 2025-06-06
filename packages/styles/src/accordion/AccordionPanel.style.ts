import { createStyles } from '@primereact/styles/utils';
import type { AccordionPanelInstance } from '@primereact/types/shared/accordion';
import { style } from '@primeuix/styles/accordion';

export const panelStyles = createStyles<AccordionPanelInstance>({
    name: 'accordionpanel',
    style,
    classes: {
        root: ({ instance, props }) => {
            return [
                'p-accordionpanel',
                {
                    'p-accordionpanel-active': instance.active,
                    'p-disabled': props.disabled || instance.accordion?.props.disabled
                }
            ];
        }
    }
});
