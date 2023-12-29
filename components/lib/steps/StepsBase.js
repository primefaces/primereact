import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: ({ item }) => classNames('p-menuitem-icon', item.icon),
    label: 'p-steps-title',
    step: 'p-steps-number',
    action: 'p-menuitem-link',
    menuitem: ({ active, disabled, item }) =>
        classNames('p-steps-item', item.className, {
            'p-highlight p-steps-current': active,
            'p-disabled': disabled
        }),
    root: ({ props }) =>
        classNames(
            'p-steps p-component',
            {
                'p-readonly': props.readOnly
            },
            props.className
        )
};

const styles = `
@layer primereact {
    .p-steps {
        position: relative;
    }

    .p-steps ol {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
    }

    .p-steps-item .p-menuitem-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
    }

    .p-steps.p-readonly .p-steps-item {
        cursor: auto;
    }

    .p-steps-item.p-steps-current .p-menuitem-link {
        cursor: default;
    }

    .p-steps-title {
        white-space: nowrap;
    }

    .p-steps-number {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-steps-title {
        display: block;
    }
}
`;

export const StepsBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Steps',
        id: null,
        model: null,
        activeIndex: 0,
        readOnly: true,
        style: null,
        className: null,
        onSelect: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
