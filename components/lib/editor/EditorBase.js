import { ObjectUtils } from '../utils/Utils';

export const EditorBase = {
    defaultProps: {
        __TYPE: 'Editor',
        id: null,
        value: null,
        style: null,
        className: null,
        placeholder: null,
        readOnly: false,
        modules: null,
        formats: null,
        theme: 'snow',
        showHeader: true,
        headerTemplate: null,
        onTextChange: null,
        onSelectionChange: null,
        onLoad: null,
        maxLength: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, EditorBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, EditorBase.defaultProps)
};
