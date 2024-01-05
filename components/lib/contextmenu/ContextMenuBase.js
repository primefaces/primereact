import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-contextmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-contextmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
    }

    .p-contextmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-contextmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-contextmenu .p-menuitem {
        position: relative;
    }

    .p-contextmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-contextmenu-enter {
        opacity: 0;
    }

    .p-contextmenu-enter-active {
        opacity: 1;
        transition: opacity 250ms;
    }
}
`;

const classes = {
    root: ({ context }) =>
        classNames('p-contextmenu p-component', {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    menu: ({ menuProps: props }) =>
        classNames({
            ' p-contextmenu-root-list': props.root,
            'p-submenu-list': !props.root
        }),
    menuitem: ({ item, active, focused, disabled }) => classNames('p-menuitem', { 'p-menuitem-active p-highlight': active, 'p-focus': focused, 'p-disabled': disabled }, item.className),
    action: ({ item }) => classNames('p-menuitem-link', { 'p-disabled': item.disabled }),
    content: 'p-menuitem-content',
    icon: 'p-menuitem-icon',
    submenuIcon: 'p-submenu-icon',
    label: 'p-menuitem-text',
    separator: 'p-menuitem-separator',
    transition: 'p-contextmenu',
    submenuTransition: 'p-contextmenusub'
};

export const ContextMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ContextMenu',
        id: null,
        ariaLabel: null,
        ariaLabelledby: null,
        model: null,
        style: null,
        className: null,
        global: false,
        autoZIndex: true,
        baseZIndex: 0,
        tabIndex: 0,
        breakpoint: undefined,
        scrollHeight: '400px',
        appendTo: null,
        transitionOptions: null,
        onFocus: null,
        onBlur: null,
        onShow: null,
        onHide: null,
        submenuIcon: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
