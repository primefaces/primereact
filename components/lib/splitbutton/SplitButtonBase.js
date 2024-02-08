import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: 'p-button-icon p-c',
    root: ({ props, size }) =>
        classNames('p-splitbutton p-component', {
            'p-disabled': props.disabled,
            'p-button-loading-label-only': props.loading && !props.icon && props.label,
            [`p-button-${props.severity}`]: props.severity,
            'p-button-raised': props.raised,
            'p-button-rounded': props.rounded,
            'p-button-text': props.text,
            'p-button-outlined': props.outlined,
            [`p-button-${size}`]: size
        }),
    button: 'p-splitbutton-defaultbutton',
    menuButton: 'p-splitbutton-menubutton',
    menu: ({ subProps: props }) => classNames('p-menu p-menu-overlay p-component', props.menuClassName),
    menuList: 'p-menu-list p-reset',
    separator: 'p-menu-separator',
    menuIcon: 'p-menuitem-icon',
    menuLabel: 'p-menuitem-text',
    anchor: ({ _className, disabled }) => classNames('p-menuitem-link', _className, { 'p-disabled': disabled }),
    menuItem: 'p-menuitem',
    transition: 'p-connected-overlay'
};

const styles = `
@layer primereact {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton  {
        display: flex;
    }
}
`;

export const SplitButtonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'SplitButton',
        id: null,
        label: null,
        icon: null,
        autoZIndex: true,
        baseZIndex: 0,
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
    },
    css: {
        classes,
        styles
    }
});
