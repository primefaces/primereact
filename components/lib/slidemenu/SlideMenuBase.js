import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    previousIcon: 'p-slidemenu-backward-icon',
    previous: ({ levelState }) =>
        classNames('p-slidemenu-backward', {
            'p-hidden-space': levelState === 0,
            'p-slidemenu-separator': levelState > 0
        }),
    root: ({ props }) =>
        classNames(
            'p-slidemenu p-component',
            {
                'p-slidemenu-overlay': props.popup
            },
            props.className
        ),
    wrapper: 'p-slidemenu-wrapper',
    content: 'p-slidemenu-content',
    separator: 'p-slidemenu-separator',
    icon: 'p-menuitem-icon',
    submenuIcon: 'p-submenu-icon',
    label: 'p-menuitem-text',
    action: 'p-menuitem-link',
    menu: ({ subProps: props }) =>
        classNames({
            'p-slidemenu-rootlist': props.root,
            'p-submenu-list': !props.root,
            'p-active-submenu': props.parentActive
        }),
    menuitem: ({ item, active }) => classNames('p-menuitem', { 'p-menuitem-active': active, 'p-disabled': item.disabled }, item.className),
    transition: 'p-connected-overlay'
};

const styles = `
@layer primereact {
    .p-slidemenu {
        width: 12.5em;
    }
    
    .p-slidemenu.p-slidemenu-overlay {
        position: absolute;
    }
    
    .p-slidemenu .p-menu-separator {
        border-width: 1px 0 0 0;
    }
    
    .p-slidemenu ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .p-slidemenu .p-slidemenu-rootlist {
        position: absolute;
        top: 0;
    }
    
    .p-slidemenu .p-submenu-list {
        display: none;
        position: absolute;
        top: 0;
        width: 12.5em;
    }
    
    .p-slidemenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
    }
    
    .p-slidemenu .p-menuitem-icon {
        vertical-align: middle;
    }
    
    .p-slidemenu .p-menuitem-text {
        vertical-align: middle;
    }
    
    .p-slidemenu .p-menuitem {
        position: relative;
    }
    
    .p-slidemenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }
    
    .p-slidemenu .p-slidemenu-wrapper {
        position: relative;
    }
    
    .p-slidemenu .p-slidemenu-content {
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        height: 100%;
    }
    
    .p-slidemenu-backward {
        bottom: 0;
        width: 100%;
        padding: 0.25em;
        cursor: pointer;
    }
    
    .p-slidemenu-backward .p-slidemenu-backward-icon {
        vertical-align: middle;
    }
    
    .p-slidemenu-backward span {
        vertical-align: middle;
    }
    
    .p-slidemenu .p-menuitem-active {
        position: static;
    }
    
    .p-slidemenu .p-menuitem-active > .p-submenu-list {
        display: block;
    }
}
`;

const inlineStyles = {
    menu: ({ subProps: props }) => ({
        width: props.menuWidth + 'px',
        left: props.root ? -1 * props.level * props.menuWidth + 'px' : props.menuWidth + 'px',
        transitionProperty: props.root ? 'left' : 'none',
        transitionDuration: props.effectDuration + 'ms',
        transitionTimingFunction: props.easing
    })
};

export const SlideMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'SlideMenu',
        appendTo: null,
        autoZIndex: true,
        backIcon: null,
        backLabel: 'Back',
        baseZIndex: 0,
        className: null,
        easing: 'ease-out',
        effectDuration: 250,
        id: null,
        menuWidth: 190,
        model: null,
        onHide: null,
        onShow: null,
        onNavigate: null,
        popup: false,
        style: null,
        submenuIcon: null,
        transitionOptions: null,
        viewportHeight: 175,
        children: undefined,
        closeOnEscape: true
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
