import { ComponentBase } from '../componentbase/ComponentBase';

export const OrganizationChartBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'OrganizationChart',
        id: null,
        value: null,
        style: null,
        className: null,
        selectionMode: null,
        selection: null,
        nodeTemplate: null,
        onSelectionChange: null,
        onNodeSelect: null,
        onNodeUnselect: null,
        togglerIcon: null,
        children: undefined
    }
});
