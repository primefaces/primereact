import { ObjectUtils } from '../utils/Utils';

export const FieldsetBase = {
    defaultProps: {
        __TYPE: 'Fieldset',
        id: null,
        legend: null,
        className: null,
        style: null,
        toggleable: null,
        collapsed: null,
        transitionOptions: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onClick: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, FieldsetBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, FieldsetBase.defaultProps)
};
