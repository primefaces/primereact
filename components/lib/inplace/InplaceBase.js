import { ComponentBase } from '../componentbase/ComponentBase';

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
    }
});
