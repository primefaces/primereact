import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    itemGroup: 'p-listbox-item-group',
    emptyMessage: 'p-listbox-empty-message',
    list: 'p-listbox-list',
    wrapper: ({ props }) => classNames('p-listbox-list-wrapper', props.listClassName),
    root: ({ props }) =>
        classNames(
            'p-listbox p-component',
            {
                'p-disabled': props.disabled
            },
            props.className
        ),
    item: ({ props }) =>
        classNames(
            'p-listbox-item',
            {
                'p-highlight': props.selected,
                'p-focus': props.focusedOptionIndex === props.index,
                'p-disabled': props.disabled
            },
            props.option.className
        ),
    filterContainer: 'p-listbox-filter-container',
    filterIcon: 'p-listbox-filter-icon',
    filterInput: 'p-listbox-filter',
    header: 'p-listbox-header'
};

const styles = `
@layer primereact {
    .p-listbox-list-wrapper {
        overflow: auto;
    }
    
    .p-listbox-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    
    .p-listbox-item {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        outline: none;
    }
    
    .p-listbox-filter-container {
        position: relative;
    }
    
    .p-listbox-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-listbox-filter {
        width: 100%;
    }
}
`;

const inlineStyles = {
    itemGroup: ({ scrollerOptions }) => ({ height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined }),
    list: ({ options, props }) => (props.virtualScrollerOptions ? options.style : undefined)
};

export const ListBoxBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ListBox',
        className: null,
        dataKey: null,
        disabled: null,
        emptyFilterMessage: null,
        emptyMessage: null,
        filter: false,
        filterIcon: null,
        filterBy: null,
        filterInputProps: null,
        filterLocale: undefined,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        filterTemplate: null,
        filterValue: null,
        selectOnFocus: false,
        id: null,
        itemTemplate: null,
        listClassName: null,
        listStyle: null,
        metaKeySelection: false,
        selectOnFocus: false,
        autoOptionFocus: true,
        multiple: false,
        onChange: null,
        onFilterValueChange: null,
        optionDisabled: null,
        optionGroupChildren: null,
        optionGroupLabel: null,
        optionGroupTemplate: null,
        optionLabel: null,
        optionValue: null,
        options: null,
        style: null,
        tabIndex: 0,
        tooltip: null,
        tooltipOptions: null,
        value: null,
        virtualScrollerOptions: null,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
