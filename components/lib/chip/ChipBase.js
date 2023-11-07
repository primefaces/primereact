import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames('p-chip p-component', {
            'p-chip-image': props.image != null
        }),
    removeIcon: 'p-chip-remove-icon',
    icon: 'p-chip-icon',
    label: 'p-chip-text'
};

const styles = `
@layer primereact {
    .p-chip {
        display: inline-flex;
        align-items: center;
    }
    
    .p-chip-text {
        line-height: 1.5;
    }
    
    .p-chip-icon.pi {
        line-height: 1.5;
    }
    
    .p-chip .p-chip-remove-icon {
        line-height: 1.5;
        cursor: pointer;
    }
    
    .p-chip img {
        border-radius: 50%;
    }
}
`;

export const ChipBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Chip',
        label: null,
        icon: null,
        image: null,
        removable: false,
        removeIcon: null,
        className: null,
        style: null,
        template: null,
        imageAlt: 'chip',
        onImageError: null,
        onRemove: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
