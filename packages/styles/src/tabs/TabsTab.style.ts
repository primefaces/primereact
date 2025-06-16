import { createStyles } from '@primereact/styles/utils';
import { TabsTabInstance } from '@primereact/types/shared/tabs';
import { style } from '@primeuix/styles/tabs';

export const tabStyles = createStyles<TabsTabInstance>({
    name: 'tab',
    style,
    classes: {
        root: ({ instance, props }) => [
            'p-tab',
            {
                'p-tab-active': instance.active,
                'p-disabled': props.disabled
            }
        ]
    }
});
