import { ComponentBase } from '../componentbase/ComponentBase';

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
    }
});
