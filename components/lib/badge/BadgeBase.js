import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

export const BadgeBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Badge',
        value: null,
        severity: null,
        size: null,
        style: null,
        className: null,
        children: undefined
    },
    css: {
        classes: {
            root: ({ props }) =>
                classNames(
                    'p-badge p-component',
                    {
                        'p-badge-no-gutter': ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
                        'p-badge-dot': ObjectUtils.isEmpty(props.value),
                        'p-badge-lg': props.size === 'large',
                        'p-badge-xl': props.size === 'xlarge',
                        [`p-badge-${props.severity}`]: props.severity !== null
                    },
                    props.className
                )
        },
        styles: `
        .p-badge {
            display: inline-block;
            border-radius: 10px;
            text-align: center;
            padding: 0 .5rem;
        }
        
        .p-overlay-badge {
            position: relative;
        }
        
        .p-overlay-badge .p-badge {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%,-50%);
            transform-origin: 100% 0;
            margin: 0;
        }
        
        .p-badge-dot {
            width: .5rem;
            min-width: .5rem;
            height: .5rem;
            border-radius: 50%;
            padding: 0;
        }
        
        .p-badge-no-gutter {
            padding: 0;
            border-radius: 50%;
        }
        `
    }
});
