import { createStyles } from '@primereact/styles/utils';
import type { ListboxInstance } from '@primereact/types/shared/listbox';
import { style } from '@primeuix/styles/listbox';

const _style = /*css*/ `
    ${style}

    /* For PrimeReact */
    .p-listbox-selection {
        margin-inline-start: dt('listbox.checkmark.gutter.start');
        margin-inline-end: dt('listbox.checkmark.gutter.end');
    }
`;

export const styles = createStyles<ListboxInstance>({
    name: 'listbox',
    style: _style,
    classes: {
        root: ({ props }) => [
            'p-listbox p-component',
            {
                'p-listbox-striped': props.striped,
                'p-disabled': props.disabled,
                'p-listbox-fluid': props.fluid,
                'p-invalid': props.invalid
            }
        ],
        header: 'p-listbox-header',
        footer: 'p-listbox-footer',
        pcFilter: 'p-listbox-filter',
        listContainer: 'p-listbox-list-container',
        list: 'p-listbox-list',
        optionGroup: 'p-listbox-option-group',
        option: ({ props, state, context }) => {
            return [
                'p-listbox-option',
                {
                    'p-listbox-option-selected': context.selected && !(props.checkbox || props.checkmark),
                    'p-focus': state.focusedOptionIndex === context.index,
                    'p-disabled': context.disabled
                }
            ];
        },
        selection: 'p-listbox-selection',
        optionCheckIcon: 'p-listbox-option-check-icon',
        optionBlankIcon: 'p-listbox-option-blank-icon',
        empty: 'p-listbox-empty-message'
    }
});
