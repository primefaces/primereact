import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-chips {
        display: inline-flex;
    }
    
    .p-chips-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .p-chips-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }
    
    .p-chips-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }
    
    .p-chips-token-icon {
        cursor: pointer;
    }
    
    .p-chips-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }
    
    .p-fluid .p-chips {
        display: flex;
    }
    
    .p-chips-icon-left,
    .p-chips-icon-right {
        position: relative;
        display: inline-block;
    }
    
    .p-chips-icon-left > i,
    .p-chips-icon-right > i,
    .p-chips-icon-left > svg,
    .p-chips-icon-right > svg,
    .p-chips-icon-left > .p-chips-prefix,
    .p-chips-icon-right > .p-chips-suffix {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }
    
    .p-fluid .p-chips-icon-left,
    .p-fluid .p-chips-icon-right {
        display: block;
        width: 100%;
    }
}
`;

const classes = {
    removeTokenIcon: 'p-chips-token-icon',
    label: 'p-chips-token-label',
    token: ({ focusedIndex, index }) =>
        classNames('p-chips-token', {
            'p-focus': focusedIndex === index
        }),
    inputToken: 'p-chips-input-token',
    container: ({ isFilled }) => classNames('p-inputtext p-chips-multiple-container', { 'p-variant-filled': isFilled }),
    root: ({ isFilled, focusedState, disabled }) =>
        classNames('p-chips p-component p-inputwrapper', {
            'p-inputwrapper-filled': isFilled,
            'p-inputwrapper-focus': focusedState,
            'p-disabled': disabled,
            'p-focus': focusedState
        })
};

export const ChipsBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Chips',
        addOnBlur: null,
        allowDuplicate: true,
        ariaLabelledBy: null,
        autoFocus: false,
        className: null,
        disabled: null,
        id: null,
        inputId: null,
        inputRef: null,
        itemTemplate: null,
        keyfilter: null,
        max: null,
        name: null,
        onAdd: null,
        onBlur: null,
        onChange: null,
        onFocus: null,
        onKeyDown: null,
        onRemove: null,
        placeholder: null,
        readOnly: false,
        removable: true,
        removeIcon: null,
        separator: null,
        style: null,
        tooltip: null,
        tooltipOptions: null,
        value: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
