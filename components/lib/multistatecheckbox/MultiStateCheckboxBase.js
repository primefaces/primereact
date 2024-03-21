import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: ({ icon }) =>
        classNames('p-checkbox-icon p-c', {
            [`${icon}`]: true
        }),
    root: ({ props, selectedOption, focusedState }) =>
        classNames('p-multistatecheckbox p-checkbox p-component', props.className, {
            'p-disabled': props.disabled,
            'p-highlight': !!selectedOption,
            'p-focus': focusedState,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant === 'filled'
        }),
    checkbox: ({ props, selectedOption }) =>
        classNames(
            'p-checkbox-box',
            {
                'p-disabled': props.disabled
            },
            selectedOption && selectedOption.className
        )
};

const inlineStyles = {
    checkbox: ({ selectedOption }) => selectedOption && selectedOption.style
};

export const MultiStateCheckboxBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'MultiStateCheckbox',
        autoFocus: false,
        className: null,
        dataKey: null,
        disabled: false,
        empty: true,
        iconTemplate: null,
        id: null,
        onChange: null,
        optionIcon: null,
        optionLabel: null,
        optionValue: null,
        options: null,
        readOnly: false,
        style: null,
        tabIndex: '0',
        tooltip: null,
        tooltipOptions: null,
        value: null,
        children: undefined
    },
    css: {
        classes,
        inlineStyles
    }
});
