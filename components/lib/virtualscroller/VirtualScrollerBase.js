import { ObjectUtils } from '../utils/Utils';

export const VirtualScrollerBase = {
    defaultProps: {
        __TYPE: 'VirtualScroller',
        id: null,
        style: null,
        className: null,
        items: null,
        itemSize: 0,
        scrollHeight: null,
        scrollWidth: null,
        orientation: 'vertical',
        numToleratedItems: null,
        delay: 0,
        resizeDelay: 10,
        lazy: false,
        disabled: false,
        loaderDisabled: false,
        columns: null,
        loading: undefined,
        autoSize: false,
        showSpacer: true,
        showLoader: false,
        loadingTemplate: null,
        loaderIconTemplate: null,
        itemTemplate: null,
        contentTemplate: null,
        onScroll: null,
        onScrollIndexChange: null,
        onLazyLoad: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, VirtualScrollerBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, VirtualScrollerBase.defaultProps)
};
