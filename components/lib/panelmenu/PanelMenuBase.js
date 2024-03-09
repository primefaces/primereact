import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    headerIcon: ({ item }) => classNames('p-menuitem-icon', item.icon),
    headerSubmenuIcon: 'p-submenu-icon',
    headerLabel: 'p-menuitem-text',
    headerAction: 'p-panelmenu-header-link',
    panel: ({ item }) => classNames('p-panelmenu-panel', item.className),
    header: ({ active, item }) => classNames('p-component p-panelmenu-header', { 'p-highlight': active && !!item.items, 'p-disabled': item.disabled }),
    headerContent: 'p-panelmenu-header-content',
    menuContent: 'p-panelmenu-content',
    root: ({ props }) => classNames('p-panelmenu p-component', props.className),
    separator: 'p-menuitem-separator',
    toggleableContent: ({ active }) =>
        classNames('p-toggleable-content', {
            'p-toggleable-content-collapsed': !active
        }),
    icon: ({ item }) => classNames('p-menuitem-icon', item.icon),
    label: 'p-menuitem-text',
    submenuicon: 'p-submenu-icon',
    content: 'p-menuitem-content',
    action: ({ item }) => classNames('p-menuitem-link', { 'p-disabled': item.disabled }),
    menuitem: ({ item, focused, disabled }) =>
        classNames('p-menuitem', item.className, {
            'p-focus': focused,
            'p-disabled': disabled
        }),
    menu: 'p-panelmenu-root-list',
    submenu: 'p-submenu-list',
    transition: 'p-toggleable-content'
};

const styles = `
@layer primereact {
    .p-panelmenu .p-panelmenu-header-link {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
    }

    .p-panelmenu .p-panelmenu-header-link:focus {
        z-index: 1;
    }

    .p-panelmenu .p-submenu-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-panelmenu .p-menuitem-link {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        text-decoration: none;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu .p-menuitem-text {
        line-height: 1;
    }
}
`;

export const PanelMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'PanelMenu',
        id: null,
        model: null,
        style: null,
        submenuIcon: null,
        expandedKeys: null,
        className: null,
        onExpandedKeysChange: null,
        onOpen: null,
        onClose: null,
        multiple: false,
        transitionOptions: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
