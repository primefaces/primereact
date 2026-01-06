import { createStyles } from '@primereact/styles/utils';
import type { TabsRootInstance } from '@primereact/types/shared/tabs';
import { style } from '@primeuix/styles/tabs';

export const styles = createStyles<TabsRootInstance>({
    name: 'tabs',
    style,
    classes: {
        root: ({ props }) => [
            'p-tabs p-component',
            {
                'p-tabs-scrollable': props.scrollable
            }
        ],
        panels: 'p-tabpanels',
        tab: ({ context }) => [
            'p-tab',
            {
                'p-tab-active': context.active,
                'p-disabled': context.disabled
            }
        ],
        panel: ({ context }) => [
            'p-tabpanel',
            {
                'p-tabpanel-active': context.active
            }
        ],
        list: 'p-tablist',
        content: 'p-tablist-content p-tablist-viewport',
        tabList: 'p-tablist-tab-list',
        activeBar: 'p-tablist-active-bar',
        prevButton: 'p-tablist-prev-button p-tablist-nav-button',
        nextButton: 'p-tablist-next-button p-tablist-nav-button'
    }
});
