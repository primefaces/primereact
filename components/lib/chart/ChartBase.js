import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

export const ChartBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Chart',
        id: null,
        type: null,
        data: null,
        options: null,
        plugins: null,
        width: null,
        height: null,
        style: null,
        className: null,
        children: undefined
    },
    css: {
        classes: {
            root: ({ props }) => classNames('p-chart', props.className)
        },
        inlineStyles: {
            root: ({ props }) =>
                Object.assign(
                    {
                        width: props.width,
                        height: props.height
                    },
                    props.style
                )
        },
        styles: `
        @layer primereact {
            .p-chart {
                position: relative
            }
        }
        `
    }
});
