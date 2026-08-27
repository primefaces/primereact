import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: ({ _icon }) => classNames('p-menuitem-icon', _icon),
    label: 'p-menuitem-text',
    indicator: 'p-bottomnavigation-indicator',
    action: 'p-menuitem-link',
    menuitem: ({ _className, active, disabled }) =>
        classNames(
            'p-bottomnavigation-item',
            {
                'p-highlight': active,
                'p-disabled': disabled
            },
            _className
        ),
    menu: 'p-bottomnavigation-list p-reset',
    root: ({ props }) =>
        classNames('p-bottomnavigation p-component', `p-bottomnavigation-active-${props.activeItemDisplay}`, `p-bottomnavigation-indicator-${props.indicator}`, {
            'p-bottomnavigation-labels': props.showLabels
        })
};

const styles = `
@layer primereact {
    .p-bottomnavigation {
        position: relative;
        display: flex;
        overflow: visible;
    }

    .p-bottomnavigation-list {
        width: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: nowrap;
    }

    .p-bottomnavigation-item {
        position: relative;
        flex: 1 1 0;
        display: flex;
        justify-content: center;
        min-width: 0;
    }

    .p-bottomnavigation .p-menuitem-link {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        text-decoration: none;
        overflow: visible;
        min-width: 0;
    }

    .p-bottomnavigation .p-menuitem-link:focus {
        z-index: 1;
    }

    .p-bottomnavigation .p-menuitem-icon,
    .p-bottomnavigation .p-menuitem-text {
        line-height: 1;
    }

    .p-bottomnavigation .p-menuitem-text {
        white-space: nowrap;
    }

    .p-bottomnavigation-indicator {
        display: none;
        pointer-events: none;
    }
}
`;

export const BottomNavigationBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'BottomNavigation',
        id: null,
        model: null,
        activeIndex: 0,
        activeItemDisplay: 'raised',
        indicator: 'none',
        showLabels: true,
        ariaLabel: null,
        ariaLabelledBy: null,
        style: null,
        className: null,
        onChange: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
