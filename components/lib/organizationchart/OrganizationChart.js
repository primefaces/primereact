import * as React from 'react';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { OrganizationChartNode } from './OrganizationChartNode';

export const OrganizationChart = React.memo(React.forwardRef((props, ref) => {
    const root = props.value && props.value.length ? props.value[0] : null;

    const onNodeClick = (event, node) => {
        if (props.selectionMode) {
            const target = event.target;
            if (node.selectable === false || (!DomHandler.hasClass(target, 'p-node-toggler') || !DomHandler.hasClass(target, 'p-node-toggler-icon'))) {
                return;
            }

            const index = findIndexInSelection(node);
            const selected = (index >= 0);
            let selection;

            if (props.selectionMode === 'single') {
                if (selected) {
                    selection = null;
                    props.onNodeUnselect && props.onNodeUnselect({ originalEvent: event, node });
                }
                else {
                    selection = node;
                    props.onNodeSelect && props.onNodeSelect({ originalEvent: event, node });
                }
            }
            else if (props.selectionMode === 'multiple') {
                if (selected) {
                    selection = props.selection.filter((_, i) => i !== index);
                    props.onNodeUnselect && props.onNodeUnselect({ originalEvent: event, node });
                }
                else {
                    selection = [...(props.selection || []), node];
                    props.onNodeSelect && props.onNodeSelect({ originalEvent: event, node });
                }
            }

            if (props.onSelectionChange) {
                props.onSelectionChange({
                    originalEvent: event,
                    data: selection
                });
            }
        }
    }

    const findIndexInSelection = (node) => {
        if (props.selectionMode && props.selection) {
            if (props.selectionMode === 'single')
                return (props.selection === node) ? 0 : -1;
            else if (props.selectionMode === 'multiple')
                return props.selection.findIndex(selectedNode => selectedNode === node);
        }

        return -1;
    }

    const isSelected = (node) => {
        return findIndexInSelection(node) !== -1;
    }

    const otherProps = ObjectUtils.findDiffKeys(props, OrganizationChart.defaultProps);
    const className = classNames('p-organizationchart p-component', props.className);

    return (
        <div id={props.id} style={props.style} className={className} {...otherProps}>
            <OrganizationChartNode node={root} nodeTemplate={props.nodeTemplate} selectionMode={props.selectionMode} onNodeClick={onNodeClick} isSelected={isSelected} />
        </div>
    )
}));

OrganizationChart.displayName = 'OrganizationChart';
OrganizationChart.defaultProps = {
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
    onNodeUnselect: null
}
