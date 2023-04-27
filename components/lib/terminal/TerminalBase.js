import { ObjectUtils } from '../utils/Utils';

export const TerminalBase = {
    defaultProps: {
        __TYPE: 'Terminal',
        id: null,
        style: null,
        className: null,
        welcomeMessage: null,
        prompt: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, TerminalBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TerminalBase.defaultProps)
};
