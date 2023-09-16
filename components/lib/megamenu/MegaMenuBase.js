import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, mobileActiveState }) =>
        classNames('p-megamenu p-component', {
            'p-megamenu-horizontal': props.orientation === 'horizontal',
            'p-megamenu-vertical': props.orientation === 'vertical',
            'p-megamenu-mobile-active': mobileActiveState
        }),
    separator: 'p-menu-separator',
    submenuIcon: 'p-submenu-icon',
    action: ({ item }) => classNames('p-menuitem-link', { 'p-disabled': item.disabled }),
    submenuItem: ({ item }) => classNames('p-menuitem', item.className),
    submenuHeader: ({ submenu }) =>
        classNames(
            'p-megamenu-submenu-header',
            {
                'p-disabled': submenu.disabled
            },
            submenu.className
        ),
    submenu: 'p-megamenu-submenu',
    panel: 'p-megamenu-panel',
    grid: 'p-megamenu-grid',
    icon: 'p-menuitem-icon',
    label: 'p-menuitem-text',
    column: ({ category }) => {
        const length = category.items ? category.items.length : 0;
        let columnClass;

        switch (length) {
            case 2:
                columnClass = 'p-megamenu-col-6';
                break;

            case 3:
                columnClass = 'p-megamenu-col-4';
                break;

            case 4:
                columnClass = 'p-megamenu-col-3';
                break;

            case 6:
                columnClass = 'p-megamenu-col-2';
                break;

            default:
                columnClass = 'p-megamenu-col-12';
                break;
        }

        return columnClass;
    },
    headerAction: ({ category }) => classNames('p-menuitem-link', { 'p-disabled': category.disabled }),
    menuButton: 'p-megamenu-button',
    menuitem: ({ category, activeItemState }) => classNames('p-menuitem', { 'p-menuitem-active': category === activeItemState }, category.className),
    menubar: 'p-megamenu-root-list',
    menu: 'p-megamenu-root-list',
    start: 'p-megamenu-start',
    end: 'p-megamenu-end'
};

const styles = `
.p-megamenu {
    display: flex;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-megamenu-root-list > .p-menuitem {
    position: relative;
}

.p-megamenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-megamenu .p-menuitem-text {
    line-height: 1;
}

.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
}

.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Horizontal */
.p-megamenu-horizontal {
    align-items: center;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-megamenu-horizontal .p-megamenu-custom,
.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

/* Vertical */
.p-megamenu-vertical {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}
`;

export const MegaMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'MegaMenu',
        id: null,
        model: null,
        style: null,
        className: null,
        orientation: 'horizontal',
        breakpoint: undefined,
        scrollHeight: '400px',
        start: null,
        submenuIcon: null,
        menuIcon: null,
        end: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
