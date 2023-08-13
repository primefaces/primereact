import * as React from 'react';
import { useEventListener, useMountEffect, usePrevious, useResizeListener, useStyle, useUpdateEffect } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils, IconUtils, mergeProps } from '../utils/Utils';
import { VirtualScrollerBase } from './VirtualScrollerBase';
import { SpinnerIcon } from '../icons/spinner';
import { PrimeReactContext } from '../api/Api';

export const VirtualScroller = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = VirtualScrollerBase.getProps(inProps, context);
        const prevProps = usePrevious(inProps) || {};

        const vertical = props.orientation === 'vertical';
        const horizontal = props.orientation === 'horizontal';
        const both = props.orientation === 'both';

        const [firstState, setFirstState] = React.useState(both ? { rows: 0, cols: 0 } : 0);
        const [lastState, setLastState] = React.useState(both ? { rows: 0, cols: 0 } : 0);
        const [pageState, setPageState] = React.useState(0);
        const [numItemsInViewportState, setNumItemsInViewportState] = React.useState(both ? { rows: 0, cols: 0 } : 0);
        const [numToleratedItemsState, setNumToleratedItemsState] = React.useState(props.numToleratedItems);
        const [loadingState, setLoadingState] = React.useState(props.loading || false);
        const [loaderArrState, setLoaderArrState] = React.useState([]);
        const { ptm } = VirtualScrollerBase.setMetaData({
            props,
            state: {
                first: firstState,
                last: lastState,
                page: pageState,
                numItemsInViewport: numItemsInViewportState,
                numToleratedItems: numToleratedItemsState,
                loading: loadingState,
                loaderArr: loaderArrState
            }
        });

        useStyle(VirtualScrollerBase.css.styles, { name: 'virtualscroller' });
        const elementRef = React.useRef(null);
        const contentRef = React.useRef(null);
        const spacerRef = React.useRef(null);
        const stickyRef = React.useRef(null);
        const lastScrollPos = React.useRef(both ? { top: 0, left: 0 } : 0);
        const scrollTimeout = React.useRef(null);
        const resizeTimeout = React.useRef(null);
        const contentStyle = React.useRef({});
        const spacerStyle = React.useRef({});
        const defaultWidth = React.useRef(null);
        const defaultHeight = React.useRef(null);
        const defaultContentWidth = React.useRef(null);
        const defaultContentHeight = React.useRef(null);
        const isItemRangeChanged = React.useRef(false);
        const lazyLoadState = React.useRef(null);

        const [bindWindowResizeListener] = useResizeListener({ listener: (event) => onResize(event), when: !props.disabled });
        const [bindOrientationChangeListener] = useEventListener({ target: 'window', type: 'orientationchange', listener: (event) => onResize(event), when: !props.disabled });

        const getElementRef = () => {
            return elementRef;
        };

        const getPageByFirst = (first) => {
            return Math.floor((first + numToleratedItemsState * 4) / (props.step || 1));
        };

        const setContentElement = (element) => {
            contentRef.current = element || contentRef.current || DomHandler.findSingle(elementRef.current, '.p-virtualscroller-content');
        };

        const isPageChanged = (first) => {
            return props.step ? pageState !== getPageByFirst(first) : true;
        };

        const scrollTo = (options) => {
            lastScrollPos.current = both ? { top: 0, left: 0 } : 0;
            elementRef.current && elementRef.current.scrollTo(options);
        };

        const scrollToIndex = (index, behavior = 'auto') => {
            const { numToleratedItems } = calculateNumItems();
            const contentPos = getContentPosition();
            const calculateFirst = (_index = 0, _numT) => (_index <= _numT ? 0 : _index);
            const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
            const scrollToItem = (left = 0, top = 0) => scrollTo({ left, top, behavior });
            let newFirst = both ? { rows: 0, cols: 0 } : 0;
            let isRangeChanged = false;

            if (both) {
                newFirst = { rows: calculateFirst(index[0], numToleratedItems[0]), cols: calculateFirst(index[1], numToleratedItems[1]) };
                scrollToItem(calculateCoord(newFirst.cols, props.itemSize[1], contentPos.left), calculateCoord(newFirst.rows, props.itemSize[0], contentPos.top));
                isRangeChanged = firstState.rows !== newFirst.rows || firstState.cols !== newFirst.cols;
            } else {
                newFirst = calculateFirst(index, numToleratedItems);
                horizontal ? scrollToItem(calculateCoord(newFirst, props.itemSize, contentPos.left), 0) : scrollToItem(0, calculateCoord(newFirst, props.itemSize, contentPos.top));
                isRangeChanged = firstState !== newFirst;
            }

            isItemRangeChanged.current = isRangeChanged;
            setFirstState(newFirst);
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
            const calculateLast = (_first, _num, _numT, _isCols = false) => getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
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
                Promise.resolve().then(() => {
                    lazyLoadState.current = {
                        first: props.step ? (both ? { rows: 0, cols: firstState.cols } : 0) : firstState,
                        last: Math.min(props.step ? props.step : last, props.items.length)
                    };

                    props.onLazyLoad && props.onLazyLoad(lazyLoadState.current);
                });
            }
        };

        const calculateAutoSize = (loading) => {
            if (props.autoSize && !loading) {
                Promise.resolve().then(() => {
                    if (contentRef.current) {
                        contentRef.current.style.minHeight = contentRef.current.style.minWidth = 'auto';
                        contentRef.current.style.position = 'relative';
                        elementRef.current.style.contain = 'none';

                        /*const [contentWidth, contentHeight] = [DomHandler.getWidth(contentRef.current), DomHandler.getHeight(contentRef.current)];

                        contentWidth !== defaultContentWidth.current && (elementRef.current.style.width = '');
                        contentHeight !== defaultContentHeight.current && (elementRef.current.style.height = '');*/

                        const [width, height] = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)];

                        (both || horizontal) && (elementRef.current.style.width = (width < defaultWidth.current ? width : props.scrollWidth || defaultWidth.current) + 'px');
                        (both || vertical) && (elementRef.current.style.height = (height < defaultHeight.current ? height : props.scrollHeight || defaultHeight.current) + 'px');

                        contentRef.current.style.minHeight = contentRef.current.style.minWidth = '';
                        contentRef.current.style.position = '';
                        elementRef.current.style.contain = '';
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
                const left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
                const right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
                const top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
                const bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);

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

            if (items) {
                const contentPos = getContentPosition();
                const setProp = (_name, _value, _size, _cpos = 0) => (spacerStyle.current = { ...spacerStyle.current, ...{ [`${_name}`]: (_value || []).length * _size + _cpos + 'px' } });

                if (both) {
                    setProp('height', items, props.itemSize[0], contentPos.y);
                    setProp('width', props.columns || items[1], props.itemSize[1], contentPos.x);
                } else {
                    horizontal ? setProp('width', props.columns || items, props.itemSize, contentPos.x) : setProp('height', items, props.itemSize, contentPos.y);
                }
            }
        };

        const setContentPosition = (pos) => {
            if (contentRef.current && !props.appendOnly) {
                const first = pos ? pos.first : firstState;
                const calculateTranslateVal = (_first, _size) => _first * _size;

                const setTransform = (_x = 0, _y = 0) => {
                    stickyRef.current && (stickyRef.current.style.top = `-${_y}px`);
                    contentStyle.current = { ...contentStyle.current, ...{ transform: `translate3d(${_x}px, ${_y}px, 0)` } };
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

                if (!props.appendOnly || (props.appendOnly && (isScrollDown || isScrollRight))) {
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

                    isRangeChanged = newFirst.rows !== firstState.rows || newLast.rows !== lastState.rows || newFirst.cols !== firstState.cols || newLast.cols !== lastState.cols || isItemRangeChanged.current;
                    newScrollPos = { top: scrollTop, left: scrollLeft };
                }
            } else {
                const scrollPos = horizontal ? scrollLeft : scrollTop;
                const isScrollDownOrRight = lastScrollPos.current <= scrollPos;

                if (!props.appendOnly || (props.appendOnly && isScrollDownOrRight)) {
                    const currentIndex = calculateCurrentIndex(scrollPos, props.itemSize);
                    const triggerIndex = calculateTriggerIndex(currentIndex, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);

                    newFirst = calculateFirst(currentIndex, triggerIndex, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
                    newLast = calculateLast(currentIndex, newFirst, lastState, numItemsInViewportState, numToleratedItemsState);
                    isRangeChanged = newFirst !== firstState || newLast !== lastState || isItemRangeChanged.current;
                    newScrollPos = scrollPos;
                }
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

                if (props.lazy && isPageChanged(first)) {
                    const newLazyLoadState = {
                        first: props.step ? Math.min(getPageByFirst(first) * props.step, props.items.length - props.step) : first,
                        last: Math.min(props.step ? (getPageByFirst(first) + 1) * props.step : last, props.items.length)
                    };

                    const isLazyStateChanged = !lazyLoadState.current || lazyLoadState.current.first !== newLazyLoadState.first || lazyLoadState.current.last !== newLazyLoadState.last;

                    isLazyStateChanged && props.onLazyLoad && props.onLazyLoad(newLazyLoadState);
                    lazyLoadState.current = newLazyLoadState;
                }
            }
        };

        const onScroll = (event) => {
            props.onScroll && props.onScroll(event);

            if (props.delay) {
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }

                if (isPageChanged(firstState)) {
                    if (!loadingState && props.showLoader) {
                        const { isRangeChanged } = onScrollPositionChange(event);
                        const changed = isRangeChanged || (props.step ? isPageChanged(firstState) : false);

                        changed && setLoadingState(true);
                    }

                    scrollTimeout.current = setTimeout(() => {
                        onScrollChange(event);

                        if (loadingState && props.showLoader && (!props.lazy || props.loading === undefined)) {
                            setLoadingState(false);
                            setPageState(getPageByFirst(firstState));
                        }
                    }, props.delay);
                }
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
                        defaultContentWidth.current = DomHandler.getWidth(contentRef.current);
                        defaultContentHeight.current = DomHandler.getHeight(contentRef.current);
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
                if (both) return items.slice(props.appendOnly ? 0 : firstState.rows, lastState.rows).map((item) => (props.columns ? item : item.slice(props.appendOnly ? 0 : firstState.cols, lastState.cols)));
                else if (horizontal && props.columns) return items;
                else return items.slice(props.appendOnly ? 0 : firstState, lastState);
            }

            return [];
        };

        const viewInit = () => {
            if (elementRef.current && DomHandler.isVisible(elementRef.current)) {
                setContentElement(contentRef.current);
                init();
                bindWindowResizeListener();
                bindOrientationChangeListener();

                defaultWidth.current = DomHandler.getWidth(elementRef.current);
                defaultHeight.current = DomHandler.getHeight(elementRef.current);
                defaultContentWidth.current = DomHandler.getWidth(contentRef.current);
                defaultContentHeight.current = DomHandler.getHeight(contentRef.current);
            }
        };

        const init = () => {
            if (!props.disabled) {
                setSize();
                calculateOptions();
                setSpacerSize();
            }
        };

        useMountEffect(() => {
            viewInit();
        });

        useUpdateEffect(() => {
            init();
        }, [props.itemSize, props.scrollHeight, props.scrollWidth]);

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
            if (!prevProps.items || prevProps.items.length !== (props.items || []).length) {
                init();
            }

            let loading = loadingState;

            if (props.lazy && prevProps.loading !== props.loading && props.loading !== loadingState) {
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
            const iconClassName = 'p-virtualscroller-loading-icon';
            const loadingIconProps = mergeProps(
                {
                    className: iconClassName
                },
                ptm('loadingIcon')
            );
            const icon = props.loadingIcon || <SpinnerIcon {...loadingIconProps} spin />;
            const loadingIcon = IconUtils.getJSXIcon(icon, { ...loadingIconProps }, { props });

            if (!props.loaderDisabled && props.showLoader && loadingState) {
                const className = classNames('p-virtualscroller-loader', {
                    'p-component-overlay': !props.loadingTemplate
                });

                let content = loadingIcon;

                if (props.loadingTemplate) {
                    content = loaderArrState.map((_, index) => {
                        return createLoaderItem(index, both && { numCols: numItemsInViewportState.cols });
                    });
                } else if (props.loaderIconTemplate) {
                    const defaultContentOptions = {
                        iconClassName,
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.loaderIconTemplate, defaultContentOptions);
                }

                const loaderProps = mergeProps(
                    {
                        className
                    },
                    ptm('loader')
                );

                return <div {...loaderProps}>{content}</div>;
            }

            return null;
        };

        const createSpacer = () => {
            if (props.showSpacer) {
                const spacerProps = mergeProps(
                    {
                        ref: spacerRef,
                        style: spacerStyle.current,
                        className: 'p-virtualscroller-spacer'
                    },
                    ptm('spacer')
                );

                return <div {...spacerProps}></div>;
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
            const contentProps = mergeProps(
                {
                    ref: contentRef,
                    style: contentStyle.current,
                    className
                },
                ptm('content')
            );
            const content = <div {...contentProps}>{items}</div>;

            if (props.contentTemplate) {
                const defaultOptions = {
                    style: contentStyle.current,
                    className,
                    spacerStyle: spacerStyle.current,
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
            const className = classNames(
                'p-virtualscroller',
                {
                    'p-virtualscroller-inline': props.inline,
                    'p-virtualscroller-both p-both-scroll': both,
                    'p-virtualscroller-horizontal p-horizontal-scroll': horizontal
                },
                props.className
            );

            const loader = createLoader();
            const content = createContent();
            const spacer = createSpacer();
            const rootProps = mergeProps(
                {
                    ref: elementRef,
                    className,
                    tabIndex: props.tabIndex,
                    style: props.style,
                    onScroll: (e) => onScroll(e)
                },
                VirtualScrollerBase.getOtherProps(props),
                ptm('root')
            );

            return (
                <div {...rootProps}>
                    {content}
                    {spacer}
                    {loader}
                </div>
            );
        }
    })
);

VirtualScroller.displayName = 'VirtualScroller';
