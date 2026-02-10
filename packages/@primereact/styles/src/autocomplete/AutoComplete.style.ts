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
    opacity: 0;
    scale: 0.93;
    transition: opacity 300ms cubic-bezier(.19,1,.22,1), scale 300ms cubic-bezier(.19,1,.22,1);
    transform-origin: var(--transform-origin);

    &[data-open]{
        opacity: 1;
        scale: 1;
    }
}

.p-autocomplete-list.p-listbox {
    border: unset;
}

.p-autocomplete-clear-icon {
    display: inline-flex;
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
        trigger: 'p-autocomplete-dropdown',
        positioner: 'p-autocomplete-positioner',
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
