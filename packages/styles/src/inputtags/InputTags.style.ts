import { createStyles } from '@primereact/styles/utils';
import type { InputTagsInstance } from '@primereact/types/shared/inputtags';
import { isNotEmpty } from '@primeuix/utils';

const style = /*css*/ `
    .p-inputtags {
        position: relative;
    }

    .p-inputtags-control {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding: 0.25rem 0.5rem;
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.25rem;
    }

    .p-inputtags .p-chip {
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border-radius: dt('border.radius.sm');
    }

    .p-inputtags .p-chip .p-chip-label {
        line-height: 1;
    }

    .p-inputtags .p-chip.p-focused .p-chip-remove-icon {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }

    .p-inputtags .p-chip.p-focused {
        background-color: dt('form.field.filled.focus.background');
    }

    .p-inputtags .p-inputtags-input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin-left: 0.25rem;
        padding: 0.25rem;
        box-shadow: none;
        border-radius: 0;
    }

    .p-inputtags.p-invalid .p-inputtags-control {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtags.p-disabled .p-inputtags-control {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtags.p-variant-filled .p-inputtags-control {
        background: dt('inputtext.filled.background');
    }
`;

export const styles = createStyles<InputTagsInstance>({
    name: 'inputtags',
    style,
    classes: {
        root: ({ props, context, attrs, state }) => [
            'p-inputtags p-component',
            {
                'p-invalid': props.invalid,
                'p-variant-filled': props.variant === 'filled',
                'p-inputtags-fluid': props.fluid ?? context.$fluid,
                'p-inputwrapper-filled': isNotEmpty(attrs?.value ?? attrs?.defaultValue ?? state?.value),
                'p-disabled': props.disabled
            }
        ],
        control: 'p-inputtags-control',
        item: ({ context }) => [
            'p-inputtags-item',
            {
                'p-focused': context.focused
            }
        ],
        input: 'p-inputtags-input'
    }
});
