import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: ({ _icon }) => classNames('p-menuitem-icon', _icon),
    label: 'p-menuitem-text',
    action: 'p-menuitem-link',
    menuitem: ({ _className, active, disabled }) =>
        classNames(
            'p-tabmenuitem',
            {
                'p-highlight': active,
                'p-disabled': disabled
            },
            _className
        ),
    inkbar: 'p-tabmenu-ink-bar',
    menu: 'p-tabmenu-nav p-reset',
    root: ({ props }) => classNames('p-tabmenu p-component', props.className)
};

const styles = `
@layer primereact {
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex-wrap: nowrap;
    }

    .p-tabmenu-nav a {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabmenu-nav a:focus {
        z-index: 1;
    }

    .p-tabmenu-nav .p-menuitem-text {
        line-height: 1;
    }

    .p-tabmenu-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
}
`;

export const TabMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TabMenu',
        id: null,
        model: null,
        activeIndex: 0,
        ariaLabel: null,
        ariaLabelledBy: null,
        style: null,
        className: null,
        onTabChange: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
