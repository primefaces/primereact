import { ComponentBase } from '../componentbase/ComponentBase';

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
    }
});
