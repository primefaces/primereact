import { createStyles } from '@primereact/styles/utils';
import type { InputTagsInstance } from '@primereact/types/shared/inputtags';
import { isNotEmpty } from '@primeuix/utils';

const style = /*css*/ `
    .p-inputtags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: relative;
        padding: calc(dt('inputtext.padding.y') /2) dt('inputtext.padding.y');
        gap: calc(dt('inputtext.padding.y') /2);
        color: dt('inputtext.color');
        background: dt('inputtext.background');
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
    }

    .p-inputtags .p-inputtags-item {
        padding-inline: dt('inputtext.padding.y');
        padding-block: calc(dt('inputtext.padding.y') /2);
        border-radius: dt('border.radius.sm');
    }

    .p-inputtags .p-inputtags-item .p-chip-label {
        line-height: 1;
    }

    .p-inputtags .p-inputtags-item.p-focused {
        background-color: light-dark(var(--p-surface-200), var(--p-surface-700));
    }

    .p-inputtags .p-inputtags-item.p-focused .p-chip-remove-icon {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }

    .p-inputtags .p-inputtags-input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin-left: calc(dt('inputtext.padding.y') /2);
        padding: calc(dt('inputtext.padding.y') /2);
        box-shadow: none;
        border-radius: 0;
    }

    .p-inputtags.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtags.p-disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtags.p-variant-filled {
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
        item: ({ context }) => [
            'p-inputtags-item',
            {
                'p-focused': context.focused
            }
        ],
        input: 'p-inputtags-input'
    }
});
