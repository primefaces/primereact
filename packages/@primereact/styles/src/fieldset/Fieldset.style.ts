import { createStyles } from '@primereact/styles/utils';
import type { FieldsetRootInstance } from '@primereact/types/shared/fieldset';
import { style as fieldset_style } from '@primeuix/styles/fieldset';

const style = /*css*/ `
${fieldset_style}

/* @todo review styles */
.p-fieldset-trigger {
    cursor: pointer;
}
`;

export const styles = createStyles<FieldsetRootInstance>({
    name: 'fieldset',
    style,
    classes: {
        root: 'p-fieldset p-component',
        legend: 'p-fieldset-legend',
        title: 'p-fieldset-title',
        trigger: 'p-fieldset-trigger',
        content: 'p-fieldset-content-container',
        contentOuter: 'p-fieldset-content-wrapper',
        contentInner: 'p-fieldset-content'
    }
});
