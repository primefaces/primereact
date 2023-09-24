import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, context }) =>
        classNames(
            'p-tieredmenu p-component',
            {
                'p-tieredmenu-overlay': props.popup,
                'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
                'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
            },
            props.className
        ),
    separator: 'p-menu-separator',
    icon: ({ _icon }) => classNames('p-menuitem-icon', _icon),
    label: 'p-menuitem-text',
    submenuIcon: 'p-submenu-icon',
    action: ({ disabled }) => classNames('p-menuitem-link', { 'p-disabled': disabled }),
    menuitem: ({ _className, active }) => classNames('p-menuitem', { 'p-menuitem-active': active }, _className),
    menu: ({ subProps: props }) =>
        classNames({
            'p-submenu-list': !props.root
        }),
    submenu: ({ subProps: props }) =>
        classNames({
            'p-submenu-list': !props.root
        }),
    transition: 'p-connected-overlay'
};

const inlineStyles = {
    submenu: ({ subProps: props }) => ({
        display: !props.root && props.parentActive ? 'block' : 'none'
    })
};

const styles = `
.p-tieredmenu-overlay {
    position: absolute;
}

.p-tieredmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-tieredmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    display: none;
}

.p-tieredmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-tieredmenu .p-menuitem-text {
    line-height: 1;
}

.p-tieredmenu .p-menuitem {
    position: relative;
}

.p-tieredmenu .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}

.p-tieredmenu .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}

.p-tieredmenu .p-menuitem-active > .p-submenu-list-flipped {
    left: -100%;
}
`;

export const TieredMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TieredMenu',
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
        breakpoint: undefined,
        scrollHeight: '400px',
        appendTo: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        submenuIcon: null,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
