import { ObjectUtils } from '../utils/Utils';

export const BlockUIBase = {
    defaultProps: {
        __TYPE: 'BlockUI',
        autoZIndex: true,
        baseZIndex: 0,
        blocked: false,
        className: null,
        containerClassName: null,
        containerStyle: null,
        fullScreen: false,
        id: null,
        onBlocked: null,
        onUnblocked: null,
        style: null,
        template: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, BlockUIBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, BlockUIBase.defaultProps)
};
