import { ObjectUtils } from '../utils/Utils';

export const MentionBase = {
    defaultProps: {
        __TYPE: 'Mention',
        autoHighlight: true,
        className: null,
        delay: 0,
        field: null,
        footerTemplate: null,
        headerTemplate: null,
        id: null,
        inputClassName: null,
        inputId: null,
        inputRef: null,
        inputStyle: null,
        itemTemplate: null,
        panelClassName: null,
        panelStyle: null,
        scrollHeight: '200px',
        style: null,
        suggestions: null,
        transitionOptions: null,
        trigger: '@',
        onBlur: null,
        onChange: null,
        onFocus: null,
        onHide: null,
        onInput: null,
        onSearch: null,
        onSelect: null,
        onShow: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MentionBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MentionBase.defaultProps)
};
