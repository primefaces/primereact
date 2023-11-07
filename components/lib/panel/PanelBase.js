import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

export const PanelBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Panel',
        id: null,
        header: null,
        headerTemplate: null,
        footer: null,
        footerTemplate: null,
        toggleable: null,
        style: null,
        className: null,
        collapsed: null,
        expandIcon: null,
        collapseIcon: null,
        icons: null,
        transitionOptions: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        children: undefined
    },
    css: {
        classes: {
            root: ({ props }) =>
                classNames('p-panel p-component', {
                    'p-panel-toggleable': props.toggleable
                }),
            header: 'p-panel-header',
            title: 'p-panel-title',
            icons: 'p-panel-icons',
            toggler: 'p-panel-header-icon p-panel-toggler p-link',
            togglerIcon: 'p-panel-header-icon p-panel-toggler p-link',
            toggleableContent: 'p-toggleable-content',
            content: 'p-panel-content',
            footer: 'p-panel-footer',
            transition: 'p-toggleable-content'
        },
        styles: `
        @layer primereact {
            .p-panel-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .p-panel-title {
              line-height: 1;
            }
            
            .p-panel-header-icon {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              text-decoration: none;
              overflow: hidden;
              position: relative;
            }
        }
        `
    }
});
