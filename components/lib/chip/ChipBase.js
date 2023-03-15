import { ObjectUtils } from '../utils/Utils';

export const ChipBase = {
    defaultProps: {
        __TYPE: 'Chip',
        label: null,
        icon: null,
        image: null,
        removable: false,
        removeIcon: 'pi pi-times-circle',
        className: null,
        style: null,
        template: null,
        imageAlt: 'chip',
        onImageError: null,
        onRemove: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ChipBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ChipBase.defaultProps)
};
