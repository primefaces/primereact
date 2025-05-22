import { createStyles } from '@primereact/styles/utils';
import type { InplaceInstance } from '@primereact/types/shared/inplace';
import { style } from '@primeuix/styles/inplace';

export const styles = createStyles<InplaceInstance>({
    name: 'inplace',
    style,
    classes: {
        root: 'p-inplace p-component',
        display: ({ props }) => ['p-inplace-display', { 'p-disabled': props.disabled }],
        content: 'p-inplace-content'
    }
});
