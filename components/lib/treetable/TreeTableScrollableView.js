import * as React from 'react';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { DomHandler, ObjectUtils } from '../utils/Utils';

export const TreeTableScrollableView = React.memo((props) => {
    const elementRef = React.useRef(null);
    const scrollHeaderRef = React.useRef(null);
    const scrollHeaderBoxRef = React.useRef(null);
    const scrollBodyRef = React.useRef(null);
    const scrollTableRef = React.useRef(null);
    const scrollFooterRef = React.useRef(null);
    const scrollFooterBoxRef = React.useRef(null);
    const mergeProps = useMergeProps();
    const { ptm, cx, sx } = props.ptCallbacks;

    const getPTOptions = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

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

            while (el && !(DomHandler.getAttribute(el, 'data-pc-section') === 'root' || DomHandler.getAttribute(el, 'data-pc-name') === 'treetable')) {
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
            frozenScrollBody = DomHandler.findSingle(frozenView, '[data-pc-section="scrollablebody"]');
        }

        scrollHeaderBoxRef.current.style.transform = `translateX(-${scrollBodyRef.current.scrollLeft}px)`;

        if (scrollFooterBoxRef.current) {
            scrollFooterBoxRef.current.style.transform = `translateX(-${scrollBodyRef.current.scrollLeft}px)`;
        }

        if (frozenScrollBody) {
            frozenScrollBody.scrollTop = scrollBodyRef.current.scrollTop;
        }
    };

    useMountEffect(() => {
        let el = DomHandler.find(findDataTableContainer(elementRef.current), '[data-pc-section="scrollablebody"]');

        el = el.length > 1 ? el[1] : el[0];

        const scrollBarWidth = DomHandler.calculateScrollbarWidth(el);

        if (!props.frozen) {
            const scrollBarWidth = DomHandler.calculateScrollbarWidth();

            scrollHeaderBoxRef.current.style.marginRight = scrollBarWidth + 'px';

            if (scrollFooterBoxRef.current) {
                scrollFooterBoxRef.current.style.marginRight = scrollBarWidth + 'px';
            }
        } else {
            scrollBodyRef.current.style.paddingBottom = scrollBarWidth + 'px';
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
                getPTOptions('scrollableColgroup')
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
            style: { width, left }
        },
        getPTOptions('scrollable')
    );

    const scrollableHeaderProps = mergeProps(
        {
            className: cx('scrollableHeader'),
            onScroll: (e) => onHeaderScroll(e)
        },
        getPTOptions('scrollableHeader')
    );

    const scrollableHeaderBoxProps = mergeProps(
        {
            className: cx('scrollableHeaderBox')
        },
        getPTOptions('scrollableHeaderBox')
    );

    const scrollableHeaderTableProps = mergeProps(
        {
            className: cx('scrollableHeaderTable')
        },
        getPTOptions('scrollableHeaderTable')
    );

    const scrollableBodyProps = mergeProps(
        {
            className: cx('scrollableBody'),
            style: !props.frozen && props.scrollHeight ? { overflowY: 'scroll' } : undefined,
            onScroll: (e) => onBodyScroll(e)
        },
        getPTOptions('scrollableBody')
    );

    const scrollableBodyTableProps = mergeProps(
        {
            style: { top: '0' },
            className: cx('scrollableBodyTable')
        },
        getPTOptions('scrollableBodyTable')
    );

    const scrollableFooterProps = mergeProps(
        {
            className: cx('scrollableFooter')
        },
        getPTOptions('scrollableFooter')
    );

    const scrollableFooterBoxProps = mergeProps(
        {
            className: sx('scrollableFooterBox')
        },
        getPTOptions('scrollableFooterBox')
    );

    const scrollableFooterTableProps = mergeProps(
        {
            className: cx('scrollableFooterTable')
        },
        getPTOptions('scrollableFooterTable')
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
