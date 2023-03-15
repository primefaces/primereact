import { ObjectUtils } from '../utils/Utils';

export const MessagesBase = {
    defaultProps: {
        __TYPE: 'Messages',
        id: null,
        className: null,
        style: null,
        transitionOptions: null,
        onRemove: null,
        onClick: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MessagesBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MessagesBase.defaultProps)
};
