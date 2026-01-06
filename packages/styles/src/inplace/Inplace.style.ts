import { createStyles } from '@primereact/styles/utils';
import type { InplaceRootInstance } from '@primereact/types/shared/inplace';
import { style } from '@primeuix/styles/inplace';

export const styles = createStyles<InplaceRootInstance>({
    name: 'inplace',
    style,
    classes: {
        root: 'p-inplace p-component',
        display: ({ props }) => ['p-inplace-display', { 'p-disabled': props.disabled }],
        content: 'p-inplace-content'
    }
});
