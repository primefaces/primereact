import { ObjectUtils } from '../utils/Utils';

export const PasswordBase = {
    defaultProps: {
        __TYPE: 'Password',
        id: null,
        inputId: null,
        inputRef: null,
        promptLabel: null,
        weakLabel: null,
        mediumLabel: null,
        strongLabel: null,
        mediumRegex: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
        strongRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
        feedback: true,
        toggleMask: false,
        appendTo: null,
        header: null,
        content: null,
        footer: null,
        icon: null,
        tooltip: null,
        tooltipOptions: null,
        style: null,
        className: null,
        inputStyle: null,
        inputClassName: null,
        panelStyle: null,
        panelClassName: null,
        transitionOptions: null,
        onInput: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, PasswordBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, PasswordBase.defaultProps)
};
