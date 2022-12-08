import * as React from 'react';
import { useMountEffect } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const TreeTableScrollableView = React.memo((props) => {
    const elementRef = React.useRef(null);
    const scrollHeaderRef = React.useRef(null);
    const scrollHeaderBoxRef = React.useRef(null);
    const scrollBodyRef = React.useRef(null);
    const scrollTableRef = React.useRef(null);
    const scrollFooterRef = React.useRef(null);
    const scrollFooterBoxRef = React.useRef(null);

    const setScrollHeight = () => {
        if (props.scrollHeight) {
            if (props.scrollHeight.indexOf('%') !== -1) {
                let datatableContainer = findDataTableContainer(elementRef.current);

                scrollBodyRef.current.style.visibility = 'hidden';
                scrollBodyRef.current.style.height = '100px'; //temporary height to calculate static height
                let containerHeight = DomHandler.getOuterHeight(datatableContainer);
                let relativeHeight = (DomHandler.getOuterHeight(datatableContainer.parentElement) * parseInt(props.scrollHeight, 10)) / 100;
                let staticHeight = containerHeight - 100; //total height of headers, footers, paginators
                let scrollBodyHeight = relativeHeight - staticHeight;

                scrollBodyRef.current.style.height = 'auto';
                scrollBodyRef.current.style.maxHeight = scrollBodyHeight + 'px';
                scrollBodyRef.current.style.visibility = 'visible';
            } else {
                scrollBodyRef.current.style.maxHeight = props.scrollHeight;
            }
        }
    };

    const findDataTableContainer = (element) => {
        if (element) {
            let el = element;

            while (el && !DomHandler.hasClass(el, 'p-treetable')) {
                el = el.parentElement;
            }

            return el;
        } else {
            return null;
        }
    };

    const onHeaderScroll = () => {
        scrollHeaderRef.current.scrollLeft = 0;
    };

    const onBodyScroll = () => {
        let frozenView = elementRef.current.previousElementSibling;
        let frozenScrollBody;

        if (frozenView) {
            frozenScrollBody = DomHandler.findSingle(frozenView, '.p-treetable-scrollable-body');
        }

        scrollHeaderBoxRef.current.style.marginLeft = -1 * scrollBodyRef.current.scrollLeft + 'px';

        if (scrollFooterBoxRef.current) {
            scrollFooterBoxRef.current.style.marginLeft = -1 * scrollBodyRef.current.scrollLeft + 'px';
        }

        if (frozenScrollBody) {
            frozenScrollBody.scrollTop = scrollBodyRef.current.scrollTop;
        }
    };

    useMountEffect(() => {
        if (!props.frozen) {
            const scrollBarWidth = DomHandler.calculateScrollbarWidth();

            scrollHeaderBoxRef.current.style.marginRight = scrollBarWidth + 'px';

            if (scrollFooterBoxRef.current) {
                scrollFooterBoxRef.current.style.marginRight = scrollBarWidth + 'px';
            }
        } else {
            scrollBodyRef.current.style.paddingBottom = DomHandler.calculateScrollbarWidth() + 'px';
        }
    });

    React.useEffect(() => {
        setScrollHeight();
    });

    const createColGroup = () => {
        if (ObjectUtils.isNotEmpty(props.columns)) {
            const cols = props.columns.map((col, i) => <col key={col.field + '_' + i} />);

            return <colgroup className="p-treetable-scrollable-colgroup">{cols}</colgroup>;
        } else {
            return null;
        }
    };

    const className = classNames('p-treetable-scrollable-view', { 'p-treetable-frozen-view': props.frozen, 'p-treetable-unfrozen-view': !props.frozen && props.frozenWidth });
    const width = props.frozen ? props.frozenWidth : 'calc(100% - ' + props.frozenWidth + ')';
    const left = props.frozen ? null : props.frozenWidth;
    const colGroup = createColGroup();
    const scrollableBodyStyle = !props.frozen && props.scrollHeight ? { overflowY: 'scroll' } : null;

    return (
        <div className={className} style={{ width: width, left: left }} ref={elementRef}>
            <div className="p-treetable-scrollable-header" ref={scrollHeaderRef} onScroll={onHeaderScroll}>
                <div className="p-treetable-scrollable-header-box" ref={scrollHeaderBoxRef}>
                    <table className="p-treetable-scrollable-header-table">
                        {colGroup}
                        {props.header}
                    </table>
                </div>
            </div>
            <div className="p-treetable-scrollable-body" ref={scrollBodyRef} style={scrollableBodyStyle} onScroll={onBodyScroll}>
                <table ref={scrollTableRef} style={{ top: '0' }} className="p-treetable-scrollable-body-table">
                    {colGroup}
                    {props.body}
                </table>
            </div>
            <div className="p-treetable-scrollable-footer" ref={scrollFooterRef}>
                <div className="p-treetable-scrollable-footer-box" ref={scrollFooterBoxRef}>
                    <table className="p-treetable-scrollable-footer-table">
                        {colGroup}
                        {props.footer}
                    </table>
                </div>
            </div>
        </div>
    );
});

TreeTableScrollableView.displayName = 'TreeTableScrollableView';
