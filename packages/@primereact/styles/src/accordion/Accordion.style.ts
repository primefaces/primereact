import { createStyles } from '@primereact/styles/utils';
import type { AccordionRootInstance } from '@primereact/types/shared/accordion';
import { style as accordion_style } from '@primeuix/styles/accordion';

const style = /*css*/ `
${accordion_style}

/* @todo review styles */
.p-accordiontrigger {
    display: flex;
    width: 100%;
    height: 100%;
    padding: var(--p-accordion-header-padding);
    cursor: pointer;
}

.p-accordionheader {
    padding: 0;
}
`;

export const styles = createStyles<AccordionRootInstance>({
    name: 'accordion',
    style,
    classes: {
        root: 'p-accordion p-component',
        content: 'p-accordioncontent',
        contentOuter: 'p-accordioncontent-wrapper',
        contentInner: 'p-accordioncontent-content',
        header: 'p-accordionheader',
        trigger: 'p-accordiontrigger',
        panel: ({ context }) => {
            return [
                'p-accordionpanel',
                {
                    'p-disabled': context.disabled
                }
            ];
        }
    }
});
