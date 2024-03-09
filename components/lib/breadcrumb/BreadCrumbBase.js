import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: 'p-menuitem-icon',
    action: 'p-menuitem-link',
    label: 'p-menuitem-text',
    home: ({ _className, disabled }) => classNames('p-breadcrumb-home p-menuitem', { 'p-disabled': disabled }, _className),
    separatorIcon: 'p-breadcrumb-chevron',
    separator: 'p-menuitem-separator',
    menuitem: ({ item }) => classNames('p-menuitem', item.className, { 'p-disabled': item.disabled }),
    menu: 'p-breadcrumb-list',
    root: ({ props }) => classNames('p-breadcrumb p-component', props.className)
};

const styles = `
@layer primereact {
    .p-breadcrumb {
        overflow-x: auto;
    }

    .p-breadcrumb ol {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

    .p-breadcrumb .p-menuitem-text {
        line-height: 1;
    }

    .p-breadcrumb .p-menuitem-link {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .p-breadcrumb .p-menuitem-separator {
        display: flex;
        align-items: center;
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }
}
`;

export const BreadCrumbBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'BreadCrumb',
        id: null,
        model: null,
        home: null,
        separatorIcon: null,
        style: null,
        className: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
