import { ObjectUtils } from '../utils/Utils';

export const DataScrollerBase = {
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
    getProps: (props) => ObjectUtils.getMergedProps(props, DataScrollerBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, DataScrollerBase.defaultProps)
};
