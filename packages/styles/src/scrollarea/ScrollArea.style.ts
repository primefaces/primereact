import { createStyles } from '@primereact/styles/utils';
import type { ScrollAreaInstance } from '@primereact/types/shared/scrollarea';
import { style } from '@primeuix/styles/scrollpanel';

export const styles = createStyles<ScrollAreaInstance>({
    name: 'scrollpanel',
    style,
    classes: {
        root: 'p-scrollpanel p-component',
        viewport: 'p-scrollpanel-content-container',
        content: 'p-scrollpanel-content',
        thumbX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
        thumbY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
    }
});
