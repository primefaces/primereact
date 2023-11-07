import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

export const FieldsetBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Fieldset',
        id: null,
        legend: null,
        className: null,
        style: null,
        toggleable: null,
        collapsed: null,
        collapseIcon: null,
        transitionOptions: null,
        expandIcon: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onClick: null,
        children: undefined
    },
    css: {
        classes: {
            root: ({ props }) =>
                classNames('p-fieldset p-component', {
                    'p-fieldset-toggleable': props.toggleable
                }),
            toggleableContent: 'p-toggleable-content',
            togglericon: 'p-fieldset-toggler',
            legendTitle: 'p-fieldset-legend-text',
            legend: 'p-fieldset-legend p-unselectable-text',
            content: 'p-fieldset-content',
            transition: 'p-toggleable-content'
        },
        styles: `
        @layer primereact {
            .p-fieldset-legend > a,
            .p-fieldset-legend > span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .p-fieldset-toggleable .p-fieldset-legend a {
                cursor: pointer;
                user-select: none;
                overflow: hidden;
                position: relative;
                text-decoration: none;
            }
            
            .p-fieldset-legend-text {
                line-height: 1;
            }
        }
        `
    }
});
