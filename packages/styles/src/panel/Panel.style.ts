import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/panel';

export const classes = {
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
    content: ({ state }) => [
        'p-panel-content',
        {
            // @todo: remove
            hidden: state?.collapsed
        }
    ],
    footer: 'p-panel-footer'
};

export const styles = createStyles({
    name: 'panel',
    style,
    classes
});
