import { ComponentBase } from '../componentbase/ComponentBase';

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
    }
});
