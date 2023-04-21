import { ObjectUtils } from '../utils/Utils';

export const MessageBase = {
    defaultProps: {
        __TYPE: 'Message',
        id: null,
        className: null,
        style: null,
        text: null,
        icon: null,
        severity: 'info',
        content: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MessageBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MessageBase.defaultProps)
};
