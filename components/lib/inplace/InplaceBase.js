import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    display: ({ props }) =>
        classNames('p-inplace-display', {
            'p-disabled': props.disabled
        }),
    root: ({ props }) =>
        classNames('p-inplace p-component', {
            'p-inplace-closable': props.closable
        }),
    closeButton: 'p-inplace-content-close',
    content: 'p-inplace-content'
};

const styles = `
@layer primereact {
    .p-inplace .p-inplace-display {
        display: inline;
        cursor: pointer;
    }
    
    .p-inplace .p-inplace-content {
        display: inline;
    }
    
    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
        display: flex;
    }
    
    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }
    
    .p-inplace-content-close {
        margin-left: .25rem;
    }
}
`;

export const InplaceDisplayBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InplaceDisplay',
        children: undefined
    }
});

export const InplaceContentBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InplaceContent',
        children: undefined
    }
});

export const InplaceBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Inplace',
        style: null,
        className: null,
        active: false,
        closable: false,
        closeIcon: null,
        disabled: false,
        tabIndex: 0,
        ariaLabel: null,
        onOpen: null,
        onClose: null,
        onToggle: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
