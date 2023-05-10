import { ComponentBase } from '../componentbase/ComponentBase';

export const FieldsetBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Fieldset',
        id: null,
        legend: null,
        className: null,
        style: null,
        toggleable: null,
        collapsed: null,
        collapseIcon: null,
        transitionOptions: null,
        expandIcon: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onClick: null,
        children: undefined
    }
});
