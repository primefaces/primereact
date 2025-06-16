import { createStyles } from '@primereact/styles/utils';
import type { TabsInstance } from '@primereact/types/shared/tabs';
import { style } from '@primeuix/styles/tabs';

export const styles = createStyles<TabsInstance>({
    name: 'tabs',
    style,
    classes: {
        root: ({ props }) => [
            'p-tabs p-component',
            {
                'p-tabs-scrollable': props.scrollable
            }
        ]
    }
});
