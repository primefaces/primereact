import { ComponentBase } from '../componentbase/ComponentBase';

export const VirtualScrollerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'VirtualScroller',
        id: null,
        style: null,
        className: null,
        tabIndex: 0,
        items: null,
        itemSize: 0,
        scrollHeight: null,
        scrollWidth: null,
        orientation: 'vertical',
        step: 0,
        numToleratedItems: null,
        delay: 0,
        resizeDelay: 10,
        appendOnly: false,
        inline: false,
        lazy: false,
        disabled: false,
        loaderDisabled: false,
        loadingIcon: null,
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
    }
});
