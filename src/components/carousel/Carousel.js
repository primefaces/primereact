import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';
import DomHandler from '../utils/DomHandler';

class CarouselItem extends Component {

    static defaultProps = {
        template: null,
        item: null,
        active: false,
        start: false,
        end: false,
        className: null
    }

    static propTypes = {
        template: PropTypes.func,
        item: PropTypes.any,
        active: PropTypes.bool,
        start: PropTypes.bool,
        end: PropTypes.bool,
        className: PropTypes.string
    }

    render() {
        const content = this.props.template(this.props.item);
        const itemClassName = classNames(this.props.className, 'p-carousel-item', {
            'p-carousel-item-active': this.props.active,
            'p-carousel-item-start': this.props.start,
            'p-carousel-item-end': this.props.end
        });

        return (
            <div className={itemClassName}>
                {content}
            </div>
        );
    }
}

export class Carousel extends Component {

    static defaultProps = {
        id: null,
        value: null,
        page: 0,
        header: null,
        footer: null,
        style: null,
        className: null,
        itemTemplate: null,
        circular: false,
        autoplayInterval: 0,
        numVisible: 1,
        numScroll: 1,
        responsiveOptions: null,
        orientation: "horizontal",
        verticalViewPortHeight: "300px",
        contentClassName: null,
        containerClassName: null,
        dotsContainerClassName: null,
        onPageChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        page: PropTypes.number,
        header: PropTypes.any,
        footer: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        itemTemplate: PropTypes.any,
        circular: PropTypes.bool,
        autoplayInterval: PropTypes.number,
        numVisible: PropTypes.number,
        numScroll: PropTypes.number,
        responsiveOptions: PropTypes.array,
        orientation: PropTypes.string,
        verticalViewPortHeight: PropTypes.string,
        contentClassName: PropTypes.string,
        containerClassName: PropTypes.string,
        dotsContainerClassName: PropTypes.string,
        onPageChange: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            numVisible: props.numVisible,
            numScroll: props.numScroll,
            totalShiftedItems: (props.page * props.numScroll) * -1
        }

        if (!this.props.onPageChange) {
            this.state = {
                ...this.state,
                page: props.page
            }
        }

        this.navBackward = this.navBackward.bind(this);
        this.navForward = this.navForward.bind(this);
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.totalDots = 0;
        this.remainingItems = 0;
        this.allowAutoplay = !!this.props.autoplayInterval;
        this.circular = this.props.circular || this.allowAutoplay;

