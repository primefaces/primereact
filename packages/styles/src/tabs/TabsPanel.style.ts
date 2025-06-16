import { createStyles } from '@primereact/styles/utils';
import { TabsPanelInstance } from '@primereact/types/shared/tabs';
import { style } from '@primeuix/styles/tabs';

export const panelStyles = createStyles<TabsPanelInstance>({
    name: 'tabpanel',
    style,
    classes: {
        root: ({ instance }) => [
            'p-tabpanel',
            {
                'p-tabpanel-active': instance.active
            }
        ]
    }
});
