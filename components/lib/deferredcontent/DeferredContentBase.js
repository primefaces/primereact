import { ObjectUtils } from '../utils/Utils';

export const DeferredContentBase = {
    defaultProps: {
        __TYPE: 'DeferredContent',
        onload: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, DeferredContentBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, DeferredContentBase.defaultProps)
};
