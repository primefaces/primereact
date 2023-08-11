import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    item: 'p-mention-item',
    items: 'p-mention-items',
    panel: ({ props }) => classNames('p-mention-panel p-component', props.panelClassName),
    input: ({ props }) => classNames('p-mention-input', props.inputClassName),
    root: ({ props, isFilled, focusedState }) =>
        classNames(
            'p-mention p-component p-inputwrapper',
            {
                'p-inputwrapper-filled': isFilled,
                'p-inputwrapper-focus': focusedState
            },
            props.className
        )
};

const styles = `
.p-mention {
    display: inline-flex;
    position: relative;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-mention .p-mention-panel {
    min-width: 100%;
}

.p-mention-panel {
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
}

.p-mention-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-mention-item {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-fluid .p-mention {
    display: flex;
}
`;

const inlineStyles = {
    panel: ({ props }) => ({
        maxHeight: props.scrollHeight,
        ...props.panelStyle
    })
};

export const MentionBase = ComponentBase.extend({
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
    css: {
        classes,
        styles,
        inlineStyles
    }
});
