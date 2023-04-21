import { ObjectUtils } from '../utils/Utils';

export const StepsBase = {
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
    getProps: (props) => ObjectUtils.getMergedProps(props, StepsBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, StepsBase.defaultProps)
};
