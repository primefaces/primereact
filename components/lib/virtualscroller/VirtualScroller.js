import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';

export class VirtualScroller extends Component {

    static defaultProps = {
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
        lazy: false,
        disabled: false,
        loaderDisabled: false,
        columns: null,
        loading: false,
        showSpacer: true,
        showLoader: false,
        loadingTemplate: null,
        itemTemplate: null,
        contentTemplate: null,
        onScroll: null,
        onScrollIndexChange: null,
        onLazyLoad: null
    }

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        items: PropTypes.any,
        itemSize: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).isRequired,
        scrollHeight: PropTypes.string,
        scrollWidth: PropTypes.string,
        orientation: PropTypes.string,
        numToleratedItems: PropTypes.number,
        delay: PropTypes.number,
        lazy: PropTypes.bool,
        disabled: PropTypes.bool,
        loaderDisabled: PropTypes.bool,
        columns: PropTypes.any,
        loading: PropTypes.bool,
        showSpacer: PropTypes.bool,
        showLoader: PropTypes.bool,
        loadingTemplate: PropTypes.any,
        itemTemplate: PropTypes.any,
        contentTemplate: PropTypes.any,
        onScroll: PropTypes.func,
        onScrollIndexChange: PropTypes.func,
        onLazyLoad: PropTypes.func
    }

    constructor(props) {
        super(props);
        const isBoth = this.isBoth();

        this.state = {
            first: isBoth ? { rows: 0, cols: 0 } : 0,
            last: isBoth ? { rows: 0, cols: 0 } : 0,
            numItemsInViewport: isBoth ? { rows: 0, cols: 0 } : 0,
            numToleratedItems: props.numToleratedItems,
            loading: props.loading,
            loaderArr: []
        };

        this.onScroll = this.onScroll.bind(this);

        this.lastScrollPos = isBoth ? { top: 0, left: 0 } : 0;
    }

    scrollTo(options) {
        this.el && this.el.scrollTo(options);
    }

    scrollToIndex(index, behavior = 'auto') {
        const isBoth = this.isBoth();
        const isHorizontal = this.isHorizontal();
        const first = this.state.first;
        const { numToleratedItems } = this.calculateNumItems();
        const itemSize = this.props.itemSize;
        const contentPos = this.getContentPosition();
        const calculateFirst = (_index = 0, _numT) => (_index <= _numT ? 0 : _index);
        const calculateCoord = (_first, _size, _cpos) => (_first * _size) + _cpos;
        const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });

        if (isBoth) {
            const newFirst = { rows: calculateFirst(index[0], numToleratedItems[0]), cols: calculateFirst(index[1], numToleratedItems[1]) };
            if (newFirst.rows !== first.rows || newFirst.cols !== first.cols) {
                scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top))
                this.setState({ first: newFirst });
            }
        }
        else {
            const newFirst = calculateFirst(index, numToleratedItems);

            if (newFirst !== first) {
                isHorizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), 0) : scrollTo(0, calculateCoord(newFirst, itemSize, contentPos.top));
                this.setState({ first: newFirst });
            }
        }
    }

    scrollInView(index, to, behavior = 'auto') {
        if (to) {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const { first, viewport } = this.getRenderedRange();
            const itemSize = this.props.itemSize;
            const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
            const isToStart = to === 'to-start';
            const isToEnd = to === 'to-end';

            if (isToStart) {
                if (isBoth) {
                    if (viewport.first.rows - first.rows > index[0]) {
                        scrollTo(viewport.first.cols * itemSize, (viewport.first.rows - 1) * itemSize);
                    }
                    else if (viewport.first.cols - first.cols > index[1]) {
                        scrollTo((viewport.first.cols - 1) * itemSize, viewport.first.rows * itemSize);
                    }
                }
                else {
                    if (viewport.first - first > index) {
                        const pos = (viewport.first - 1) * itemSize;
                        isHorizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
                    }
                }
            }
            else if (isToEnd) {
                if (isBoth) {
                    if (viewport.last.rows - first.rows <= index[0] + 1) {
                        scrollTo(viewport.first.cols * itemSize, (viewport.first.rows + 1) * itemSize);
                    }
                    else if (viewport.last.cols - first.cols <= index[1] + 1) {
                        scrollTo((viewport.first.cols + 1) * itemSize, viewport.first.rows * itemSize);
                    }
                }
                else {
                    if (viewport.last - first <= index + 1) {
                        const pos = (viewport.first + 1) * itemSize;
                        isHorizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
                    }
                }
            }
        }
        else {
            this.scrollToIndex(index, behavior);
        }
    }

    getRows() {
        return this.state.loading ? (this.props.loaderDisabled ? this.state.loaderArr : []) : this.loadedItems();
    }

    getColumns() {
        if (this.props.columns) {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();

            if (isBoth || isHorizontal) {
                return this.state.loading && this.props.loaderDisabled ?
                (isBoth ? this.state.loaderArr[0] : this.state.loaderArr):
                this.props.columns.slice((isBoth ? this.state.first.cols : this.state.first), (isBoth ? this.state.last.cols : this.state.last));
            }
        }

        return this.props.columns;
    }

    getRenderedRange() {
        const isBoth = this.isBoth();
        const isHorizontal = this.isHorizontal();
        const { first, last, numItemsInViewport } = this.state;
        const itemSize = this.props.itemSize;
        const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));

        let firstInViewport = first;
        let lastInViewport = 0;

        if (this.el) {
            const scrollTop = this.el.scrollTop;
            const scrollLeft = this.el.scrollLeft;

            if (isBoth) {
                firstInViewport = { rows: calculateFirstInViewport(scrollTop, itemSize[0]), cols: calculateFirstInViewport(scrollLeft, itemSize[1]) };
                lastInViewport = { rows: firstInViewport.rows + numItemsInViewport.rows, cols: firstInViewport.cols + numItemsInViewport.cols };
            }
            else {
                const scrollPos = isHorizontal ? scrollLeft : scrollTop;
                firstInViewport = calculateFirstInViewport(scrollPos, itemSize);
                lastInViewport = firstInViewport + numItemsInViewport;
            }
        }

        return {
            first,
            last,
            viewport: {
                first: firstInViewport,
                last: lastInViewport
            }
        };
    }

    isVertical() {
        return this.props.orientation === 'vertical';
    }

    isHorizontal() {
        return this.props.orientation === 'horizontal';
    }

    isBoth() {
        return this.props.orientation === 'both';
    }

    calculateNumItems() {
        const isBoth = this.isBoth();
        const isHorizontal = this.isHorizontal();
        const itemSize = this.props.itemSize;
        const contentPos = this.getContentPosition();
        const contentWidth = this.el ? this.el.offsetWidth - contentPos.left : 0;
        const contentHeight = this.el ? this.el.offsetHeight - contentPos.top : 0;
        const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
        const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
        const numItemsInViewport = isBoth ?
            { rows: calculateNumItemsInViewport(contentHeight, itemSize[0]), cols: calculateNumItemsInViewport(contentWidth, itemSize[1]) } :
            calculateNumItemsInViewport((isHorizontal ? contentWidth : contentHeight), itemSize);

        const numToleratedItems = this.state.numToleratedItems || (isBoth ?
            [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] :
            calculateNumToleratedItems(numItemsInViewport));

        return { numItemsInViewport, numToleratedItems };
    }

    calculateOptions() {
        const isBoth = this.isBoth();
        const first = this.state.first;
        const { numItemsInViewport, numToleratedItems } = this.calculateNumItems();
        const calculateLast = (_first, _num, _numT, _isCols) => this.getLast(_first + _num + ((_first < _numT ? 2 : 3) * _numT), _isCols);
        const last = isBoth ?
            { rows: calculateLast(first.rows, numItemsInViewport.rows, numToleratedItems[0]), cols: calculateLast(first.cols, numItemsInViewport.cols, numToleratedItems[1], true) } :
            calculateLast(first, numItemsInViewport, numToleratedItems);

        let state = { numItemsInViewport, last, numToleratedItems };
        if (this.props.showLoader) {
            state['loaderArr'] = isBoth ?
                Array.from({ length: numItemsInViewport.rows }).map(() => Array.from({ length: numItemsInViewport.cols })) :
                Array.from({ length: numItemsInViewport });
        }

        this.setState(state, () => {
            if (this.props.lazy) {
                this.props.onLazyLoad && this.props.onLazyLoad({ first: this.state.first, last: this.state.last });
            }
        });
    }

    getLast(last = 0, isCols) {
        if (this.props.items) {
            return Math.min((isCols ? (this.props.columns || this.props.items[0]).length : this.props.items.length), last);
        }

        return 0;
    }

    getContentPosition() {
        if (this.content) {
            const style = getComputedStyle(this.content);
            const left = parseInt(style.paddingLeft, 10) + Math.max(parseInt(style.left, 10), 0);
            const right = parseInt(style.paddingRight, 10) + Math.max(parseInt(style.right, 10), 0);
            const top = parseInt(style.paddingTop, 10) + Math.max(parseInt(style.top, 10), 0);
            const bottom = parseInt(style.paddingBottom, 10) + Math.max(parseInt(style.bottom, 10), 0);

            return { left, right, top, bottom, x: left + right, y: top + bottom };
        }

        return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    }

    setSize() {
        if (this.el) {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const parentElement = this.el.parentElement;
            const width = this.props.scrollWidth || `${(this.el.offsetWidth || parentElement.offsetWidth)}px`;
            const height = this.props.scrollHeight || `${(this.el.offsetHeight || parentElement.offsetHeight)}px`;
            const setProp = (_name, _value) => this.el.style[_name] = _value;

            if (isBoth || isHorizontal) {
                setProp('height', height);
                setProp('width', width);
            }
            else {
                setProp('height', height);
            }
        }
    }

    setSpacerSize() {
        const items = this.props.items;

        if (this.spacer && items) {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const itemSize = this.props.itemSize;
            const contentPos = this.getContentPosition();
            const setProp = (_name, _value, _size, _cpos = 0) => this.spacer.style[_name] = (((_value || []).length * _size) + _cpos) + 'px';

            if (isBoth) {
                setProp('height', items, itemSize[0], contentPos.y);
                setProp('width', (this.props.columns || items[1]), itemSize[1], contentPos.x);
            }
            else {
                isHorizontal ? setProp('width', (this.props.columns || items), itemSize, contentPos.x) : setProp('height', items, itemSize, contentPos.y);
            }
        }
    }

    setContentPosition(pos) {
        if (this.content) {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const first = pos ? pos.first : this.state.first;
            const itemSize = this.props.itemSize;
            const calculateTranslateVal = (_first, _size) => (_first * _size);
            const setTransform = (_x = 0, _y = 0) => {
                this.sticky && (this.sticky.style.top = `-${_y}px`);
                this.content.style.transform = `translate3d(${_x}px, ${_y}px, 0)`;
            };

            if (isBoth) {
                setTransform(calculateTranslateVal(first.cols, itemSize[1]), calculateTranslateVal(first.rows, itemSize[0]));
            }
            else {
                const translateVal = calculateTranslateVal(first, itemSize);
                isHorizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
            }
        }
    }

    onScrollPositionChange(event) {
        const target = event.target;
        const isBoth = this.isBoth();
        const isHorizontal = this.isHorizontal();
        const { first, last, numItemsInViewport, numToleratedItems } = this.state;
        const itemSize = this.props.itemSize;
        const contentPos = this.getContentPosition();
        const calculateScrollPos = (_pos, _cpos) => _pos ? (_pos > _cpos ? _pos - _cpos : _pos) : 0;
        const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
        const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
            return (_currentIndex <= _numT ? _numT : (_isScrollDownOrRight ? (_last - _num - _numT) : (_first + _numT - 1)))
        };
        const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
            if (_currentIndex <= _numT)
                return 0;
            else
                return Math.max(0, _isScrollDownOrRight ?
                        (_currentIndex < _triggerIndex ? _first : _currentIndex - _numT) :
                        (_currentIndex > _triggerIndex ? _first : _currentIndex - (2 * _numT)));
        };
        const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols) => {
            let lastValue = _first + _num + (2 * _numT);

            if (_currentIndex >= _numT) {
                lastValue += (_numT + 1);
            }

            return this.getLast(lastValue, _isCols);
        };

        const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
        const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);

        let newFirst = 0;
        let newLast = last;
        let isRangeChanged = false;

        if (isBoth) {
            const isScrollDown = this.lastScrollPos.top <= scrollTop;
            const isScrollRight = this.lastScrollPos.left <= scrollLeft;
            const currentIndex = { rows: calculateCurrentIndex(scrollTop, itemSize[0]), cols: calculateCurrentIndex(scrollLeft, itemSize[1]) };
            const triggerIndex = {
                rows: calculateTriggerIndex(currentIndex.rows, first.rows, last.rows, numItemsInViewport.rows, numToleratedItems[0], isScrollDown),
                cols: calculateTriggerIndex(currentIndex.cols, first.cols, last.cols, numItemsInViewport.cols, numToleratedItems[1], isScrollRight)
            };

            newFirst = {
                rows: calculateFirst(currentIndex.rows, triggerIndex.rows, first.rows, last.rows, numItemsInViewport.rows, numToleratedItems[0], isScrollDown),
                cols: calculateFirst(currentIndex.cols, triggerIndex.cols, first.cols, last.cols, numItemsInViewport.cols, numToleratedItems[1], isScrollRight)
            };
            newLast = {
                rows: calculateLast(currentIndex.rows, newFirst.rows, last.rows, numItemsInViewport.rows, numToleratedItems[0]),
                cols: calculateLast(currentIndex.cols, newFirst.cols, last.cols, numItemsInViewport.cols, numToleratedItems[1], true)
            };

            isRangeChanged = (newFirst.rows !== first.rows && newLast.rows !== last.rows) || (newFirst.cols !== first.cols && newLast.cols !== last.cols);

            this.lastScrollPos = { top: scrollTop, left: scrollLeft };
        }
        else {
            const scrollPos = isHorizontal ? scrollLeft : scrollTop;
            const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
            const currentIndex = calculateCurrentIndex(scrollPos, itemSize);
            const triggerIndex = calculateTriggerIndex(currentIndex, first, last, numItemsInViewport, numToleratedItems, isScrollDownOrRight);

            newFirst = calculateFirst(currentIndex, triggerIndex, first, last, numItemsInViewport, numToleratedItems, isScrollDownOrRight);
            newLast = calculateLast(currentIndex, newFirst, last, numItemsInViewport, numToleratedItems);
            isRangeChanged = newFirst !== first && newLast !== last;

            this.lastScrollPos = scrollPos;
        }

        return {
            first: newFirst,
            last: newLast,
            isRangeChanged
        }
    }

    onScrollChange(event) {
        const { first, last, isRangeChanged } = this.onScrollPositionChange(event);

        if (isRangeChanged) {
            const newState = { first, last };

            this.setContentPosition(newState);

            this.setState(newState, () => {
                this.props.onScrollIndexChange && this.props.onScrollIndexChange(newState);

                if (this.props.lazy) {
                    this.props.onLazyLoad && this.props.onLazyLoad(newState);
                }
            });
        }
    }

    onScroll(event) {
        this.props.onScroll && this.props.onScroll(event);

        if (this.props.delay) {
            if (this.scrollTimeout) {
                clearTimeout(this.scrollTimeout);
            }

            if (!this.state.loading && this.props.showLoader) {
                const { isRangeChanged: changed } = this.onScrollPositionChange(event);
                changed && this.setState({ loading: true });
            }

            this.scrollTimeout = setTimeout(() => {
                this.onScrollChange(event);

                if (this.state.loading && this.props.showLoader && !this.props.lazy) {
                    this.setState({ loading: false });
                }
            }, this.props.delay);
        }
        else {
            this.onScrollChange(event);
        }
    }

    getOptions(renderedIndex) {
        const first = this.state.first;
        const count = (this.props.items || []).length;
        const index = this.isBoth() ? first.rows + renderedIndex : first + renderedIndex;

        return {
            index,
            count,
            first: index === 0,
            last: index === (count - 1),
            even: index % 2 === 0,
            odd: index % 2 !== 0,
            props: this.props
        }
    }

    loaderOptions(index, extOptions) {
        const count = this.state.loaderArr.length;

        return {
            index,
            count,
            first: index === 0,
            last: index === (count - 1),
            even: index % 2 === 0,
            odd: index % 2 !== 0,
            props: this.props,
            ...extOptions
        }
    }

    loadedItems() {
        const items = this.props.items;

        if (items && !this.state.loading) {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const { first, last } = this.state;

            if (isBoth)
                return items.slice(first.rows, last.rows).map(item => this.props.columns ? item : item.slice(first.cols, last.cols));
            else if (isHorizontal && this.props.columns)
                return items;
            else
                return items.slice(first, last);
        }

        return [];
    }

    isPropChanged(prevProps) {
        const props = ['itemSize', 'scrollHeight'];
        return props.some((p) => !ObjectUtils.equals(prevProps[p], this.props[p]));
    }

    init() {
        this.setSize();
        this.calculateOptions();
        this.setSpacerSize();
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate(prevProps, prevState) {
        if ((!prevProps.items || prevProps.items.length !== (this.props.items || []).length) || this.isPropChanged(prevProps)) {
            this.init();
        }

        if (this.props.lazy && prevProps.loading !== this.props.loading && this.state.loading !== this.props.loading) {
            this.setState({ loading: this.props.loading });
        }

        if (prevProps.orientation !== this.props.orientation) {
            this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
        }
    }

    renderLoaderItem(index, extOptions = {}) {
        const options = this.loaderOptions(index, extOptions);
        const content = ObjectUtils.getJSXElement(this.props.loadingTemplate, options);

        return (
            <React.Fragment key={index}>
                {content}
            </React.Fragment>
        );
    }

    renderLoader() {
        if (!this.props.loaderDisabled && this.props.showLoader && this.state.loading) {
            const className = classNames('p-virtualscroller-loader', {
                'p-component-overlay': !this.props.loadingTemplate
            });

            let content = <i className="p-virtualscroller-loading-icon pi pi-spinner pi-spin"></i>;

            if (this.props.loadingTemplate) {
                const isBoth = this.isBoth();
                const numItemsInViewport = this.state.numItemsInViewport;

                content = this.state.loaderArr.map((_, index) => {
                    return this.renderLoaderItem(index, isBoth && { numCols: numItemsInViewport.cols });
                });
            }

            return (
                <div className={className}>
                    {content}
                </div>
            )
        }

        return null;
    }

    renderSpacer() {
        if (this.props.showSpacer) {
            return (
                <div ref={(el) => this.spacer = el} className="p-virtualscroller-spacer"></div>
            )
        }

        return null;
    }

    renderItem(item, index) {
        const options = this.getOptions(index);
        const content = ObjectUtils.getJSXElement(this.props.itemTemplate, item, options);

        return (
            <React.Fragment key={options.index}>
                {content}
            </React.Fragment>
        );
    }

    renderItems(loadedItems) {
        return loadedItems.map((item, index) => this.renderItem(item, index));
    }

    renderContent() {
        const loadedItems = this.loadedItems();
        const items = this.renderItems(loadedItems);
        const className = classNames('p-virtualscroller-content', { 'p-virtualscroller-loading': this.state.loading });
        const content = (
            <div className={className} ref={(el) => this.content = el}>
                {items}
            </div>
        )

        if (this.props.contentTemplate) {
            const defaultOptions = {
                className,
                contentRef: (el) => this.content = el,
                spacerRef: (el) => this.spacer = el,
                stickyRef: (el) => this.sticky = el,
                items: loadedItems,
                getItemOptions: (index) => this.getOptions(index),
                children: items,
                element: content,
                props: this.props,
                loading: this.state.loading,
                getLoaderOptions: (index, ext) => this.loaderOptions(index, ext),
                loadingTemplate: this.props.loadingTemplate,
                itemSize: this.props.itemSize,
                rows: this.getRows(),
                columns: this.getColumns(),
                vertical: this.isVertical(),
                horizontal: this.isHorizontal(),
                both: this.isBoth()
            }

            return ObjectUtils.getJSXElement(this.props.contentTemplate, defaultOptions);
        }

        return content;
    }

    render() {
        if (this.props.disabled) {
            const content = ObjectUtils.getJSXElement(this.props.contentTemplate, { items: this.props.items, rows: this.props.items, columns: this.props.columns });

            return (
                <React.Fragment>
                    {this.props.children}
                    {content}
                </React.Fragment>
            )
        }
        else {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const className = classNames('p-virtualscroller', {
                'p-both-scroll': isBoth,
                'p-horizontal-scroll': isHorizontal
            }, this.props.className);

            const loader = this.renderLoader();
            const content = this.renderContent();
            const spacer = this.renderSpacer();

            return (
                <div ref={(el) => this.el = el} className={className} tabIndex={0} style={this.props.style} onScroll={this.onScroll}>
                    {content}
                    {spacer}
                    {loader}
                </div>
            )
        }
    }
}
