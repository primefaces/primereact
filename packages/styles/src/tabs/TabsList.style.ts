import { createStyles } from '@primereact/styles/utils';
import type { TabsListInstance } from '@primereact/types/shared/tabs';
import { style } from '@primeuix/styles/tabs';

export const listStyles = createStyles<TabsListInstance>({
    name: 'tablist',
    style,
    classes: {
        root: 'p-tablist',
        content: ({ instance }) => [
            'p-tablist-content',
            {
                'p-tablist-viewport': instance?.tabs?.props.scrollable
            }
        ],
        tabList: 'p-tablist-tab-list',
        activeBar: 'p-tablist-active-bar',
        prevButton: 'p-tablist-prev-button p-tablist-nav-button',
        nextButton: 'p-tablist-next-button p-tablist-nav-button'
    }
});
