import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: ({ icon }) =>
        classNames('p-checkbox-icon p-c', {
            [`${icon}`]: true
        }),
    root: ({ props }) =>
        classNames('p-multistatecheckbox p-checkbox p-component', props.classNames, {
            'p-variant-filled': props.variant === 'filled'
        }),
    checkbox: ({ props }) =>
        classNames(props.className, {
            'p-invalid': props.invalid
        })
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
        children: undefined,
        invalid: false,
        variant: null
    },
    css: {
        classes,
        inlineStyles
    }
});
