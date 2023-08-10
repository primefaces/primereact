import * as React from 'react';
import { useMountEffect } from '../hooks/Hooks';
import { DomHandler, mergeProps, ObjectUtils } from '../utils/Utils';

export const TreeTableScrollableView = React.memo((props) => {
    const elementRef = React.useRef(null);
    const scrollHeaderRef = React.useRef(null);
    const scrollHeaderBoxRef = React.useRef(null);
    const scrollBodyRef = React.useRef(null);
    const scrollTableRef = React.useRef(null);
    const scrollFooterRef = React.useRef(null);
    const scrollFooterBoxRef = React.useRef(null);
    const { ptm, cx, sx } = props.ptCallbacks;

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
            const scrollableColgroupProps = mergeProps(
                {
                    className: cx('scrollableColgroup')
                },
                ptm('scrollableColgroup')
            );

            return <colgroup {...scrollableColgroupProps}>{cols}</colgroup>;
        } else {
            return null;
        }
    };

    const width = props.frozen ? props.frozenWidth : 'calc(100% - ' + props.frozenWidth + ')';
    const left = props.frozen ? null : props.frozenWidth;
    const colGroup = createColGroup();
    const scrollableProps = mergeProps(
        {
            className: cx('scrollable', { scrolaableProps: props }),
            style: sx('scrollable', { width, left })
        },
        ptm('scrollable')
    );

    const scrollableHeaderProps = mergeProps(
        {
            className: cx('scrollableHeader'),
            onScroll: (e) => onHeaderScroll(e)
        },
        ptm('scrollableHeader')
    );

    const scrollableHeaderBoxProps = mergeProps(
        {
            className: cx('scrollableHeaderBox')
        },
        ptm('scrollableHeaderBox')
    );

    const scrollableHeaderTableProps = mergeProps(
        {
            className: cx('scrollableHeaderTable')
        },
        ptm('scrollableHeaderTable')
    );

    const scrollableBodyProps = mergeProps(
        {
            className: cx('scrollableBody'),
            style: sx('scrollableBody', { scrolaableProps: props }),
            onScroll: (e) => onBodyScroll(e)
        },
        ptm('scrollableBody')
    );

    const scrollableBodyTableProps = mergeProps(
        {
            style: sx('scrollableBodyTable'),
            className: cx('scrollableBodyTable')
        },
        ptm('scrollableBodyTable')
    );

    const scrollableFooterProps = mergeProps(
        {
            className: cx('scrollableFooter')
        },
        ptm('scrollableFooter')
    );

    const scrollableFooterBoxProps = mergeProps(
        {
            className: sx('scrollableFooterBox')
        },
        ptm('scrollableFooterBox')
    );

    const scrollableFooterTableProps = mergeProps(
        {
            className: cx('scrollableFooterTable')
        },
        ptm('scrollableFooterTable')
    );

    return (
        <div ref={elementRef} {...scrollableProps}>
            <div ref={scrollHeaderRef} {...scrollableHeaderProps}>
                <div ref={scrollHeaderBoxRef} {...scrollableHeaderBoxProps}>
                    <table {...scrollableHeaderTableProps}>
                        {colGroup}
                        {props.header}
                    </table>
                </div>
            </div>
            <div ref={scrollBodyRef} {...scrollableBodyProps}>
                <table ref={scrollTableRef} {...scrollableBodyTableProps}>
                    {colGroup}
                    {props.body}
                </table>
            </div>
            <div ref={scrollFooterRef} {...scrollableFooterProps}>
                <div ref={scrollFooterBoxRef} {...scrollableFooterBoxProps}>
                    <table {...scrollableFooterTableProps}>
                        {colGroup}
                        {props.footer}
                    </table>
                </div>
            </div>
        </div>
    );
});

TreeTableScrollableView.displayName = 'TreeTableScrollableView';
