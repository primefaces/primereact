import { ObjectUtils } from '../utils/Utils';

export const SplitButtonBase = {
    defaultProps: {
        __TYPE: 'SplitButton',
        id: null,
        label: null,
        icon: null,
        loading: false,
        loadingIcon: 'pi pi-spinner pi-spin',
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
        appendTo: null,
        tooltip: null,
        tooltipOptions: null,
        buttonTemplate: null,
        transitionOptions: null,
        dropdownIcon: 'pi pi-chevron-down',
        onClick: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, SplitButtonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, SplitButtonBase.defaultProps)
};
