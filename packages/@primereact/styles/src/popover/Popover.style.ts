import { createStyles } from '@primereact/styles/utils';
import type { PopoverRootInstance } from '@primereact/types/shared/popover';
import { style } from '@primeuix/styles/popover';

export const styles = createStyles<PopoverRootInstance>({
    name: 'popover',
    style,
    classes: {
        overlay: 'p-popover p-component',
        content: 'p-popover-content'
    }
});
