import { createStyles } from '@primereact/styles/utils';
import type { PanelRootInstance } from '@primereact/types/shared/panel';
import { style as panel_style } from '@primeuix/styles/panel';

const style = /*css*/ `
${panel_style}

/* @todo review styles */
.p-panel-trigger {
    cursor: pointer;
}
`;

export const styles = createStyles<PanelRootInstance>({
    name: 'panel',
    style,
    classes: {
        root: 'p-panel p-component',
        header: 'p-panel-header',
        title: 'p-panel-title',
        trigger: 'p-panel-trigger',
        content: 'p-panel-content-container',
        contentOuter: 'p-panel-content-wrapper',
        contentInner: 'p-panel-content',
        footer: 'p-panel-footer'
    }
});
