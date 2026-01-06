import { createStyles } from '@primereact/styles/utils';
import type { ToolbarRootInstance } from '@primereact/types/shared/toolbar';
import { style } from '@primeuix/styles/toolbar';

export const styles = createStyles<ToolbarRootInstance>({
    name: 'toolbar',
    style,
    classes: {
        root: 'p-toolbar p-component',
        start: 'p-toolbar-start',
        center: 'p-toolbar-center',
        end: 'p-toolbar-end'
    }
});
