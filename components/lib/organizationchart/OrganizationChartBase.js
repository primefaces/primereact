import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-organizationchart-table {
        border-spacing: 0;
        border-collapse: separate;
        margin: 0 auto;
    }
    
    .p-organizationchart-table > tbody > tr > td {
        text-align: center;
        vertical-align: top;
        padding: 0 .75rem;
    }
    
    .p-organizationchart-node-content {
        display: inline-block;
        position: relative;
    }
    
    .p-organizationchart-node-content .p-node-toggler {
        position: absolute;
        bottom: -.75rem;
        margin-left: -.75rem;
        z-index: 2;
        left: 50%;
        user-select: none;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        text-decoration: none;
    }
    
    .p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
        position: relative;
        top: .25rem;
    }
    
    .p-organizationchart-line-down {
        margin: 0 auto;
        height: 20px;
        width: 1px;
    }
    
    .p-organizationchart-line-right {
        border-radius: 0px;
    }
    
     .p-organizationchart-line-left {
        border-radius: 0;
    }
    
    .p-organizationchart-selectable-node {
        cursor: pointer;
    }
}
`;

const classes = {
    root: 'p-organizationchart p-component',
    table: 'p-organizationchart-table',
    node: ({ nodeProps: props, node, selected }) =>
        classNames(
            'p-organizationchart-node-content',
            {
                'p-organizationchart-selectable-node': props.selectionMode && node.selectable !== false,
                'p-highlight': selected
            },
            node.className
        ),
    nodes: 'p-organizationchart-nodes',
    lines: 'p-organizationchart-lines',
    lineLeft: ({ index }) => classNames('p-organizationchart-line-left', { 'p-organizationchart-line-top': index !== 0 }),
    lineRight: ({ index, nodeChildLength }) => classNames('p-organizationchart-line-right', { 'p-organizationchart-line-top': index !== nodeChildLength - 1 }),
    lineDown: 'p-organizationchart-line-down',
    nodeTogglerIcon: 'p-node-toggler-icon',
    nodeToggler: 'p-node-toggler'
};

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
    },
    css: {
        classes,
        styles
    }
});
