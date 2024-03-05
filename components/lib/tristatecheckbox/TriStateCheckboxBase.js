import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames('p-tristatecheckbox p-checkbox p-component', {
            'p-highlight': props.value !== null,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant === 'filled'
        }),
    checkIcon: 'p-checkbox-icon p-c',
    box: 'p-checkbox-box',
    input: 'p-checkbox-input'
};

const styles = `
@layer primereact {
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
    }

    .p-checkbox-input {
        cursor: pointer;
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}`;

export const TriStateCheckboxBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TriStateCheckbox',
        autoFocus: false,
        checkIcon: null,
        className: null,
        disabled: false,
        id: null,
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
        classes,
        styles
    }
});
