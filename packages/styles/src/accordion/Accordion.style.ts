import { createStyles } from '@primereact/styles/utils';
import type { AccordionInstance } from '@primereact/types/shared/accordion';
import { style } from '@primeuix/styles/accordion';

export const styles = createStyles<AccordionInstance>({
    name: 'accordion',
    style,
    classes: {
        root: 'p-accordion p-component',
        content: 'p-accordioncontent p-accordioncontent-content',
        header: 'p-accordionheader',
        toggleicon: 'p-accordionheader-toggle-icon'
    }
});
