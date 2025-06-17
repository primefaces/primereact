import { createStyles } from '@primereact/styles/utils';
import { TabsPanelsInstance } from '@primereact/types/shared/tabs';
import { style } from '@primeuix/styles/tabs';

export const panelsStyles = createStyles<TabsPanelsInstance>({
    name: 'tabpanels',
    style,
    classes: {
        root: 'p-tabpanels'
    }
});
