import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, focusedState, stacked, horizontal, vertical }) =>
        classNames('p-inputnumber p-component p-inputwrapper', {
            'p-inputwrapper-filled': props.value != null && props.value.toString().length > 0,
            'p-inputwrapper-focus': focusedState,
            'p-inputnumber-buttons-stacked': stacked,
            'p-inputnumber-buttons-horizontal': horizontal,
            'p-inputnumber-buttons-vertical': vertical
        }),
    buttonGroup: 'p-inputnumber-button-group',
    incrementButton: ({ props }) =>
        classNames('p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component', {
            'p-disabled': props.disabled
        }),
    incrementIcon: 'p-button-icon',
    decrementButton: ({ props }) =>
        classNames('p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component', {
            'p-disabled': props.disabled
        }),
    decrementIcon: 'p-button-icon'
};

const styles = `
@layer primereact {
    .p-inputnumber {
        display: inline-flex;
    }
    
    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
    }
    
    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
        display: none;
    }
    
    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 0;
    }
    
    .p-inputnumber-buttons-stacked .p-inputnumber-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
    }
    
    .p-inputnumber-buttons-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
    }
    
    .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
        flex: 1 1 auto;
    }
    
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
        order: 3;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    .p-inputnumber-buttons-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }
    
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
        order: 1;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .p-inputnumber-buttons-vertical {
        flex-direction: column;
    }
    
    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
        order: 1;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
    }
    
    .p-inputnumber-buttons-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }
    
    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
        order: 3;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        width: 100%;
    }
    
    .p-inputnumber-input {
        flex: 1 1 auto;
    }
    
    .p-fluid .p-inputnumber {
        width: 100%;
    }
    
    .p-fluid .p-inputnumber .p-inputnumber-input {
        width: 1%;
    }
    
    .p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
        width: 100%;
    }
}
`;

export const InputNumberBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputNumber',
        __parentMetadata: null,
        allowEmpty: true,
        ariaLabelledBy: null,
        autoFocus: false,
        buttonLayout: 'stacked',
        className: null,
        currency: undefined,
        currencyDisplay: undefined,
        decrementButtonClassName: null,
        decrementButtonIcon: null,
        disabled: false,
        format: true,
        id: null,
        incrementButtonClassName: null,
        incrementButtonIcon: null,
        inputClassName: null,
        inputId: null,
        inputMode: null,
        inputRef: null,
        inputStyle: null,
        locale: undefined,
        localeMatcher: undefined,
        max: null,
        maxFractionDigits: undefined,
        maxLength: null,
        min: null,
        minFractionDigits: undefined,
        mode: 'decimal',
        name: null,
        onBlur: null,
        onChange: null,
        onFocus: null,
        onKeyDown: null,
        onKeyUp: null,
        onValueChange: null,
        pattern: null,
        placeholder: null,
        prefix: null,
        readOnly: false,
        required: false,
        roundingMode: undefined,
        showButtons: false,
        size: null,
        step: 1,
        style: null,
        suffix: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        type: 'text',
        useGrouping: true,
        value: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
