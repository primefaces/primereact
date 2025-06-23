import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, context }) =>
        classNames('p-tristatecheckbox p-checkbox p-component', {
            'p-highlight': props.value !== '' && props.value !== null,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : context && context.inputStyle === 'filled'
        }),
    checkIcon: 'p-checkbox-icon p-c',
    box: 'p-checkbox-box',
    input: 'p-checkbox-input'
};

export const TriStateCheckboxBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TriStateCheckbox',
        autoFocus: false,
        checkIcon: null,
        className: null,
        disabled: false,
        id: null,
        invalid: false,
        variant: null,
        onChange: null,
        readOnly: false,
        style: null,
        tabIndex: '0',
        tooltip: null,
        tooltipOptions: null,
        uncheckIcon: null,
        value: null,
        children: undefined
    },
    css: {
        classes
    }
});
