import { createStyles } from '@primereact/styles/utils';
import type { SelectRootInstance } from '@primereact/types/shared/select';
import { style } from '@primeuix/styles/select';
import { isNotEmpty } from '@primeuix/utils';

const theme = /*css*/ `
${style}

/* For PrimeReact */
.p-select-panel {
    background: dt('select.overlay.background');
    color: dt('select.overlay.color');
    border: 1px solid dt('select.overlay.border.color');
    border-radius: dt('select.overlay.border.radius');
    box-shadow: dt('select.overlay.shadow');
    opacity: 0;
    scale: 0.93;
    transition: opacity 300ms cubic-bezier(.19,1,.22,1), scale 300ms cubic-bezier(.19,1,.22,1);
    transform-origin: var(--transform-origin);

    &[data-open]{
        opacity: 1;
        scale: 1;
    }
}

.p-select-trigger {
    display: inline-flex;
    width: 100%;
}

.p-select-list.p-listbox {
    border: unset;
}

.p-select-clear-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    color: dt('select.dropdown.color');
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
                'p-inputwrapper-focus': state.focused || state.opened,
                'p-select-fluid': props.fluid ?? context.$fluid,
                'p-disabled': props.disabled,
                'p-select-sm p-inputfield-sm': props.size === 'small',
                'p-select-lg p-inputfield-lg': props.size === 'large'
            }
        ],
        clearIcon: 'p-select-clear-icon',
        positioner: 'p-select-positioner',
        trigger: 'p-select-trigger',
        label: ({ context }) => [
            'p-select-label',
            {
                'p-select-label-empty': context?.empty,
                'p-placeholder': context?.showPlaceholder
            }
        ],
        icon: 'p-select-dropdown',
        panel: 'p-select-panel',
        filter: 'p-select-filter',
        list: 'p-select-list',
        options: 'p-select-options',
        option: 'p-select-option',
        selection: 'p-select-selection',
        empty: 'p-select-empty-message'
    }
});
