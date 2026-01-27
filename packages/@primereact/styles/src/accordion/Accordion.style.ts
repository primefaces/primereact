import { createStyles } from '@primereact/styles/utils';
import type { AccordionRootInstance } from '@primereact/types/shared/accordion';
import { style as accordion_style } from '@primeuix/styles/accordion';

const style = /*css*/ `
${accordion_style}

/* @todo review styles */
.p-accordiontrigger {
    padding: dt('accordion.header.padding');
    height: 100%;
    cursor: pointer;
    outline: 0 none;
}

.p-accordionheader {
    padding: 0;
    cursor: initial;
}

.p-accordionheader:has(.p-accordiontrigger:focus-visible) {
    box-shadow: dt('accordion.header.focus.ring.shadow');
    outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
    outline-offset: dt('accordion.header.focus.ring.offset');
}
`;

export const styles = createStyles<AccordionRootInstance>({
    name: 'accordion',
    style,
    classes: {
        root: 'p-accordion p-component',
        header: 'p-accordionheader',
        trigger: 'p-accordiontrigger',
        content: 'p-accordioncontent',
        contentOuter: 'p-accordioncontent-wrapper',
        contentInner: 'p-accordioncontent-content',
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
