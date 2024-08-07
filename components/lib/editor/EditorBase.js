import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => classNames('', props.className),
    toolbar: '',
    content: ''
};

export const EditorBase = ComponentBase.extend({
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
    css: {
        classes
    }
});