        this.id = this.props.id || UniqueComponentId();
    }

    step(dir, page) {
        let totalShiftedItems = this.state.totalShiftedItems;
        const isCircular = this.isCircular();

        if (page != null) {
            totalShiftedItems = (this.state.numScroll * page) * -1;

            if (isCircular) {
                totalShiftedItems -= this.state.numVisible;
            }

            this.isRemainingItemsAdded = false;
        }
        else {
            totalShiftedItems += (this.state.numScroll * dir);
            if (this.isRemainingItemsAdded) {
                totalShiftedItems += this.remainingItems - (this.state.numScroll * dir);
                this.isRemainingItemsAdded = false;
            }

            let originalShiftedItems = isCircular ? (totalShiftedItems + this.state.numVisible) : totalShiftedItems;
            page = Math.abs(Math.floor(originalShiftedItems / this.state.numScroll));
        }

        if (isCircular && this.state.page === (this.totalDots - 1) && dir === -1) {
            totalShiftedItems = -1 * (this.props.value.length + this.state.numVisible);
            page = 0;
        }
        else if (isCircular && this.state.page === 0 && dir === 1) {
            totalShiftedItems = 0;
            page = (this.totalDots - 1);
        }
        else if (page === (this.totalDots - 1) && this.remainingItems > 0) {
            totalShiftedItems += ((this.remainingItems * -1) - (this.state.numScroll * dir));
            this.isRemainingItemsAdded = true;
        }

        if (this.itemsContainer) {
            DomHandler.removeClass(this.itemsContainer, 'p-items-hidden');
            this.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100/ this.state.numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.state.numVisible)}%, 0, 0)`;
            this.itemsContainer.style.transition = 'transform 500ms ease 0s';
        }

        if (this.props.onPageChange) {
            this.setState({
                totalShiftedItems
            });

            this.props.onPageChange({
                page
            })
        }
        else {
            this.setState({
                page,
                totalShiftedItems
            });
        }
    }

    calculatePosition() {
        if (this.itemsContainer && this.responsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this.props.numVisible,
                numScroll: this.props.numScroll
            };

            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];

                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }

            let state = {};
            if (this.state.numScroll !== matchedResponsiveData.numScroll) {
                let page = this.getPage();
                page = Math.floor((page * this.state.numScroll) / matchedResponsiveData.numScroll);

                let totalShiftedItems = (matchedResponsiveData.numScroll * page) * -1;

                if (this.isCircular()) {
                    totalShiftedItems -= matchedResponsiveData.numVisible;
                }

                state = {
                    totalShiftedItems,
                    numScroll: matchedResponsiveData.numScroll
                };

                if (this.props.onPageChange) {
                    this.props.onPageChange({
                        page
                    })
                }
                else {
                    state = {
                        ...state,
                        page
                    };
                }
            }

            if (this.state.numVisible !== matchedResponsiveData.numVisible) {
                state = {
                    ...state,
                    numVisible: matchedResponsiveData.numVisible
                };
            }

            if (Object.keys(state).length) {
                this.setState(state);
            }
        }
    }

    navBackward(e, page) {
        if (this.circular || this.getPage() !== 0) {
            this.step(1, page);
        }

        this.allowAutoplay = false;
        if (e.cancelable) {
            e.preventDefault();
        }
    }

    navForward(e, page) {
        if (this.circular || this.getPage() < (this.totalDots - 1)) {
            this.step(-1, page);
        }

        this.allowAutoplay = false;
        if (e.cancelable) {
            e.preventDefault();
        }
    }

    onDotClick(e, page) {
        let currentPage = this.getPage();

        if (page > currentPage) {
            this.navForward(e, page);
        }
        else if (page < currentPage) {
            this.navBackward(e, page);
        }
    }

    onTransitionEnd() {
        if (this.itemsContainer) {
            DomHandler.addClass(this.itemsContainer, 'p-items-hidden');
            this.itemsContainer.style.transition = '';

            if ((this.state.page === 0 || this.state.page === (this.totalDots - 1)) && this.isCircular()) {
                this.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${this.state.totalShiftedItems * (100/ this.state.numVisible)}%, 0)` : `translate3d(${this.state.totalShiftedItems * (100/ this.state.numVisible)}%, 0, 0)`;
            }
        }
    }

    onTouchStart(e) {
        let touchobj = e.changedTouches[0];

        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }

    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }

    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];

        if (this.isVertical()) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }

    changePageOnTouch(e, diff) {
        if (diff < 0) {           // left
            this.navForward(e);
        }
        else {                    // right
            this.navBackward(e);
        }
    }

    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = () => {
                this.calculatePosition();
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentListeners() {
        if(this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    isVertical() {
        return this.props.orientation === 'vertical';
    }

    isCircular() {
        return this.circular && this.props.value.length >= this.state.numVisible;
    }

    getPage() {
        return this.props.onPageChange ? this.props.page : this.state.page;
    }

    getTotalDots() {
        return this.props.value ? Math.ceil((this.props.value.length - this.state.numVisible) / this.state.numScroll) + 1 : 0;
    }

    isAutoplay() {
        return this.props.autoplayInterval && this.allowAutoplay;
    }

    startAutoplay() {
        this.interval = setInterval(() => {
            if(this.state.page === (this.totalDots - 1)) {
                this.step(-1, 0);
            }
            else {
                this.step(-1, this.state.page + 1);
            }
        },
        this.props.autoplayInterval);
    }

    stopAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    createStyle() {
        if (!this.carouselStyle) {
            this.carouselStyle = document.createElement('style');
            this.carouselStyle.type = 'text/css';
            document.body.appendChild(this.carouselStyle);
        }

        let innerHTML = `
            #${this.id} .p-carousel-item {
                flex: 1 0 ${ (100/ this.state.numVisible) }%
            }
        `;

        if (this.props.responsiveOptions) {
            this.responsiveOptions = [...this.props.responsiveOptions];
            this.responsiveOptions.sort((data1, data2) => {
                const value1 = data1.breakpoint;
                const value2 = data2.breakpoint;
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return -1 * result;
            });

            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];

                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${ (100/ res.numVisible) }%
                        }
                    }
                `
            }
        }

        this.carouselStyle.innerHTML = innerHTML;
    }

    componentDidMount() {
        this.createStyle();
        this.calculatePosition();

        if (this.props.responsiveOptions) {
            this.bindDocumentListeners();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const isCircular = this.isCircular();
        let stateChanged = false;
        let totalShiftedItems = this.state.totalShiftedItems;

        if (this.props.autoplayInterval) {
            this.stopAutoplay();
        }

        if (prevState.numScroll !== this.state.numScroll || prevState.numVisible !== this.state.numVisible || prevProps.value.length !== this.props.value.length) {
            this.remainingItems = (this.props.value.length - this.state.numVisible) % this.state.numScroll;

            let page = this.getPage();
            if (this.totalDots !== 0 && page >= this.totalDots) {
                page = this.totalDots - 1;

                if (this.props.onPageChange) {
                    this.props.onPageChange({
                        page
                    })
                }
                else {
                    this.setState({
                        page
                    });
                }

                stateChanged = true;
            }

            totalShiftedItems = (page * this.state.numScroll) * -1;
            if (isCircular) {
                totalShiftedItems -= this.state.numVisible;
            }

            if (page === (this.totalDots - 1) && this.remainingItems > 0) {
                totalShiftedItems += (-1 * this.remainingItems) + this.state.numScroll;
                this.isRemainingItemsAdded = true;
            }
            else {
                this.isRemainingItemsAdded = false;
            }

            if (totalShiftedItems !== this.state.totalShiftedItems) {
                this.setState({
                    totalShiftedItems
                })

                stateChanged = true;
            }

            this.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100/ this.state.numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.state.numVisible)}%, 0, 0)`;
        }

        if (isCircular) {
            if (this.state.page === 0) {
                totalShiftedItems = -1 * this.state.numVisible;
            }
            else if (totalShiftedItems === 0) {
                totalShiftedItems = -1 * this.props.value.length;
                if (this.remainingItems > 0) {
                    this.isRemainingItemsAdded = true;
                }
            }

            if (totalShiftedItems !== this.state.totalShiftedItems) {
                this.setState({
                    totalShiftedItems
                });
                stateChanged = true;
            }
        }

        if (!stateChanged && this.isAutoplay()) {
            this.startAutoplay();
        }
    }

    componentWillUnmount() {
        if (this.props.responsiveOptions) {
            this.unbindDocumentListeners();
        }

        if (this.props.autoplayInterval) {
            this.stopAutoplay();
        }
    }

    renderItems() {
        if (this.props.value && this.props.value.length) {
            const isCircular = this.isCircular();
            let clonedItemsForStarting = null;
            let clonedItemsForFinishing = null;

            if (isCircular) {
                let clonedElements = null;

                clonedElements = this.props.value.slice(-1 * this.state.numVisible);
                clonedItemsForStarting = clonedElements.map((item, index) => {
                    let isActive = (this.state.totalShiftedItems * -1) === (this.props.value.length + this.state.numVisible),
                    start = index === 0,
                    end = index === (clonedElements.length - 1);

                    return <CarouselItem key={index + '_scloned'} className="p-carousel-item-cloned" template={this.props.itemTemplate} item={item} active={isActive} start={start} end={end}/>
                });

                clonedElements = this.props.value.slice(0, this.state.numVisible);
                clonedItemsForFinishing = clonedElements.map((item, index) => {
                    let isActive = this.state.totalShiftedItems === 0,
                    start = index === 0,
                    end = index === (clonedElements.length - 1);

                    return <CarouselItem key={index + '_fcloned'} className="p-carousel-item-cloned" template={this.props.itemTemplate} item={item} active={isActive} start={start} end={end}/>
                });
            }

            let items = this.props.value.map((item, index) => {
                            let firstIndex = isCircular ? (-1 * (this.state.totalShiftedItems + this.state.numVisible)) : (this.state.totalShiftedItems * -1),
                            lastIndex = firstIndex + this.state.numVisible - 1,
                            isActive = firstIndex <= index && lastIndex >= index,
                            start = firstIndex === index,
                            end = lastIndex === index;

                            return <CarouselItem key={index} template={this.props.itemTemplate} item={item} active={isActive} start={start} end={end}/>
                        });

            return (
                <React.Fragment>
                    {clonedItemsForStarting}
                    {items}
                    {clonedItemsForFinishing}
                </React.Fragment>
            );
        }
    }

    renderHeader() {
        if (this.props.header) {
            return (<div className="p-carousel-header">
                        {this.props.header}
                    </div>);
        }

        return null;
    }

    renderFooter() {
        if (this.props.footer) {
            return (<div className="p-carousel-footer">
                        {this.props.footer}
                    </div>);
        }

        return null;
    }

    renderContent() {
        const items = this.renderItems();
        const height = this.isVertical() ? this.props.verticalViewPortHeight : 'auto';
        const backwardNavigator = this.renderBackwardNavigator();
        const forwardNavigator = this.renderForwardNavigator();
        const containerClassName = classNames('p-carousel-container', this.props.containerClassName);

        return (
            <div className={containerClassName}>
                {backwardNavigator}
                <div className="p-carousel-items-content" style={{'height': height}}>
                    <div ref={(el) => this.itemsContainer = el} className="p-carousel-items-container" onTransitionEnd={this.onTransitionEnd}
                        onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
                        {items}
                    </div>
                </div>
                {forwardNavigator}
            </div>
        );
    }

    renderBackwardNavigator() {
        let isDisabled = (!this.circular || this.props.value.length < this.state.numVisible) && this.getPage() === 0;
        let buttonClassName = classNames('p-carousel-prev p-button', {
            'p-disabled': isDisabled
        }),
        iconClassName = classNames('p-carousel-prev-icon pi', {
            'pi-chevron-left': !this.isVertical(),
            'pi-chevron-up': this.isVertical()
        });

        return (
            <button type="button" className={buttonClassName} onClick={this.navBackward} disabled={isDisabled}>
                <span className={iconClassName}></span>
            </button>
        );
    }

    renderForwardNavigator() {
        let isDisabled = (!this.circular || this.props.value.length < this.state.numVisible) && (this.getPage() === (this.totalDots - 1) || this.totalDots === 0);
        let buttonClassName = classNames('p-carousel-next p-button', {
            'p-disabled': isDisabled
        }),
        iconClassName = classNames('p-carousel-next-icon pi', {
            'pi-chevron-right': !this.isVertical(),
            'pi-chevron-down': this.isVertical()
        });

        return (
            <button type="button" className={buttonClassName} onClick={this.navForward} disabled={isDisabled}>
                <span className={iconClassName}></span>
            </button>
        );
    }

    renderDot(index) {
        let isActive = this.getPage() === index,
        dotItemClassName = classNames('p-carousel-dot-item', {
            'p-highlight': isActive
        }),
        iconClassName = classNames('p-carousel-dot-icon pi', {
            'pi-circle-on': isActive,
            'pi-circle-off': !isActive
        });

        return (
            <li className={dotItemClassName} key={'p-carousel-dot-' + index}>
                <button type="button" className="p-link" onClick={(e) => this.onDotClick(e, index)}>
                    <span className={iconClassName}></span>
                </button>
            </li>
        );
    }

    renderDots() {
        const dotsContainerClassName = classNames('p-carousel-dots-container p-reset', this.props.dotsContainerClassName);
        let dots = [];

        for (let i = 0; i < this.totalDots; i++) {
            dots.push(this.renderDot(i));
        }

        return (
            <ul className={dotsContainerClassName}>
                {dots}
            </ul>
        );
    }

    render() {
        const className = classNames('p-carousel p-component', {
            'p-carousel-vertical': this.isVertical(),
            'p-carousel-horizontal': !this.isVertical()
        }, this.props.className);
        const contentClassName = classNames('p-carousel-content', this.props.contentClassName);

        this.totalDots = this.getTotalDots();
        const content = this.renderContent();
        const dots = this.renderDots();
        const header = this.renderHeader();
        const footer = this.renderFooter();

        return (
            <div id={this.id} className={className} style={this.props.style}>
                {header}
                <div className={contentClassName}>
                    {content}
                    {dots}
                </div>
                {footer}
            </div>
        );
    }
}
