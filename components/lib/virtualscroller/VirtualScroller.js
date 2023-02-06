import * as React from 'react';
import { useEventListener, useMountEffect, usePrevious, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { VirtualScrollerBase } from './VirtualScrollerBase';

export const VirtualScroller = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = VirtualScrollerBase.getProps(inProps);

        const vertical = props.orientation === 'vertical';
        const horizontal = props.orientation === 'horizontal';
        const both = props.orientation === 'both';

        const [firstState, setFirstState] = React.useState(both ? { rows: 0, cols: 0 } : 0);
        const [lastState, setLastState] = React.useState(both ? { rows: 0, cols: 0 } : 0);
        const [numItemsInViewportState, setNumItemsInViewportState] = React.useState(both ? { rows: 0, cols: 0 } : 0);
        const [numToleratedItemsState, setNumToleratedItemsState] = React.useState(props.numToleratedItems);
        const [loadingState, setLoadingState] = React.useState(props.loading || false);
        const [loaderArrState, setLoaderArrState] = React.useState([]);
        const elementRef = React.useRef(null);
        const contentRef = React.useRef(null);
        const spacerRef = React.useRef(null);
        const stickyRef = React.useRef(null);
        const lastScrollPos = React.useRef(both ? { top: 0, left: 0 } : 0);
        const scrollTimeout = React.useRef(null);
        const resizeTimeout = React.useRef(null);
        const defaultWidth = React.useRef(null);
        const defaultHeight = React.useRef(null);
        const prevItems = usePrevious(props.items);
        const prevLoading = usePrevious(props.loading);

        const [bindWindowResizeListener] = useResizeListener({ listener: (event) => onResize(event) });
        const [bindOrientationChangeListener] = useEventListener({ target: 'window', type: 'orientationchange', listener: (event) => onResize(event) });

        const getElementRef = () => {
            return elementRef;
        };

        const scrollTo = (options) => {
            lastScrollPos.current = both ? { top: 0, left: 0 } : 0;
            elementRef.current && elementRef.current.scrollTo(options);
        };

        const scrollToIndex = (index, behavior = 'auto') => {
            const { numToleratedItems } = calculateNumItems();
            const calculateFirst = (_index = 0, _numT) => (_index <= _numT ? 0 : _index);
            const calculateCoord = (_first, _size) => _first * _size;
            const scrollToItem = (left = 0, top = 0) => scrollTo({ left, top, behavior });

            if (both) {
                const newFirst = { rows: calculateFirst(index[0], numToleratedItems[0]), cols: calculateFirst(index[1], numToleratedItems[1]) };

                if (newFirst.rows !== firstState.rows || newFirst.cols !== firstState.cols) {
                    scrollToItem(calculateCoord(newFirst.cols, props.itemSize[1]), calculateCoord(newFirst.rows, props.itemSize[0]));
                }
            } else {
                const newFirst = calculateFirst(index, numToleratedItems);

                if (newFirst !== firstState) {
                    horizontal ? scrollToItem(calculateCoord(newFirst, props.itemSize), 0) : scrollToItem(0, calculateCoord(newFirst, props.itemSize));
                }
            }
        };

        const scrollInView = (index, to, behavior = 'auto') => {
            if (to) {
                const { first, viewport } = getRenderedRange();
                const scrollToItem = (left = 0, top = 0) => scrollTo({ left, top, behavior });
                const isToStart = to === 'to-start';
                const isToEnd = to === 'to-end';

                if (isToStart) {
                    if (both) {
                        if (viewport.first.rows - first.rows > index[0]) {
                            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows - 1) * props.itemSize[0]);
                        } else if (viewport.first.cols - first.cols > index[1]) {
                            scrollToItem((viewport.first.cols - 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
                        }
                    } else {
                        if (viewport.first - first > index) {
                            const pos = (viewport.first - 1) * props.itemSize;

                            horizontal ? scrollToItem(pos, 0) : scrollToItem(0, pos);
                        }
                    }
                } else if (isToEnd) {
                    if (both) {
                        if (viewport.last.rows - first.rows <= index[0] + 1) {
                            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows + 1) * props.itemSize[0]);
                        } else if (viewport.last.cols - first.cols <= index[1] + 1) {
                            scrollToItem((viewport.first.cols + 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
                        }
                    } else {
                        if (viewport.last - first <= index + 1) {
                            const pos = (viewport.first + 1) * props.itemSize;

                            horizontal ? scrollToItem(pos, 0) : scrollToItem(0, pos);
                        }
                    }
                }
            } else {
                scrollToIndex(index, behavior);
            }
        };

        const getRows = () => {
            return loadingState ? (props.loaderDisabled ? loaderArrState : []) : loadedItems();
        };

        const getColumns = () => {
            if ((props.columns && both) || horizontal) {
                return loadingState && props.loaderDisabled ? (both ? loaderArrState[0] : loaderArrState) : props.columns.slice(both ? firstState.cols : firstState, both ? lastState.cols : lastState);
            }

            return props.columns;
        };

        const getRenderedRange = () => {
            const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));

            let firstInViewport = firstState;
            let lastInViewport = 0;

            if (elementRef.current) {
                const { scrollTop, scrollLeft } = elementRef.current;

                if (both) {
                    firstInViewport = { rows: calculateFirstInViewport(scrollTop, props.itemSize[0]), cols: calculateFirstInViewport(scrollLeft, props.itemSize[1]) };
                    lastInViewport = { rows: firstInViewport.rows + numItemsInViewportState.rows, cols: firstInViewport.cols + numItemsInViewportState.cols };
                } else {
                    const scrollPos = horizontal ? scrollLeft : scrollTop;

                    firstInViewport = calculateFirstInViewport(scrollPos, props.itemSize);
                    lastInViewport = firstInViewport + numItemsInViewportState;
                }
            }

            return {
                first: firstState,
                last: lastState,
                viewport: {
                    first: firstInViewport,
                    last: lastInViewport
                }
            };
        };

        const calculateNumItems = () => {
            const contentPos = getContentPosition();
            const contentWidth = elementRef.current ? elementRef.current.offsetWidth - contentPos.left : 0;
            const contentHeight = elementRef.current ? elementRef.current.offsetHeight - contentPos.top : 0;
            const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
            const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
            const numItemsInViewport = both
                ? { rows: calculateNumItemsInViewport(contentHeight, props.itemSize[0]), cols: calculateNumItemsInViewport(contentWidth, props.itemSize[1]) }
                : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, props.itemSize);

            const numToleratedItems = numToleratedItemsState || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));

            return { numItemsInViewport, numToleratedItems };
        };

        const calculateOptions = () => {
            const { numItemsInViewport, numToleratedItems } = calculateNumItems();
            const calculateLast = (_first, _num, _numT, _isCols) => getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
            const last = both
                ? { rows: calculateLast(firstState.rows, numItemsInViewport.rows, numToleratedItems[0]), cols: calculateLast(firstState.cols, numItemsInViewport.cols, numToleratedItems[1], true) }
                : calculateLast(firstState, numItemsInViewport, numToleratedItems);

            setNumItemsInViewportState(numItemsInViewport);
            setNumToleratedItemsState(numToleratedItems);
            setLastState(last);

            if (props.showLoader) {
                setLoaderArrState(both ? Array.from({ length: numItemsInViewport.rows }).map(() => Array.from({ length: numItemsInViewport.cols })) : Array.from({ length: numItemsInViewport }));
            }

            if (props.lazy) {
                props.onLazyLoad && props.onLazyLoad({ first: firstState, last });
            }
        };

        const calculateAutoSize = (loading) => {
            if (props.autoSize && !loading) {
                Promise.resolve().then(() => {
                    if (contentRef.current) {
                        contentRef.current.style.minHeight = contentRef.current.style.minWidth = 'auto';

                        const { offsetWidth, offsetHeight } = contentRef.current;

                        (both || horizontal) && (elementRef.current.style.width = (offsetWidth < defaultWidth.current ? offsetWidth : defaultWidth.current) + 'px');
                        (both || vertical) && (elementRef.current.style.height = (offsetHeight < defaultHeight.current ? offsetHeight : defaultHeight.current) + 'px');
                        contentRef.current.style.minHeight = contentRef.current.style.minWidth = '';
                    }
                });
            }
        };

        const getLast = (last = 0, isCols) => {
            return props.items ? Math.min(isCols ? (props.columns || props.items[0]).length : props.items.length, last) : 0;
        };

        const getContentPosition = () => {
            if (contentRef.current) {
                const style = getComputedStyle(contentRef.current);
                const left = parseInt(style.paddingLeft, 10) + Math.max(parseInt(style.left, 10), 0);
                const right = parseInt(style.paddingRight, 10) + Math.max(parseInt(style.right, 10), 0);
                const top = parseInt(style.paddingTop, 10) + Math.max(parseInt(style.top, 10), 0);
                const bottom = parseInt(style.paddingBottom, 10) + Math.max(parseInt(style.bottom, 10), 0);

                return { left, right, top, bottom, x: left + right, y: top + bottom };
            }

            return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
        };

        const setSize = () => {
            if (elementRef.current) {
                const parentElement = elementRef.current.parentElement;
                const width = props.scrollWidth || `${elementRef.current.offsetWidth || parentElement.offsetWidth}px`;
                const height = props.scrollHeight || `${elementRef.current.offsetHeight || parentElement.offsetHeight}px`;
                const setProp = (_name, _value) => (elementRef.current.style[_name] = _value);

                if (both || horizontal) {
                    setProp('height', height);
                    setProp('width', width);
                } else {
                    setProp('height', height);
                }
            }
        };

        const setSpacerSize = () => {
            const items = props.items;

            if (spacerRef.current && items) {
                const contentPos = getContentPosition();
                const setProp = (_name, _value, _size, _cpos = 0) => (spacerRef.current.style[_name] = (_value || []).length * _size + _cpos + 'px');

                if (both) {
                    setProp('height', items, props.itemSize[0], contentPos.y);
                    setProp('width', props.columns || items[1], props.itemSize[1], contentPos.x);
                } else {
                    horizontal ? setProp('width', props.columns || items, props.itemSize, contentPos.x) : setProp('height', items, props.itemSize, contentPos.y);
                }
            }
        };

        const setContentPosition = (pos) => {
            if (contentRef.current) {
                const first = pos ? pos.first : firstState;
                const calculateTranslateVal = (_first, _size) => _first * _size;

                const setTransform = (_x = 0, _y = 0) => {
                    stickyRef.current && (stickyRef.current.style.top = `-${_y}px`);
                    contentRef.current.style.transform = `translate3d(${_x}px, ${_y}px, 0)`;
                };

                if (both) {
                    setTransform(calculateTranslateVal(first.cols, props.itemSize[1]), calculateTranslateVal(first.rows, props.itemSize[0]));
                } else {
                    const translateVal = calculateTranslateVal(first, props.itemSize);

                    horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
                }
            }
        };

        const onScrollPositionChange = (event) => {
            const target = event.target;
            const contentPos = getContentPosition();
            const calculateScrollPos = (_pos, _cpos) => (_pos ? (_pos > _cpos ? _pos - _cpos : _pos) : 0);
            const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));

            const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
                return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
            };

            const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
                if (_currentIndex <= _numT) return 0;
                else return Math.max(0, _isScrollDownOrRight ? (_currentIndex < _triggerIndex ? _first : _currentIndex - _numT) : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
            };

            const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols) => {
                let lastValue = _first + _num + 2 * _numT;

                if (_currentIndex >= _numT) {
                    lastValue += _numT + 1;
                }

                return getLast(lastValue, _isCols);
            };

            const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
            const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);

            let newFirst = both ? { rows: 0, cols: 0 } : 0;
            let newLast = lastState;
            let isRangeChanged = false;
            let newScrollPos = lastScrollPos.current;

            if (both) {
                const isScrollDown = lastScrollPos.current.top <= scrollTop;
                const isScrollRight = lastScrollPos.current.left <= scrollLeft;
                const currentIndex = { rows: calculateCurrentIndex(scrollTop, props.itemSize[0]), cols: calculateCurrentIndex(scrollLeft, props.itemSize[1]) };
                const triggerIndex = {
                    rows: calculateTriggerIndex(currentIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
                    cols: calculateTriggerIndex(currentIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
                };

                newFirst = {
                    rows: calculateFirst(currentIndex.rows, triggerIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
                    cols: calculateFirst(currentIndex.cols, triggerIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
                };
                newLast = {
                    rows: calculateLast(currentIndex.rows, newFirst.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0]),
                    cols: calculateLast(currentIndex.cols, newFirst.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], true)
                };

                isRangeChanged = newFirst.rows !== firstState.rows || newLast.rows !== lastState.rows || newFirst.cols !== firstState.cols || newLast.cols !== lastState.cols;
                newScrollPos = { top: scrollTop, left: scrollLeft };
            } else {
                const scrollPos = horizontal ? scrollLeft : scrollTop;
                const isScrollDownOrRight = lastScrollPos.current <= scrollPos;
                const currentIndex = calculateCurrentIndex(scrollPos, props.itemSize);
                const triggerIndex = calculateTriggerIndex(currentIndex, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);

                newFirst = calculateFirst(currentIndex, triggerIndex, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
                newLast = calculateLast(currentIndex, newFirst, lastState, numItemsInViewportState, numToleratedItemsState);
                isRangeChanged = newFirst !== firstState || newLast !== lastState;
                newScrollPos = scrollPos;
            }

            return {
                first: newFirst,
                last: newLast,
                isRangeChanged,
                scrollPos: newScrollPos
            };
        };

        const onScrollChange = (event) => {
            const { first, last, isRangeChanged, scrollPos } = onScrollPositionChange(event);

            if (isRangeChanged) {
                const newState = { first, last };

                setContentPosition(newState);

                setFirstState(first);
                setLastState(last);
                lastScrollPos.current = scrollPos;

                props.onScrollIndexChange && props.onScrollIndexChange(newState);

                if (props.lazy) {
                    props.onLazyLoad && props.onLazyLoad(newState);
                }
            }
        };

        const onScroll = (event) => {
            props.onScroll && props.onScroll(event);

            if (props.delay) {
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }

                if (!loadingState && props.showLoader) {
                    const { isRangeChanged: changed } = onScrollPositionChange(event);

                    changed && setLoadingState(true);
                }

                scrollTimeout.current = setTimeout(() => {
                    onScrollChange(event);

                    if (loadingState && props.showLoader && (!props.lazy || props.loading === undefined)) {
                        setLoadingState(false);
                    }
                }, props.delay);
            } else {
                onScrollChange(event);
            }
        };

        const onResize = () => {
            if (resizeTimeout.current) {
                clearTimeout(resizeTimeout.current);
            }

            resizeTimeout.current = setTimeout(() => {
                if (elementRef.current) {
                    const [width, height] = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)];
                    const [isDiffWidth, isDiffHeight] = [width !== defaultWidth.current, height !== defaultHeight.current];
                    const reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;

                    if (reinit) {
                        setNumToleratedItemsState(props.numToleratedItems);
                        defaultWidth.current = width;
                        defaultHeight.current = height;
                    }
                }
            }, props.resizeDelay);
        };

        const getOptions = (renderedIndex) => {
            const count = (props.items || []).length;
            const index = both ? firstState.rows + renderedIndex : firstState + renderedIndex;

            return {
                index,
                count,
                first: index === 0,
                last: index === count - 1,
                even: index % 2 === 0,
                odd: index % 2 !== 0,
                props
            };
        };

        const loaderOptions = (index, extOptions) => {
            const count = loaderArrState.length;

            return {
                index,
                count,
                first: index === 0,
                last: index === count - 1,
                even: index % 2 === 0,
                odd: index % 2 !== 0,
                props,
                ...extOptions
            };
        };

        const loadedItems = () => {
            const items = props.items;

            if (items && !loadingState) {
                if (both) return items.slice(firstState.rows, lastState.rows).map((item) => (props.columns ? item : item.slice(firstState.cols, lastState.cols)));
                else if (horizontal && props.columns) return items;
                else return items.slice(firstState, lastState);
            }

            return [];
        };

        const init = () => {
            if (!props.disabled) {
                setSize();
                calculateOptions();
                setSpacerSize();
            }
        };

        useMountEffect(() => {
            if (!props.disabled) {
                init();
                bindWindowResizeListener();
                bindOrientationChangeListener();

                defaultWidth.current = DomHandler.getWidth(elementRef.current);
                defaultHeight.current = DomHandler.getHeight(elementRef.current);
            }
        });

        useUpdateEffect(() => {
            init();
        }, [props.itemSize, props.scrollHeight]);

        useUpdateEffect(() => {
            if (props.numToleratedItems !== numToleratedItemsState) {
                setNumToleratedItemsState(props.numToleratedItems);
            }
        }, [props.numToleratedItems]);

        useUpdateEffect(() => {
            if (props.numToleratedItems === numToleratedItemsState) {
                init(); // reinit after resizing
            }
        }, [numToleratedItemsState]);

        useUpdateEffect(() => {
            if (!prevItems || prevItems.length !== (props.items || []).length) {
                init();
            }

            let loading = loadingState;

            if (props.lazy && prevLoading !== props.loading && props.loading !== loadingState) {
                setLoadingState(props.loading);
                loading = props.loading;
            }

            calculateAutoSize(loading);
        });

        useUpdateEffect(() => {
            lastScrollPos.current = both ? { top: 0, left: 0 } : 0;
        }, [props.orientation]);

        React.useImperativeHandle(ref, () => ({
            props,
            getElementRef,
            scrollTo,
            scrollToIndex,
            scrollInView,
            getRenderedRange
        }));

        const createLoaderItem = (index, extOptions = {}) => {
            const options = loaderOptions(index, extOptions);
            const content = ObjectUtils.getJSXElement(props.loadingTemplate, options);

            return <React.Fragment key={index}>{content}</React.Fragment>;
        };

        const createLoader = () => {
            if (!props.loaderDisabled && props.showLoader && loadingState) {
                const className = classNames('p-virtualscroller-loader', {
                    'p-component-overlay': !props.loadingTemplate
                });

                let content = <i className="p-virtualscroller-loading-icon pi pi-spinner pi-spin"></i>;

                if (props.loadingTemplate) {
                    content = loaderArrState.map((_, index) => {
                        return createLoaderItem(index, both && { numCols: numItemsInViewportState.cols });
                    });
                } else if (props.loaderIconTemplate) {
                    const defaultContentOptions = {
                        className: 'p-virtualscroller-loading-icon',
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.loaderIconTemplate, defaultContentOptions);
                }

                return <div className={className}>{content}</div>;
            }

            return null;
        };

        const createSpacer = () => {
            if (props.showSpacer) {
                return <div ref={spacerRef} className="p-virtualscroller-spacer"></div>;
            }

            return null;
        };

        const createItem = (item, index) => {
            const options = getOptions(index);
            const content = ObjectUtils.getJSXElement(props.itemTemplate, item, options);

            return <React.Fragment key={options.index}>{content}</React.Fragment>;
        };

        const createItems = () => {
            const items = loadedItems();

            return items.map(createItem);
        };

        const createContent = () => {
            const items = createItems();
            const className = classNames('p-virtualscroller-content', { 'p-virtualscroller-loading': loadingState });
            const content = (
                <div ref={contentRef} className={className}>
                    {items}
                </div>
            );

            if (props.contentTemplate) {
                const defaultOptions = {
                    className,
                    contentRef: (el) => (contentRef.current = ObjectUtils.getRefElement(el)),
                    spacerRef: (el) => (spacerRef.current = ObjectUtils.getRefElement(el)),
                    stickyRef: (el) => (stickyRef.current = ObjectUtils.getRefElement(el)),
                    items: loadedItems(),
                    getItemOptions: (index) => getOptions(index),
                    children: items,
                    element: content,
                    props,
                    loading: loadingState,
                    getLoaderOptions: (index, ext) => loaderOptions(index, ext),
                    loadingTemplate: props.loadingTemplate,
                    itemSize: props.itemSize,
                    rows: getRows(),
                    columns: getColumns(),
                    vertical,
                    horizontal,
                    both
                };

                return ObjectUtils.getJSXElement(props.contentTemplate, defaultOptions);
            }

            return content;
        };

        if (props.disabled) {
            const content = ObjectUtils.getJSXElement(props.contentTemplate, { items: props.items, rows: props.items, columns: props.columns });

            return (
                <React.Fragment>
                    {props.children}
                    {content}
                </React.Fragment>
            );
        } else {
            const otherProps = VirtualScrollerBase.getOtherProps(props);
            const className = classNames(
                'p-virtualscroller',
                {
                    'p-both-scroll': both,
                    'p-horizontal-scroll': horizontal
                },
                props.className
            );

            const loader = createLoader();
            const content = createContent();
            const spacer = createSpacer();

            return (
                <div ref={elementRef} className={className} tabIndex={0} style={props.style} {...otherProps} onScroll={onScroll}>
                    {content}
                    {spacer}
                    {loader}
                </div>
            );
        }
    })
);

VirtualScroller.displayName = 'VirtualScroller';
