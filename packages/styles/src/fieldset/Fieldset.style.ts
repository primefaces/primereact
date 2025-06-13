import { createStyles } from '@primereact/styles/utils';
import type { FieldsetInstance } from '@primereact/types/shared/fieldset';
import { style } from '@primeuix/styles/fieldset';

export const styles = createStyles<FieldsetInstance>({
    name: 'fieldset',
    style,
    classes: {
        root: 'p-fieldset p-component',
        legend: 'p-fieldset-legend',
        content: 'p-fieldset-content'
    }
});
