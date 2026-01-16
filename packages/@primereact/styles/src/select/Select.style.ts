import { createStyles } from '@primereact/styles/utils';
import type { SelectRootInstance } from '@primereact/types/shared/select';
import { style } from '@primeuix/styles/select';
import { isNotEmpty } from '@primeuix/utils';

const theme = /*css*/ `
${style}

/* For PrimeReact */
.p-select-list-container {
    background: dt('select.overlay.background');
    color: dt('select.overlay.color');
    border: 1px solid dt('select.overlay.border.color');
    border-radius: dt('select.overlay.border.radius');
    box-shadow: dt('select.overlay.shadow');
}

.p-select-list.p-listbox {
    border: unset;
}
`;

export const styles = createStyles<SelectRootInstance>({
    name: 'select',
    style: theme,
    classes: {
        root: ({ props, context, state }) => [
            'p-select p-component p-inputwrapper',
            {
                'p-invalid': props.invalid,
                'p-focus': state.focused,
                'p-variant-filled': props.variant === 'filled',
                'p-inputwrapper-filled': isNotEmpty(state.value),
                'p-inputwrapper-focus': state.focused || state.overlayVisible,
                'p-select-fluid': props.fluid ?? context.$fluid,
                'p-disabled': props.disabled,
                'p-select-sm p-inputfield-sm': props.size === 'small',
                'p-select-lg p-inputfield-lg': props.size === 'large'
            }
        ],
        label: ({ context }) => [
            'p-select-label',
            {
                'p-select-label-empty': context?.empty
            }
        ],
        clearIcon: 'p-select-clear-icon',
        dropdown: 'p-select-dropdown',
        panel: 'p-select-list-container',
        filter: 'p-select-filter',
        list: 'p-select-list',
        options: 'p-select-options',
        option: 'p-select-option',
        selection: 'p-select-selection',
        empty: 'p-select-empty-message'
    }
});
