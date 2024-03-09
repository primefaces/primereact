import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: 'p-picklist p-component',
    buttons: 'p-picklist-buttons p-picklist-transfer-buttons',
    header: 'p-picklist-header',
    filterIcon: 'p-picklist-filter-icon',
    filter: 'p-picklist-filter',
    filterInput: 'p-picklist-filter-input p-inputtext p-component',
    filterContainer: 'p-picklist-filter-container',
    list: 'p-picklist-list',
    listWrapper: 'p-picklist-list-wrapper',
    listSourceWrapper: 'p-picklist-list-wrapper p-picklist-source-wrapper',
    listTargetWrapper: 'p-picklist-list-wrapper p-picklist-target-wrapper',
    listSource: 'p-picklist-list p-picklist-source',
    listTarget: 'p-picklist-list p-picklist-target',
    item: ({ selected, focused }) =>
        classNames('p-picklist-item', {
            'p-highlight': selected,
            'p-focus': focused
        }),
    sourceControls: 'p-picklist-source-controls p-picklist-buttons',
    targetControls: 'p-picklist-target-controls p-picklist-buttons'
};

const styles = `
@layer primereact {
    .p-picklist {
        display: flex;
    }

    .p-picklist-buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .p-picklist-list-wrapper {
        flex: 1 1 50%;
    }

    .p-picklist-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        min-height: 12rem;
        max-height: 24rem;
    }

    .p-picklist-item {
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-picklist-filter {
        position: relative;
    }

    .p-picklist-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }

    .p-picklist-filter-input {
        width: 100%;
    }
}
`;

export const PickListBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'PickList',
        id: null,
        source: null,
        target: null,
        sourceHeader: null,
        targetHeader: null,
        style: null,
        className: null,
        sourceStyle: null,
        targetStyle: null,
        sourceSelection: null,
        targetSelection: null,
        showSourceControls: true,
        showTargetControls: true,
        metaKeySelection: false,
        onFocus: null,
        onBlur: null,
        filter: false,
        filterBy: null,
        filterMatchMode: 'contains',
        targetFilterIcon: null,
        sourceFilterIcon: null,
        moveAllToSourceIcon: null,
        moveToSourceIcon: null,
        moveAllToTargetIcon: null,
        moveToTargetIcon: null,
        moveBottomIcon: null,
        moveUpIcon: null,
        moveTopIcon: null,
        moveDownIcon: null,
        filterLocale: undefined,
        sourceFilterValue: null,
        targetFilterValue: null,
        showSourceFilter: true,
        showTargetFilter: true,
        sourceFilterPlaceholder: null,
        targetFilterPlaceholder: null,
        sourceFilterTemplate: null,
        targetFilterTemplate: null,
        tabIndex: 0,
        dataKey: null,
        breakpoint: '960px',
        itemTemplate: null,
        sourceItemTemplate: null,
        targetItemTemplate: null,
        onChange: null,
        onMoveToSource: null,
        onMoveAllToSource: null,
        onMoveToTarget: null,
        onMoveAllToTarget: null,
        onSourceSelectionChange: null,
        onTargetSelectionChange: null,
        onSourceFilterChange: null,
        onTargetFilterChange: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
