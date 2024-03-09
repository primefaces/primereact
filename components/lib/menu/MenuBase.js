import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-menu-overlay {
        position: absolute;
        /* Github #3122: Prevent animation flickering  */
        top: -9999px;
        left: -9999px;
    }

    .p-menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menu .p-menuitem-text {
        line-height: 1;
    }
}
`;

const classes = {
    root: ({ props, context }) =>
        classNames('p-menu p-component', {
            'p-menu-overlay': props.popup,
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    menu: 'p-menu-list p-reset',
    content: 'p-menuitem-content',
    action: ({ item }) => classNames('p-menuitem-link', { 'p-disabled': item.disabled }),
    menuitem: ({ focused }) => classNames('p-menuitem', { 'p-focus': focused }),
    submenuHeader: ({ submenu }) =>
        classNames('p-submenu-header', {
            'p-disabled': submenu.disabled
        }),
    separator: 'p-menu-separator',
    label: 'p-menuitem-text',
    icon: 'p-menuitem-icon',
    transition: 'p-connected-overlay'
};

const inlineStyles = {
    submenuHeader: ({ submenu }) => submenu.style,
    menuitem: ({ item }) => item.style
};

export const MenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Menu',
        id: null,
        ariaLabel: null,
        ariaLabelledBy: null,
        tabIndex: 0,
        model: null,
        popup: false,
        popupAlignment: 'left',
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
        appendTo: null,
        onFocus: null,
        onBlur: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined,
        closeOnEscape: true
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
