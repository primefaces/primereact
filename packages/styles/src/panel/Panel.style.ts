import { createStyles } from '@primereact/styles/utils';
import type { PanelInstance } from '@primereact/types/shared/panel';
import { style } from '@primeuix/styles/panel';

export const styles = createStyles<PanelInstance>({
    name: 'panel',
    style,
    classes: {
        root: ({ props }) => [
            'p-panel p-component',
            {
                'p-panel-toggleable': props.toggleable
            }
        ],
        header: 'p-panel-header',
        title: 'p-panel-title',
        headerActions: 'p-panel-header-actions',
        pcToggleButton: 'p-panel-toggle-button',
        contentContainer: 'p-panel-content-container',
        content: 'p-panel-content',
        footer: 'p-panel-footer'
    },
    inlineStyles: {
        content: ({ state }) => ({
            display: state?.collapsed ? 'none' : 'block'
        })
    }
});
