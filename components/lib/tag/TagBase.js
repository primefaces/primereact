import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    value: 'p-tag-value',
    icon: 'p-tag-icon',
    root: ({ props }) =>
        classNames('p-tag p-component', {
            [`p-tag-${props.severity}`]: props.severity !== null,
            'p-tag-rounded': props.rounded
        })
};

const styles = `
@layer primereact {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }
    
    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`;

export const TagBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Tag',
        value: null,
        severity: null,
        rounded: false,
        icon: null,
        style: null,
        className: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
