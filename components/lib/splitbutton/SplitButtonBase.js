import { ComponentBase } from '../componentbase/ComponentBase';

export const SplitButtonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'SplitButton',
        id: null,
        label: null,
        icon: null,
        loading: false,
        loadingIcon: null,
        model: null,
        disabled: null,
        style: null,
        className: null,
        buttonClassName: null,
        menuStyle: null,
        menuClassName: null,
        menuButtonClassName: null,
        buttonProps: null,
        menuButtonProps: null,
        tabIndex: null,
        severity: null,
        rounded: false,
        raised: false,
        outlined: false,
        text: false,
        size: null,
        appendTo: null,
        tooltip: null,
        tooltipOptions: null,
        buttonTemplate: null,
        transitionOptions: null,
        dropdownIcon: null,
        onClick: null,
        onShow: null,
        onHide: null,
        children: undefined
    }
});
