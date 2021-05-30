import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';

export class VirtualScroll extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        items: null,
        itemSize: 0,
        orientation: 'vertical',
        numToleratedItems: null,
        delay: 0,
        lazy: false,
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
        orientation: PropTypes.string,
        numToleratedItems: PropTypes.number,
        delay: PropTypes.number,
        lazy: PropTypes.bool,
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
            loading: false
        };

        this.onScroll = this.onScroll.bind(this);

        this.lastScrollPos = isBoth ? { top: 0, left: 0 } : 0;
    }

    scrollToIndex(index) {
        const isBoth = this.isBoth();
        const isHorizontal = this.isHorizontal();
        const first = this.state.first;
        const itemSize = this.props.itemSize;
        const contentPadding = this.getContentPadding();
        const calculateFirst = (_index = 0) => (_index <= this.state.numToleratedItems ? 0 : _index);
        const calculateCoord = (_first, _size, _padding) => (_first * _size) + _padding;
        const scrollTo = (_x = 0, _y = 0) => this.element && this.element.scrollTo(_x, _y);

        if (isBoth) {
            const newFirst = { rows: calculateFirst(index[0]), cols: calculateFirst(index[1]) };
            (newFirst.rows !== first.rows || newFirst.cols !== first.cols) && scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPadding.left), calculateCoord(newFirst.rows, itemSize[0], contentPadding.top));
        }
        else {
            const newFirst = calculateFirst(index);

            if (newFirst !== first) {
                isHorizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPadding.left), 0) : scrollTo(0, calculateCoord(newFirst, itemSize, contentPadding.top));
            }
        }
    }

    isHorizontal() {
        return this.props.orientation === 'horizontal';
    }

    isBoth() {
        return this.props.orientation === 'both';
    }

    calculateOptions() {
        const isBoth = this.isBoth();
        const isHorizontal = this.isHorizontal();
        const first = this.state.first;
        const itemSize = this.props.itemSize;
        const contentPadding = this.getContentPadding();
        const contentWidth = this.element ? this.element.offsetWidth - contentPadding.left : 0;
        const contentHeight = this.element ? this.element.offsetHeight - contentPadding.top : 0;
        const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
        const numItemsInViewport = isBoth ?
            { rows: calculateNumItemsInViewport(contentHeight, itemSize[0]), cols: calculateNumItemsInViewport(contentWidth, itemSize[1]) } :
            calculateNumItemsInViewport((isHorizontal ? contentWidth : contentHeight), itemSize);

        let numToleratedItems = this.state.numToleratedItems || Math.ceil((isBoth ? numItemsInViewport.rows : numItemsInViewport) / 2);

        const calculateLast = (_first, _num, _isCols) => this.getLast(_first + _num + ((_first < numToleratedItems ? 2 : 3) * numToleratedItems), _isCols);
        const last = isBoth ?
            { rows: calculateLast(first.rows, numItemsInViewport.rows), cols: calculateLast(first.cols, numItemsInViewport.cols, true) } :
            calculateLast(first, numItemsInViewport);

        let state = { numItemsInViewport, last, numToleratedItems };
        if (this.props.showLoader) {
            state['loaderArr'] = Array.from({ length: (isBoth ? numItemsInViewport.rows : numItemsInViewport) });
        }

        this.setState(state, () => {
            if (this.props.lazy) {
                this.props.onLazyLoad && this.props.onLazyLoad({ first: this.state.first, last: this.state.last });
            }
        });
    }

    getLast(last, isCols) {
        return this.props.items ? Math.min((isCols ? this.props.items[0].length : this.props.items.length), last) : 0;
    }

    getContentPadding() {
        if (this.content) {
            const style = getComputedStyle(this.content);
            const left = parseInt(style.paddingLeft, 10);
            const right = parseInt(style.paddingRight, 10);
            const top = parseInt(style.paddingTop, 10);
            const bottom = parseInt(style.paddingBottom, 10);

            return { left, right, top, bottom, x: left + right, y: top + bottom };
        }

        return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    }

    setSpacerSize() {
        const items = this.props.items;

        if (this.spacer && items) {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const itemSize = this.props.itemSize;
            const contentPadding = this.getContentPadding();
            const setProp = (_name, _value, _size, _padding = 0) => this.spacer.style[_name] = (((_value || []).length * _size) + _padding) + 'px';

            if (isBoth) {
                setProp('height', items[0], itemSize[0], contentPadding.y);
                setProp('width', items[1], itemSize[1], contentPadding.x);
            }
            else {
                isHorizontal ? setProp('width', items, itemSize, contentPadding.x) : setProp('height', items, itemSize, contentPadding.y);
            }
        }
    }

    setContentPosition() {
        if (this.content) {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const first = this.state.first;
            const itemSize = this.props.itemSize;
            const calculateTranslateVal = (_first, _size) => (_first * _size);
            const setTransform = (_x = 0, _y = 0) => this.content.style.transform = `translate3d(${_x}px, ${_y}px, 0)`;

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
        const contentPadding = this.getContentPadding();
        const calculateScrollPos = (_pos, _padding) => _pos ? (_pos > _padding ? _pos - _padding : _pos) : 0;
        const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
        const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _isScrollDownOrRight) => {
            return (_currentIndex <= numToleratedItems ? numToleratedItems : (_isScrollDownOrRight ? (_last - _num - numToleratedItems) : (_first + numToleratedItems - 1)))
        };
        const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _isScrollDownOrRight) => {
            if (_currentIndex <= numToleratedItems)
                return 0;
            else
                return _isScrollDownOrRight ?
                        (_currentIndex < _triggerIndex ? _first : _currentIndex - numToleratedItems) :
                        (_currentIndex > _triggerIndex ? _first : _currentIndex - (2 * numToleratedItems));
        };
        const calculateLast = (_currentIndex, _first, _last, _num, _isCols) => {
            let lastValue = _first + _num + (2 * numToleratedItems);

            if (_currentIndex >= numToleratedItems) {
                lastValue += (numToleratedItems + 1);
            }

            return this.getLast(lastValue, _isCols);
        };

        const scrollTop = calculateScrollPos(target.scrollTop, contentPadding.top);
        const scrollLeft = calculateScrollPos(target.scrollLeft, contentPadding.left);

        let newFirst = 0;
        let newLast = last;
        let isRangeChanged = false;

        if (isBoth) {
            const isScrollDown = this.lastScrollPos.top <= scrollTop;
            const isScrollRight = this.lastScrollPos.left <= scrollLeft;
            const currentIndex = { rows: calculateCurrentIndex(scrollTop, itemSize[0]), cols: calculateCurrentIndex(scrollLeft, itemSize[1]) };
            const triggerIndex = {
                rows: calculateTriggerIndex(currentIndex.rows, first.rows, last.rows, numItemsInViewport.rows, isScrollDown),
                cols: calculateTriggerIndex(currentIndex.cols, first.cols, last.cols, numItemsInViewport.cols, isScrollRight)
            };

            newFirst = {
                rows: calculateFirst(currentIndex.rows, triggerIndex.rows, first.rows, last.rows, numItemsInViewport.rows, isScrollDown),
                cols: calculateFirst(currentIndex.cols, triggerIndex.cols, first.cols, last.cols, numItemsInViewport.cols, isScrollRight)
            };
            newLast = {
                rows: calculateLast(currentIndex.rows, newFirst.rows, last.rows, numItemsInViewport.rows),
                cols: calculateLast(currentIndex.cols, newFirst.cols, last.cols, numItemsInViewport.cols, true)
            };
            isRangeChanged = (newFirst.rows !== first.rows || newFirst.cols !== first.cols) || (newLast.rows !== last.rows || newLast.cols !== last.cols);

            this.lastScrollPos = { top: scrollTop, left: scrollLeft };
        }
        else {
            const scrollPos = isHorizontal ? scrollLeft : scrollTop;
            const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
            const currentIndex = calculateCurrentIndex(scrollPos, itemSize);
            const triggerIndex = calculateTriggerIndex(currentIndex, first, last, numItemsInViewport, isScrollDownOrRight);

            newFirst = calculateFirst(currentIndex, triggerIndex, first, last, numItemsInViewport, isScrollDownOrRight);
            newLast = calculateLast(currentIndex, newFirst, last, numItemsInViewport);
            isRangeChanged = newFirst !== first || newLast !== last;

            this.lastScrollPos = scrollPos;
        }

        return {
            first: newFirst,
            last: newLast,
            isRangeChanged
        }
    }

    onScroll(event) {
        this.props.onScroll && this.props.onScroll(event);

        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }

        if (!this.state.loading && this.props.showLoader) {
            const { isRangeChanged: changed } = this.onScrollPositionChange(event);
            changed && this.setState({ loading: true });
        }

        this.scrollTimeout = setTimeout(() => {
            const { first, last, isRangeChanged } = this.onScrollPositionChange(event);

            if (isRangeChanged) {
                const newState = { first, last };

                if (this.props.lazy) {
                    this.props.onLazyLoad && this.props.onLazyLoad(newState);
                }

                this.setState(newState, () => {
                    this.setContentPosition();
                    this.props.onScrollIndexChange && this.props.onScrollIndexChange(newState);
                });
            }

            if (this.state.loading && this.props.showLoader && !this.props.lazy) {
                this.setState({ loading: false });
            }
        }, this.props.delay);
    }

    getOptions(index, count) {
        return {
            index,
            count,
            first: index === 0,
            last: index === (count - 1),
            even: index % 2 === 0,
            odd: index % 2 !== 0,
            props: this.props
        };
    }

    init() {
        this.calculateOptions();
        this.setSpacerSize();
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.itemSize !== this.props.itemSize || (!prevProps.items || prevProps.items.length !== (this.props.items || []).length)) {
            this.init();
        }

        if (this.props.lazy && prevProps.loading !== this.props.loading && this.state.loading !== this.props.loading) {
            this.setState({ loading: this.props.loading });
        }

        if (prevProps.orientation !== this.props.orientation) {
            this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
        }
    }

    renderItem(item, index, count, passedItem) {
        const options = this.getOptions(index, count);
        const content = ObjectUtils.getJSXElement(this.props.itemTemplate, (passedItem || item), options);

        return (
            <React.Fragment key={index}>
                {content}
            </React.Fragment>
        );
    }

    renderItems() {
        const items = this.props.items;

        if (items && !this.state.loading) {
            const isBoth = this.isBoth();
            const { first, last } = this.state;
            const count = items.length;

            if (isBoth) {
                return items.slice(first.rows, last.rows).map((item, i) => {
                    const items = item.slice(first.cols, last.cols);
                    const index = first.rows + i;

                    return this.renderItem(item, index, count, items);
                });
            }
            else {
                return items.slice(first, last).map((item, i) => {
                    const index = first + i;

                    return this.renderItem(item, index, count);
                });
            }
        }

        return null;
    }

    renderLoaderItem(index, count, extOptions) {
        const options = { ...this.getOptions(index, count), ...(extOptions || {}) };
        const content = ObjectUtils.getJSXElement(this.props.loadingTemplate, options);

        return (
            <React.Fragment key={index}>
                {content}
            </React.Fragment>
        );
    }

    renderLoader() {
        if (this.state.loading) {
            const className = classNames('p-virtual-scroll-loader', {
                'p-component-overlay': !this.props.loadingTemplate
            });

            let content = <i className="p-virtual-scroll-loading-icon pi pi-spinner pi-spin"></i>;

            if (this.props.loadingTemplate) {
                const isBoth = this.isBoth();
                const numItemsInViewport = this.state.numItemsInViewport;
                const length = isBoth ? numItemsInViewport.rows : numItemsInViewport;

                content = this.state.loaderArr.map((_, index) => {
                    return this.renderLoaderItem(index, length, isBoth && { numCols: numItemsInViewport.cols });
                });
            }

            return (
                <div className={className}>
                    {content}
                </div>
            );
        }

        return null;
    }

    renderContent() {
        const items = this.renderItems();
        const content = (
            <div className="p-virtual-scroll-content" ref={(el) => this.content = el}>
                {items}
            </div>
        );

        if (this.props.contentTemplate) {
            const { loading, first, last } = this.state;

            const defaultOptions = {
                className: 'p-virtual-scroll-content',
                ref: (el) => this.content = el,
                children: items,
                element: content,
                props: this.props,
                loading,
                first,
                last
            };

            return ObjectUtils.getJSXElement(this.props.contentTemplate, defaultOptions);
        }

        return content;
    }

    render() {
        const isBoth = this.isBoth();
        const isHorizontal = this.isHorizontal();
        const className = classNames('p-virtual-scroll', {
            'p-both-scroll': isBoth,
            'p-horizontal-scroll': isHorizontal
        }, this.props.className);

        const loader = this.renderLoader();
        const content = this.renderContent();

        return (
            <div ref={(el) => this.element = el} className={className} style={this.props.style} onScroll={this.onScroll}>
                {content}
                <div ref={(el) => this.spacer = el} className="p-virtual-scroll-spacer"></div>
                {loader}
            </div>
        );
    }
}
