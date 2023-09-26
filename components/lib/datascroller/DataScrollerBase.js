import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    header: 'p-datascroller-header',
    footer: 'p-datascroller-footer',
    content: 'p-datascroller-content',
    list: 'p-datascroller-list',
    root: ({ props }) =>
        classNames('p-datascroller p-component', {
            'p-datascroller-inline': props.inline
        })
};

const styles = `
@layer primereact {
    .p-datascroller .p-datascroller-header {
        text-align: center;
        padding: .5em .75em;
        border-bottom: 0 none;
    }
    
    .p-datascroller .p-datascroller-footer {
        text-align: center;
        padding: .25em .625em;
        border-top: 0px none;
    }
    
    .p-datascroller .p-datascroller-content {
        padding: .25em .625em;
    }
    
    .p-datascroller-inline .p-datascroller-content {
        overflow: auto;
    }
    
    .p-datascroller .p-datascroller-list {
        list-style-type: none; 
        margin: 0;
        padding: 0;
    }
}
`;

const inlineStyles = {
    content: ({ props }) => ({
        maxHeight: props.scrollHeight
    })
};

export const DataScrollerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'DataScroller',
        id: null,
        value: null,
        rows: 0,
        inline: false,
        scrollHeight: null,
        loader: false,
        buffer: 0.9,
        style: null,
        className: null,
        onLazyLoad: null,
        emptyMessage: null,
        itemTemplate: null,
        header: null,
        footer: null,
        lazy: false,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
