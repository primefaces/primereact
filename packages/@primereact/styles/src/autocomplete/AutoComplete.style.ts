import { createStyles } from '@primereact/styles/utils';
import type { AutoCompleteRootInstance } from '@primereact/types/shared/autocomplete';
import { style } from '@primeuix/styles/autocomplete';
import { isNotEmpty } from '@primeuix/utils';

const theme = /*css*/ `
${style}

/* For PrimeReact */
.p-autocomplete-list-container {
    background: dt('autocomplete.overlay.background');
    color: dt('autocomplete.overlay.color');
    border: 1px solid dt('autocomplete.overlay.border.color');
    border-radius: dt('autocomplete.overlay.border.radius');
    box-shadow: dt('autocomplete.overlay.shadow');
}

.p-autocomplete-list.p-listbox {
    border: unset;
}
`;

export const styles = createStyles<AutoCompleteRootInstance>({
    name: 'autocomplete',
    style: theme,
    classes: {
        root: ({ props, context, state }) => [
            'p-autocomplete p-component p-inputwrapper',
            {
                'p-invalid': props.invalid,
                'p-focus': state.focused,
                'p-inputwrapper-filled': isNotEmpty(state.inputValue),
                'p-inputwrapper-focus': state.focused,
                'p-autocomplete-fluid': props.fluid ?? context.$fluid
            }
        ],
        input: 'p-autocomplete-input',
        clearIcon: 'p-autocomplete-clear-icon',
        button: 'p-autocomplete-dropdown',
        panel: 'p-autocomplete-list-container',
        list: 'p-autocomplete-list',
        options: 'p-autocomplete-options',
        option: 'p-autocomplete-option',
        selection: 'p-autocomplete-selection',
        empty: 'p-autocomplete-empty-message'
    },
    inlineStyles: {
        root: {
            position: 'relative'
        }
    }
});
