import { ComponentBase } from '../componentbase/ComponentBase';

const styles = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /*contain: content;*/
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: 2rem;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;

export const VirtualScrollerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'VirtualScroller',
        __parentMetadata: null,
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
    },
    css: {
        styles
    }
});
