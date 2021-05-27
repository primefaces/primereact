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
        numToleratedItems: 2,
        delay: 0,
        lazy: false,
        showLoader: false,
        loadingTemplate: null,
        itemTemplate: null,
        contentTemplate: null,
        onScrollChange: null
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
        onScrollChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        const isBoth = this.isBoth();

        this.state = {
            first: isBoth ? { rows: 0, cols: 0 } : 0,
            numItemsInViewport: isBoth ? { rows: 0, cols: 0 } : 0,
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
        const calculateFirst = (_index = 0) => (_index <= this.props.numToleratedItems ? 0 : _index);
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

    updateNumItemsInViewport() {
        const isBoth = this.isBoth();
        const isHorizontal = this.isHorizontal();
        const itemSize = this.props.itemSize;
        const contentPadding = this.getContentPadding();
        const contentWidth = this.element ? this.element.offsetWidth - contentPadding.left : 0;
        const contentHeight = this.element ? this.element.offsetHeight - contentPadding.top : 0;
        const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
        const numItemsInViewport = isBoth ?
            { rows: calculateNumItemsInViewport(contentHeight, itemSize[0]), cols: calculateNumItemsInViewport(contentWidth, itemSize[1]) } :
            calculateNumItemsInViewport((isHorizontal ? contentWidth : contentHeight), itemSize);

        this.setState({ numItemsInViewport }, () => {
            if (this.props.lazy) {
                this.props.onScrollChange && this.props.onScrollChange({ first: this.state.first, numItems: this.getNumItems() })
            }
        });
    }

    getNumItems() {
        const isBoth = this.isBoth();
        const numItemsInViewport = this.state.numItemsInViewport;
        const calculateNumItems = (_numItemsInViewport) => (_numItemsInViewport + (this.props.numToleratedItems * 2));

        return isBoth ? { rows: calculateNumItems(numItemsInViewport.rows), cols: calculateNumItems(numItemsInViewport.cols) } : calculateNumItems(numItemsInViewport);
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
        const first = this.state.first;
        const itemSize = this.props.itemSize;
        const contentPadding = this.getContentPadding();
        const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
        const calculateTriggerIndex = (_first) => (_first + this.props.numToleratedItems);
        const calculateFirst = (_currentIndex) => (_currentIndex <= this.props.numToleratedItems ? 0 : (_currentIndex - this.props.numToleratedItems));
        const calculateScrollPos = (_pos, _padding) => _pos ? (_pos > _padding ? _pos - _padding : _pos) : 0;
        const scrollTop = calculateScrollPos(target.scrollTop, contentPadding.top);
        const scrollLeft = calculateScrollPos(target.scrollLeft, contentPadding.left);

        let isFirstChanged = false;
        let newFirst = 0;

        if (isBoth) {
            const currentIndex = { rows: calculateCurrentIndex(scrollTop, itemSize[0]), cols: calculateCurrentIndex(scrollLeft, itemSize[1]) };
            const triggerIndex = { rows: calculateTriggerIndex(first.rows, itemSize[0]), cols: calculateTriggerIndex(first.cols, itemSize[1]) };
            const isScrollUp = this.lastScrollPos.top >= scrollTop && currentIndex.rows <= triggerIndex.rows;
            const isScrollDown = this.lastScrollPos.top <= scrollTop && currentIndex.rows >= triggerIndex.rows;
            const isScrollLeft = this.lastScrollPos.left >= scrollLeft && currentIndex.cols <= triggerIndex.cols;
            const isScrollRight = this.lastScrollPos.left <= scrollLeft && currentIndex.cols >= triggerIndex.cols;

            newFirst = { rows: calculateFirst(currentIndex.rows), cols: calculateFirst(currentIndex.cols) };
            isFirstChanged = (newFirst.rows !== first.rows && (isScrollUp || isScrollDown)) || (newFirst.cols !== first.cols && (isScrollLeft || isScrollRight));

            this.lastScrollPos = { top: scrollTop, left: scrollLeft };
        }
        else {
            const scrollPos = isHorizontal ? scrollLeft : scrollTop;
            const currentIndex = calculateCurrentIndex(scrollPos, itemSize);
            const triggerIndex = calculateTriggerIndex(first, itemSize)
            const isScrollUpOrLeft = this.lastScrollPos >= scrollPos && currentIndex <= triggerIndex;
            const isScrollDownOrRight = this.lastScrollPos <= scrollPos && currentIndex >= triggerIndex;

            newFirst = calculateFirst(currentIndex);
            isFirstChanged = newFirst !== first && (isScrollUpOrLeft || isScrollDownOrRight);

            this.lastScrollPos = scrollPos;
        }

        return {
            first: newFirst,
            isFirstChanged
        }
    }

    onScroll(event) {
        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }

        const { isFirstChanged: changed } = this.onScrollPositionChange(event);

        if (!this.state.loading && this.props.showLoader && changed) {
            this.setState({ loading: true });
        }

        this.scrollTimeout = setTimeout(() => {
            const { first, isFirstChanged } = this.onScrollPositionChange(event);

            if (isFirstChanged) {
                this.props.onScrollChange && this.props.onScrollChange({ first, numItems: this.getNumItems() })
                this.setState({ first }, () => this.setContentPosition());
            }

            if (this.state.loading && this.props.showLoader && !this.props.lazy) {
                this.setState({ loading: false });
            }
        }, this.props.delay);
    }

    calculateStateValues() {
        this.updateNumItemsInViewport();
        this.setSpacerSize();
    }

    componentDidMount() {
        this.calculateStateValues();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.itemSize !== this.props.itemSize) {
            this.calculateStateValues();
        }

        if (!prevProps.items || prevProps.items.length !== (this.props.items || []).length) {
            this.setSpacerSize();
        }

        if (this.props.lazy && prevProps.loading !== this.props.loading && this.state.loading !== this.props.loading) {
            this.setState({ loading: this.props.loading });
        }

        if (prevProps.orientation !== this.props.orientation) {
            this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
        }
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
            const first = this.state.first;
            const num = this.getNumItems();
            const calculateEnd = (_count, _first, _num) => Math.min(_count, (_first + _num));

            if (isBoth) {
                const count = { rows: items.length, cols: items[0].length };
                const rowsEnd = calculateEnd(count.rows, first.rows, num.rows);
                const colsEnd = calculateEnd(count.cols, first.cols, num.cols);

                return items.slice(first.rows, rowsEnd).map((item, i) => {
                    const items = item.slice(first.cols, colsEnd);
                    const index = first.rows + i;

                    return this.renderItem(item, index, count.rows, items);
                });
            }
            else {
                const count = items.length;
                const end = calculateEnd(count, first, num);

                return items.slice(first, end).map((item, i) => {
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
                const num = this.getNumItems();
                const length = isBoth ? num.rows : num;

                content = Array.from({ length }).map((_, index) => {
                    return this.renderLoaderItem(index, num, isBoth && { numCols: num.cols });
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
            const defaultOptions = {
                className: 'p-virtual-scroll-content',
                ref: (el) => this.content = el,
                children: items,
                element: content,
                props: this.props
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
