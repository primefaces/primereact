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
        content: ({ context }) => [
            'p-tablist-content',
            {
                'p-tablist-viewport': context.scrollable
            }
        ],
        tabList: 'p-tablist-tab-list',
        activeBar: 'p-tablist-active-bar',
        prevButton: 'p-tablist-prev-button p-tablist-nav-button',
        nextButton: 'p-tablist-next-button p-tablist-nav-button'
    }
});
